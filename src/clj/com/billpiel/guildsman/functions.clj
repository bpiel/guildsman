(ns com.billpiel.guildsman.functions
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.util :as util])
  (:import [com.billpiel.guildsman.common Graph]))


(def ^:dynamic *fn-builder* nil)

(defn mk-fn-builder*
  [^Graph g build->graph fn-plan]
  (let [fn-plan' (prep-fn-plan fn-plan)
        fn-graph (build->graph (gr/create)
                               fn-plan')
        {:keys [op-hnds input-hnds input-idxs output-hnds output-idxs output-names]} (extract-fn-graph-stuff fn-graph fn-plan)]))

(defn mk-fn-builder
  [^Graph g build->graph]
  (partial mk-fn-builder* g build->graph))

(defmacro with-fn-builder
  [^Graph g build->graph & body]
  `(binding [*fn-builder* (mk-fn-builder ~g ~build->graph)]
     ~@body))



















































