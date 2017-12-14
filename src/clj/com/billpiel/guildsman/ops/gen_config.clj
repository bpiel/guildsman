(ns com.billpiel.guildsman.ops.gen-config
  (:require [com.billpiel.guildsman.ops.gen-util :as ogu]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh]
            [flatland.protobuf.core :as pr]
            [com.billpiel.guildsman.common :as com]
            [com.billpiel.guildsman.util :as util])
  (:import [com.billpiel.guildsman.common Graph Op GraphRef]
           [org.tensorflow.framework OpDef OpList NodeDef]))


(def skip-ops #{"Variable"})
(def gen-config (atom {}))

(def OpListP (pr/protodef OpList))

(defn register-op-gen-cfg!
  [tf-op config-map]
  (swap! gen-config assoc tf-op config-map))

(defn fetch-config
  [op-def kw]
  (let [gc @gen-config]
    (or (some-> op-def :name gc kw)
        (some-> :default gc kw))))

(defn call-config
  [op-def kw args]
  (when-let [f (fetch-config op-def kw)]
    (apply f args)))

;; Op Gen Defaults =========================================================

(defn hook-pre-build-op-default
  [args]
  (try
    (-> args
        (update-in [:plan :attrs] ogu/convert-attrs (-> args :op-def :attr)))
    (catch Exception e
      (def a1 args)
      #_ (clojure.pprint/pprint a1)
      (throw e))))

(defn get-op-fn-body-default
  [fn-name-sym op-def]
  (let [input-syms (mapv #(-> % :name symbol)
                         (:input-arg op-def))
        args+1 (into ['id-attrs] input-syms)
        args+2 (into ['id 'attrs] input-syms)]
    (list (list args+2
                {:op (ogu/get-op-kw op-def)
                 :inputs input-syms
                 :ctrl-inputs '(:ctrl-inputs attrs)
                 :id 'id
                 :attrs '(dissoc attrs :ctrl-inputs)})
          (list args+1
                `(~fn-name-sym
                  (ogu/id-attrs->id ~'id-attrs)
                  (ogu/id-attrs->attrs ~'id-attrs)
                  ~@input-syms))
          (list input-syms
                `(~fn-name-sym nil {} ~@input-syms)))))

(defn plan-input->expr-input
  [output-fn-sym input-kw]
  (let [iname (name input-kw)]
    (if (some #{\:} iname)
      (let [[id idx] (clojure.string/split iname
                                           #":")]
        `(~output-fn-sym ~(symbol id) ~(Integer/parseInt idx)))
      (symbol iname))))

(defn plan-input->expr-input-walker
  [output-fn-sym inputs]
  (clojure.walk/prewalk
   (fn [v]
     (if (keyword? v)
       (plan-input->expr-input output-fn-sym v)
       v))
   inputs))

(defn plan->expr-default
  [plan fn-name output-fn _]
  (let [{:keys [id attrs inputs ctrl-inputs]} plan]
    `(~fn-name
      ~id
      ~(if (not-empty ctrl-inputs)
         (assoc attrs :ctrl-inputs ctrl-inputs)
         attrs)
      ~@(plan-input->expr-input-walker output-fn
                                       inputs))))



;; Op Gen Custom Overrides =================================================


(defn hook-pre-build-op-override-addn
  [args]
  (let [dtype (-> args :plan :attrs :value dt/data-type-of-whatever :native)]
    (-> args
        (assoc-in [:plan :attrs :N] (-> args :plan :inputs first count))
        hook-pre-build-op-default)))

(register-op-gen-cfg!
 "AddN"
 {:hook-pre-build `hook-pre-build-op-override-addn})


(defn hook-pre-build-op-override-const
  [args]
  (let [attrs (-> args :plan :attrs)
        {:keys [dtype value]} attrs
        val-type (if (dt/HACK-string? value)
                   dt/string-kw ;; HACK
                   (-> value dt/data-type-of-whatever :kw))]
    (cond (nil? dtype) (-> args
                           (assoc-in [:plan :attrs :dtype]
                                     (-> val-type dt/kw->dt :native))
                           hook-pre-build-op-default)
          (= dtype val-type) (-> args
                                 (assoc-in [:plan :attrs :dtype]
                                           (-> val-type dt/kw->dt :native))
                                 hook-pre-build-op-default)
          :else (-> args
                    (update-in [:plan :attrs :value]
                               #(dt/convert-whatever % dtype))
                    (update-in [:plan :attrs :dtype]
                               #(-> % dt/kw->dt :native))
                    hook-pre-build-op-default))))

(defn plan->expr-const
  [plan fn-name _ _]
  (let [{:keys [id attrs]} plan]
    `(~fn-name ~id ~(:value attrs))))

;;TODO make less shitty
(defn auto-cast
  [dt-kw]
  (when dt-kw
    (dt-kw {dt/long-kw dt/int-kw
            dt/double-kw dt/float-kw}
           dt-kw)))



;; (= (hash 0) (hash 0.0)) !!!!!!
(register-op-gen-cfg!
 "Const"
 {:fn-name 'c ;; TODO rename? con?
  :plan-fn-bodies (constantly
                   '[([value] (if (nil? value)
                                nil
                                {:op :Const
                                 :attrs {:value value
                                         :dtype (get-const-dtype value)}}))
                     ([value data-type] {:op :Const ;; TODO change arg order?
                                         :id nil
                                         :attrs {:value value
                                                 :dtype data-type}})
                     ([id value data-type] {:op :Const
                                            :attrs {:value value
                                                    :dtype data-type}})])
  :hook-pre-build `hook-pre-build-op-override-const
  :plan->expr plan->expr-const})

(register-op-gen-cfg!
 "Placeholder"
 {:plan-fn-bodies (constantly
                   '[([id data-type shape] ;; TODO shape is optional???
                      {:op :Placeholder
                       :id id
                       :attrs {:dtype data-type
                               :shape shape}})])})

(defn hook-pre-build-op-override-variable-v2
  [args]
  (let [plan (:plan args)
        value (:assignment plan)
        attrs (:attrs plan)
        dtype (or (some-> attrs :dtype dt/kw->dt :native)
                  (-> value dt/data-type-of-whatever :native))
        shape (or (some-> attrs :shape)
                  (sh/shape-of-seq value))]
    (-> args
        (update-in [:plan :attrs] merge {:dtype dtype :shape shape})
        hook-pre-build-op-default)))

(defn plan->expr-variable-v2
  [plan fn-name _ _]
  (let [{:keys [id attrs]} plan]
    `(~fn-name
      ~id
      ~(dissoc attrs :value)
      ~(:value attrs))))

(register-op-gen-cfg!
 "VariableV2"
 {:fn-name 'variable})

(defn hook-pre-build-op-override-assign
  [args]
  (let [vari (-> args :plan :inputs first)]
    (if (-> vari :op (= :VariableV2)) ;; might have received a "read" node instead of variable itself
      (hook-pre-build-op-default args)
      (let [id->node (-> args :g :state deref :id->node)
            vari' (-> vari :inputs first id->node)]
        (-> args
            (assoc-in [:plan :inputs 0] vari')
            hook-pre-build-op-default)))))

(register-op-gen-cfg!
 "Assign"
 {:hook-pre-build  `hook-pre-build-op-override-assign})


(register-op-gen-cfg!
 "Transpose"
 {:plan-fn-bodies (constantly
                   '[([input] {:op :Transpose
                               :inputs [input [(int 1) (int 0)]]
                               :attrs {}})])})

(defn hook-pre-build-op-override-cast
  [args]
  (-> args
      (assoc-in [:plan :attrs :SrcT]
                (-> args :plan :inputs first :dtypes first dt/kw->dt :native))
      hook-pre-build-op-default))

(register-op-gen-cfg!
 "Cast"
 {:hook-pre-build  `hook-pre-build-op-override-cast})


(defn hook-pre-build-op-override-dynamic-stitch
  [args]
  (-> args
      (assoc-in [:plan :attrs :N]
                (-> args :plan :inputs first count))
      hook-pre-build-op-default))

(register-op-gen-cfg!
 "DynamicStitch"
 {:hook-pre-build  `hook-pre-build-op-override-dynamic-stitch})

;; END Op Gen Custom Overrides =================================================

(defn op-def-processor-default
  [op-def]
  (-> op-def
      (assoc :kw (ogu/get-op-kw op-def))
      (update :attr (fn [a] (vec (remove #(-> % :name str first (= \T))
                                         a))))))

;; dumb
(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default})


(defn op-def-processor [op-def]
  (call-config op-def :op-def-processor [op-def]))

(def op-list (pr/protobuf-load OpListP (com.billpiel.guildsman.TensorFlowNI/registeredOpList)))

(def op-list-by-name
  (into {}
        (for [op-def (:op op-list)]
          [(:name op-def) op-def])))


(def proc-op-list-by-name
  (into {}
        (for [op-def (:op op-list)]
          [(:name op-def) (op-def-processor op-def)])))

(def op-list-by-kw
  (into {}
        (for [[k op-def] proc-op-list-by-name]
          [(:kw op-def) op-def])))
 
(register-op-gen-cfg!
 :default
 {:op-def-processor op-def-processor-default
  :plan-fn-bodies get-op-fn-body-default
  :hook-pre-build `hook-pre-build-op-default
  :node-def->plan ogu/node-def->plan-default
  :plan->expr plan->expr-default})

