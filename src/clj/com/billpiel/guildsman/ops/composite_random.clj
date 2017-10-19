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
  ([]
   {:macro :random-uniform
    :attrs {:shape :$/shape
            :dtype :$/dtype}}))
