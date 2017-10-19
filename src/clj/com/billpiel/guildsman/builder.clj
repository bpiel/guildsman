(ns com.billpiel.guildsman.builder
  (:require [com.billpiel.guildsman.common :as com]
            [com.billpiel.guildsman.ops.single :as o]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.op-build :as obld]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.util :as util]
            [com.billpiel.guildsman.macros :as mcro])
  (:import [com.billpiel.guildsman.common Graph Op]))

(declare apply-plan-to-graph)

(defn call-op-builder
  [^Graph g {:keys [output-idx] :as plan} input-ops ctrl-input-ops]
  (obld/build g
              (assoc plan
                     :inputs input-ops
                     :ctrl-inputs ctrl-input-ops
                     :output-idx (or output-idx 0)
                     :hsh (opn/compute-hash plan))))

(defn- build-eagers
  [plans ^Graph g]
  (some->> plans
           (filter util/build-eagerly?)
           not-empty
           (apply-plan-to-graph g))
  plans)

(defn call-macro-builder
  [^Graph g {:keys [output-idx] :as plan} input-ops ctrl-input-ops]
  (-> (mcro/build g
                  (assoc plan
                         :inputs input-ops
                         :ctrl-inputs ctrl-input-ops
                         :hsh (mcro/compute-hash plan)))
      (build-eagers g)
      (nth (or output-idx 0))))

(defn built?
  [^Graph g plan]
  (let [plan' (if (map? plan)
                plan
                (o/c plan))
        output-idx (if (map? plan)
                     (:output-idx plan')
                     0)]
    (cond (com/Op? plan) plan
          (:op plan')
          (let [{:keys [id->node hash->id]} (-> g :state deref)
                hsh (opn/compute-hash plan')]
            (when-let [node (some-> hsh hash->id id->node)]
              (assoc node :output-idx (or output-idx 0))))
          (:macro plan)
          (let [{:keys [macro-hash->outputs]} (-> g :state deref)
                hsh (mcro/compute-hash plan)]
            (when-let [outputs (some-> hsh macro-hash->outputs)]
              (built? g  (nth outputs (or output-idx 0)))))))) 

(defn- apply-plan-to-graph*
  [^Graph g plan post]
  (let [{:keys [inputs ctrl-inputs]} (if (map? post)
                                       post
                                       {})]
    (cond
      (:op plan) (call-op-builder g plan inputs ctrl-inputs)
      (:macro plan) (->> (call-macro-builder g plan inputs ctrl-inputs)
                         (apply-plan-to-graph g))
      :else (call-op-builder g (o/c plan) [] []))))

(defn- apply-plan-to-graph
  [^Graph g plan]
  (def p1 plan)
  (util/visit-plan (partial built? g)
                   nil
                   (partial apply-plan-to-graph* g)
                   nil
                   plan))

(defn build->graph
  [^Graph g plan]
  (apply-plan-to-graph g plan)
  g)
