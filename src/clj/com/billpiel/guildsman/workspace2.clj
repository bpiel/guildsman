(ns com.billpiel.guildsman.workspace2
  (:require [clojure.core.async :as a]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.special-utils :as sput]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]))

(defn filter-modes
  [ws-cfg modes]
  (update ws-cfg :modes select-keys modes))

(defn --wf-merge-mode-maps
  [g & ms]
  {:step (->> ms
              (map :step)
              (apply concat)
              distinct                 
              vec)
   :enter (->> ms
               (map :enter)
               (apply concat)
               distinct
               vec)
   :fetch (->> ms
               (map :fetch)
               (apply concat)
               distinct
               vec)
   :feed (or (some->> ms
                      (keep :feed)
                      not-empty
                      (apply merge))
             {})})

(defn --wf-merge-state-modes*
  [g {:keys [step enter feed fetch]}]
  {:step (mapv (partial sput/->op-node g)
               step)
   :enter (mapv (partial sput/->op-node g)
                enter)
   :fetch (mapv (partial sput/->op-node g)
                fetch)
   :feed (into {}
               (for [[k v] feed]
                 [(sput/->op-node g k) v]))})

(defn --wf-merge-state-modes
  [g modes]
  (ut/fmap (partial ut/fmap
                    (partial --wf-merge-state-modes* g))
           (dissoc modes :-compiled)))

(defn --wf-merge-state [kw state returned-state]
  (let [{:keys [block-type]} state
        {block :block
         global :global
         workflow :workflow
         stage :stage
         interval :interval
         modes :modes
         step :step}
        returned-state
        state' (merge-with (partial merge-with merge)
                           state
                           {:global {kw global}
                            :workflow {kw workflow}
                            :stage {kw stage}
                            :interval {kw interval}
                            :modes {kw modes}
                            :step {kw step}}
                           (when block-type
                             {block-type {kw block}}))
        state'' (assoc state' :block (when block-type (block-type state')))]
    (if-not (= (:modes state) (:modes state''))
      (update state'' :modes
              (partial --wf-merge-state-modes
                       (-> state :global :gm :graph)))
      state'')))

(defn mk-default-form-bindings*
  [[plugin-kw frms]]
  (map (fn [frm]
         (if (-> frm meta ::no-merge-state)
           frm
           `(--wf-merge-state ~plugin-kw ~'state
                              ~frm)))
       frms))

(defn mk-default-form-bindings
  [hook-frms]
  (interleave (repeat 100 'state)
              (mapcat mk-default-form-bindings*
                      hook-frms)))


(defn default-form-renderer
  [hook-frms ws-cfg & _]
  `(let [~@(mk-default-form-bindings hook-frms)]
     {:state ~'state}))

(declare find-command-renderers)

(defn find-kw-src-pair-renderer
  [path plugins]
  (when-let [plugin (first (filter #(get-in % path)
                                   plugins))]
    (fn [& args]
      [(-> plugin :meta :kw)
       (apply (get-in plugin path) args)])))

(defn find-kw-src-pair-renderers
  [path plugins]
  (when-let [plugins' (not-empty (filter #(get-in % path)
                                         plugins))]
    (remove nil?
            (flatten
             (for [plugin plugins']
               (let [p (get-in plugin path)
                     kw (-> plugin :meta :kw)]
                 (if (vector? p)
                   (find-command-renderers (first p)
                                           {:plugins plugins})
                   (fn [& args]
                     [kw (apply p args)]))))))))

(defn render-single-inline-src
  [{:keys [plugins] :as ws-cfg} cmd-def]
  (if (vector? cmd-def)
    (let [[cmd-name & args] cmd-def]
      (if-let [r-fn (find-kw-src-pair-renderer [cmd-name :inline] plugins)]
        (some-> r-fn
                (apply ws-cfg args)
                second first)
        (throw (Exception. (format "render-single-inline-src: Couldn't find inline for: %s"
                                   cmd-name)))))
    cmd-def))

(defn render-map-single-inline-src
  [m ws-cfg]
  (ut/fmap (partial render-single-inline-src ws-cfg)
           m))

(declare render-block)
(declare render-block-hook)
(declare render-command)

(defn render-element
  [[cmd :as cmd-def] ws-cfg forms]
  (case cmd
    :block (render-block cmd-def ws-cfg forms)
    :block-hook (let [[_ block-type hook-type] cmd-def]
                  (render-block-hook block-type hook-type ws-cfg forms))
    (render-command cmd-def ws-cfg forms)
    #_    (if-let [cmd-renderer (mk-command-renderer cmd ws-cfg)]
            (cmd-renderer cmd-def ws-cfg forms)
            (throw (Exception. (format "No renderer for %s"
                                       (str cmd-def)))))))

(defn render-element-single-expr
  [cmd-def ws-cfg]
  (let [{:keys [forms]} (render-element cmd-def ws-cfg {})]
    (some-> (render-element cmd-def ws-cfg {})
            :forms
            keys
            first)))

(defn render-block-contents-reducer
  [ws-cfg {:keys [forms] :as agg} cmd-def]
  (let [{:keys [id forms]} (render-element cmd-def ws-cfg forms)]
    (-> agg
        (update :ids #(if id
                        (conj % id)
                        %))
        (update :forms merge forms))))

(defn render-block-contents [block-type forms ws-cfg contents & [pre-hooks post-hooks]]
  (reduce (partial render-block-contents-reducer ws-cfg)
          {:ids []
           :forms forms}
          (concat (map (fn [h] [:block-hook block-type h]) pre-hooks)
                  contents
                  (map (fn [h] [:block-hook block-type h]) post-hooks))))

(defn inject-plugin
  [ws-cfg plugin]
  (update ws-cfg
          :plugins
          (partial into [plugin])))


;; TODO support suffixes (ex :mode-train)
(defn get-new-form-id
  [form cmd-type name-suffix forms]
  (or (get forms form)
      (let [taken (-> forms vals set)
            base (str (name cmd-type)
                      (when name-suffix
                        (str "-" name-suffix)))]
        (->> (range 100)
             (map (fn [idx]
                    (if (zero? idx)
                      (keyword base)
                      (keyword (str base "-" idx)))))
             (remove taken)
             first))))

(defn add-to-forms
  [forms cmd-type name-suffix form]
  (let [new-id (get-new-form-id form cmd-type name-suffix forms)]
    {:id new-id
     :forms (assoc forms
                   form new-id)}))

(defn apply-subs-to-child-forms
  [forms subs-map]
  (clojure.walk/postwalk-replace subs-map forms))

(defn render-element-inline
  [{:keys [plugins] :as ws-cfg} [cmd-name & args]]
  (when-let [renderer (find-kw-src-pair-renderer [cmd-name :inline]
                                                 plugins)]
    (apply renderer ws-cfg args)))

(defn render-inline-block-contents
  [block-type ws-cfg contents & [pre-hooks post-hooks]]
  (vec
   (keep (partial render-element-inline ws-cfg)
         (concat (map (fn [h] [:block-hook block-type h]) pre-hooks)
                 contents
                 (map (fn [h] [:block-hook block-type h]) post-hooks)))))

(defn --wf-assoc-block-to-state
  [{:keys [block-type] :as state}]
  (if block-type
    (assoc state :block (block-type state {}))
    state))


(def block-order [:global :workflow :stage :interval :step])

(defn --wf-higher-blocks [block-type]
  (take-while (complement #{block-type})
              block-order))

(defn --wf-lower-blocks [block-type]
  (rest (drop-while (complement #{block-type})
                    block-order)))

(def pluralize-block
  {:step :steps
   :interval :intervals
   :stage :stages
   :workflow :workflows
   :mode :modes})

(def singularize-block
  (clojure.set/map-invert pluralize-block))

(defn --wf-loop-calc-limit
  [block-type span state]
  (if-let [one-up (last (--wf-higher-blocks block-type))]
    (let [lower (--wf-lower-blocks block-type)
          {:keys [pos limit]} (-> state one-up :gm)]
      (into {}
            (for [bt lower]
              (let [bts (pluralize-block bt)
                    r (bts limit)
                    p (bt pos 0)
                    s (bts span)]
                [bts (some->> [(when r (- r p))
                              s]
                             (remove nil?)
                             not-empty
                             (apply min))]))))
    {}))

(defn --wf-pop-state
  [state]
  (let [{block-type-exiting :block-type} state
        block-type-entering (last (--wf-higher-blocks block-type-exiting))
        bts (pluralize-block block-type-exiting)
        span (when block-type-exiting
               (-> state block-type-exiting :gm :span bts))]
    (-> (reduce (fn [agg item]
                  (update-in agg
                             [item :gm :pos block-type-exiting]
                             (fnil + 0 0) span))
                state
                (--wf-higher-blocks block-type-exiting))
        (assoc :block-type block-type-entering)
        (dissoc :block))))

(defn --wf-loop-push-new-state
  [block-type span state]
  (assoc state
         :block-type block-type
         block-type {:gm {:pos {:step 0
                                :interval 0
                                :stage 0}
                          :span span
                          :limit (--wf-loop-calc-limit
                                      block-type span state)}}
         :block nil))

(defn --wf-loop-push
  [{:keys [block-type span] todo' :todo} stack current todo state]
  [(conj stack [current todo])
   nil
   todo'
   (--wf-loop-push-new-state block-type span state)])

(defn --wf-loop-pop-push
  [pop-push stack current todo state]
  (let [[head & tail] stack
        [current' todo'] head
        
        [stack state]
        [tail (--wf-pop-state state)]]
    (--wf-loop-push pop-push stack current' todo state)))

(defn --wf-loop-push-pop
  [push-pop stack current todo state]
  (let [[stack current todo state]
        (--wf-loop-push push-pop stack current todo state)
        [head & tail] stack
        [current' todo'] head]
    [tail nil todo' (--wf-pop-state state)]))

(defn --wf-loop
  [result stack current todo state]
  (let [state (:state result state)
        [stack current todo state]
        (or (when result
              (or (when-let [push (:push result)]
                    (--wf-loop-push push stack current todo state))
                  (when-let [push-pop (:push-pop result)]
                    (--wf-loop-push-pop push-pop stack current todo state))
                  (when-let [pop-push (:pop-push result)]
                    (--wf-loop-pop-push pop-push stack current todo state))))
            [stack current todo state])]
    (loop [[stack current todo state]
           [stack nil todo state]]
      (cond (or current
                (every? empty? [stack current todo]))
            [stack current todo (--wf-assoc-block-to-state state)]

            (not-empty todo)
            (let [[head & tail] todo]
              (recur [stack head tail state]))
            
            (not-empty stack)
            (let [[head & tail] stack
                  [current' todo'] head]
              (recur [tail
                      nil
                      todo'
                      (--wf-pop-state state)]))
            
            :else (throw
                   (Exception.
                    (str "--wf-loop: not sure what to do with this "
                         (with-out-str
                           (clojure.pprint/pprint [stack current todo state])))))))))


(defn find-hook-form-renderer
  [block-type hook-type {:keys [plugins]}]
  (or (some #(get-in % [block-type :hook-forms hook-type])
            plugins)
      default-form-renderer))

(defn find-command-form-renderer
  [cmd-type {:keys [plugins]}]
  (or (some #(get-in % [cmd-type :form])
            plugins)
      default-form-renderer))

(defn find-command-renderers
  [cmd-type {:keys [plugins]}]
  (if-let [inline (find-kw-src-pair-renderer [cmd-type :inline]
                                             plugins)]
    [inline]
    (->> (concat (find-kw-src-pair-renderers [cmd-type :pre]
                                              plugins)
                 [(find-kw-src-pair-renderer [cmd-type :main]
                                              plugins)]
                  (find-kw-src-pair-renderers [cmd-type :post]
                                              plugins))
         (remove nil?)
         not-empty)))

(defn compound-command-renderer
  [frm-renderer hook-renderers cmd-type args ws-cfg forms]
  (add-to-forms forms
                cmd-type
                nil
                (frm-renderer
                 (map #(apply % ws-cfg args) hook-renderers)
                 ws-cfg
                 args)))

#_(defn mk-command-renderer
  [cmd-type ws-cfg]
  (if-let [hook-renderers (find-command-renderers cmd-type ws-cfg)]
    (partial compound-command-renderer
             (find-command-form-renderer cmd-type ws-cfg)
             hook-renderers)
    (constantly nil)))

(defn render-command
  [[cmd-type & args] ws-cfg forms]
  (if-let [hook-renderers (find-command-renderers cmd-type ws-cfg)]
    (compound-command-renderer (find-command-form-renderer cmd-type ws-cfg)
                               hook-renderers
                               cmd-type
                               args
                               ws-cfg
                               forms)
    forms))

(defn find-block-renderer
  [block-type {:keys [plugins]}]
  (or (some #(get-in % [block-type :block])
            plugins)
      (throw (Exception. (format "Could not find block renderer for %s" block-type)))))

(defn render-block
  [[_ {block-type :type :as opts} & contents] ws-cfg forms]
  ((find-block-renderer block-type ws-cfg) ws-cfg opts forms contents))

(defn find-block-hook-renderers
  [block-type hook-type {:keys [plugins]}]
  (find-kw-src-pair-renderers [block-type hook-type] plugins))

(defn render-block-hook
  [block-type hook-type ws-cfg forms]
  (if-let [hook-renderers (find-block-hook-renderers block-type hook-type ws-cfg)]
    (compound-command-renderer (find-hook-form-renderer block-type hook-type ws-cfg)
                               hook-renderers
                               ;; TODO clean up
                               (keyword (str (name block-type)
                                             "-"
                                             (name hook-type)))
                               []
                               ws-cfg
                               forms)
    forms))

(defn render-workflow
  [[cmd {block-type :type} :as block-def] ws-cfg]
  (when-not (= cmd :block)
    (throw (Exception. "top-level command must be `:block`.")))
  (when-not (= block-type :workflow)
    (throw (Exception. "top-level block must be `:workflow`.")))
  (render-block block-def ws-cfg {}))

(defn render-loop-cases
  [forms-map]
  (mapcat vec
          (clojure.set/map-invert
           forms-map)))

(defn now [] (System/currentTimeMillis))

(defn set-init-wf-state!
  [wf-out]
  (let [{:keys [global]} @wf-out]
    (vreset! wf-out
             {:global global
              :block-type :global
              :heartbeat (now)
              :status :running
              :ex nil})))

(defn set-interrupted-wf-state!
  [wf-out]
  (vswap! wf-out assoc
          :status :interrupted))

(defn set-done-wf-state!
  [wf-out]
  (vswap! wf-out assoc
          :status :done))

(defn set-ex-wf-state!
  [wf-out ex]
  (vswap! wf-out assoc
          :status :exception
          :ex ex))


(defn set-wf-state!
  [wf-out state]
  (vreset! wf-out
           (assoc state
                  :heartbeat (now))))

(defn render-wf-fn-src
  [wf-def ws-cfg]
  `(fn [~'ws-cfg]
     (fn [~'_ ~'{:keys [wf-in wf-out] :as ws}] ;; TODO get ws earlier/above???
       (a/thread
         (tsc/with-scope
           (let [~'init (set-init-wf-state! ~'wf-out)]
             (try
               (loop [~'stack (list)
                      ~'current nil
                      ~'todo (list :workflow)
                      ~'state ~'init]
                 #_           (clojure.pprint/pprint ~'current)
                 (let [~'result (case ~'current
                                  nil nil
                                  ~@(render-loop-cases
                                     (:forms   
                                      (render-workflow wf-def ws-cfg))))]
                   (let [[~'stack ~'current ~'todo ~'state] (--wf-loop ~'result
                                                                       ~'stack
                                                                       ~'current
                                                                       ~'todo
                                                                       ~'state)]
                     #_(Thread/sleep 100)
                     (set-wf-state! ~'wf-out ~'state)
                     (cond (-> ~'wf-in deref :interrupt?)
                           (do (set-interrupted-wf-state! ~'wf-out)
                               false)

                           (nil? ~'current)
                           (do (set-done-wf-state! ~'wf-out)
                               true)

                           :else (recur ~'stack ~'current ~'todo ~'state)))))
               (catch Exception ~'e
                 (set-ex-wf-state! ~'wf-out ~'e)
                 false))))))))



(defn --wf-setup-modes
  [modes]
  {:modes (ut/fmap #(select-keys % [:step :fetch :feed :enter])
                   modes)})

(defn --wf-query-steps
  [state block-type q & [offset]]
  (let [{:keys [pos limit span]} (-> state block-type :gm)
        p-step (:step pos 0)
        l-steps (:steps limit)
        s-steps (:steps span)
        r (case q
            :remaining (when l-steps
                         (- l-steps p-step))
            :span s-steps
            (throw (Exception. (str "--wf-query-steps: query not supported "
                                    q))))]
    (if (and r offset)
      (+ r  offset)
      r)))

(defn --wf-deliver-fetched
  [{:keys [modes interval] :as state}]
  (if-let [fetched-raw (-> interval :gm :fetched-raw not-empty)]
    (->> (for [[pk pv] (dissoc modes :-compiled)
               [mk {:keys [fetch]}] pv
               f fetch]
           (let [f-id-str (:id f)
                 fetched (get-in fetched-raw [mk f-id-str])]
             (tsc/add-to-scope! fetched) ;; assume we're in a scope created for this purpose
             [[pk :fetched mk f-id-str] fetched]))
         (reduce (fn [agg [path v]]
                   (assoc-in agg path v))
                 interval)
         (assoc state :interval))
    state))


(defn --wf-push-light-block
  [state block-type init-block-state]
  (assoc state
         :block-type block-type
         block-type init-block-state
         :block init-block-state))

(defn --wf-pop-light-block
  [{:keys [block-type] :as state}]
  (let [parent-block-type (last (--wf-higher-blocks block-type))]
    (-> state
        (dissoc block-type)
        (assoc :block (parent-block-type state)
               :block-type parent-block-type))))


(defn --wf-require-span-completable
  [{:keys [block]} span]
  (if (->> span vals (filter number?) (some (complement pos?)))
    false
    (let [limit (-> block :gm :limit)
          pos (-> block :gm :pos)]
      (every? (fn [bt]
                (if-let [r (bt limit)]
                  (>= (- r ((singularize-block bt) pos 0))
                      (bt span 0))
                  true))
              (keys span)))))

(defn --wf-require-span-repeatable
  [{:keys [block-type] :as state} span]
  (let [parent-block-type (last (--wf-higher-blocks block-type))
        parent-block (parent-block-type state)]
    (if (->> span vals (filter number?) (some (complement pos?)))
      false
      (let [limit (-> parent-block :gm :limit)
            pos (-> parent-block :gm :pos)]
        (every? (fn [bt]
                  (if-let [r (bt limit)]
                    (>= (- r ((singularize-block bt) pos 0))
                        (bt span 0))
                    true))
                (keys span))))))
