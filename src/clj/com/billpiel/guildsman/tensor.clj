(ns com.billpiel.guildsman.tensor
  (:require [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh]))

(defrecord TensorRef [handle id dtype shape value])

(defn- tnda-dec-shape [shape]
  (cons (-> shape first dec)
        (rest shape)))

(defn- tnda-top-size [byte-size shape]
  (apply * byte-size (rest shape)))

(defn- tnda-slice-buffer
  [^java.nio.ByteBuffer b pos]
  (locking b
    (.position b pos)
    (.order (.slice b)
            (java.nio.ByteOrder/nativeOrder))))

(defn- tnda-get-by-type
  [^java.nio.ByteBuffer b idx ^clojure.lang.Keyword dtype]
  (locking b
    (condp = dtype
      dt/float-kw (.getFloat b idx)
      dt/double-kw (.getDouble b idx)
      dt/int-kw (.getInt b idx)
      dt/long-kw (.getLong b idx))))

(defprotocol PTensorNDArray
  (size [this])
  (invalidate! [this])
  (valid? [this]))

(deftype TensorNDArray [^java.nio.ByteBuffer b
                        ^long handle
                        ref-id
                        ^clojure.lang.Keyword dtype
                        byte-size
                        shape
                        ^java.lang.Boolean whole?
                        ^clojure.lang.Volatile valid?-v]

  PTensorNDArray
  (size [this] (apply * byte-size shape))
  (invalidate! [this]
    (locking valid?-v
      (vreset! valid?-v false)))
  (valid? [this] @valid?-v)

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
                 (TensorNDArray. (->> shape
                                      (tnda-top-size byte-size)
                                      (tnda-slice-buffer b))
                                 handle
                                 ref-id
                                 dtype
                                 byte-size
                                 (tnda-dec-shape shape)
                                 false
                                 valid?-v)))
  (next [this] (seq (.more this)))
  (seq [this] (if (>= 0 (.count this))
                nil
                this))

  clojure.lang.Indexed
  (nth [this idx]
    (locking valid?-v
      (when-not (valid? this)
        (throw (Exception. "The tensor backing this structure is no longer valid.")))
      (if (= (count shape) 1)
        (tnda-get-by-type b (* idx byte-size) dtype)
        (TensorNDArray. (if (= idx 0)
                          b
                          (->> shape
                               (tnda-top-size byte-size)
                               (* idx)
                               (tnda-slice-buffer b)))
                        handle
                        ref-id
                        dtype
                        byte-size
                        (rest shape)
                        false
                        valid?-v))))
  
  clojure.lang.ILookup
  (valAt [this k] (.nth this k)))

(defn get-shape-by-handle [handle]
  (-> handle com.billpiel.guildsman.TensorNI/shape dt/md-array->vecs))

(defn get-data-type-by-handle [handle]
  (clojure.pprint/pprint (-> handle com.billpiel.guildsman.TensorNI/dtype))
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

(defn- mk-tensor-ndarray
  [handle ref-id {:keys [kw byte-size]} shape]
  (let [bb (.order (com.billpiel.guildsman.TensorNI/buffer handle)
                   (java.nio.ByteOrder/nativeOrder))]
    (TensorNDArray. bb
                    handle
                    ref-id
                    kw
                    byte-size
                    shape
                    true
                    (volatile! true))))

(defn- mk-tensor-value
  [handle ref-id dtype shape]
  (if (nil? dtype)
    :UNKNOWN-TYPE
    (if (sh/scalar? shape)
      (get-scalar-value handle (:kw dtype))
      (mk-tensor-ndarray handle ref-id dtype shape))))

(defn create-ref-from-value ^TensorRef [v]
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
                                                                             (to-array
                                                                              (map #(.getBytes % "UTF-8")
                                                                                   v))))
        ref-id (gensym "tref")
        value (mk-tensor-value handle ref-id dtype shape)]
    (TensorRef. handle
                ref-id
                kw
                shape
                value)))

(defn create-ref-from-handle ^TensorRef [handle]
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

(defn create-ref-from-ref ^TensorRef
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

(defn get-value
  [{:keys [handle dtype shape] :as t}]
  (if (sh/scalar? shape)
    (get-scalar-value t)
    (let [dst (zeros-array-by-dtype shape dtype)]
      (com.billpiel.guildsman.TensorNI/readNDArray handle dst)
      (if (= dtype dt/string-kw)
        (to-array dst)
        dst))))
