(ns com.billpiel.guildsman.tensor-scope
  (:require [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh])
  (:import [com.billpiel.guildsman.tensor PTensor TensorRef]
           [com.billpiel.guildsman TensorNI]))

(def global-scope (atom nil))
(def ^:dynamic *scope* {:type :global})

(def state (atom {:handles {}
                  :scopes {}
                  :delete []}))

(defn PTensor?
  [v]
  (and (instance? java.lang.Object v)
       (satisfies? tsr/PTensor v)))

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

(defn tensor-valid?
  [t])

(defn escalate-tensors!
  [v])

(defn delete-tensor!
  [t]
  (when (tensor-valid? t)
    (TensorNI/delete (tsr/handle t)))
  t)

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

(defn delete-tensors-in-scope!
  [{ty :type :keys [tensors]}]
  (let [tensors' (case ty
                   :default tensors
                   :global (some-> @global-scope
                                   :tensors)
                   nil)]
    (when tensors'
      (swap! tensors' delete-tensors!))
    true))

(defn convert-tensor
  [^PTensorNDArray t]
  (let [r (tnda->vecs t)]
    (delete-tensor! t)
    r))

(defn walk-tensors
  [f v]
  (cond (PTensor? v) (f v)
        
        (sequential? v)
        (->> v
             (map (partial walk-tensors f))
             (into (empty v)))

        (map? v)
        (into {}
              (for [[k v'] v]
                [(walk-tensors f k) (walk-tensors f v')]))

        :else v))

(defmacro with-this-scope
  [scope & body]
  `(binding [*scope* scope]
     (let [return# (do ~@body)]
       (walk-escalate-tensors! scope return#)
       (close-scope! scope)
       return#)))

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
     (add-all-to-scope tensors)
     ~@body))
