(ns com.billpiel.guildsman.functions
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.util :as util]
            [flatland.protobuf.core :as pr])
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman FunctionNI]
           [org.tensorflow.framework AttrValue]))

(def AttrValueP (pr/protodef AttrValue))

(def ^:dynamic *fn-builder* nil)

(defn extract-fn-graph-stuff
  [fn-graph fn-plan])

(defn prep-fn-plan [fn-plan])

;; silly, but good enough?
(defn mk-fn-name
  [{:keys [func]} prepped-fn-plan]
  (str func (+ (mod (System/currentTimeMillis) 1000000)
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
  (let [fn-plan' (prep-fn-plan fn-plan)
        fn-name (mk-fn-name fn-plan fn-plan')        
        fn-graph (build->graph (gr/create)
                               fn-plan')
        fn-graph-stuff (extract-fn-graph-stuff fn-graph fn-plan)
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
  `(binding [*fn-builder* (mk-fn-builder ~g ~build->graph)]
     ~@body))

(defn str->fn-name-pb-bytes [s]
  (pr/protobuf-load AttrValueP (pr/protobuf-dump AttrValueP {:func {:name s}})))

(defn fn-plan->fn-name-pb-bytes
  [v]
  (when (nil? *fn-builder*)
    (throw (Exception. "Cannot build a function when *fn-builder* is not set.")))
  (-> (*fn-builder* v)
      :fn-name
      str->fn-name-pb-bytes))
