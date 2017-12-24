(ns com.billpiel.guildsman.tensor-scope
  (:require [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh])
  (:import [com.billpiel.guildsman.tensor PValueProvider]
           [com.billpiel.guildsman TensorNI]))

(def global-scope (atom nil))
(def ^:dynamic *scope* {:type :global})

(def state (atom {:handles {}
                  :scopes {}
                  :delete []}))

(defn PValueProvider?
  [v]
  (and (instance? java.lang.Object v)
       (satisfies? tsr/PValueProvider v)))

(defn set-global-scope! [])

(defn- mk-id []
  (-> (gensym "tensor-scope")
      name
      keyword))

(defn mk-scope [ty]
  {:type ty
   :id (mk-id)
   :parent (dissoc *scope*
                   :parent)})

(defn escalate-tensors!
  [v])

(defn delete-tensor!
  [t]
  (when-let [hnd (tsr/getHandle t)]
    (TensorNI/delete hnd)))

(defn delete-tensors!
  [tensors]
  (doseq [t tensors]
    (delete-tensor! t))
  [])

(defn- get-scope [& [scope]]
  (let [sc (or scope *scope*)
        ty (:type sc)]
    (case ty
        nil (throw (Exception. "No tensor scope has been set."))
        :global (or @global-scope
                    (throw (Exception. "No global tensor scope has been set.")))
        sc)))

(defn walk-tensors
  [f v]
  (cond (PValueProvider? v) (f v)
        
        (sequential? v)
        (->> v
             (map (partial walk-tensors f))
             (into (empty v)))

        (map? v)
        (into {}
              (for [[k v'] v]
                [(walk-tensors f k) (walk-tensors f v')]))

        :else v))

(defn walk-add-to-scope!
  [{ty :type id :id} v]
  (when (= ty :standard)))

(defn process-return
  [{ty :type} v]
  (case ty
        nil (throw (Exception. "TODO throw exception only if handle returned"))
        :standard v
        :conversion (throw (Exception. "TODO walk-convert to clj"))))

(defn close-scope! [scope]
  (throw (Exception. "NOT IMPLEMENTED")))

(defmacro with-this-scope
  [scope & body]
  `(binding [*scope* scope]
     (try
       (let [parent (some-> scope
                            :parent
                            get-scope)
             return# (-> (do ~@body))]
         (when parent
           (walk-add-to-scope! parent return#))
         (process-return parent return#))
       (finally
         (close-scope! scope)))))

(defmacro with-scope
  [& body]
  `(with-this-scope (mk-scope :standard)
     ~@body))

(defmacro with-conversion-scope
  [& body]
  `(with-this-scope (mk-scope :conversion)
     ~@body))

(defmacro with-scope-containing
  [tensors & body]
  `(with-this-scope (mk-scope :standard)
     (walk-add-to-scope! (get-scope) tensors)
     ~@body))
