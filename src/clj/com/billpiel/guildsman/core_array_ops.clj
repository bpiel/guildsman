(in-ns 'com.billpiel.guildsman.core)

;; based on array_ops.py

(defn zeros
  [shape dtype]
  (let [z (case dtype
            dt/bool-kw false
            dt/string-kw ""
            0)]
    (sc/with-push-both-scopes :zeros
      (o/fill shape
              (o/c z dtype)))))

(defn one-hot
  ([idxs depth]
   (o/one-hot nil {} idxs depth 1. 0.))
  ([id idxs depth]
   (o/one-hot id {} idxs depth 1. 0.))
  ([id attrs idxs depth]
   (o/one-hot id attrs idxs depth 1. 0.)))
