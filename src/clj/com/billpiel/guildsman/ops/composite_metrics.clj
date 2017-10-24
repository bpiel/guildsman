(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on metrics_impl.py

(defn accuracy
  "Returns plans to calculate what percentage (0.0 - 1.0) of elements
  of 'a' and 'b' are equal. 'a' and 'b' are plans."
  ([a b] (accuracy nil a b))  
  ([id a b]
   (ut/$- ->> (o/equal a b)
          (o/cast-tf {:SrcT dt/bool-kw :DstT dt/float-kw})
          (o/mean :accuracy $ (reduction-dims $))
          (sc/with-push-both-scopes (or id :accuracy)))))

(defn mean-squared-error
  ([features labels]
   (->> (o/sub features labels)
        o/square
        reduce-mean)))

