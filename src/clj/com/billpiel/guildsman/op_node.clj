(ns com.billpiel.guildsman.op-node
  (:require [com.billpiel.guildsman.ops-gen-config :as ogc]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.shape :as sh]
            [com.billpiel.guildsman.util :as ut]
            [flatland.protobuf.core :as pr]
            [com.billpiel.guildsman.common])
  (:import [com.billpiel.guildsman.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def NodeDefP (pr/protodef NodeDef))

;; TODO move to utils?
(defn compute-hash
  [{:keys [id scope] :as plan}]
  (cond (keyword? plan)
        (hash [plan []])
        id (hash [id scope])
        :else
        (-> plan
            (dissoc :output-idx)
            hash)))

(defn get-op-by-plan
  [^Graph g plan]
  (->> plan
       compute-hash
       ((gr/hash->id g))
       ((gr/id->node g))))

(defn find-op
  [^Graph g qry]
  (if (map? qry) (get-op-by-plan g qry) 
      (let [qry' (if (keyword? qry)
                   (name qry)
                   qry)]
        ((gr/id->node g) qry'))))

(defn find-ops
  [^Graph g qry]
  (or (when (ut/regex? qry)
        (let [id->node (gr/id->node g)]
          (->> id->node
               keys
               (filter (partial re-find qry))
               (mapv id->node))))
      (when-let [r (find-op g qry)]
        [r])))

(defn node-def->plan
  [node-def]
  (let [op-def (-> node-def :op ogc/proc-op-list-by-name)]
    (ogc/call-config node-def :node-def->plan [node-def op-def])))


(defn handle->plan
  [op-handle]
  (with-meta ;; TODO use vary-meta
    (node-def->plan  (pr/protobuf-load NodeDefP (com.billpiel.guildsman.OperationNI/toNodeDef op-handle)))
    {::handle op-handle}))

(defn id->plan
  [^Graph g id]
  (let [{:keys [scoped-id output-idx]} (ut/parse-tf-id id)]
    (assoc (handle->plan (com.billpiel.guildsman.GraphNI/operation (:handle g) scoped-id))
           :output-idx
           output-idx)))

(defn handle->id
  [op-handle]
  (->> op-handle
       (com.billpiel.guildsman.OperationNI/toNodeDef)
       (pr/protobuf-load NodeDefP)
       :name))

(defn get-output-desc-by-handle
  [graph-handle op-handle]
  (let [n-outs (com.billpiel.guildsman.OperationNI/numOutputs op-handle)
        idxs (range n-outs)]
    {:num-outputs n-outs
     :shapes (mapv #(vec (com.billpiel.guildsman.OperationNI/shape graph-handle op-handle %))
                   idxs)
     :dtypes (mapv #(:kw (dt/native->dt (mod (com.billpiel.guildsman.OperationNI/dtype graph-handle op-handle %)
                                           100))) ;; > 100 => ref
                   idxs)}))

(defn get-desc-of-output
  [^Op op]
  (let [{:keys [output-idx shapes dtypes]} op
        o-idx (or output-idx 0)]
    {:dtype (nth dtypes o-idx)
     :shape (nth shapes o-idx)}))

(defn create-from-handle
  ([op-handle output-idx ^GraphRef graph-ref]
   (let [{:keys [id op aliases inputs ctrl-inputs attrs] :as plan} (handle->plan op-handle)]
     (Op. id
          (or aliases [])
          op
          inputs
          ctrl-inputs
          (compute-hash plan)
          attrs
          op-handle
          (or output-idx 0)
          1 nil nil ;;TODO
          graph-ref)))
  ([op-handle ^GraphRef graph-ref]
   (create-from-handle op-handle 0 graph-ref)))












