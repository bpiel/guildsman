(ns com.billpiel.guildsman.core
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.op-node :as opn]
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
                       (partial opn/find-op g))
                 plans)
            (fetch-all session plans feed targets))))

(defn exec
  "`exec` creates a new Session defrecord, builds plan and runs the root of plan. Returns the new session.
  It can optionally be provided an existing Graph defrecord and feed
  map. "
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

(defmulti call-plugin (fn [plugin-id+hook & args] plugin-id+hook))
(defmethod call-plugin :default
  [[_ hook] & args] nil)

(defn- call-plugins
  [hook m & args]
  (let [plugin-ids @plugins]
    (mapv #(apply call-plugin [% hook] m args)
            plugin-ids)))

(defn- ws-init-graph&session
  [{:keys [state] :as m}]
  (if-let [session (:session @state)]
    session
    (let [s (build->session [])]
      (call-plugins :init m s)
      (swap! state assoc :session s)
      s)))

#_(defn ws-build
  [{:keys [state ws-def] :as m}]
  (let [{:keys [graph]}  (ws-init-graph&session m)]
    (call-plugins :pre-build m)
    (build-all->graph graph (:build ws-def))
    (call-plugins :post-build m)
    true))

;; TODO wrong way to do this
(defn ws-write-tb
  [{:keys [state ws-def] :as m}]
  (call-plugins :write-tb m)
  true)

(def last-ex (atom nil))
#_ (clojure.pprint/pprint last-ex)

(defn ws-train
  [{:keys [state ws-def] :as ws}]
  (let [{:keys [train]} ws-def
        {:keys [targets feed fetch steps log-step-interval]} train
        {:keys [session]} @state]
    (run-global-vars-init session)
    (let [fetch' (->> (call-plugins :train-fetch ws)
                      (apply concat fetch)
                      distinct)]
      (future
        (try
          (do (ut/$- ->> fetch'
                     (fetch-map session $ feed)
                     (future (call-plugins :log-step ws {:train $} 0))))
          (dotimes [step steps]
            (let [step+1 (inc step)]
              (if (or (= step 0)
                      (= (mod step+1 (or log-step-interval 1)) 0)
                      (= step+1 steps))
                (do (ut/$- ->> fetch'
                           (fetch-map session $ feed targets)
                           (future (call-plugins :log-step ws {:train $} step+1))))
                (run-all session targets feed))))
          (catch Exception ex
            (reset! last-ex ex)))))
    true))

(defn- update-alpha
  [{:keys [alpha] :as feed} step]
  (cond (nil? alpha)
        feed
        (fn? alpha)
        (assoc feed :alpha (alpha step))
        :else feed))

(defn ws-train-test
  [{:keys [state ws-def] :as ws}]
  (let [{:keys [train test]} ws-def
        {:keys [targets feed fetch steps log-step-interval]} train
        {test-feed :feed} test
        {:keys [session]} @state]
    (run-global-vars-init session)
    (let [fetch' (->> (call-plugins :train-fetch ws)
                      (apply concat fetch)
                      distinct)]
      (future (try (dotimes [step steps]
                     (let [step+1 (inc step)
                           feed' (update-alpha feed step+1)]
                       (if (or (= step 0)
                               (= (mod step+1 (or log-step-interval 1)) 0)
                               (= step+1 steps))
                         (let [train-fetch (fetch-map session fetch' feed' targets)
                               test-fetch (fetch-map session fetch' test-feed)]
                           (future (call-plugins :log-step ws
                                                 {:train train-fetch
                                                  :test test-fetch}
                                                 step+1)))
                         (run-all session targets feed'))))
                   (catch Exception ex
                     (reset! last-ex ex)))))
    true))

(defn- ws-do-auto
  [{:keys [ws-def] :as ws}]
  (doseq [a (:auto ws-def)]
    (case a
      :build (ws-build ws)
      :write-tb (ws-write-tb ws)
      :train (ws-train ws)
      :train-test (ws-train-test ws)
      (throw (Exception. (str "Unknown auto " a))))))

(defn mk-workspace
  [ws-name ws-def]
  (let [m {:state (atom {})
           :ws-name ws-name
           :ws-def ws-def
           :plugins @plugins}]
    (call-plugins :new m)
    (ws-do-auto m)
    m))

(defn ws-status-main
  [ws]
  {:return :cool!})

(defn ws-status [{:keys [multi] :as ws}]
  (multi :status))

(defn mk-ws-source
  [ws-name src-map]
  `(let [state# (atom {})
         mm# (clojure.lang.MultiFn. (str '~ws-name "-multi")
                                    ~'(fn [cmd & _] cmd)
                                    :default #'clojure.core/global-hierarchy)
         ~'ws {:state state# :multi mm#}]
     (doseq [[~'cmd ~'f] ~src-map]
       (. mm# clojure.core/addMethod ~'cmd (eval ~'f)))
     ~'ws))

;; TODO move ws-*-main fns to ws ns??
(defn ws-init-main
  [ws & args]
  {:INIT-MAIN-NOT-IMPLEMENTED 1})

(defn ws-build-main
  [ws & args]
  {:return :BUILD-MAIN-NOT-IMPLEMENTED})

(defn ws-build [{:keys [multi] :as ws}]
  (multi :build))

;; TODO take state instead of ws??
(defn ws-create-session-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-init-vars-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-restore-vars-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-save-vars-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-train-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-train-interval-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-test-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-predict-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-close-session-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-close-main [ws & args] {:NOT-IMPLEMENTED 1})
(defn ws-interrupt-training-main [ws & args] {:NOT-IMPLEMENTED 1})

(defn- get-plugin-form-pairs
  [ws-name ws-def plugins hook]
  (->> (for [p plugins]
         (let [p-ns (-> p :meta :ns)]
           (when-let [f (get-in p hook)]
             [p-ns (f ws-name ws-def)])))
       (remove nil?)))

(defn- get-plugin-overide-form
  [ws-name ws-def plugins hook]
  (->> (for [p plugins]
         (when-let [f (get-in p hook)]
           (f ws-name ws-def)))
       (remove nil?)
       not-empty))

(defn update-state
  [ns-str old-state new-state])

(defn mk-hook-forms
  [hook-forms]
  (->> (for [[ns-str frms] hook-forms
             frm frms]
         `(~'state (update-state ~ns-str
                                 ~'state
                                 ~frm)))
       (apply concat)))

(defn mk-pre-req-forms
  [pre-reqs]
  (for [[cmd & args] pre-reqs]
    `(apply (~'ws :multi) ~cmd ~(or args []))))

(defn- mk-ws-src-*
  [main-fn hook ws-name ws-def plugins pre-reqs]
  (let [pre-req-forms (mk-pre-req-forms pre-reqs)
        pre-hooks (get-plugin-form-pairs ws-name ws-def plugins [hook :pre])
        pre-forms (mk-hook-forms pre-hooks)
        post-hooks (get-plugin-form-pairs ws-name ws-def plugins [hook :pre])
        post-forms (mk-hook-forms post-hooks)
        override-hook (get-plugin-overide-form ws-name ws-def plugins [hook :override])
        main-form ['state (or override-hook
                              `(apply ~main-fn ~'ws ~'args))]]
    `(fn [~'cmd ~'& ~'args]
       ~@pre-req-forms
       (let [{~'state-atom :state} ~'ws]
         (locking ~'state-atom
           (let [~'state (deref ~'state-atom)
                 ~@pre-forms
                 ~@main-form
                 ~@post-forms]
             (swap! ~'state-atom merge ~'state)
             (:return ~'state)))))))

(defmacro mk-ws-src-**
  [cmd-name & [pre-reqs]]
  (let [fn-sym (symbol "com.billpiel.guildsman.core" (str "ws-" cmd-name "-main"))
        hook (keyword cmd-name)]
    `(mk-ws-src-* '~fn-sym ~hook ~'ws-name ~'ws-def ~'plugins ~pre-reqs)))

(defn- mk-ws-src-verify-vars-loaded [] `(fn [~'& ~'_] 1))

(defn mk-ws-src-map
  [ws-name {:keys [plugins] :as ws-def}]
  {:status (mk-ws-src-** "status")
   :init (mk-ws-src-** "init")
   :build (mk-ws-src-** "build" [[:verify-vars-loaded]])
   :verify-vars-loaded (mk-ws-src-verify-vars-loaded)
   :create-session (mk-ws-src-** "create-session")
   :init-vars (mk-ws-src-** "init-vars")
   :restore-vars (mk-ws-src-** "restore-vars")
   :save-vars (mk-ws-src-** "save-vars")
   :train (mk-ws-src-** "train")
   :train-interval (mk-ws-src-** "train-interval")
   :interrupt-training (mk-ws-src-** "interrupt-training")
   :test (mk-ws-src-** "test")
   :predict (mk-ws-src-** "predict")
   :close-session (mk-ws-src-** "close-session")
   :close (mk-ws-src-** "close")})

(defmacro ws-show-cmd-source
  [ws cmd]
  `(-> ~ws
       var
       meta
       :source-map
       ~cmd))

(defmacro def-workspace
  [ws-name & body]
  `(let [src-map# (mk-ws-src-map '~ws-name
                                 (do ~@body))
         src# (mk-ws-source '~ws-name src-map#)]
     (def ~ws-name (eval src#))
     (alter-meta! (var ~ws-name) assoc :source src# :source-map src-map#)
     ((~ws-name :multi) :init)
     (var ~ws-name)))
