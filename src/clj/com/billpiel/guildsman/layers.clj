(ns com.billpiel.guildsman.layers
  (:require [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.plan-time-comps :as p]
            [com.billpiel.guildsman.macros :as mc]
            [com.billpiel.guildsman.ops-gen-config :as ogc]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.data-type :as dt]
            [clojure.walk :as w])
  (:import [com.billpiel.guildsman.common Graph Op]))

(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defn mk-activation-template
  [a]
  (if (fn? a)
    (a :$/input)
    a))

(defn mk-activation-plan
  [template input]
  (if-not (nil? template)
    (sc/assoc-scopes-to-plan
     (w/postwalk-replace {:$/input input}
                         template))
    input))

(defn ru [shape]
  (o/mul (o/sub (o/random-uniform {:dtype dt/float-kw}
                                  shape)
                (float 0.5))
         0.5))

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
    (p/truncated-normal dt/float-kw shape 0.
                        scale-stddev)))



(defn- mk-kernel
  [{:keys [input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (p/v :kernel
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
        bias (p/v :bias
                  {:dtype dtype
                   :shape [filters]}
                  (p/zeros [filters] dtype))]
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
        kernel (p/v :kernel
                    (glorot-uniform-initializer out-sh))
        bias (p/v :bias
                  (p/zeros [units] dtype))]
    [(-> input
         (o/mat-mul kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))]))

(defn dense
  [{:keys [id activation units]} input]
  (-> {:macro :dense
       :id id
       :inputs [input]
       :units units
       :activation (mk-activation-template activation)}
      sc/assoc-scopes-to-plan
      ut/with-op-meta))
