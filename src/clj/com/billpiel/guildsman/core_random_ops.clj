(in-ns 'com.billpiel.guildsman.core)

;; based on random_ops.py

;; why were there two???
#_(defn truncated-normal
  [shape & [dtype]]
  (o/truncated-normal {:seed (rand-int Integer/MAX_VALUE)
                       :seed2 (rand-int Integer/MAX_VALUE)
                       :dtype (or dtype dt-float)} ;; TODO bad idea?
                      shape))

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

(defn random-uniform
  ([]
   {:macro :random-uniform
    :attrs {:shape :$/shape
            :dtype :$/dtype}}))
