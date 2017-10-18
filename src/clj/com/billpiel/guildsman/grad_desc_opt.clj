(ns com.billpiel.guildsman.grad-desc-opt
  (:require [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.macros :as mc]
            [com.billpiel.guildsman.ops-gen-config :as ogc]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.plan-time-comps :as pt])
  (:import [com.billpiel.guildsman.common Graph]))



(defn- merge-plan->consumers
  [& ms]
  {:vars (vec (apply concat (mapv :vars ms)))
   :plan->consumers (apply merge-with
                           (partial merge-with into)
                           (mapv :plan->consumers ms))})

(defn- mk-plan->consumers*
  [consumer input-idx {:keys [output-idx op inputs] :as plan}]
  (if (map? plan)
    (apply merge-plan->consumers
           {:vars (if (= :VariableV2 op)
                    [plan]
                    [])
            :plan->consumers {(dissoc plan :output-idx)
                              {(or output-idx 0)
                               [[consumer input-idx]]}}}
           (map-indexed (partial mk-plan->consumers* plan)
                        inputs))
    {}))

(defn- mk-plan->consumers
  [plan]
  (apply merge-plan->consumers
         (map-indexed (partial mk-plan->consumers*
                               {:target? true})
                      (:inputs plan))))


(declare decorate-outputs)

(defn- outputs->grad*
  [{:keys [state]} {:keys [id input-idx]}]
  (when-let [grad (::grad ((:id->node state) id))]
    (assoc grad
           :output-idx input-idx)))

(defn- outputs->grad
  [x consumers output-idx node]
  (cond (= (::target-idx node) output-idx)
        (o/ones-like node)
        :else
        (let [grads (keep (partial outputs->grad*
                                   x)
                          consumers)]
          (cond (= (count grads) 1)
                (first grads)

                (= (count grads) 0)
                (o/zeros-like node)

                :else
                (with-meta
                  (o/add-n (vec grads))
                  {:node node})))))

(defn- outputs->grads
  [x outputs node]
  (mapv #(outputs->grad x
                        ((or outputs {}) %)
                        %
                        node)
        (range (:n-outputs node))))

(defn- mk-node-grad
  [x node]
  (let [{:keys [id->outputs]} (:state x)
        outputs (id->outputs (:id node))
        x' (if outputs
             (decorate-outputs x (dissoc outputs
                                         (::target-idx node)))
             x)]
    [x' (pt/gradient nil
                     node
                     (outputs->grads x' outputs node)
                     0)]))

(defn- decorate-w-grad
  [x node]
  (cond (::grad node) x
        
        (::tagged? node)
        (let [[x' grad] (mk-node-grad x node)]
          (assoc-in x'  [:state :id->node (:id node)]
                 (assoc node
                        ::grad
                        grad)))

        :else x))

(defn- decorate-w-grads
  [x nodes]
  (reduce decorate-w-grad
          x
          nodes))

(defn- decorate-outputs
  [x outputs]
  (let [{:keys [id->node]} (:state x)]
    (->> (for [[k v] outputs
               {:keys [id]} v]
           (id->node id))
         (decorate-w-grads x))))

(defn- mk-applicators*
  [{:keys [node state] :as x} alpha]
  (let [{:keys [n-outputs]} node
        {:keys [id->node id->outputs]} state
        outputs (id->outputs (:id node))
        x' (decorate-outputs x outputs)]
    (update x' :collector conj 
            (o/apply-gradient-descent node
                                      alpha
                                      (first (outputs->grads x' outputs node))))))



(defn- mk-applicators
  [{:keys [collector] :as x} alpha]
  (let [x' (assoc x :collector [])]
    (loop [[head & tail] (vals collector)
           x-iter x']
      (if head
        (let [x-iter' (assoc x-iter
                             :node
                             head)]
          (recur tail (mk-applicators* x-iter' alpha)))
        (:collector x-iter)))))

(defn input-depth-traveller
  [visit-fn x]
  (let [{:keys [node] :as x'} (visit-fn x)
        {:keys [state] :as x''} (assoc-in x'
                                          [:state :id->node (:id node)]
                                          node)
        {:keys [id->node]} state]
    (loop [[head & tail] (map id->node
                              (:inputs node))
           x-iter x'']
      (if head
        (recur tail
               (->> head
                    (assoc x-iter :node)
                    (input-depth-traveller visit-fn)))
        x-iter))))

(defn get-traveller
  [state start-id init]
  (let [{:keys [id->node]} state]
    (merge init
           {:state state
            :node (id->node start-id)})))

(defn find-vari-paths*
  [{:keys [node] :as x}]
  (let [x' (update x
                   :node
                   assoc
                   ::tagged?
                   true)]
    (if (= (:op node) :VariableV2)
      (update x' :collector assoc (:id node) node)
      x')))

(defn find-vari-paths
  [state target]
  (input-depth-traveller find-vari-paths*
                         (-> (get-traveller state
                                            (:id target)
                                            {:collector {}})
                             (update :node assoc
                                     ::target-idx (:output-idx target 0)
                                     ::tagged? true))))

(defmethod mc/build-macro :grad-desc-opt
  [^Graph g plan]
  (let [{:keys [id inputs scope alpha]} plan
        [input alpha] inputs
        [v-a v-b] (:inputs input)]
    [(sc/with-push-both-scopes scope
       (o/no-op id
                {:ctrl-inputs
                 (mk-applicators 
                  (find-vari-paths (-> g :state deref)
                                   (-> plan :inputs first))
                  alpha)}))]))
