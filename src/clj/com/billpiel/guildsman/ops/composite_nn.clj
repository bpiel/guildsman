(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on nn_ops.py


(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defn- mk-activation-template
  [a]
  (if (fn? a)
    (a :$/input)
    a))

(defn- mk-activation-plan
  [template input]
  (if-not (nil? template)
    (sc/assoc-scopes-to-plan
     (w/postwalk-replace {:$/input input}
                         template))
    input))

(defn- mk-kernel
  [{:keys [input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (vari :kernel
         {:dtype dtype
          :shape kernel-shape}
         (glorot-uniform-initializer kernel-shape))))

(defmethod mc/build-macro :conv2d
  [^Graph g {:keys [id inputs filters kernel-size padding activation]}]
  (let [[input] inputs
        {:keys [shape dtype]} (opn/get-desc-of-output input)
        kernel (mk-kernel {:input-shape shape
                           :dtype dtype
                           :filters filters
                           :kernel-size kernel-size})
        bias (vari :bias
                  {:dtype dtype
                   :shape [filters]}
                  (zeros [filters] dtype))]
    [(-> (o/conv-2d {:strides [1 1 1 1]
                     :padding (or padding "VALID")
                     :data_format "NHWC"} ;; TODO
                    input
                    kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))])) 

(defn conv2d
  [{:keys [id filters kernel-size padding activation] :as opts} input]
  (->> {:macro :conv2d
        :inputs [input]
        :activation (mk-activation-template activation)}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :max-pooling2d
  [^Graph g {:keys [id inputs pool-size strides]}]
  [(o/max-pool {:ksize (vec (concat [1] pool-size [1])) ;; TODO assumes 'channels_last'
                :strides (vec (concat [1] strides [1]))
                :padding "VALID"
                :data_format "NHWC"}
               (first inputs))])

(defn max-pooling2d
  [{:keys [id pool-size strides] :as opts} input]
  (->> {:macro :max-pooling2d
        :inputs [input]}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :dense
  [^Graph g {:keys [id inputs activation units]}]
  (let [[input] inputs
        {:keys [dtype shape]} (opn/get-desc-of-output input)
        out-sh (-> shape
                   last
                   (vector units))
        kernel (vari :kernel
                    (glorot-uniform-initializer out-sh))
        bias (vari :bias
                  (zeros [units] dtype))]
    [(-> input
         (o/mat-mul kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))]))

(sput/defn-comp-macro-op dense
  {:doc "Densely-connected layer class.

This layer implements the operation:

outputs = activation(inputs.kernel + bias)

  Where `activation` is the activation function passed as the
  `activation` argument (if not `None`), `kernel` is a weights matrix
  created by the layer, and `bias` is a bias vector created by the
  layer (only if `use_bias` is `True`).  Note: if the input to the
  layer has a rank greater than 2, then it is flattened prior to the
  initial matrix multiply by `kernel`."
   :id ::ut/req
   :attrs {activation
           "Optional. Activation function plan. Default (nil) is a
           linear activation."
           units
           "Integer, dimensionality of the output space."}
   :inputs [[input "THE input"]]}
  {:macro :dense
   :id id
   :inputs [input]
   :units units
   :activation (mk-activation-template activation)})

(defn- dropout*
  ([^Graph g keep-prob x]
   (dropout* g nil keep-prob x {}))
  ([^Graph g id keep-prob x & [{:keys [noise-shape seed seed2]}]]
   (let [dtype (-> x opn/get-desc-of-output :dtype)
         rnd-bin (ut/$- -> noise-shape
                        (or (o/shape x))
                        (o/random-uniform
                         {:seed (or seed
                                    (rand-int Integer/MAX_VALUE))
                          :seed2 (or seed2
                                     (rand-int Integer/MAX_VALUE))
                          :dtype dtype}
                         $)
                        (o/add keep-prob $)
                        o/floor)]
     (-> x
         (o/div keep-prob)
         (o/mul rnd-bin)))))

(defmethod mc/build-macro :dropout
  [^Graph g {:keys [id inputs noise-shape seed seed2] :as args}]
  (let [[keep-prob x] inputs]
    [(dropout* g id keep-prob x args)]))

(sput/defn-comp-macro-op dropout
  {:doc
   "Returns a dropout plan.

  With probability `keep_prob`, outputs the input element scaled up by
  `1 / keep_prob`, otherwise outputs `0`.  The scaling is so that the expected
  sum is unchanged.

  By default, each element is kept or dropped independently.  If
  `noise_shape` is specified, it must be broadcastable to the shape of
  `x`, and only dimensions with `noise_shape[i] == shape(x)[i]` will
  make independent decisions.  For example, if `shape(x) = [k, l, m,
  n]` and `noise_shape = [k, 1, 1, n]`, each batch and channel
  component will be kept independently and each row and column will be
  kept or not kept together."
   :id :dropout
   :attrs {noise-shape "Optional. A 1-D `Tensor` of type `int32`,
      representing the shape for randomly generated keep/drop flags."
           seed "Optional. An integer. Used to create random seeds."
           seed2 "Optional. An integer. Used to create random seeds."}
   :inputs [[keep-prob "A scalar `Tensor` with the same type as x. The
      probability that each element is kept." ]
            [x "A floating point tensor."]]}
  {:macro :dropout
   :id id
   :inputs [keep-prob x]
   :noise-shape noise-shape
   :seed seed
   :seed2 seed2})

(defmethod mc/build-macro :l2-loss
  [^Graph g {:keys [id attrs inputs] :as args}]
  [(o/l2-loss id
              (or attrs {})
              (first inputs))])

(defn l2-loss
  ([] {:macro :l2-loss
       :inputs [:$/input]}))


