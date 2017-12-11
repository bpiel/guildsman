(ns com.billpiel.guildsman.ops.composite
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.ops.gen-util :as ogu]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.macros :as mc]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.packages :as pkg]
            [com.billpiel.guildsman.common :as cmn]
            [clojure.walk :as w])
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman.session Session]))

(defn reduction-dims
  [x & [axis]]
  (or axis
      (o/range-tf (int 0)
                  (o/rank x)
                  (int 1))))

(defn- mk-initilizer-from-template
  [template shape dtype]
  (update template :attrs
          (partial w/postwalk-replace
                   {:$/shape shape
                    :$/dtype dtype})))

(defn- mk-initilizer
  [init {:keys [initializer]} shape dtype]
  (let [init' (or init initializer)
        dtype' (or dtype dt/float-kw)]
    (cond (fn? init')
          (mk-initilizer-from-template (init')
                                       shape
                                       dtype')
          (map? init') (mk-initilizer-from-template init'
                                                   shape
                                                   dtype')
          (nil? shape) init'
          ;; TODO handle dtype/init mismatch
          ;; TODO reshape the constant
          :else init')))

(defn- mk-regularizer
  [regu {:keys [regularizer]}]
  (let [regu' (or regu regularizer)]
    (if (fn? regu')
      (regu')
      regu')))

(defmethod mc/build-macro :variable
  [^Graph g {:keys [attrs inputs]}]
  (sc/with-override-id-with-var-scope
    (let [[init] inputs
          vari (o/variable :variable
                           (merge (opn/get-desc-of-output init)
                                  attrs))]
      [(o/identity-tf :read {} vari)
       (-> (o/assign :init {} vari init)
           (ut/append-collections [:global-var-inits])
           ut/build-eagerly)
       vari])))

(defn vari
  "Creates a plan for a variable (VariableV2).

  init - initial value; scalar or vector
  shape - shape of the tensor managed by this variable as vector
  dtype - type of the tensor values as keyword (ex dt-float)
"
  ([id-attrs] (vari id-attrs nil))
  ([id-attrs init] (vari (ogu/id-attrs->id id-attrs)
                      (ogu/id-attrs->attrs id-attrs)
                      init))
  ([id {:keys [dtype shape] :as attrs} init]
   (sc/assoc-scopes-to-plan ;; TODO :(
    {:macro :variable
     :id id
     :inputs [(mk-initilizer init sc/*var-scope* shape dtype)]
     :attrs (if attrs
              (update attrs
                      :regularizer
                      mk-regularizer
                      sc/*var-scope*)
              {})})))

(load "composite_random")
(load "composite_init")
(load "composite_math")
(load "composite_array")
(load "composite_nn")
(load "composite_grad")
(load "composite_metrics")
(load "composite_dataset2")
