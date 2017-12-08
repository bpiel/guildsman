(ns com.billpiel.guildsman.functions
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.ops.basic :as o]
            [flatland.protobuf.core :as pr]
            [clojure.walk :as w]
            [com.billpiel.guildsman.op-node :as opn])
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman FunctionNI]
           [org.tensorflow.framework AttrValue]))

(defn extract-fn-graph-stuff
  [fn-graph inputs outputs]
  (let [hnd-idx-fn (fn [p]
                     ((juxt :handle :output-idx)
                      (opn/get-op-by-plan fn-graph p)))
        in-pairs (map hnd-idx-fn inputs)
        out-pairs (map hnd-idx-fn outputs)
        all-pairs (map (juxt :handle :output-idx)
                       :get-all-nodes-from-graph)]
    
    ))

(extract-fn-graph-stuff $s/fn-graph1 $s/inputs $s/plan)

(:handle (opn/get-op-by-plan $s/fn-graph1 (-> $s/inputs first)))

(opn/get-op-by-plan $s/fn-graph1 (-> $s/plan first))

#_(extract-fn-graph-stuff $s/fn-graph $s/fn-plan)

#_(-> $s/fn-graph :state deref :id->node clojure.pprint/pprint )

#_(defn prep-fn-plan
  [{:keys [args body] :as fn-plan}]
  (w/postwalk-replace
   (into {}
         (for [a args]
           [(:name a) (o/placeholder (-> a :name name keyword)
                                     (:type a)
                                     (:shape a))]))
   body))

(defn prep-fn-plan
  [{:keys [args body] :as fn-plan}]
  (let [pairs (for [a args]
                [(:name a) (o/placeholder (-> a :name name keyword)
                                          (:type a)
                                          (:shape a))])
        subs (into {} pairs)
        inputs (mapv second pairs)]
    {:inputs inputs
     :plan (w/postwalk-replace
            subs
            body)}))

;; silly, but good enough?
(defn mk-fn-name
  [{:keys [func]} prepped-fn-plan]
  (str func "-" (+ (mod (System/currentTimeMillis) 1000000)
                   (mod (hash prepped-fn-plan) 1000000))))

(defn fn-graph->fn-hnd
  [^Graph g fn-name {:keys [op-hnds in-hnds in-idxs out-hnds out-idxs out-names]}]
  (FunctionNI/graphToFunction (:handle g)
                              fn-name
                              false
                              (long-array op-hnds)
                              (long-array in-hnds)
                              (int-array in-idxs)
                              (long-array out-hnds)
                              (int-array out-idxs)
                              (into-array String out-names)))

(defn mk-fn-builder*
  [^Graph g build->graph fn-plan]
  (let [{:keys [inputs plan]} (prep-fn-plan fn-plan)
        fn-name (mk-fn-name fn-plan plan)        
        fn-graph (build->graph (gr/create)
                               plan)
        fn-graph-stuff (extract-fn-graph-stuff fn-graph inputs plan)
        fn-hnd (fn-graph->fn-hnd g fn-name fn-graph-stuff)
        r {:fn-name fn-name
           :fn-hnd fn-hnd}]
    (FunctionNI/copyToGraph (:handle g) fn-hnd 0)
    (FunctionNI/delete fn-hnd)
    r))

(defn mk-fn-builder
  [^Graph g build->graph]
  (partial mk-fn-builder* g build->graph))

(defmacro with-fn-builder
  [^Graph g build->graph & body]
  `(binding [ut/*fn-builder* (mk-fn-builder ~g ~build->graph)]
     ~@body))
