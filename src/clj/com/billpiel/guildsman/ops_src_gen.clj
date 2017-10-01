(ns com.billpiel.guildsman.ops-src-gen
  (:require [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.ops-gen-config :as cfg]
            [com.billpiel.guildsman.ops-gen :as ops-gen]
            [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef]
           [com.billpiel.guildsman.common Graph Op GraphRef]))

(def NodeDefP (pr/protodef NodeDef))

(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op cfg/proc-op-list-by-name)]
    (cfg/call-config node-def :node-def->plan [node-def op-def])))

(defn handle->plan
  [op-handle]
  (with-meta
    (node-def->plan  (pr/protobuf-load NodeDefP (com.billpiel.guildsman.OperationNI/toNodeDef op-handle)))
    {::handle op-handle}))

(defn plan->expr
  [plan ops-ns-str output-fn-sym]
  (let [op-def (cfg/op-list-by-kw (:op plan))
        fn-name (name (ops-gen/get-op-fn-name-sym op-def))]
    (cfg/call-config op-def
                     :plan->expr
                     [plan
                      (symbol ops-ns-str fn-name)
                      output-fn-sym
                      op-def])))

(defn plans->exprs
  [plans ops-ns-str apo]
  (into {}
        (for [p plans]
          [(:id p) (plan->expr p ops-ns-str apo)])))

(defn assoc-plan-output
  [plan & [idx]]
  (assoc plan :output-idx (or idx 0)))

(defn node-def->id-expr
  [node-def]
  (let [p (node-def->plan node-def)]
    [(:id p)
     (plan->expr p "com.billpiel.guildsman.ops" `assoc-plan-output)]))

(defn node-defs->src
  [node-defs]
  (let [id-expr-pairs (map node-def->id-expr node-defs)
        assigns (vec (mapcat (fn [[k v]]
                               [(-> k name symbol) v])
                             id-expr-pairs))
        body (apply hash-map (mapcat (fn [[k v]]
                                       [k (-> k name symbol)])
                                     id-expr-pairs))]
    `(let ~assigns ~body)))

(defn handle->id-expr
  [op-handle]
  (let [p (handle->plan op-handle)]
    [(:id p)
     (plan->expr p "com.billpiel.guildsman.ops" `assoc-plan-output)]))

;; TODO
(defn graph->src
  [^Graph g]
  (->> g
       :state
       deref
       :handle->id
       keys
       (mapv handle->id-expr)
       (into {})))
