(ns com.billpiel.guildsman.ops.gen-util
  (:require [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh]
            [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework OpDef OpList]))

(def auto-cast true)

(def OpDefP (pr/protodef OpDef))
(def OpListP (pr/protodef OpList))

(defn get-op-kw
  [op-def]
  (keyword (:name op-def)))

(defn convert-attr
  [value def-type]
  (let [value' (dt/HACK-string?->bytes value)]
    (try
      (condp = def-type ;; TODO move this logic to data_type ns????
        :tensor (tsr/getHandle (tsc/get-tensor-by-value value')) ;; TODO!!
        :type (if (keyword? value')
                (dt/->tf-attr-val :int64 (-> value' dt/kw->dt :native))
                (dt/->tf-attr-val :int64 value'))
        :shape (dt/->tf-attr-val :int64 value')
        :int (dt/->tf-attr-val :int32 value')
        :func value ;; TODO do something here?? Get global fn handle? Handle similarly to a tensor??
        dt/list-int-kw (dt/->tf-attr-val :int64 value') ;; :int64 seems weird
        dt/list-type-kw (dt/->tf-attr-val :int32
                                          (map #(-> % dt/kw->dt :native)
                                               value'))
        dt/list-shape-kw (dt/->tf-attr-val :int64
                                           value')
        (dt/->tf-attr-val def-type value'))
      (catch Exception e
        (def e1 e)
        #_ (clojure.pprint/pprint e1)
        (throw (Exception. (format "Could not convert `%s` to %s. \n\n%s"
                                   (str value)
                                   (str def-type)
                                   (.getMessage e))))))))

(defn snake->kebab
  [s]
  (clojure.string/replace s #"_" "-"))

;; TODO get rid of this later
(defn- find-attr-value
  [attr-name plan-attrs]
  (or ((keyword attr-name) plan-attrs)
      ((keyword (snake->kebab attr-name)) plan-attrs)
      nil))

(defn convert-attrs*
  [plan-attrs
   {attr-name :name attr-type :type default-value :default-value :as attr-def}]
  (let [dt-kw (keyword attr-type)
        value (find-attr-value attr-name plan-attrs)]
    (try
      [attr-name
       (if-not (nil? value)
         (convert-attr value dt-kw)
         (-> default-value vals first)) ;; TODO either pre-convert or don't use
       dt-kw]
      (catch Throwable e
        (throw (Exception. (format "Could not convert an attribute %s %s %s \n\n %s"
                                   attr-name
                                   attr-type
                                   value
                                   attr-def)
                           e))))))

(defn convert-attrs
  [plan-attrs def-attr]
  (mapv (partial convert-attrs* plan-attrs)
        def-attr))

(defn node-def-attr->
  [attr-value]
  (let [[ty v] (first attr-value)]
    (if (dt/is-goole-pb-byte-string? v)
      (if-let [f (some-> ty dt/pb-attr-key->dt :from-bytes)]
        (f (.toByteArray v))
        (throw (Exception. (str "node-def-attr-> can't handle " attr-value))))
      (if-let [f (or (some-> ty dt/pb-attr-key->dt :pb-attr-fn)
                     (some-> ty dt/pb-attr-key->dt :scalar-fn))]
        (f v)
        (throw (Exception. (str "node-def-attr-> can't handle " attr-value)))))))

(defn node-def-attrs->
  [attr-vec]
  (into {}
        (map (fn [{k :key v :value}]
                [(keyword k)
                 (node-def-attr-> v)])
              attr-vec)))

(defn node-def-name->plan-id [s]
  (-> s (clojure.string/replace #"/" ">") keyword))

(defn get-node-def-input-id [ndi]
  (when-not (= \^ (first ndi))
    ndi))

(defn get-node-def-ctrl-input-id [ndi]
  (when (= \^ (first ndi))
    (apply str (rest ndi))))

(defn group-inputs
  [inputs op-def attrs]
  (loop [grouped []
         [head & tail] (:input-arg op-def)
         remaining inputs]
    (if (not-empty remaining)
      (if-let [group-size (some-> head :number-attr keyword attrs)]
        (recur (conj grouped (vec (take group-size remaining)))
               tail
               (drop group-size remaining))
        (recur (conj grouped (first remaining))
               tail
               (rest remaining)))
      grouped)))


(defn node-def->plan-default [node-def op-def]
  (let [attrs (node-def-attrs-> (:attr node-def))]
    {:id (-> node-def :name)
     :op (-> node-def :op keyword)
     :inputs (group-inputs (vec (keep get-node-def-input-id
                                      (:input node-def)))
                           op-def attrs)
     :ctrl-inputs (vec (keep get-node-def-ctrl-input-id
                             (:input node-def)))
     :attrs attrs}))

(defn dyn-defn
  [name-sym bodies & [docs]]
  (let [d (or docs "UNDOCUMENTED")]
    (binding [*ns* (the-ns 'com.billpiel.guildsman.ops.basic)] ;; TODO not great?
      (eval `(defn ~name-sym
               ~d
               ~@bodies)))))

(defn dyn-defmethod
  [name-sym dispatch-val body]
  (binding [*ns* (the-ns 'com.billpiel.guildsman.ops.basic)]
    (eval `(defmethod ~name-sym ~dispatch-val
             ~body))))

(defn fn-name-default
  [{n :name}]
  (->> n
       (re-seq #"([A-Z0-9]+$)|([A-Z0-9]+(?=[A-Z0-9]))|([A-Z0-9][a-z]*)")
       (map first)
       (remove empty?)
       (map clojure.string/lower-case)
       (clojure.string/join "-")
       symbol))

(defn id-attrs->id
  [id-attrs]
  (if (keyword? id-attrs)
    id-attrs
    (:id id-attrs)))

(defn id-attrs->attrs
  [id-attrs]
  (if (map? id-attrs)
    (dissoc id-attrs :id)
    {}))

(defn id-attrs->ctrl-inputs
  [id-attrs]
  (if (map? id-attrs)
    (:ctrl-inputs id-attrs [])
    []))



