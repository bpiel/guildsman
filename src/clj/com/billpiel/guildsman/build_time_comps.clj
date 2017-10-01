(ns com.billpiel.guildsman.build-time-comps
  (:require [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.macros :as mc]
            [com.billpiel.guildsman.ops-gen-config :as ogc]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.util :as util]
            [com.billpiel.guildsman.data-type :as dt])
  (:import [com.billpiel.guildsman.common Graph Op]))

;; TODO move most of build-macros to plan-time???????

(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defmethod mc/build-macro :variable
  [^Graph g {:keys [attrs inputs]}]
  (sc/with-override-id-with-var-scope
    (let [[init] inputs
          vari (o/variable :variable
                           (merge (opn/get-desc-of-output init)
                                  attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (util/append-collections [:global-var-inits])
           util/build-eagerly)
       vari])))

(defn dropout
  ([^Graph g keep-prob x]
   (dropout g nil keep-prob x {}))
  ([^Graph g id keep-prob x & [{:keys [noise-shape seed seed2]}]]
   (let [dtype (-> x opn/get-desc-of-output :dtype)
         rnd-bin (util/$- -> noise-shape
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
    [(dropout g id keep-prob x args)]))

(defmethod mc/build-macro :random-uniform
  [^Graph g {:keys [id attrs] :as args}]
  (let [{:keys [shape dtype]} attrs]
    [(o/random-uniform {:id id
                        :dtype dtype}
                       shape)]))

(defmethod mc/build-macro :truncated-normal
  [^Graph g {:keys [id attrs] :as args}]
  (let [{:keys [shape dtype mean stddev]} attrs]
    [(-> (o/truncated-normal {:dtype dtype
                              :seed (rand-int Integer/MAX_VALUE)
                              :seed2 (rand-int Integer/MAX_VALUE)}
                             shape)
         (o/mul stddev)
         (o/add mean))]))

(defmethod mc/build-macro :l2-loss
  [^Graph g {:keys [id attrs inputs] :as args}]
  [(o/l2-loss id
              (or attrs {})
              (first inputs))])
