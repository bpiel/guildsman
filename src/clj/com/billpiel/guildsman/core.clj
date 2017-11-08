(ns com.billpiel.guildsman.core
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.workspace :as ws1]
            [com.billpiel.guildsman.util :as ut]
            com.billpiel.guildsman.gradients
            com.billpiel.guildsman.grad-desc-opt
            com.billpiel.guildsman.gradients-clj
            com.billpiel.guildsman.grad-desc-opt-clj
            [com.billpiel.guildsman.data-type :as dt]
            com.billpiel.guildsman.common
            clojure.pprint)
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman.session Session]))

(def dt-float dt/float-kw)
(def dt-double dt/double-kw)
(def dt-int dt/int-kw)
(def dt-uint dt/uint-kw)
(def dt-string dt/string-kw)
(def dt-long dt/long-kw)
(def dt-bool dt/bool-kw)
(def dt-type dt/type-kw)
(def dt-list dt/list-kw)
(def dt-tensor dt/tensor-kw)
(def dt-shape dt/shape-kw)

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

"`exec` creates a new Session defrecord, builds plan and runs the root of plan. Returns the new session.
  It can optionally be provided an existing Graph defrecord and feed
  map. "

(defn exec
  {:doc (ut/dx
         '["`exec` creates a new Session defrecord, builds plan and
runs the root of plan. Returns the new session. It can optionally be
provided an existing Graph defrecord and feed map."
           [Returns "the new session"]
           [Args
            [plan "The Plan."]
            [graph "Optional. A Graph defrecord."]
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
        inits (gr/get-global-var-init-assign-ops g)]
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

(defn ws-status [{:keys [multi] :as ws}]
  (multi :status))

(defn ws-build [{:keys [multi] :as ws}]
  (multi :build))

(defn ws-init-vars [{:keys [multi] :as ws}]
  (multi :init-vars))

(defn ws-restore-vars [{:keys [multi] :as ws} & [alt-var-source]]
  (multi :restore-vars))

(defn ws-train [{:keys [multi] :as ws}]
  (multi :train))

(defn ws-train-test [{:keys [multi] :as ws}]
  (multi :train-test))


(def last-ex (atom nil))
#_ (clojure.pprint/pprint last-ex)

(defn --ws-status-setup-main [ws-name ws-def]
  `(--ws-status-main ~'state
                   ~'(-> ws :interrupt-training deref)))

(defn --ws-status-main [state interrupt-training]
  {:return (assoc (select-keys state [:step
                                      :training?
                                      :last-ex
                                      :train-fetched
                                      :test-fetched])
                  :interrupt-training interrupt-training)})



(defn --mk-ws-source
  [ws-name src-map]
  `(fn [~'ws-def]
     (let [mm# (clojure.lang.MultiFn. (str '~ws-name "-multi")
                                      ~'(fn [cmd & _] cmd)
                                      :default #'clojure.core/global-hierarchy)
           ~'ws {:state (atom {})
                 :interrupt-training (volatile! false)
                 :multi mm#}]
       (doseq [[~'cmd ~'f] ~src-map]
         (. mm# clojure.core/addMethod ~'cmd ~'f))
       ~'ws)))

(defn --ws-init-setup-main [ws-name ws-def]
  `(--ws-init-main))

;; TODO move ws-*-main fns to ws ns??
(defn --ws-init-main
  []
  {:INIT-MAIN-NOT-IMPLEMENTED 1})

(defn --ws-build-setup-main [ws-name ws-def]
  `(--ws-build-main ~'(ws-def :plans)))

(defn --ws-build-main
  [plans]
  ;; TODO don't run if graph exists
  {:graph (build-all->graph plans)
   :return :BUILD-DONE})



;; TODO take state instead of ws??
(defn --ws-create-session-setup-main [ws-name ws-def]
  `(--ws-create-session-main ~'(:graph state)
                           ~'(:session state)))

(defn --ws-create-session-main [graph session]
  (if-not session
    {:session (graph->session graph)
     :return true}
    {:return false}))

(defn --ws-init-vars-setup-main [ws-name ws-def] `(--ws-init-vars-main ~'(:session state)))

(defn --ws-init-vars-main [session]
  (run-global-vars-init session)
  {:return true
   :vars-set true})



(defn --ws-restore-vars-setup-main [ws-name ws-def] `(--ws-restore-vars-main ~'state))
(defn --ws-restore-vars-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-save-vars-setup-main [ws-name ws-def] `(--ws-save-vars-main ~'state))
(defn --ws-save-vars-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-train-setup-main [ws-name ws-def] `(--ws-train-main ~'state))
(defn --ws-train-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-train-interval-setup-main [ws-name ws-def] `(--ws-train-interval-main ~'state))
(defn --ws-train-interval-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn --ws-test-setup-main [ws-name ws-def] `(--ws-test-main ~'state))
(defn --ws-test-main [ws & args] {:NOT-IMPLEMENTED 1})

(defn --ws-train-test-setup-main [ws-name ws-def]
  `(--ws-train-main ~'state
                  ~'(:train ws-def)
                  ~'(:test ws-def)))








(defn find-qual-kws
  [m kw]
  (let [kw-name (name kw)]
    (->> m
         seq
         (filter #(-> %
                      first
                      name
                      (= kw-name)))
         (into {}))))

(defn --mk-ws-src-train-test
  [ws-name ws-def plugins]
  (let [hook-fns {:train-interval-post (ws1/mk-hook-fn-form ws-name
                                                        ws-def
                                                        plugins
                                                        [:train-interval :post])
                  :train-test-post (ws1/mk-hook-fn-form ws-name
                                                    ws-def
                                                    plugins
                                                    [:train-test :post])}]
    `(fn [~'& ~'_]
       ~'((:multi ws) :ensure-vars-set)
       (--ws-train-test-handler ~'(:state ws)
                              ~'(:interrupt-training ws)
                              ~'(:train ws-def)
                              ~'(:test ws-def)
                              ~hook-fns))))

(defn- extract-distinct-vals
  [m kw]
  (->> (find-qual-kws m kw)
       vals
       (apply concat)
       distinct))


(defn- get-run-req-specs
  [^Graph g state t-def fetch-kw feed-kw]
  (let [{:keys [feed fetch]} t-def
        orig-fetch-nodes (map (partial sess/->op-node g)
                              fetch)
        orig-fetch-ids (map :id orig-fetch-nodes)
        all-fetch-nodes (->> (extract-distinct-vals state fetch-kw)
                             (map (partial sess/->op-node g))
                             (into orig-fetch-nodes)
                             distinct
                             not-empty)
        all-feeds (->> (find-qual-kws state feed-kw)
                       (apply merge {} feed))]
    (merge t-def
           {:fetch all-fetch-nodes
            :orig-fetch-ids orig-fetch-ids
            :feed all-feeds})))

(defn --ws-train-test-handler
  [state-atom interrupt-training train-def test-def hook-fns]
  (let [state @state-atom
        {tr-int-post :train-interval-post
         tr-te-post :train-test-post} hook-fns
        {:keys [graph session]} state
        
        {:keys [duration interval]
         train-targets :targets
         train-feed :feed
         train-fetch :fetch
         orig-train-fetch :orig-fetch-ids}
        (get-run-req-specs graph
                           state
                           train-def
                           :train-fetch
                           :train-feed)
        {test-targets :targets
         test-feed :feed
         test-fetch :fetch
         orig-test-fetch :orig-fetch-ids}
        (get-run-req-specs graph
                           state
                           test-def
                           :test-fetch
                           :test-feed)
        [_ dur-steps] duration ;; TODO support other units?
        [_ int-steps] interval ;; TODO support other units?
        run-steps (if train-fetch
                    (dec int-steps)
                    int-steps)
        train-targets' (repeat run-steps
                               (first train-targets))]
    (when (> (count train-targets) 1)
      (throw (Exception. "Only one training target supported.")))
    (future
      (try (loop [step 0]
             (swap! state-atom assoc :step step)
             (let [[run-steps' step' train-targets'] (case step
                                                       0 [0 1]
                                                       1 [(max 0 (dec run-steps))
                                                          (max int-steps 2)
                                                          (repeat (max 0 (dec run-steps))
                                                                  (first train-targets))]
                                                       [run-steps
                                                        (+ step int-steps)
                                                        train-targets])]
               (if (and (false? @interrupt-training)
                        (< step dur-steps))
                 (do (when (> run-steps' 0)
                       (run-all session
                                train-targets
                                train-feed))
                     ;; TODO are fetched tensors immutable???
                     (let [train-fetched (when train-fetch
                                           (fetch-map session
                                                      train-fetch
                                                      train-feed
                                                      train-targets'))
                           test-fetched (when test-fetch
                                          ;; TODO support test targets
                                          (fetch-map session
                                                     test-fetch
                                                     test-feed))]
                       (swap! state-atom assoc
                              :train-fetched (select-keys train-fetched orig-train-fetch)
                              :test-fetched (select-keys test-fetched orig-test-fetch))
                       (when tr-int-post
                         (future (tr-int-post (assoc state
                                                     :step step
                                                     :train-fetched train-fetched
                                                     :test-fetched test-fetched))))
                       (recur step')))
                 (do (when tr-te-post
                       (swap! state-atom tr-te-post))
                     (swap! state-atom
                            assoc :training? false)))))
           (catch Exception e
             (reset! last-ex e)
             (swap! state-atom assoc :last-ex e))))
    (swap! state-atom merge
           {:training? true
            :return true})
    true))


(defn --ws-predict-setup-main [ws-name ws-def] `(--ws-predict-main ~'state))
(defn --ws-predict-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-close-session-setup-main [ws-name ws-def] `(--ws-close-session-main ~'state))
(defn --ws-close-session-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-close-setup-main [ws-name ws-def] `(--ws-close-main ~'state))
(defn --ws-close-main [state] {:return :NOT-IMPLEMENTED})
(defn --ws-interrupt-training-setup-main [ws-name ws-def] `(--ws-train-interval-main ~'state))
(defn --ws-interrupt-training-main [state] {:return :NOT-IMPLEMENTED})

(defn --ws-ensure-vars-set-setup-main []
  `(fn [~'cmd ~'& ~'_]
     (--ws-ensure-vars-set-main ~'ws)))
(defn --ws-ensure-vars-set-main
  [ws]
  (when-not (-> ws :state deref :vars-set)
    (ws-init-vars ws)
    (ws-restore-vars ws))
  (swap! (:state ws)
         assoc :vars-set true))

(defn --mk-ws-src-map
  [ws-name {:keys [plugins] :as ws-def}]
  (ws1/mk-ws-src-map* ws-name ws-def
                  [:init --ws-init-setup-main]
                  [:status --ws-status-setup-main]
                  [:build --ws-build-setup-main]
                  [:create-session --ws-create-session-setup-main [[:build]]]
                  [:ensure-vars-set (--ws-ensure-vars-set-setup-main)] 
                  [:init-vars --ws-init-vars-setup-main [[:create-session]]]
                  [:restore-vars --ws-restore-vars-setup-main [[:create-session]]]
                  [:save-vars --ws-save-vars-setup-main [[:create-session]]]
                  [:train --ws-train-setup-main [[:ensure-vars-set]]]
                  [:train-interval --ws-train-interval-setup-main ]
                  [:interrupt-training --ws-interrupt-training-setup-main]
                  [:test --ws-test-setup-main]
                  [:train-test (--mk-ws-src-train-test ws-name ws-def plugins)]
                  [:predict --ws-predict-setup-main [[:ensure-vars-set]]]
                  [:close-session --ws-close-session-setup-main]
                  [:close --ws-close-setup-main]))

(defmacro ws-show-cmd-source
  [ws cmd]
  `(-> ~ws
       var
       meta
       :source-map
       ~cmd))

;; TODO interrupt-training
(defmacro def-workspace
  [ws-name & body]
  `(let [~'ws-def (do ~@body)
         src-map# (--mk-ws-src-map '~ws-name
                                 ~'ws-def)
         src# (--mk-ws-source '~ws-name src-map#)]
     (def ~ws-name ((eval src#) ~'ws-def))
     (alter-meta! (var ~ws-name)
                  assoc
                  :source-map src-map#)
     ((~ws-name :multi) :init)
     (var ~ws-name)))
