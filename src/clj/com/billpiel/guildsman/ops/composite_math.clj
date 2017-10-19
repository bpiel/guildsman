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

(defn reduce-mean
  ([input-tensor]
   (reduce-mean nil {} input-tensor))
  ([id-attrs input-tensor]
   (reduce-mean (ogu/id-attrs->id id-attrs)
                (ogu/id-attrs->attrs id-attrs)
                input-tensor))
  ([id {:keys [keep-dims axis]} input-tensor]
   (o/mean id
           {:keep_dims (true? keep-dims)}
           input-tensor
           (reduction-dims input-tensor axis))))

(defn reduce-sum
  [input-tensor & {:keys [axis keep-dims id]}]
  (o/sum id
         {:keep_dims (true? keep-dims)}
         input-tensor
         (reduction-dims input-tensor axis)))

