(ns com.billpiel.guildsman.scope)

(def ^:dynamic *id-scope* [])
(def ^:dynamic *var-scope* nil)

(defn assoc-scopes-to-plan
  [{:keys [op] :as plan}]
  (if (= op :v)
    (assoc plan
           :scope (:scope *var-scope*))
    (assoc plan
           :scope *id-scope*
           :var-scope *var-scope*)))

(defn assoc-scope-to-plan
  [{:keys [op] :as plan}]
  (if (= op :v)
    (assoc plan
           :scope (:scope *var-scope*))
    (assoc plan
           :scope *id-scope*)))

(defn push-id-scope*
  [old-scope new-scope]
  (cond (keyword? new-scope) (conj old-scope new-scope)
        (sequential? new-scope) (into old-scope new-scope)
        (nil? new-scope) old-scope
        :else (throw (Exception. (str "Invalid id scope: " new-scope)))))

(defmacro with-push-id-scope
  [id-scope & body]
  `(binding [*id-scope* (push-id-scope* *id-scope* ~id-scope)]
     ~@body))

(defn push-var-scope*
  [old-scope new-scope]
  (let [[s m] (cond (keyword? new-scope) [[new-scope] nil]
                    (sequential? new-scope) [new-scope nil]
                    :else [(:scope new-scope) (dissoc new-scope :scope)])]
    (-> old-scope
        (or {:scope []})
        (update :scope into s)
        (merge m))))

(defmacro with-push-var-scope
  [var-scope & body]
  `(binding [*var-scope* (push-var-scope* *var-scope* ~var-scope)]
     ~@body))

(defmacro with-push-both-scopes
  [scope & body]
  `(binding [*id-scope* (push-id-scope* *id-scope* ~scope)
             *var-scope* (push-var-scope* *var-scope* ~scope)]
     ~@body))

(defn try-reuse-var-scope
  [captured-scope default-scope]
  (if (:reuse? captured-scope)
    captured-scope
    (push-var-scope* captured-scope
                     default-scope)))

(defmacro with-reuse-var-scope
  [captured-scope default-scope & body]
  `(binding [*var-scope* (try-reuse-var-scope ~captured-scope
                                              ~default-scope)]
     ~@body))


(defn capture-var-scope
  [scope]
  (push-var-scope* *var-scope* scope))

(defmacro with-override-id-with-var-scope
  [& body]
  `(binding [*id-scope* (or (:scope *var-scope*)
                            [])]
     ~@body))
