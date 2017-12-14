(ns com.billpiel.guildsman.core
  (:require [clojure.core.async :as a]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.workspace2 :as ws2]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.ops.composite :as c]
            com.billpiel.guildsman.gradients
            com.billpiel.guildsman.grad-desc-opt
            com.billpiel.guildsman.gradients-clj
            com.billpiel.guildsman.grad-desc-opt-clj
            [com.billpiel.guildsman.data-type :as dt]
            [clojure.walk :as w]
            com.billpiel.guildsman.common
            clojure.pprint)
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman.session Session]))

(def dt-float dt/float-kw)
(def dt-list-float dt/list-float-kw)
(def dt-double dt/double-kw)
(def dt-int dt/int-kw)
(def dt-list-int dt/list-int-kw)
(def dt-uint dt/uint-kw) ;; TODO rename? is unsigned byte?
(def dt-string dt/string-kw)
(def dt-long dt/long-kw) ;; TODO or rename all of these to use TF terms?
(def dt-bool dt/bool-kw)
(def dt-list-bool dt/list-bool-kw)
(def dt-type dt/type-kw)
(def dt-list-type dt/list-type-kw)
(def dt-tensor dt/tensor-kw)
(def dt-list-tensor dt/list-tensor-kw)
(def dt-shape dt/shape-kw)
(def dt-list-shape dt/list-shape-kw)
(def dt-list dt/list-kw)


;; TODO bug? (+>> (o/xxx :a) (o/yyy a b))
(defmacro let+
  [& body]
  `(ut/let+ ~@body))

(defmacro id$->>
  [& body]
  `(ut/id$->> ~@body))

(defmulti close
  "Close a Graph or Session defrecord."
  (fn [v] (type v)))

(defmethod close :default [_])

(defmethod close Graph [v]
  (com.billpiel.guildsman.GraphNI/delete (:handle v))
  (reset! (:closed v) true))

(defmethod close Session [v]
  (com.billpiel.guildsman.SessionNI/delete (:handle v)))

(defn with-close-let*
  [bindings body]
  (let [syms (->> bindings
                  (partition 2)
                  (map first)
                  (mapcat (partial tree-seq coll? seq))
                  (filter symbol?))]
    `(let ~bindings
       (let [r# (do ~@body)]
         (doseq [sym# [~@syms]] ;; TODO close graphs before sessions
           (close sym#))
         r#))))

(defmacro with-close-let
  "Calls `close` on all local bindings in `bindings`.
In the example below, both `graph` and `session` will be closed upon
  exiting the `with-close-let` form.

(with-close-let [{:keys [graph] :as session} (build->session plan)]
  ...use session...
)"
  [bindings & body]
  (with-close-let* bindings body))

(defn tensor->value [tensor]
  (:value tensor))

(defn delete-tensor->value [tensor]
  (let [r (tensor->value tensor)]
    (tm/release-tensor-ref tensor)    
    r))

(defn graph->session
  "Takes a Graph defrecord. Creates and returns a Session defrecord."
  [^Graph graph]
  (sess/create graph))

(defn build->graph
  "Given a plan, creates a Graph defrecord, builds the plan in that
  graph and returns the new graph.

  Given a Graph defrecord and a plan, builds the plan in that graph
  and returns the graph.
"
  ([plan] (build->graph (gr/create) plan))
  ([^Graph graph plan] (bdr/build->graph graph plan)))

(defn build-all->graph
  "Like `build->graph` except that it takes a sequence of plans."
  ([plans]
   (build-all->graph (build->graph (first plans))
                     (rest plans)))
  ([^Graph graph plans]
   (doseq [p plans]
     (build->graph graph p))
   graph))

(defn build->session
  "Given a plan, creates a Graph defrecord, builds the plan in that
  graph, creates a Session defrecord and returns the new session.

  Given a Graph defrecord and a plan, builds the plan in that graph,
  creates a Session defrecord and returns the new session.
"
  ([plan]
   (-> plan
       build->graph
       graph->session))
  ([^Graph graph plan]
   (->> plan
        (build->graph graph)
        graph->session)))

(defn build-all->session
  "Like `build->session` except that it takes a sequence of plans."
  ([plans]
   (-> plans
       build-all->graph
       graph->session))
  ([^Graph graph plans]
   (->> plans
        (build-all->graph graph)
        graph->session)))

(defn run
  "Runs the node at the root of `plan` within `session`.

  `feed` can be provided optionally. It is a map. Keys are either
  plans or keywords that correspond to pre-built nodes. Values will
  override the values of their respective nodes. This is typically
  used to provide values for placeholder nodes."
   [^Session session plan & [feed]]
  (sess/run session plan feed))

(defn run-all
  "Like `run` except that it takes a sequence of plans. In the example
  below, the 'opt' node is run one-hundred times, which might be done
  to train a network.

  (run-all session (repeat 100 opt))"
  [^Session session plans & [feed]]
  (sess/run-all session plans feed))

(defn fetch->tensor
  [^Session session plan & [feed]]
  (sess/fetch->tensor session plan feed))

(defn fetch-all->tensors [^Session session plans & [feed targets]]
  (sess/fetch-all->tensors session plans feed targets))

(defn fetch [^Session session plan & [feed]]
  (-> (fetch->tensor session plan feed)
      :value))

(defn fetch-all [^Session session plans & [feed targets]]
  (->> (fetch-all->tensors session plans feed targets)
       (map :value)))

(defn fetch-map [^Session session plans & [feed targets]]
  (let [g (:graph session)]
    (zipmap (map (comp :id
                       (partial sess/->op-node g))
                 plans)
            (fetch-all session plans feed targets))))

(defn exec
  {:doc (ut/dx
         '["`exec` creates a new Session defrecord, builds plan and
runs the root of plan. Returns the new session. It can optionally be
provided an existing Graph defrecord and feed map."
           [Returns "the session"]
           [Args
            [graph "Optional. A Graph defrecord."]
            [plan "The Plan."]
            [feed "Optional. It is a map. Keys are either plans or
             keywords that correspond to pre-built nodes. Values will
             override the values of their respective nodes. This is
             typically used to provide values for placeholder nodes."]]])}
  ([plan]
   (-> plan
       build->graph
       (exec plan)))
  ([^Graph graph plan & [feed]]
   (-> graph
       graph->session
       (run plan feed))))

(defn exec-all
  "Like `exec` except that it takes a sequence of plans."
  ([plans]
   (-> plans
       build-all->session
       (run-all plans)))
  ([^Graph graph plans & [feed]]
   (-> plans
       (build->session graph)
       (run-all plans feed))))

(defn run-global-vars-init
  "Runs all variable initialization nodes in a graph. Variable state
  exists only in the context of a session. This function is typically
  called immediately after a session is created."
  [^Session session]
  (let [g (:graph session)
        inits (into (gr/get-global-var-init-assign-ops g)
                    ;; TODO make func "run-all-inits"
                    (gr/get-nodes-in-collection g :dataset-iter-inits))]
    (run-all session inits)
    session))

(defn produce->tensor [plan & [feed]]
  (-> plan
      build->session
      run-global-vars-init
      (fetch->tensor plan feed)))

(defn produce-all->tensors [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all->tensors plans feed)))


(defn produce-all [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all plans feed)))

(defn produce
  "Given a plan, creates a graph, builds the plan, starts a session,
  executes the plan root, fetches and returns the value. The graph and
  session are closed automatically.

  Given a Session defrecord, plan, and, optionally a feed map, will
  build a plan, executes the plan root, fetches and returns the
  value. Graph and session are not closed."
  ([plan]
   (with-close-let [{:keys [graph] :as session} (build->session plan)]
     (-> session
         run-global-vars-init
         (fetch plan))))
  ([^Session session plan & [feed]]
   (build->graph (:graph session) plan)
   (fetch session plan feed)))

(defn ws-status [{:keys [wf-in wf-out] :as ws}]
  (let [i @wf-in
        o @wf-out
        sgo (-> o :stage :gm)
        wgo (-> o :workflow :gm)
        {:keys [heartbeat]} o]
    {:status (:status o)
     :heartbeat heartbeat
     :heartbeat-ago-s (quot (- (System/currentTimeMillis)
                               heartbeat)
                            1000)
     :step (-> sgo :pos :step)
     :interval (-> sgo :pos :interval)
     :stage (-> wgo :pos :stage)
     :interrupt? (:interrupt? i)
     :ex (:ex o)}))

(defn ws-interrupt
  [{:keys [wf-out wf-in wf-chan]} & [timeout-ms]]
  (if-not (= (:status @wf-out) :running)
    true
    (do (vswap! wf-in assoc :interrupt? true)
        (let [wf-chan' @wf-chan
              [r ch] (a/alts!! [wf-chan'
                                (a/timeout (or timeout-ms 1000))])]
          (or (= ch wf-chan')
              (not (= (:status @wf-out) :running)))))))


(defn ws-do-wf
  [ws wf & [wait-ms]]
  (let [{:keys [wf-in wf-chan multi]} ws]
    (when (= (:statue wf-in) :running)
      (throw (Exception. "A workflow is already running. Interrupt it first.")))
    (vswap! wf-in assoc
            :interrupt? false)
    (let [ch (multi wf ws)]
      (vreset! wf-chan ch))
    (Thread/sleep (or wait-ms 100)) ;; TODO use alts!!!
    (ws-status ws)))

(defn ws-close
  [ws]
  (ws-do-wf ws :close))

(defn ws-train-test
  [ws]
  (ws-do-wf ws :train-test))

(def last-ex (atom nil))
#_ (clojure.pprint/pprint last-ex)

(defn default-init-wf
  [ws-cfg]
  (vary-meta ((eval (ws2/render-wf-fn-src
                     [:block {:type :workflow}
                      [:init]]
                                          ws-cfg))
              ws-cfg)
             assoc
             :doc "A default implementation of a init workflow....TODO"))

(defn default-close-wf
  [ws-cfg]
  (vary-meta ((eval (ws2/render-wf-fn-src
                     [:block {:type :workflow}
                      [:close-session]
                      [:close-graph]]
                                          ws-cfg))
              ws-cfg)
             assoc
             :doc "A default implementation of a close workflow....TODO"))

(defn wf-fn-map->ws
  [ws-name wf-fn-map]
  (let [multi (clojure.lang.MultiFn. (str ws-name "-multi")
                                     (fn [cmd & _] cmd)
                                     :default #'clojure.core/global-hierarchy)
        ws {:wf-in (volatile! {})
            :wf-out (volatile! {})
            :wf-chan (volatile! nil)
            :multi multi}]
    (doseq [[wf f] wf-fn-map]
      (. multi clojure.core/addMethod wf f))
    ws))

(defn ws-cfg->fn-map
  [{:keys [workflows] :as ws-cfg}]
  (into {}
        (for [[k v] workflows]
          (let [ws-cfg' (-> ws-cfg
                            (merge v)
                            (dissoc :workflows :driver))]
            [k ((:driver v) ws-cfg')]))))

(defn- assoc-in-if-nil
  [ws-cfg path default-wf]
  (if (nil? (get-in ws-cfg path))
    (assoc-in ws-cfg path default-wf)
    ws-cfg))

(defn mk-workspace
  [ws-name ws-cfg]
  (let [ws-cfg' (-> ws-cfg
                    (assoc-in-if-nil [:workflows :init :driver] default-init-wf)
                    (assoc-in-if-nil [:workflows :close :driver] default-close-wf))
        wf-fn-map (ws-cfg->fn-map (assoc ws-cfg'
                                         :ws-name ws-name))]
    [(wf-fn-map->ws ws-name wf-fn-map)
     (ut/fmap meta wf-fn-map)]))

;; PLUGIN ============================

(defn --ws-run-all
  [session {:keys [targets feed]}]
  (run-all session targets feed))

(defn --ws-run-all-repeat
  [session {:keys [targets feed]} iters]
  (run-all session
              (->> targets
                   (repeat iters)
                   flatten)
              feed))

(defn --ws-fetch-map
  [state]
  (let [{:keys [global mode modes interval]} state
        _ (when-not mode
            (throw (Exception. "Cannot fetch-map. Mode not set.")))
        fetched-raw (some-> interval :gm :fetched-raw)
        session (-> global :gm :session)
        {:keys [fetch feed]} (-> modes :-compiled :-current)]
    {:interval
     {:fetched-raw
      (merge-with merge
                  fetched-raw 
                  {mode
                   (fetch-map session
                                 fetch
                                 feed
                                 [])})}}))

(defn gm-plugin-setup-init-main
  [ws-cfg & _]
  [])

(defn gm-plugin-build-main [graph plans]
  {:global {:graph (build-all->graph plans)}})

(defn- gm-plugin-build-mode
  [graph {:keys [iters] :as mode}]
  (if (not-empty iters)
    (->> (for [[s p] iters]
           (let [dsi-cn (c/dsi-connector s p)]
             ;; TODO build-all and find-ops instead?
             (build->graph graph dsi-cn) 
             (opn/find-op dsi-cn)))
         doall
         (update mode :enter into))
    mode))

(defn gm-plugin-build-modes [graph modes]
  (ut/fmap (partial gm-plugin-build-mode graph)
           modes))

(defn gm-plugin-setup-build-main
  [ws-cfg & _]
  [`(gm-plugin-build-main (-> ~'state :global :gm :graph)
                          (:plans ~'ws-cfg))
   #_   `(ws2/--wf-setup-modes (:modes ~'ws-cfg))
   `(-> ~'ws-cfg
        :modes
        (gm-plugin-build-modes (-> ~'state :global :gm :graph))
        ws2/--wf-setup-modes)])

(defn gm-plugin-create-session-main
  [graph session]
  {:global {:session (graph->session graph)}})

(defn gm-plugin-setup-create-session-main
  [ws-cfg & _]
  [`(gm-plugin-create-session-main (-> ~'state :global :gm :graph)
                                   (-> ~'state :global :gm :session))])

(defn gm-plugin-init-varis-main
  [session]
  (run-global-vars-init session)
  {:global {:varis-set true}})

(defn gm-plugin-setup-init-varis-main
  [ws-cfg & _]
  [`(gm-plugin-init-varis-main (-> ~'state :global :gm :session))])

;; TODO make more efficient??
(defn gm-plugin-compile-modes-run-req
  [{:keys [mode modes] :as state}]
  (let [g (-> state :global :gm :graph)
        state' (if-not (:-compiled modes)
                 (let [mode-vals (vals modes)
                       mode-kws (->> mode-vals (mapcat keys) distinct)]
                   (->> (for [mkw mode-kws]
                          [mkw (->> mode-vals
                                    (map mkw)
                                    (apply ws2/--wf-merge-mode-maps g))])
                        (into {})
                        (assoc-in state [:modes :-compiled])))
                 state)
        compiled (-> state' :modes :-compiled)]
    (->> mode
         compiled
         (assoc-in state' [:modes :-compiled :-current]))))

(defn gm-plugin-setup-run-repeat-inline
  [ws-cfg & _]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::ws2/no-merge-state true)
   `(--ws-run-all-repeat ~'(-> state :global :gm :session)
                         ~'(-> state :modes :-compiled :-current)
                         (ws2/--wf-query-steps ~'state :block :span))])

(defn gm-plugin-setup-fetch-map-inline
  [ws-cfg & _]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::ws2/no-merge-state true)
   `(--ws-fetch-map ~'state)])

(defn gm-plugin-setup-mode-inline
  [ws-cfg mode]
  [(vary-meta `(assoc ~'state :mode ~mode)
              assoc ::ws2/no-merge-state true)
   ;; TODO only include if there's anything to run
   `(--ws-run-all (-> ~'state :global :gm :session)
                  (-> ~'ws-cfg :modes ~mode :enter))])

(defn gm-plugin-mode-form
  [hook-frms ws-cfg [mode]]
  `(when-not (= ~mode (:mode ~'state))
     ~(ws2/default-form-renderer hook-frms ws-cfg)))

(defn gm-plugin-interval-post-async-form
  [hook-frms ws-cfg _]
  `(do (future (let [~'state (ws2/--wf-deliver-fetched ~'state)
                     ~@(ws2/mk-default-form-bindings hook-frms)]))
       nil))


(defn gm-plugin-interval-block
  [ws-cfg {:keys [span plugin] :as args} forms contents]
  (let [span-src (ws2/render-map-single-inline-src span ws-cfg)
        start?-src (ws2/render-element-single-expr [:block-hook :interval :start?]
                                               ws-cfg)
        {:keys [ids forms]} (ws2/render-block-contents :interval
                                                   forms
                                                   (ws2/inject-plugin ws-cfg
                                                                  plugin)
                                                   contents
                                                   [:pre]
                                                   [:post-async
                                                    :repeat?])]
    (ws2/add-to-forms (ws2/apply-subs-to-child-forms forms {'$interval-block-ids ids})
                  :interval nil
                  `(let [~'span ~span-src] 
                     (when ~start?-src 
                       {:push {:block-type :interval
                               :todo [~@ids]
                               :span ~'span}})))))

(defn gm-plugin-step-block
  [ws-cfg {:keys [span]} forms contents]
  (let [span-src (ws2/render-map-single-inline-src span ws-cfg)
        start?-src (ws2/render-element-single-expr [:block-hook :interval :start?]
                                               ws-cfg)
        hook-frms (ws2/render-inline-block-contents :step ws-cfg contents)]
    (ws2/add-to-forms forms
                  :step nil
                  `(let [~'span ~span-src]
                     (when ~start?-src
                       (let [~'state (ws2/--wf-push-light-block ~'state :step {:gm {:span ~'span}})
                             ~@(ws2/mk-default-form-bindings hook-frms)
                             ~'state (ws2/--wf-pop-light-block ~'state)]
                         {:state ~'state
                          :push-pop {:block-type :step
                                     :span ~'span}}))))))

(defn gm-plugin-workflow-block
  [ws-cfg {:keys [span]} forms contents]
  (let [{:keys [ids forms] :as children} (ws2/render-block-contents :workflow forms ws-cfg contents)]
    (ws2/add-to-forms forms :workflow nil
                  `{:push {:block-type :workflow
                           :todo [~@ids]
                           :span ~span}})))

(defn gm-plugin-stage-block
  [ws-cfg {:keys [span]} forms contents]
  (let [{:keys [ids forms]} (ws2/render-block-contents :stage forms ws-cfg contents)]
    (ws2/add-to-forms forms :stage nil
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
  [`(ws2/--wf-require-span-completable ~'state ~'span)])

(defn gm-plugin-setup-require-span-completable
  [ws-cfg & [span]]
  [`(ws2/--wf-require-span-completable ~'state ~(or span 'span))])

(defn gm-plugin-setup-require-span-repeatable
  [ws-cfg & [span]]
  [`(ws2/--wf-require-span-repeatable ~'state ~(or span 'span))])

(defn gm-plugin-setup-query-steps
  [ws-cfg block-type q & [offset]]
  [`(ws2/--wf-query-steps ~'state ~block-type ~q ~offset)])

;; TODO verify session is closed
(defn gm-plugin-close-graph
  [graph session]
  (when graph
    (close graph))
  {:global {:graph nil}})

(defn gm-plugin-setup-close-graph
  [ws-cfg & _]
  [`(gm-plugin-close-graph ~'(-> state :global :gm :graph)
                           ~'(-> state :global :gm :session))])

(defn gm-plugin-close-session
  [session]
  (when session
    (close session))
  {:global {:session nil}})


(defn gm-plugin-setup-close-session
  [ws-cfg & _]
  [`(gm-plugin-close-session ~'(-> state :global :gm :session))])

(def gm-plugin
  {:meta {:kw :gm}
   :init {:main #'gm-plugin-setup-init-main}
   :build {:main #'gm-plugin-setup-build-main}
   :create-session {:main #'gm-plugin-setup-create-session-main}
   :init-varis {:main #'gm-plugin-setup-init-varis-main}
   :run-repeat {:inline #'gm-plugin-setup-run-repeat-inline}
   :fetch-map {:inline #'gm-plugin-setup-fetch-map-inline}
   ;; TODO :init-mode   ?????????
   :mode {:form #'gm-plugin-mode-form
          :inline #'gm-plugin-setup-mode-inline}
   :interval {:block #'gm-plugin-interval-block
              :hook-forms {:post-async #'gm-plugin-interval-post-async-form
                           :start? #'gm-plugin-interval-start?-form
                           :repeat? #'gm-plugin-interval-repeat?-form}
              :start? #'gm-plugin-interval-start?}
   :step {:block #'gm-plugin-step-block}
   :workflow {:block #'gm-plugin-workflow-block}
   :stage {:block #'gm-plugin-stage-block}
   :require-span-completable {:inline #'gm-plugin-setup-require-span-completable}
   :require-span-repeatable {:inline #'gm-plugin-setup-require-span-repeatable}
   :query-steps {:inline #'gm-plugin-setup-query-steps}
   :close-graph {:main #'gm-plugin-setup-close-graph}
   :close-session {:main #'gm-plugin-setup-close-session}})


;; END PLUGIN ========================

;; WORKSPACES ========================
(defn- mk-default-train-test-wf-def
  [{:keys [duration interval] :as ws-cfg}]
  [:block {:type :workflow
           :span {:steps (second duration)}}
   [:block {:type :stage
            :span {:stages 1}}
    ;; TODO [:build-mode :train] -- adds op to mode :enter
    ;; TODO [:build-mode :test] -- adds op to mode :enter
    [:build]  
    [:create-session]
    [:init-varis] ;; TODO :init-all (includes ds-iter inits)
    [:block {:type :interval
             :span {}}
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]
    [:block {:type :interval
             :span {:intervals 1
                    :steps (second interval)}
             :plugin {:interval
                      {:repeat? [:require-span-repeatable]}}}
     [:block {:type :step
              :span {:steps [:query-steps :interval :remaining]}}
      [:mode :train]
      [:run-repeat]]
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]]])

(defn default-train-test-wf
  [ws-cfg]
  (let [ws-cfg' (ws2/filter-modes ws-cfg [:train :test])
        src (ws2/render-wf-fn-src (mk-default-train-test-wf-def ws-cfg)
                                  ws-cfg)]
    (vary-meta ((eval src) ws-cfg)
               assoc
               :doc "A default implementation of a train-test workflow....TODO"
               :source src)))

(defmacro ws-show-cmd-source
  [ws cmd]
  `(-> ~ws
       var
       meta
       :source-map
       ~cmd))

(defmacro ws-show-workflow-meta
  [ws cmd]
  `(-> ~ws
       var
       meta
       :wf-meta
       ~cmd))

(defmacro ws-pr-workflow-source
  [ws wf]
  `(ut/pr-code (:source (ws-show-workflow-meta ~ws ~wf))))

(defmacro def-workspace
  [ws-name & body]
  `(do
     (when-let [~'existing (ns-resolve *ns* '~ws-name)]
       (when (and (some-> ~'existing deref :wf-out deref :status (= :running))
                  (not (ws-interrupt (deref ~'existing))))
         (throw (Exception. "Could not interrupt running workflow.")))
       (ws-do-wf (deref ~'existing) :close))
     (let [ws-def# (do ~@body)
           [ws# meta#] (mk-workspace '~ws-name ws-def#)]
       (def ~ws-name ws#)
       (alter-meta! (var ~ws-name)
                    assoc
                    :wf-meta meta#)
       ((~ws-name :multi) :init ~ws-name) ;; TODO arg is weird??
       (var ~ws-name))))


;; END WORKSPACES ========================

(defn- fn-tf-returns
  [rets]
  (->> rets
       (partition 2)
       (mapv (fn [[t s]]
               {:type t :shape s}))))

(defn- fn-tf-args
  [rets]
  (->> rets
       (partition 3)
       (mapv (fn [[a t s]]
               {:arg `'~a :type t :shape s}))))

(defn- fn-tf-body
  [args body]
  (w/postwalk-replace (->> args
                           (partition 3)
                           (map first)
                           (map (fn [sym] [sym `'~sym]))
                           (into {}))
                      body))

(defmacro fn-tf
  [fn-name returns args body]
  `{:func ~(name fn-name)
    :returns ~(fn-tf-returns returns)
    :args ~(fn-tf-args args)
    :body ~(fn-tf-body args body)})

(defmacro defn-tf
  [fn-name returns args body]
  `(def ~fn-name
     (fn-tf ~fn-name ~returns ~args ~body)))
