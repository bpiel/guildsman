(ns com.billpiel.guildsman.ops.gen
  (:require [com.billpiel.guildsman.op-build :as obld]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.ops.gen-config :as cfg]
            [com.billpiel.guildsman.ops.gen-util :as ogu]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.dx :as dx]
            clojure.pprint))

(def assoc-meta-to-op? (atom false))

#_ (reset! assoc-meta-to-op? true)

(defn fetch-pre-build-op-fn
  [op-def]
  (cfg/fetch-config op-def :hook-pre-build))

(defn get-op-build-fn-body
  [op-def]
  (let [r (list '[g plan]
              `(obld/build-op
                (~(fetch-pre-build-op-fn op-def)
                 {:g ~'g :plan ~'plan
                  :op-def (~'cfg/proc-op-list-by-name ~(:name op-def))})))]

    r))

(defn dyn-defmethod-op-build
  [op-def]
  (try
    (let [{:keys [kw]} op-def]
      (ogu/dyn-defmethod `obld/build
                     kw
                     (get-op-build-fn-body op-def)))
    (catch Exception e
      (def e1 e)
      (println e))))

(defn get-op-fn-body [fn-name-sym op-def]
  (cfg/call-config op-def :plan-fn-bodies [fn-name-sym op-def]))

(defn get-op-fn-name-sym [op-def]
  (let [s1 (or (cfg/fetch-config op-def :fn-name)
               (ogu/fn-name-default op-def))]
    (if (ns-resolve 'clojure.core s1)
      (symbol (str s1 "-tf"))
      s1)))

(defn finalize-plan
  [plan]
  ;; TODO do we really want var-scope assoc'd here?
  (let [p (sc/assoc-scope-to-plan plan)]
    (if-not @assoc-meta-to-op?
      p
      (with-meta p
        (or ut/*macro-meta*
            {:stack (ut/get-stack)
             :plan p
             :form ut/*enclosing-form* })))))

(defn inject-finalizer
  [bodies]
  (for [[args & b] bodies]
    `(~args (finalize-plan (do ~@b)))))

(def pretty-op-def
  "pprint is time-consuming"
  (memoize
   (fn [op-def]
     (with-out-str
       (clojure.pprint/pprint op-def)))))

(defn kv->dx-subsection
      [[k v]]
      (into [k]
            (if (sequential? v)
              (mapv (fn [attr]
                      [(:name attr)
                       (mapv vec
                             (dissoc attr :name))]) 
                    v)
              [v])))

(defn op-def->fn-docs
  [op-def]
  (dx/dx (into [(op-def :summary)
                (op-def :description)
                (into ['Outputs]
                      (mapv (fn [attr]
                              [(:name attr)
                               (mapv vec
                                     (dissoc attr :name))]) 
                            (op-def :output-arg)))
                (when-let [v (op-def :attr)]
                  (into ['Attributes]
                        (mapv (fn [attr]
                                [(-> attr :name ut/snake->kebab )
                                 (mapv vec
                                       (dissoc attr :name))]) 
                              v)))
                (when-let [v (op-def :input-arg)]
                  (into ['Inputs]
                        (mapv (fn [attr]
                                [(:name attr)
                                 (mapv vec
                                       (dissoc attr :name))]) 
                              v)))]
               (mapv kv->dx-subsection
                     (dissoc op-def
                             :name
                             :summary
                             :description
                             :output-arg
                             :attr
                             :input-arg)))))


(defn dyn-defn-op [op-def]
  (let [fn-name-sym (get-op-fn-name-sym op-def)]
    (ogu/dyn-defn
     fn-name-sym
     (inject-finalizer
      (get-op-fn-body fn-name-sym op-def))
     (str "\n"
          #_ (pretty-op-def op-def)
          (op-def->fn-docs op-def)))))

(defn dyn-def-op-fns [op-def]
  (let [op (cfg/op-def-processor op-def)]
    (dyn-defn-op op)
    (dyn-defmethod-op-build op)))

(defn gen-ops [ns-sym]
  (doseq [op-def (:op cfg/op-list)]
    (try
      (when-not (cfg/skip-ops (:name op-def))
        (dyn-def-op-fns #_ns-sym op-def))
      (catch Exception e
        (clojure.pprint/pprint op-def)
        (throw e)))))
