(ns com.billpiel.guildsman.tensor
  (:require [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh]))

#_(def deleted (atom #{}))

(defn get-shape-by-handle [handle]
  (-> handle com.billpiel.guildsman.TensorNI/shape dt/md-array->vecs))

(defn get-data-type-by-handle [handle]
  (-> handle com.billpiel.guildsman.TensorNI/dtype dt/native->dt))

(defmulti get-scalar-value (fn [handle dtype] dtype))

(defmacro defmethod-getter
  [dtype-kw s2]
  (let [f2 (symbol (str "com.billpiel.guildsman.TensorNI/" s2))]
    `(defmethod ~'get-scalar-value ~dtype-kw [ ~'handle ~'dtype] (~f2 ~'handle))))

(defmethod-getter :float scalarFloat)
(defmethod-getter :double scalarDouble)
(defmethod-getter :int32 scalarInt)
(defmethod-getter :int64 scalarLong)
(defmethod-getter :boolean scalarBoolean)

(defmethod get-scalar-value :string
  [handle _]
  (com.billpiel.guildsman.TensorNI/scalarBytes handle))

(defmethod get-scalar-value :resource
  [handle _]
  {:type :resource
   :handle handle})

(defmethod get-scalar-value :variant
  [handle _]
  {:type :variant
   :handle handle})

(defrecord Tensor [handle dtype shape])

(defn create-from-value ^Tensor [v]
  (let [shape (sh/shape-of-seq v)
        shape-arr (long-array shape)
        {:keys [kw native byte-size to-bytes-fn] :as dtype} (dt/data-type-of-whatever v)
        handle (cond (nil? kw) ;; TODO TEMP byte array becomes string
                     (com.billpiel.guildsman.TensorNI/allocateScalarBytes v)

                     (not= kw dt/string-kw)
                     (let [handle (com.billpiel.guildsman.TensorNI/allocate native
                                                                            shape-arr
                                                                            (apply * byte-size shape))]
                       (com.billpiel.guildsman.TensorNI/setValue handle (dt/seq->md-array v)) ;; TODO more efficient?
                       handle)

                     (sh/scalar? shape)
                     (com.billpiel.guildsman.TensorNI/allocateScalarBytes (to-bytes-fn v))

                     :else
                     (com.billpiel.guildsman.TensorNI/allocateNonScalarBytes shape-arr
                                                                             (to-array v)))]
#_    (swap! deleted disj handle)
    (Tensor. handle
             kw
             shape)))

#_(defn create-ref-from-handle ^TensorRef [handle]
  (let [dtype (get-data-type-by-handle handle)
        shape (get-shape-by-handle handle)
        ref-id (gensym "tref")]
    (TensorRef. handle
                ref-id
                dtype
                shape
                (mk-tensor-value handle
                                 ref-id
                                 dtype
                                 shape))))

(defn create-from-handle ^Tensor [handle]
  (let [dtype (get-data-type-by-handle handle)
        shape (get-shape-by-handle handle)]
#_    (swap! deleted disj handle)
    (Tensor. handle
             dtype
             shape)))

#_(defn create-ref-from-ref ^TensorRef
  [^TensorRef {:keys [handle dtype shape]}]
  (TensorRef. handle
              (gensym "tref")
              dtype
              shape
              (mk-tensor-value handle
                               (dt/kw->dt dtype)
                               shape)))

(defn zeros-array-by-dtype
  [shape dtype-kw]
  (sh/zeros-array-by-fn shape
   (:array-fn (dt/kw->dt dtype-kw))))

#_(defn get-value
  [{:keys [handle dtype shape] :as t}]
  (if (sh/scalar? shape)
    (get-scalar-value t)
    (let [dst (zeros-array-by-dtype shape dtype)]
      (com.billpiel.guildsman.TensorNI/readNDArray handle dst)
      (if (= dtype dt/string-kw)
        (to-array dst)
        dst))))



(defprotocol PValueProvider
  (getHandle [this])
  (getDType [this])
  (getShape [this])
  (getByteSize [this])
  (getValue [this])
  (->clj [this]))

;; TODO more efficient?
(defn- ->nested-vecs
  [v]
  (if (coll? v)
    (mapv ->nested-vecs v)
    v))

(defn- tnda-dec-shape [shape]
  (cons (-> shape first dec)
        (rest shape)))

(defn- tnda-inc-begin [begin root-shape shape & [addend]]
  (let [idx (- (count root-shape)
               (count shape))
        a' (or addend 1)]
    (-> begin
        vec
        (update idx + a'))))

(defn- tnda-calc-idx*
  [[idx size] [shape begin]]
  (let [size' (* size shape)]
    [(+ idx (* begin size'))
     size']))

(defn- tnda-calc-idx
  [root-shape size begin]
  (->> (interleave (-> root-shape
                       (conj 1)
                       rest
                       reverse)
                   (reverse begin))
       (partition 2)
       (reduce tnda-calc-idx*
               [0 size])
       first))

(defn- tnda-get-by-type
  [^clojure.lang.Keyword dtype ^java.nio.ByteBuffer b idx]
  (locking b
    (condp = dtype
      dt/float-kw (.getFloat b idx)
      dt/double-kw (.getDouble b idx)
      dt/int-kw (.getInt b idx)
      dt/long-kw (.getLong b idx)
      dt/uint-kw (.get b idx))))

#_(def t1 (TensorNDArray. (java.nio.ByteBuffer/wrap (byte-array [0 0 0 1 0 0 0 2 0 0 0 3 0 0 0 4]))
                        0
                        dt/int-kw
                        4
                        [2 2]
                        [0 0]
                        [2 2]))

t1

(deftype TensorNDArray [^java.nio.ByteBuffer b
                        ^long handle
                        ^clojure.lang.Keyword dtype
                        byte-size
                        shape
                        begin
                        root-shape]

  PValueProvider
  (getHandle [this] (.handle this))
  (getDType [this] (.dtype this))
  (getShape [this] (.shape this))
  (getByteSize [this] (apply * byte-size shape))
  (getValue [this] this)
  (->clj [this] (->nested-vecs this))

  clojure.lang.Sequential ;; so sequential? returns `true`
  
  clojure.lang.Counted
  (count [this] (or (first (.shape this))
                    1))

  clojure.lang.ISeq
  (cons [this v] nil)
  (empty [this] nil)
  ;; TODO make good
  (equiv [this other] (and (seq? other)
                           (= (-> this seq hash)
                              (-> other seq hash))))
  (first [this] (.nth this 0))
  (more [this] (if (>= 0 (.count this))
                 nil
                 (TensorNDArray. (.order (.asReadOnlyBuffer b)
                                         (java.nio.ByteOrder/nativeOrder))
                                 handle
                                 dtype
                                 byte-size
                                 (tnda-dec-shape shape)
                                 (tnda-inc-begin begin root-shape shape)
                                 root-shape)))
  (next [this] (seq (.more this)))
  (seq [this] (if (>= 0 (.count this))
                nil
                this))

  clojure.lang.Indexed
  (nth [this idx]
    (let [begin' (tnda-inc-begin begin
                                 root-shape
                                 shape
                                 idx)]
      (if (= (count shape) 1)
        (->> begin'
             (tnda-calc-idx root-shape byte-size)
             (tnda-get-by-type dtype b))
        (TensorNDArray. (.order (.asReadOnlyBuffer b)
                                (java.nio.ByteOrder/nativeOrder))
                        handle
                        dtype
                        byte-size
                        (rest shape)
                        begin'
                        root-shape))))
  
  clojure.lang.ILookup
  (valAt [this k] (.nth this k)))




(defn- mk-tensor-ndarray
  [handle {:keys [kw byte-size]} shape]
  (let [bb (.order (com.billpiel.guildsman.TensorNI/buffer handle)
                   (java.nio.ByteOrder/nativeOrder))]
    (TensorNDArray. bb
                    handle
                    kw
                    byte-size
                    shape
                    (-> (count shape)
                        (repeat 0)
                        vec)
                    shape)))

(defrecord CljValue [dtype shape value])

(extend CljValue
  PValueProvider
  {:getHandle (fn [this] nil)
   :getDType  (fn [this] (.dtype this))
   :getShape (fn [this] (.shape this))
   :getValue (fn [this] (.value this))
   :->clj (fn [this] this)})



(defn- tensor-get-value
  [^Tensor {:keys [handle dtype shape]}]
  (if (nil? dtype)
    :UNKNOWN-TYPE
    (if (sh/scalar? shape)
      (get-scalar-value handle (:kw dtype))
      (mk-tensor-ndarray handle dtype shape))))


(defn PValueProvider?
  [v]
  (and (instance? java.lang.Object v)
       (satisfies? PValueProvider v)))

(defn tensor->clj*
  [v]
  (if (PValueProvider? v)
    (->clj v)
    v))

(defn- tensor->clj
  [^Tensor {:keys [handle dtype shape] :as t}]
  (CljValue. dtype
             shape
             (-> t
                 tensor-get-value
                 tensor->clj*)))

(extend Tensor
  PValueProvider
  {:getHandle (fn [this] (.handle this))
   :getDType  (fn [this] (.dtype this))
   :getShape (fn [this] (.shape this))
   :getValue (fn [this] (tensor-get-value this))
   :->clj (fn [this] (tensor->clj this))})

