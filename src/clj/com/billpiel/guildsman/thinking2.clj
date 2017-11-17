(ns thinking2
  (:require [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.core :as gm]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]))

;; TODO destroy/release resources ???????
;; release-graph, release-session commands ??

(def wf-def
  [:block {:type :workflow
           :span {:steps 10000}}
   [:block {:type :stage
            :span {:stages 1}}
    [:build]
    [:start-session]
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
             :repeat? [:require-span-repeatable]}
     [:block {:type :step
              :span {:steps [:steps :interval :remaining -1]}}
      [:mode :train]
      [:run-repeat]]
     [:block {:type :step
              :span {:steps 1}}
      [:mode :train]
      [:fetch-map]]
     [:mode :test]
     [:fetch-map]]]])

(declare render-block)
(declare mk-command-renderer)

(defn render-command
  [[cmd :as cmd-def] ws-cfg forms]
  (case cmd
    :block (render-block cmd-def ws-cfg forms)
    :block-hook (render-block-hook (first cmd-def) (second cmd-def) ws-cfg forms)
    ((mk-command-renderer cmd ws-cfg) cmd-def ws-cfg forms)))

(defn render-block-contents-reducer
  [ws-cfg {:keys [forms] :as agg} cmd-def]
  (let [{:keys [id forms]} (render-command cmd-def ws-cfg forms)]
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
                  (map (fn [h] [:block-hook block-type h]) post-hooks)))  
  )

(defn render-inline-block-contents [& _])

(defn render-hook-lets [hook-frms] )

(defn apply-subs-to-child-forms
  [children subs])

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


(defn dev-plugin-setup-build-post
  [ws-cfg cmd-def]
  [`(dev-plugin-build-post ~'state
                           ~'{:train (-> ws-cfg :modes :train :dev/summaries)
                              :test (-> ws-cfg :modes :test :dev/summaries)})])

(defn dev-plugin-train-interval-post
  [fetched step]
  (clojure.pprint/pprint [fetched step]))

(defn dev-plugin-setup-train-interval-post
  [ws-cfg]
  [`(dev--plugin-interval-post
     ~'(-> state :interval :dev/plugin :fetched)
     ~'(-> state :stage :gm :pos :step))])

(def dev-plugin
  {:meta {:kw :dev/plugin
          :desc "dev things"}
   :build {:post #'dev-plugin-setup-build-post}
   :interval {:post-async #'dev-plugin-setup-train-interval-post}})

(defn gm-plugin-build-main [graph plans]
  {:global {:graph (gm/build-all->graph plans)}})

(defn gm-plugin-setup-build-main
  [ws-cfg cmd-def]
  [`(gm-plugin-build-main (-> ~'state :global :gm :graph)
                          (:plans ~'ws-cfg))
   `(--wf-setup-modes (:modes ~'ws-cfg))])

;; TODO what's this?
(defn gm-plugin-do-setup-mode-main
  [modes]
  {:modes (ut/fmap #(select-keys % [:targets :fetch :feed])
                   modes)})

(defn gm-plugin-setup-create-session-main
  [ws-cfg cmd-def]
  [`(--ws-build (-> ~'state :global :gm :graph)
                (:plans ~'ws-cfg))
   `(--wf-setup-modes (:modes ~'ws-cfg))])

(defn gm-plugin-init-varis-main [session]
  (gm/run-global-vars-init session)
  {:global {:varis-set true}})

(defn gm-plugin-setup-init-varis-main
  [ws-cfg cmd-def]
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
  [ws-cfg cmd-def]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::no-merge-state true)
   `(--ws-fetch-map ~'state)])

(defn gm-plugin-setup-mode-inline
  [ws-cfg [_ mode]]
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
  [hook-frms ws-cfg [_ mode]]
  `(when-not (= ~mode (:mode ~'state))
     ~(default-form-renderer hook-frms ws-cfg)))

(defn gm-plugin-interval-post-async-form
  [hook-frms ws-cfg]
  `(do (future (let [~@(render-hook-lets hook-frms)]))
       nil))

(defn gm-plugin-interval-repeat-form
  [hook-frms ws-cfg {:keys [span start?]}]
  `(let [span ~span] ;; TODO (render-something span)
     (when ~start? ;; TODO (render-hook-boolean)??? support hooks + args
       {:pop-push {:block-type :interval
                   :todo [~'$interval-block-ids]
                   :span ~'span}})))

(defn apply-subs-to-child-forms
  [ids forms subs-map]
  (->> ids
       (select-keys forms)
       (clojure.walk/postwalk-replace subs-map)
       (merge forms)))

(defn gm-plugin-interval-block
  [ws-cfg {:keys [span start?]} forms contents]
  (let [{:keys [ids forms]} (render-block-contents :interval
                                                   forms
                                                   ws-cfg
                                                   contents
                                                   [:pre]
                                                   [:post-async])]
    (add-to-forms (apply-subs-to-child-forms ids forms {'$interval-block-ids ids})
                  :interval nil
                  `(let [~'span ~span]  ;; TODO (render-something span)
                     (when ~start? ;; TODO (render-hook-boolean)??? support hooks + args
                       {:push {:block-type :interval
                               :todo [~@ids]
                               :span ~'span}})))))

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
  [ws-cfg {:keys [span start?]} forms contents]
  (let [{:keys [hook-frms forms]} (render-inline-block-contents :step forms ws-cfg contents)]  
    {:forms forms
     :form `(let [~'span ~span] ;; TODO (render-something span)
              (when ~start?
                (let [~'state (--wf-push-light-block ~'state :step {:gm {:span ~'span}})
                      ~@(render-hook-lets hook-frms)
                      ~'state (--wf-pop-light-block ~'state)]
                  {:state ~'state
                   :push-pop {:block-type :step
                              :span ~'span}})))}))

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



(def gm-plugin
  {:meta {:kw :gm}
   :build {:main #'gm-plugin-setup-build-main}
   :create-session {:main #'gm-plugin-setup-create-session-main}
   :init-varis {:main #'gm-plugin-setup-init-varis-main}
   :fetch-map {:inline #'gm-plugin-setup-fetch-map-inline}
   :mode {:form #'gm-plugin-mode-form
          :main #'gm-plugin-setup-mode-inline}
   :interval {:block #'gm-plugin-interval-block
              :hook-forms {:post-async #'gm-plugin-interval-post-async-form
                           :repeat? #'gm-plugin-interval-repeat-form}}
   :step {:block #'gm-plugin-step-block}
   :workflow {:block #'gm-plugin-workflow-block}
   :stage {:block #'gm-plugin-stage-block}})

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



(defn find-command-renderers*
  [path plugins]
  (when-let [plugin (first (filter #(get-in % path)
                                   plugins))]
    (fn [& args]
      [(-> plugin :meta :kw)
       (apply (get-in plugin path) args)])))

(defn find-command-form-renderer
  [cmd-type {:keys [plugins]}]
  (or (some #(get-in % [cmd-type :form])
            plugins)
      default-form-renderer))



(defn find-command-renderers
  [cmd-type {:keys [plugins]}]
  (if-let [inline (find-command-renderers* [cmd-type :inline]
                                           plugins)]
    [inline]
    (->> [(find-command-renderers* [cmd-type :pre]
                                   plugins)
          (find-command-renderers* [cmd-type :main]
                                   plugins)
          (find-command-renderers* [cmd-type :post]
                                   plugins)]
         (remove nil?)
         not-empty)))

(defn compound-command-renderer
  [frm-renderer hook-renderers cmd-def ws-cfg forms]
  (add-to-forms forms
                (first cmd-def)
                nil
                (frm-renderer
                 (map #(% ws-cfg cmd-def) hook-renderers)
                 ws-cfg
                 cmd-def)))

(defn mk-command-renderer
  [cmd-type ws-cfg]
  (if-let [hook-renderers (find-command-renderers cmd-type ws-cfg)]
    (partial compound-command-renderer
             (find-command-form-renderer cmd-type ws-cfg)
             hook-renderers)
    (constantly nil)))

(defn find-block-renderer
  [block-type {:keys [plugins]}]
  (or (some #(get-in % [block-type :block])
            plugins)
      (throw (Exception. (format "Could not find block renderer for %s" block-type)))))

(defn render-block
  [[_ {block-type :type :as opts} & contents] ws-cfg forms]
  ((find-block-renderer block-type ws-cfg) ws-cfg opts forms contents))

(defn find-block-hook-renderer
  [block-type hook-type {:keys [plugins]}]
  (some #(get-in % [block-type hook-type])
        plugins))

;; TODO support multiple hooks from different plugins
(defn render-block-hook
  [block-type hook-type ws-cfg forms]
  (when-let [renderer (find-block-hook-renderer block-type hook-type ws-cfg)]
    (renderer ws-cfg)))

(defn render-workflow
  [[cmd {block-type :type} :as block-def] ws-cfg]
  (when-not (= cmd :block)
    (throw (Exception. "top-level command must be `:block`.")))
  (when-not (= block-type :workflow)
    (throw (Exception. "top-level block must be `:workflow`.")))
  (render-block block-def ws-cfg {}))


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




`(fn [~'global-state]
   (loop [~'stack (list)
          ~'current nil
          ~'todo (list :workflow)
          ~'state {:global ~'global-state
                   :block-type :global}] 
     (let [~'result (case current
                      nil nil
                      )]
       (let [[~'stack ~'current ~'todo ~'state] (--wf-loop ~'result
                                                           ~'stack
                                                           ~'current
                                                           ~'todo
                                                           ~'state)]
         #_(Thread/sleep 100)
         (if (nil? ~'current)
           #_(clojure.pprint/pprint state)
           :cool
           (recur ~'stack ~'current ~'todo ~'state))))))

(clojure.pprint/pprint
 (clojure.set/map-invert
  (:forms   
   (render-workflow wf-def ws-cfg))))


