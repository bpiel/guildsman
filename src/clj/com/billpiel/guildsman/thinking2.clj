(ns thinking2
  (:require [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.core :as gm]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]))

;; TODO destroy/release resources ???????
;; release-graph, release-session commands ??

;; TODO element kw naming

(comment

  
  ;; cmd-hook
  [ws-cfg cmd-def] => vec of forms
  [ws-cfg cmd-def]
  [ws-cfg cmd-def]
  [ws-cfg [_ mode]]

  ;; cmd form
  [hook-frms ws-cfg [_ mode]] => form
  [hook-frms ws-cfg & _] => form

  ;; cmd inline
  !! [{:keys [block]} span] => bool
  !!  [{:keys [block-type] :as state} span] => bool
  !! [state block-type q & [offset]] => number

  
  
  ;; block
  [ws-cfg {:keys [span] :as args} forms contents] => add-to-forms
  !!    [ws-cfg {:keys [span start?]} forms contents] => {:forms :form}
  
  ;; block hook form
  [hook-frms ws-cfg] => form
  !!  [hook-frms ws-cfg {:keys [span start?]}] => form
  
  ;; block hook
  [& _] => nil
  [ws-cfg] => vec of forms



  
  (comment))



(def wf-def
  [:block {:type :workflow
           :span {:steps 10000}}
   [:block {:type :stage
            :span {:stages 1}}
    [:build]
    [:create-session]
    [:init-varis]
    [:block {:type :interval
             :span {}}
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]
    [:block {:type :interval
             :span {:intervals 1
                    :steps 100}
             :plugin {:interval
                      {;:start? [[:require-span-completable]] ;; ??????????
                       :repeat? [:require-span-repeatable]}}}
     [:block {:type :step
              :span {:steps [:query-steps :interval :remaining -1]}}
      [:mode :train]
      [:run-repeat]]
     [:block {:type :step
              :span {:steps 1}}
      [:mode :train]
      [:fetch-map]]
     [:mode :test]
     [:fetch-map]]]])

(declare render-block)
(declare render-block-hook)
(declare render-command)
(declare mk-command-renderer)
(declare add-to-forms)

(defn de-ns-clj-core
  [sym]
  (cond (not (symbol? sym)) sym
        (= "clojure.core" (namespace sym)) (symbol (name sym))
        :else sym))

(defn de-ns-clj-core-walk
  [root]
  (clojure.walk/prewalk de-ns-clj-core root))

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

(defn --wf-deliver-fetched
  [{:keys [modes interval] :as state}]
  (if-let [fetched-raw (-> interval :gm :fetched-raw not-empty)]
    (->> (for [[pk pv] (dissoc modes :-compiled)
               [mk {:keys [fetch]}] pv
               f fetch]
           (let [f-id-str (:id f)]
             [[pk :fetched mk f-id-str] (get-in fetched-raw [mk f-id-str])]))
         (reduce (fn [agg [path v]]
                   (assoc-in agg path v))
                 interval)
         (assoc state :interval))
    state))

(defn dev-plugin-build-post
  [state summaries]
  {:modes {:train {:fetch (:train summaries)}
           :test {:fetch (:test summaries)}}})

(defn dev-plugin-setup-build-post
  [ws-cfg & _]
  [`(dev-plugin-build-post ~'state
                           ~'{:train (-> ws-cfg :modes :train :dev/summaries)
                              :test (-> ws-cfg :modes :test :dev/summaries)})])

(defn dev-plugin-interval-post
  [fetched step]
  (clojure.pprint/pprint [fetched step]))

(defn dev-plugin-setup-interval-post
  [ws-cfg]
  [`(dev-plugin-interval-post
     ~'(-> state :interval :dev/plugin :fetched)
     ~'(-> state :stage :gm :pos :step))])

(def dev-plugin
  {:meta {:kw :dev/plugin
          :desc "dev things"}
   :build {:post #'dev-plugin-setup-build-post}
   :interval {:post-async #'dev-plugin-setup-interval-post}})

(defn gm-plugin-build-main [graph plans]
  {:global {:graph (gm/build-all->graph plans)}})

(defn gm-plugin-setup-build-main
  [ws-cfg & _]
  [`(gm-plugin-build-main (-> ~'state :global :gm :graph)
                          (:plans ~'ws-cfg))
   `(--wf-setup-modes (:modes ~'ws-cfg))])

;; TODO what's this?
#_(defn gm-plugin-do-setup-mode-main
  [modes]
  {:modes (ut/fmap #(select-keys % [:targets :fetch :feed])
                   modes)})

(defn gm-plugin-create-session-main
  [graph session]
  {:global {:session (gm/graph->session graph)}})

(defn gm-plugin-setup-create-session-main
  [ws-cfg & _]
  [`(gm-plugin-create-session-main (-> ~'state :global :gm :graph)
                                   (-> ~'state :global :gm :session))])

(defn gm-plugin-init-varis-main
  [session]
  (gm/run-global-vars-init session)
  {:global {:varis-set true}})

(defn gm-plugin-setup-init-varis-main
  [ws-cfg & _]
  [`(gm-plugin-init-varis-main (-> ~'state :global :gm :session))])

(defn --wf-merge-mode-maps
  [g & ms]
  {:targets (->> ms
                 (map :targets)
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

(defn gm-plugin-compile-modes-run-req
  [{:keys [mode modes] :as state}]
  (let [g (-> state :global :gm :graph)
        state' (if-not (:-compiled modes)
                 (let [mode-vals (vals modes)
                       mode-kws (->> mode-vals (mapcat keys) distinct)]
                   (->> (for [mkw mode-kws]
                          [mkw (->> mode-vals
                                    (map mkw)
                                    (apply --wf-merge-mode-maps g))])
                        (into {})
                        (assoc-in state [:modes :-compiled])))
                 state)
        compiled (-> state' :modes :-compiled)]
    (->> mode
         compiled
         (assoc-in state' [:modes :-compiled :-current]))))

(defn --ws-fetch-map
  [state]
  (let [{:keys [global mode modes interval]} state
        _ (when-not mode
            (throw (Exception. "Cannot fetch-map. Mode not set.")))
        fetched-raw (some-> interval :gm :fetched-raw)
        session (-> global :gm :session)
        {:keys [fetch feed targets]} (-> modes :-compiled :-current)]
    {:interval
     {:fetched-raw
      (merge-with merge
                  fetched-raw 
                  {mode
                   (gm/fetch-map session
                                 fetch
                                 feed
                                 targets)})}}))


(defn --wf-merge-state-modes*
  [g {:keys [targets feed fetch]}]
  {:targets (mapv (partial sess/->op-node g)
                  targets)
   :fetch (mapv (partial sess/->op-node g)
                  fetch)
   :feed (into {}
               (for [[k v] feed]
                 [(sess/->op-node g k) v]))})

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


(defn --ws-run-all
  [session {:keys [targets feed]}]
  (gm/run-all session targets feed))

(defn --ws-run-all-repeat
  [session {:keys [targets feed]} iters]
  (gm/run-all session
              (->> targets
                   (repeat iters)
                   flatten)
              feed))

(defn gm-plugin-setup-fetch-map-inline
  [ws-cfg & _]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::no-merge-state true)
   `(--ws-fetch-map ~'state)])

(defn gm-plugin-setup-mode-inline
  [ws-cfg mode]
  [(vary-meta `(assoc ~'state :mode ~mode)
              assoc ::no-merge-state true)
   `(--ws-run-all (-> ~'state :global :gm :session)
                  (-> ~'ws-cfg :modes :test :enter))])


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

(defn gm-plugin-mode-form
  [hook-frms ws-cfg [mode]]
  `(when-not (= ~mode (:mode ~'state))
     ~(default-form-renderer hook-frms ws-cfg)))

(defn gm-plugin-interval-post-async-form
  [hook-frms ws-cfg _]
  `(do (future (let [~@(mk-default-form-bindings hook-frms)]))
       nil))

(defn gm-plugin-interval-post-async
  [ws-cfg]
  [(vary-meta `(--wf-deliver-fetched ~'state)
              assoc ::no-merge-state true)])

#_(defn apply-subs-to-child-forms
  [ids forms subs-map]
  (->> ids
       (select-keys forms)
       (clojure.walk/postwalk-replace subs-map)
       (merge forms)))

(defn apply-subs-to-child-forms
  [forms subs-map]
  (clojure.walk/postwalk-replace subs-map forms))

(defn inject-plugin
  [ws-cfg plugin]
  (update ws-cfg
          :plugins
          (partial into [plugin])))

(defn gm-plugin-interval-block
  [ws-cfg {:keys [span plugin] :as args} forms contents]
  (let [span-src (render-map-single-inline-src span ws-cfg)
        start?-src (render-element-single-expr [:block-hook :interval :start?]
                                               ws-cfg)
        {:keys [ids forms]} (render-block-contents :interval
                                                   forms
                                                   (inject-plugin ws-cfg
                                                                  plugin)
                                                   contents
                                                   [:pre]
                                                   [:post-async
                                                    :repeat?])]
    (add-to-forms (apply-subs-to-child-forms forms {'$interval-block-ids ids})
                  :interval nil
                  `(let [~'span ~span-src] 
                     (when ~start?-src 
                       {:push {:block-type :interval
                               :todo [~@ids]
                               :span ~'span}})))))


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

(defn --wf-setup-modes
  [modes]
  {:modes (ut/fmap #(select-keys % [:targets :fetch :feed])
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
            (throw (Exception. (str "--wf-steps: query not supported "
                                    q))))]
    (if (and r offset)
      (+ r  offset)
      r)))

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

(defn gm-plugin-step-block
  [ws-cfg {:keys [span]} forms contents]
  (let [span-src (render-map-single-inline-src span ws-cfg)
        start?-src (render-element-single-expr [:block-hook :interval :start?]
                                               ws-cfg)
        hook-frms (render-inline-block-contents :step ws-cfg contents)]
    (add-to-forms forms
                  :step nil
                  `(let [~'span ~span-src]
                     (when ~start?-src
                       (let [~'state (--wf-push-light-block ~'state :step {:gm {:span ~'span}})
                             ~@(mk-default-form-bindings hook-frms)
                             ~'state (--wf-pop-light-block ~'state)]
                         {:state ~'state
                          :push-pop {:block-type :step
                                     :span ~'span}}))))))

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

(defn gm-plugin-workflow-block
  [ws-cfg {:keys [span]} forms contents]
  (let [{:keys [ids forms] :as children} (render-block-contents :workflow forms ws-cfg contents)]
    (add-to-forms forms :workflow nil
                  `{:push {:block-type :workflow
                           :todo [~@ids]
                           :span ~span}})))

(defn gm-plugin-stage-block
  [ws-cfg {:keys [span]} forms contents]
  (let [{:keys [ids forms]} (render-block-contents :stage forms ws-cfg contents)]
    (add-to-forms forms :stage nil
                  `{:push {:block-type :stage
                           :todo [~@ids]
                           :span ~span}})))

(defn gm-plugin-interval-start?-form
  [hook-frms ws-cfg & _]
  (or (some-> hook-frms first second first)
      true))

(defn gm-plugin-interval-repeat?-form
  [hook-frms ws-cfg _]
  `(let [~'span (-> ~'state :block :gm :span)] 
     (when ~(or (some-> hook-frms first second first)
                false)
       {:pop-push {:block-type :interval
                   :todo ~'$interval-block-ids
                   :span ~'span}})))

(defn gm-plugin-interval-start?
  [ws-cfg]
  [`(--wf-require-span-completable ~'state ~'span)])

(defn gm-plugin-setup-require-span-completable
  [ws-cfg & [span]]
  [`(--wf-require-span-completable ~'state ~(or span 'span))])

(defn gm-plugin-setup-require-span-repeatable
  [ws-cfg & [span]]
  [`(--wf-require-span-repeatable ~'state ~(or span 'span))])

(defn gm-plugin-setup-query-steps
  [ws-cfg block-type q & [offset]]
  [`(--wf-query-steps ~'state ~block-type ~q ~offset)])

(def gm-plugin
  {:meta {:kw :gm}
   :build {:main #'gm-plugin-setup-build-main}
   :create-session {:main #'gm-plugin-setup-create-session-main}
   :init-varis {:main #'gm-plugin-setup-init-varis-main}
   :fetch-map {:inline #'gm-plugin-setup-fetch-map-inline}
   :mode {:form #'gm-plugin-mode-form
          :inline #'gm-plugin-setup-mode-inline}
   :interval {:block #'gm-plugin-interval-block
              :hook-forms {:post-async #'gm-plugin-interval-post-async-form
                           :start? #'gm-plugin-interval-start?-form
                           :repeat? #'gm-plugin-interval-repeat?-form}
              :start? #'gm-plugin-interval-start?
              :post-async #'gm-plugin-interval-post-async}
   :step {:block #'gm-plugin-step-block}
   :workflow {:block #'gm-plugin-workflow-block}
   :stage {:block #'gm-plugin-stage-block}
   :require-span-completable {:inline #'gm-plugin-setup-require-span-completable}
   :require-span-repeatable {:inline #'gm-plugin-setup-require-span-repeatable}
   :query-steps {:inline #'gm-plugin-setup-query-steps}})

(def ws-cfg
  {:plugins [gm-plugin dev-plugin]
   :plans [(o/add :a1 1 2)]
   :modes {:train {:targets []
                   :dev/summaries [:a1]
                   :feed {}
                   :enter {:targets []}}
           :test {:dev/summaries [:a1]
                  :feed {}
                  :enter {:targets []}}}})

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
  [frm-renderer hook-renderers cmd-type args forms]
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
                               forms)
    forms))

(defn render-workflow
  [[cmd {block-type :type} :as block-def] ws-cfg]
  (when-not (= cmd :block)
    (throw (Exception. "top-level command must be `:block`.")))
  (when-not (= block-type :workflow)
    (throw (Exception. "top-level block must be `:workflow`.")))
  (render-block block-def ws-cfg {}))

#_(defn render-single-inline-block-hook
  [block-type hook-type args]
  )

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

;; (min (- up-limit up-pos) new-span)

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

(defn --wf-assoc-block-to-state
  [{:keys [block-type] :as state}]
  (if block-type
    (assoc state :block (block-type state {}))
    state))


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



(defn render-loop-cases
  [forms-map]
  (mapcat vec
          (clojure.set/map-invert
           forms-map)))

(defn render-wf-fn-src
  [wf-def ws-cfg]
  `(fn [~'global-state]
     (loop [~'stack (list)
            ~'current nil
            ~'todo (list :workflow)
            ~'state {:global ~'global-state
                     :block-type :global}]
       (clojure.pprint/pprint ~'current)
       (let [~'result (case ~'current
                        nil nil
                        ~@(render-loop-cases
                           (:forms   
                            (render-workflow wf-def ws-cfg)))
                        )]
         (let [[~'stack ~'current ~'todo ~'state] (--wf-loop ~'result
                                                             ~'stack
                                                             ~'current
                                                             ~'todo
                                                             ~'state)]
           (Thread/sleep 100)
           (if (nil? ~'current)
             :cool
             (recur ~'stack ~'current ~'todo ~'state)))))))

(clojure.pprint/with-pprint-dispatch clojure.pprint/code-dispatch
  (binding [clojure.pprint/*print-miser-width* 60
            clojure.pprint/*print-right-margin* 79]
    (clojure.pprint/pprint
     (de-ns-clj-core-walk
      (render-wf-fn-src wf-def ws-cfg)))))


(def wfff (eval (render-wf-fn-src wf-def ws-cfg)))

#_(wfff {:gm {:pos {:step 0
                  :interval 0
                  :stage 0}
            :limit {:steps 400}}})
