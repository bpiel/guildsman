(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on init_ops.py


(defn compute-fans
  [shape]
  (let [[sh0 sh1] shape
        csh (count shape)]
    (cond (< csh 1) [1 1]
          (= csh 1) [sh0 sh0]
          (= csh 2) [sh0 sh1]
          :else
          (let [rev-shape (reverse shape)
                [sh-1 sh-2] rev-shape
                receptive-field-size (->> rev-shape
                                          (drop 2)
                                          (apply * 1.))]
            [(* receptive-field-size sh-2)
             (* receptive-field-size sh-1)]))))


;; TODO other cases
(defn glorot-uniform-initializer
  [shape]
  (let [[fan-in fan-out] (compute-fans shape)
        scale-stddev (Math/sqrt (/ 1.0
                                   (max 1.
                                        (/ (+ fan-in fan-out)
                                           2.))))]
    (truncated-normal dt/float-kw shape 0.
                      scale-stddev)))
