(ns com.billpiel.guildsman.core
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.util :as ut]
            com.billpiel.guildsman.macros
            com.billpiel.guildsman.gradients
            com.billpiel.guildsman.grad-desc-opt
            com.billpiel.guildsman.plan-time-comps
            com.billpiel.guildsman.build-time-comps
            com.billpiel.guildsman.ops
            com.billpiel.guildsman.common)
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman.session Session]))

#_ (def plugins (atom #{}))
(defonce plugins (atom #{})) ;; only support one for now?

(defmulti close (fn [v] (type v)))

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
  [bindings & body]
  (with-close-let* bindings body))

(defn tensor->value [tensor]
  (:value tensor))

(defn delete-tensor->value [tensor]
  (let [r (tensor->value tensor)]
    (tm/release-tensor-ref tensor)    
    r))

(defn graph->session [^Graph graph]
  (sess/create graph))

(defn build->graph
  ([plan] (build->graph (gr/create) plan))
  ([^Graph graph plan] (bdr/build->graph graph plan)))

(defn build-all->graph
  ([plans]
   (build-all->graph (build->graph (first plans))
                     (rest plans)))
  ([^Graph graph plans]
   (doseq [p plans]
     (build->graph graph p))
   graph))

(defn build->session
  ([plan]
   (-> plan
       build->graph
       graph->session))
  ([^Graph graph plan]
   (->> plan
        (build->graph graph)
        graph->session)))

(defn build-all->session
  ([plans]
   (-> plans
       build-all->graph
       graph->session))
  ([^Graph graph plans]
   (->> plans
        (build-all->graph graph)
        graph->session)))

(defn run [^Session session plan & [feed]]
  (sess/run session plan feed))

(defn run-all [^Session session plans & [feed]]
  (sess/run-all session plans feed))

(defn fetch->tensor [^Session session plan & [feed]]
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
  ([plan]
   (-> plan
       build->graph
       (exec plan)))
  ([^Graph graph plan & [feed]]
   (-> graph
       graph->session
       (run plan feed))))

(defn exec-all
  ([plans]
   (-> plans
       build-all->session
       (run-all plans)))
  ([^Graph graph plans & [feed]]
   (-> plans
       (build->session graph)
       (run-all plans feed))))

(defn run-global-vars-init [^Session session]
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

(defn ws-build
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

(defn update-alpha
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

(defmacro def-workspace
  [ws-name & body]
  `(def ~ws-name
     (mk-workspace '~ws-name
                   (do ~@body))))
