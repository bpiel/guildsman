(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on math_ops.py

(defn- reduction-dims
  [x & [axis]]
  (or axis
      (o/range-tf (int 0)
                  (o/rank x)
                  (int 1))))

(defn reduce-prod
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/prod id
          {:keep_dims (true? keep-dims)}
          input-tensor
          (reduction-dims input-tensor axis)))

(ut/defn-comp-op reduce-mean
  {:doc "Computes the mean of elements across dimensions of a tensor.

  Reduces `input` along the dimensions given in `axis`.  Unless
  `keepdims` is true, the rank of the tensor is reduced by 1 for each
  entry in `axis`. If `keepdims` is true, the reduced dimensions are
  retained with length 1.

  If `axis` has no entries, all dimensions are reduced, and a
  tensor with a single element is returned.
"
   :id :reduce-mean
   :inputs [[input "The tensor to reduce. Should have numeric type."]]
   :attrs {keep-dims "If true, retains reduced dimensions with length 1."
           axis "The dimensions to reduce. If `nil` (the
           default), reduces all dimensions. Must be in the range
           `[-rank(input_tensor), rank(input_tensor))`." }}
  (o/mean id
          {:keep_dims (true? keep-dims)}
          input
          (reduction-dims input axis)))

(ut/defn-comp-op reduce-sum
  {:doc "Computes the sum of elements across dimensions of a tensor.

  Reduces `input` along the dimensions given in `axis`.
  Unless `keepdims` is true, the rank of the tensor is reduced by 1 for each
  entry in `axis`. If `keepdims` is true, the reduced dimensions
  are retained with length 1.

  If `axis` has no entries, all dimensions are reduced, and a
  tensor with a single element is returned.
"
   :id :reduce-sum
   :inputs [[input "The tensor to reduce. Should have numeric type."]]
   :attrs {keep-dims "If true, retains reduced dimensions with length 1."
           axis "The dimensions to reduce. If `nil` (the
           default), reduces all dimensions. Must be in the range
           `[-rank(input), rank(input))`." }}
  (o/sum id
         {:keep_dims (true? keep-dims)}
         input
         (reduction-dims input axis)))

(defmethod mc/build-macro :cast-tf
  [^Graph g {:keys [id inputs dest-type] :as args}]
  (let [[x] inputs
        ;; TODO wrong src-type if output-idx != 0
        src-type (-> x :types first)]
    [(o/cast-tf id
                {:SrcT src-type
                 :DstT dest-type}
                x)]))

(ut/defn-comp-macro-op cast-tf
  {:doc "Casts a tensor to a new type."
   :id :cast
   :inputs [[x "The tensor to cast"]]
   :attrs {dest-type "The type to convert to."}}
  {:macro :cast-tf
   :inputs [x]
   :dest-type dest-type})
