(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on random_ops.py

(defn truncated-normal*
  [shape & [dtype]]
  (o/truncated-normal {:seed (rand-int Integer/MAX_VALUE)
                       :seed2 (rand-int Integer/MAX_VALUE)
                       :dtype (or dtype dt/float-kw)} ;; TODO bad idea?
                      shape))

(defmethod mc/build-macro :truncated-normal
  [^Graph g {:keys [id attrs] :as args}]
  (let [{:keys [shape dtype mean stddev]} attrs]
    [(-> (o/truncated-normal {:dtype dtype
                              :seed (rand-int Integer/MAX_VALUE)
                              :seed2 (rand-int Integer/MAX_VALUE)}
                             shape)
         (o/mul stddev)
         (o/add mean))]))

(defn truncated-normal
  "Outputs random values from a truncated normal distribution.
  Can be used as a variable initializer.

  The generated values follow a normal distribution with specified mean and
  standard deviation, except that values whose magnitude is more than 2 standard
  deviations from the mean are dropped and re-picked.

  shape:  1-D vector. The shape of the output tensor.
  mean:   scalar value of type `dtype`. The mean of the truncated normal distribution.
  stddev: scalar value of type `dtype`. The standard deviation of the truncated normal distribution.
  dtype:  type of the output (ex dt-float)"
  ([]
   (sc/assoc-scopes-to-plan
    {:macro :truncated-normal
     :attrs {:shape :$/shape
             :dtype :$/dtype}}))
  ([dtype shape mean stddev]
   (sc/assoc-scopes-to-plan
    {:macro :truncated-normal
     :attrs {:shape shape
             :dtype dtype
             :mean mean
             :stddev stddev}})))

(defmethod mc/build-macro :random-uniform
  [^Graph g {:keys [id attrs] :as args}]
  (let [{:keys [shape dtype]} attrs]
    [(o/random-uniform {:id id
                        :dtype dtype}
                       shape)]))

(defn random-uniform
  "Can ONLY be used as a variable initializer. For other uses, use the
  single op."
  ([]
   {:macro :random-uniform
    :attrs {:shape :$/shape
            :dtype :$/dtype}}))
