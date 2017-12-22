(ns com.billpiel.guildsman.tensor-scope
  (:require [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh])
  (:import [com.billpiel.guildsman.tensor PTensor]
           [com.billpiel.guildsman TensorNI]))

(def global-scope (atom nil))
(def ^:dynamic *scope* {:type :global})

;; does this work?
(defn PTensor?
  [v]
  (and (instance? java.lang.Object v)
       (satisfies? PTensor v)))

#_(PTensor? ttt)

#_(satisfies? PTensor {})

#_(def ttt (TensorRef. 1 2 3 4))

(instance? java.lang.Object ttt)

(defn- tnda->vecs
  [t]
  (if (PTensorNDArray? t)
    (mapv ->vecs t)
    t))

(defn set-global-scope! [])

(defn mk-default-scope []
  {:type :default
   :parent *scope*
   :tensors []})

(defn mk-conversion-scope []
  {:type :conversion
   :parent *scope*})

(defn escalate-tensors!
  [v])

(defn delete-tensor!
  [t]
  (when (.valid? t)
    (TensorNI/delete (.handle t))
    (.invalidate! t))
  t)

(defn delete-tensors!
  [tensors]
  (doseq [^PTensorNDArray t tensors]
    (delete-tensor! t))
  [])

(defn- get-scope [& [scope]]
  (let [sc (or scope *scope*)
        ty (:type sc)]
    (case ty
        nil (throw (Exception. "No tensor scope has been set."))
        :default sc
        :global (or @global-scope
                    (throw (Exception. "No global tensor scope has been set.")))
        :conversion (assoc sc :tensors nil)
        (throw (Exception. (str "Unknown tensor scope type: " ty))))))

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

(defn manage-tensors!*
  [f v]
  (cond (PTensorNDArray? v) (f v)
        
        (sequential? v)
        (->> v
             (map (partial manage-tensors!* f))
             (into (empty v)))

        (map? v)
        (into {}
              (for [[k v'] v]
                [(manage-tensors!* f k) (manage-tensors!* f v')]))

        :else v))

(defn xfer-mgmt-of-tensors!
  [nested from to]
  (let [{ty :type ts :tensors} (get-scope)
        f (case ty
            :default (partial swap! ts conj)
            :conversion convert-tensor)]
    (manage-tensors!* f v)))

(defmacro with-this-scope
  [scope & body]
  `(binding [*scope* scope]
     (let [return# (do ~@body)]
       (escalate-tensors! scope return#)
       (delete-tensors-in-scope! scope)
       return#)))

(defmacro with-default-scope
  [& body]
  `(with-this-scope (mk-default-scope)
     ~@body))

(defmacro with-conversion-scope
  [& body]
  `(with-this-scope (mk-conversion-scope)
     ~@body))

(defn hnd->tensor-ref ^TensorRef
  [v]
  )

(defn value->tensor-ref ^TensorRef
  [v]
  )

(defn deref-handle
  [hnd]
  
  )
