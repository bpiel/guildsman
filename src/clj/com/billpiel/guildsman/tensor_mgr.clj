(ns com.billpiel.guildsman.tensor-mgr
  (:require [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh])
  (:import [com.billpiel.guildsman.tensor TensorRef TensorNDArray]))

;; This is crazy, but maybe not terrible?

;; TODO default to false
(def cache-tensors? (atom true))

(def init-state {:handle->refs {} :cache {} :ref-id->tnda {} :dibs {}})
(def state (atom init-state))

(defn reset-state! "Don't do it!" [] (reset! state init-state))

;; TODO dumb?
(def conj-set (fnil conj #{}))

(defn- add-ref-to-state
  [st handle ref-id]
  (update-in st
             [:handle->refs handle]
             conj-set
             ref-id))

(defn- add-to-state-wo-cache
  [st v]
  (-> st
      (add-ref-to-state (.handle v)
                        (.ref-id v))
      (assoc-in [:ref-id->tnda (.ref-id v)]
                v)))

;; TODO don't assume no cached copy exists?
(defn- add-to-state-w-cache
  [st ^TensorNDArray v hsh]
  (let [handle (.handle v)
        v-cached (:value (tsr/create-ref-from-handle handle))]
    (-> st 
        (add-to-state-wo-cache v)
        (add-to-state-wo-cache v-cached)
        (assoc-in [:cache hsh]
                  v-cached))))

(defn- try-cache*
  [{:keys [handle->refs cache] :as st} hsh dib]
  (if-let [tnda1 (cache hsh)]
    (let [tref2 (tsr/create-ref-from-handle  (.handle tnda1))]
      (-> st
          (add-to-state-wo-cache (:value tref2))
          (assoc-in [:dibs dib] tref2)))
    st))

(defn- undib
  [st dib]
  (update st :dibs dissoc dib))

(defn- pop-dibbed
  [dib]
  (when-let [dibbed (get-in @state [:dibs dib])]
    (swap! state undib dib)
    dibbed))

(defn- try-cache
  [hsh]
  (let [dib (gensym "dib")]
    (swap! state try-cache*
           hsh
           dib)
    (pop-dibbed dib)))

(defn manage
  [^TensorNDArray v & [hsh]]
  (if hsh
    (swap! state add-to-state-w-cache v hsh)
    (swap! state add-to-state-wo-cache v)))


(defn manage-tensor-ref
  [^TensorRef tref & [hsh]]
  (let [{:keys [value shape]} tref]
    (if (-> shape sh/scalar? not)
      (manage value hsh)
      (swap! state
             add-ref-to-state
             (:handle tref)
             (:id tref)))))



(defn- release*
  [st handle ref-id dib]
  (let [st' (-> st
                (update-in [:handle->refs handle]
                           disj ref-id)
                (update :ref-id->tnda
                        dissoc ref-id))]
    (if (empty? ((:handle->refs st') handle))
      (-> st'
          (update :handle->refs dissoc handle)
          (assoc-in [:dibs dib] handle))
      st')))

(defn release
  [^TensorNDArray tnda]
  (let [dib (gensym "dib")]
    (swap! state release* (.handle tnda) (.ref-id tnda) dib)
    (.invalidate! tnda)
    (when-let [handle-to-delete (pop-dibbed dib)]
      (com.billpiel.guildsman.TensorNI/delete handle-to-delete))))

(defn release-tensor-ref
  [^TensorRef tref]
  (let [dib (gensym "dib")]
    (swap! state release* (:handle tref) (:id tref) dib)
    (when-let [handle-to-delete (pop-dibbed dib)]
      (com.billpiel.guildsman.TensorNI/delete handle-to-delete))))

;; TODO make better
(defn release-all []
  (doseq [tnda (-> @state :ref-id->tnda vals)]
    (release tnda)))

(defn- clear-cache*
  [st dib]
  (let [cached (-> st :cache vals)]
    (-> st
        (assoc :cache {})
        (assoc-in [:dibs dib] cached))))

(defn clear-cache []
  (let [dib (gensym "dib")]
    (swap! state clear-cache* dib)
    (when-let [targets (not-empty (pop-dibbed dib))]
      (doseq [tnda targets]
        (release tnda)))))

(defn get-tensor-ref-by-handle ^TensorRef [handle]
  (let [tref (tsr/create-ref-from-handle handle)]
    (manage-tensor-ref tref)
    tref))

(defn- should-cache? [v]
  (and @cache-tensors?
       (-> v dt/data-type-of nil?)))

(defn get-tensor-ref-by-value*
  ^TensorRef [v & [hsh]]
  (let [tref (tsr/create-ref-from-value v)]
    (manage-tensor-ref tref hsh)
    tref))

;; TODO HACK!
(defn hack-out-handle
  [v]
  (try (.handle v)
       (catch Exception e nil)))

;; TODO instance? not working well
(defn get-tensor-ref-by-value ^TensorRef [v]
  (if (hack-out-handle v)
    (get-tensor-ref-by-handle)
    (if (should-cache? v)
      (let [hsh (hash [v (dt/data-type-of-whatever v)])]
        (or (try-cache hsh)
            (get-tensor-ref-by-value* v hsh)))
      (get-tensor-ref-by-value* v))))

(defn calc-size-all-tensors
  []
  (->> @state
       :ref-id->tnda
       vals
       (group-by #(.handle %))
       vals
       (keep first)
       (map #(.size %))
       (apply +)))
