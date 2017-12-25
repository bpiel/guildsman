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

(defn ->handle
  [v]
  (when (PValueProvider? v)
    (tsr/getHandle v)))

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

(defn delete-tensor!
  [t]
  (when-let [hnd (tsr/getHandle t)]
    (TensorNI/delete hnd)))

(defn get-scope [& [scope]]
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

(defn convert-if-tensor [v]
  (if (->handle v)
    (tsr/->clj v)
    v))

(defn walk-convert-tensors [v] (walk-tensors convert-if-tensor v))

(def conj-set (fnil conj #{}))

(defn- add-to-scope**
  [scope-id state {:keys [handle]}]
  (-> state
      (update-in [:handles handle]
                 conj-set
                 scope-id)
      (update-in [:scopes scope-id]
                 conj-set
                 handle)))

(defn add-to-scope*
  [state scope-id tensors]
  (reduce (partial add-to-scope** scope-id)
          state
          tensors))

(defn add-to-scope!
  [{ty :type id :id} v]
  (when (= ty :standard)
    (->> v
         (filter ->handle)
         (swap! add-to-scope* id))))

(defn process-return
  [{ty :type} v]
  (case ty
    nil (when-not (some->> v (filter ->handle) empty?)
          (throw (Exception. "No parent tensor scope. Cannot return native tensor value without a tensor scope." )))
    :standard v
    :conversion (walk-convert-tensors v)))

(defn- remove-scope-from-hnds
  [state-handles scope-id hnds]
  (reduce (fn [agg hnd] (update agg hnd disj scope-id))
          state-handles
          hnds))

(defn- mark-deletable-hnds
  [{:keys [handles] :as state} hnds]
  (let [deletable (->> hnds
                       (select-keys handles)
                       (filter (comp empty? second))
                       (mapv first))]
    (-> state
        (update :handles (partial apply dissoc) deletable)
        (assoc :delete deletable))))

(defn- delete-marked-hnds!
  [{:keys [delete] :as state}]
  (doseq [t delete]
    (delete-tensor! t)))

(defn- close-scope*
  [state id]
  (if-let [hnds (some-> state :scopes id not-empty)]
    (-> state
        (update :scopes dissoc id)
        (update :handles remove-scope-from-hnds id hnds)
        (mark-deletable-hnds hnds))
    state))

(defn- close-scope!
  [{ty :type id :id}]
  (when (= ty :standard)
    (-> state
        (swap! close-scope* id)
        delete-marked-hnds!)))

(defmacro with-this-scope
  [scope & body]
  `(binding [*scope* ~scope]
     (try
       (let [parent# (some-> ~scope
                             :parent
                             get-scope)
             return# (do ~@body)]
         (when parent#
           (walk-add-to-scope! parent# return#))
         (process-return parent# return#))
       (finally
         (close-scope! ~scope)))))

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
     (walk-add-to-scope! (get-scope) ~tensors)
     ~@body))
