(ns com.billpiel.guildsman.op-build
  (:require [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.ops.gen-config :as ogc]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.shape :as sh]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.functions :as fns]
            [flatland.protobuf.core :as pr]
            [com.billpiel.guildsman.common]
            clojure.pprint)
  (:import [com.billpiel.guildsman FunctionNI]
           [com.billpiel.guildsman.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef AttrValue]))

(def AttrValueP (pr/protodef AttrValue))

(defn get-attr-bytes
  [v]
  (cond (string? v) (.getBytes v)
        (dt/is-goole-pb-byte-string? v) (.toByteArray v)
        :else (byte-array v)))

(defn- get-shape-dims
  [shapes]
  (->> shapes
       (map count)
       int-array))

(defn- set-attr
  [builder-handle k v ty]
  (try
    (condp = ty ;; wtf
      :tensor (com.billpiel.guildsman.OperationBuilderNI/setAttrTensor builder-handle
                                                                       k v)
      :type (if (keyword? v)
              (com.billpiel.guildsman.OperationBuilderNI/setAttrType builder-handle
                                                                     k
                                                                     (-> v dt/protobuf->dt :native))
              (com.billpiel.guildsman.OperationBuilderNI/setAttrType builder-handle
                                                                     k v))
      :shape (com.billpiel.guildsman.OperationBuilderNI/setAttrShape builder-handle
                                                                     k v (count v))
      :string (com.billpiel.guildsman.OperationBuilderNI/setAttrString builder-handle
                                                                       k (get-attr-bytes v))
      :int (com.billpiel.guildsman.OperationBuilderNI/setAttrInt builder-handle
                                                                 k v)

      :func (com.billpiel.guildsman.OperationBuilderNI/setAttrProto builder-handle k
                                                                    (fns/fn-plan->fn-name-pb-bytes v))
      
      ;; TODO check :has-minimum for lists somewhere??
      ;; other reqs specified in pb op defs to check?
      
      dt/list-int-kw (com.billpiel.guildsman.OperationBuilderNI/setAttrIntList builder-handle
                                                                               k v)
      dt/list-type-kw (com.billpiel.guildsman.OperationBuilderNI/setAttrTypeList builder-handle
                                                                                 k v)
      dt/list-shape-kw (com.billpiel.guildsman.OperationBuilderNI/setAttrShapeList
                        builder-handle k
                        (dt/mk-typed-2d-array v Long/TYPE long-array)
                        (get-shape-dims v) (count v))
      (com.billpiel.guildsman.OperationBuilderNI/setAttr builder-handle
                                                         k v)
      )
    (catch Exception e
      (def e1 e)
      #_ (clojure.pprint/pprint e1)
      (throw (Exception. (format "Failed to set attribute. type=%s, key=%s, value=%s, \n\nmsg=%s"
                                 ty k v
                                 (.getMessage e)))))))


(defn- set-attrs
  [builder-handle attrs]
  (doseq [[k v ty] attrs]
    (set-attr builder-handle k v ty))
  builder-handle)

(defn- add-inputs
  [builder-handle inputs]
  (doseq [i inputs]
    (if (vector? i)
      (com.billpiel.guildsman.OperationBuilderNI/addInputList builder-handle
                                              (long-array (map :handle i))
                                              (int-array (map #(:output-idx % 0)
                                                              i)))      
      (com.billpiel.guildsman.OperationBuilderNI/addInput builder-handle
                                          (:handle i)
                                          (:output-idx i 0)))) 
  builder-handle)

(defn- inputs->tf-ids
  [inputs]
  (vec (for [i inputs]
         (if (vector? i)
           (mapv ut/mk-tf-id i)
           (ut/mk-tf-id i)))))

(defn- add-ctrl-inputs
  [builder-handle inputs]
  (doseq [input-handle inputs]
    (com.billpiel.guildsman.OperationBuilderNI/addControlInput builder-handle
                                               input-handle))
  builder-handle)

;; TODO combine w/ utils
(defn mk-id
  [scope id op counter]
  (let [s (or (some->> scope
                       not-empty
                       (map name)
                       (clojure.string/join "/")
                       (#(str % "/")))
              "")
        id' (or (some-> id name)
                (str (name op) "_" (swap! counter inc)))]
    (str s id')))

(defn- get-handles
  [inputs]
  (ut/visit-pre #(do
                     (when (:state %)
                       (throw (Exception. (str "WTF is this? " %))))
                     (if (map? %) (:handle %) %))
                  vector?
                  identity
                  #(vec %2)
                  inputs))

(defn build-op
  [{:keys [^Graph g plan op-def]}]
  (try
    (let [{:keys [id scope op hsh inputs ctrl-inputs attrs output-idx]} plan
          collections (ut/get-collections plan)
          {tf-op :name def-attr :attr} op-def
          attrs' (or attrs {})
          id' (mk-id scope id op (:counter g))
          ctrl-input-handles (mapv :handle ctrl-inputs)
          handle (-> g
                     :handle
                     (com.billpiel.guildsman.OperationBuilderNI/allocate tf-op (name id'))
                     (set-attrs attrs')
                     (add-inputs inputs)
                     (add-ctrl-inputs ctrl-input-handles)
                     com.billpiel.guildsman.OperationBuilderNI/finish) ;; TODO release attr tensors? or done for us?
          {:keys [num-outputs shapes dtypes]} (opn/get-output-desc-by-handle (:handle g) handle)
          node (with-meta (Op. id'
                               [] ;; TODO add :0, when appropriate
                               op
                               (flatten (inputs->tf-ids inputs)) 
                               (mapv ut/mk-tf-id ctrl-inputs)
                               hsh
                               attrs'
                               handle
                               (or output-idx 0)
                               num-outputs
                               shapes
                               dtypes
                               (gr/mk-graph-ref g))
                 (meta plan))]
      (gr/add-op-to-state! g node collections)
      node)
    (catch Exception e
      (def g1 g)
      (def p1 plan)
      #_(clojure.pprint/pprint p1)
      #_(clojure.pprint/pprint (meta p1))
      (let [pr-plan (with-out-str
                      (clojure.pprint/pprint
                       (ut/prune-plan plan)))]
        (throw (ex-info (format "%s \n %s"
                                (.getMessage e)
                                pr-plan)
                        {:plan plan
                         :ex e}))))))



(defmulti build (fn [g op-plan] (:op op-plan)))

(defmethod build :default [g op-plan]
  #_op-plan
  (def op-plan1 op-plan)
  (build-op
   {:g g :plan op-plan
    :op-def {:name (name (:op op-plan))}}))
