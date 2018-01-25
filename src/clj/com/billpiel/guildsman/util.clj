(ns com.billpiel.guildsman.util
  (:require [clojure.walk :as walk]))

(def ^:dynamic *enclosing-form* nil)
(def ^:dynamic *macro-meta* nil)
(def ^:dynamic *fn-builder* nil)


(defn ->int
  [v]
  (try (cond (integer? v) v
             (string? v) (Integer/parseInt v)
             (float? v) (int v))
       (catch Exception e
         nil)))

(defn ceil-quot
  [a b]
  (int (+ (quot a b)
          (if (zero? (mod a b))
            0 1))))

(defn snake->kebab
  [s]
  (clojure.string/replace s #"_" "-"))

(defn visit-post
  [f branch? children make-node root]
  (if (branch? root)
    (->> root
         children
         (map (partial visit-post f branch? children make-node))
         (make-node root)
         f)
    (f root)))

(defn visit-pre
  [f branch? children make-node root]
  (let [root' (f root)]
    (if (branch? root')
      (->> root'
           children
           (map (partial visit-pre f branch? children make-node))
           (make-node root')
           f)
      root')))

(defn ->vec
  [v]
  (cond (vector? v) v
        (sequential? v) (vec v)
        (map? v) [v]
        (coll? v) (vec v)
        :else [v]))

;; takes plan or Op
(defn mk-tf-id
  ([{:keys [scope id output-idx]}]
   (mk-tf-id scope id (or output-idx 0)))
  ([scope id output-idx]
   (let [scope' (or (some->> scope
                             not-empty
                             (map name)
                             (clojure.string/join "/")
                             (#(str % "/")))
                    "")
         id' (name id)
         output-idx' (if ((some-fn nil? zero?) output-idx)
                       ""
                       (str ":" output-idx))]
     (str scope' id' output-idx'))))

(defn parse-tf-id
  [tf-id]
  (let [[scoped-id idx-str] (clojure.string/split tf-id #":")
        by-slash (clojure.string/split scoped-id #"/")
        scope (vec (drop-last by-slash))
        id (last by-slash)]
    {:scoped-id scoped-id
     :scope (mapv keyword scope)
     :id (keyword id)
     :output-idx (or (->int idx-str) 0)}))

(defn- visit-plan**
  [cache-fn pre-fn merge-fn post-fn top-fn plan]
  (or (cache-fn plan)
      (let [pre (pre-fn plan)
            post (if (map? pre)
                   (cond-> pre
                     (-> pre :inputs not-empty)
                     (update :inputs top-fn)
                     (-> pre :ctrl-inputs not-empty)
                     (update :ctrl-inputs top-fn))
                   pre)]
        (-> plan
            (merge-fn post)
            post-fn))))

(defn- visit-plan*
  [f plan]
  ;; TODO use spec?
  (when (->> plan :inputs (filter nil?) not-empty)
    (throw (Exception. (format "Plan contains `nil` as input. %s"
                               plan))))
  (if (and (sequential? plan)
           (or (empty? plan) ;; assume an empty input list??
               (some map? (tree-seq sequential? identity plan)))) ;; TODO not great way to detect input list
    (mapv f plan)
    (f plan)))

(defn visit-plan
  [cache-fn pre-fn merge-fn post-fn root]
  (let [cache-fn' (or cache-fn (constantly nil))
        pre-fn' (or pre-fn identity)
        merge-fn' (or merge-fn (fn [_ x] x))
        post-fn' (or post-fn identity)
        top-fn (partial visit-plan cache-fn' pre-fn' merge-fn' post-fn')
        f (partial visit-plan** cache-fn' pre-fn' merge-fn' post-fn' top-fn)]
    (if (sequential? root)
      (mapv (partial visit-plan* f)
            root)
      (visit-plan* f root))))

(defn pre-visit-plan
  [f root]
  (visit-plan nil f nil nil root))

(defn append-collections
  [v colls]
  (vary-meta v
             update
             ::collections
             #(into (or % [])
                    colls)))

(defn get-collections
  [v]
  (-> v meta ::collections))

(defn build-eagerly
  [v]
  (vary-meta v
             assoc
             ::build-eagerly?
             true))

(defn build-eagerly?
  [v]
  (-> v meta ::build-eagerly?))

(defn replace$
  [form]
  (let [$sym `$#
        form' (walk/prewalk-replace {'$ $sym}
                                    form)]
    (if (= form form')
      form
      `((fn [~$sym] ~form')))))

(defmacro $-
  [m & body]
  `(~m ~@(map replace$ body)))

(defn map-by-id
  [v]
  (->> v
       (filter :id)
       (map #(vector (:id %) %))
       (into {})
       (merge {:$ (last v)})))

(defn- wrap-bind-form
  [orig-form form]
  `(binding [*enclosing-form* ['~orig-form (str *ns*) ~(some-> orig-form meta :line)]]
     ~form))

(defn- id$->>**
  [prev-sym sym form]
  [sym (wrap-bind-form form (if prev-sym
                              (let [form' (walk/prewalk-replace {'$ prev-sym}
                                                                form)]
                                (if (= form form')
                                  (if (sequential? form)
                                    (concat form [prev-sym])
                                    (list form prev-sym))
                                  form'))
                              form))])

(defn- id$->>*
  [body]
  (let [sym-vec (-> body
                    count
                    (repeatedly gensym)
                    vec)
        let-vec (vec (mapcat id$->>**
                             (into [nil] sym-vec)
                             sym-vec
                             body))]
    `(let ~let-vec (map-by-id ~sym-vec))))

(defmacro id$->>
  [& body]
  (id$->>* body))

(defmacro for->map
  [bindings & body]
  `(into {}
         (for ~bindings
           ~@body)))

(defn fmap
  [f m]
  (into {}
        (for [[k v] m]
          [k (f v)])))

(defn regex?
  [v]
  (isa? (type v) java.util.regex.Pattern))


(defn StackTraceElement->map
  [^StackTraceElement o]
  {:class-name (.getClassName o)
   :file-name (.getFileName o)
   :method-name (.getMethodName o)
   :line-number (.getLineNumber o)})

(defn get-stack
  []
  (mapv StackTraceElement->map
        (.getStackTrace (Exception. "get-stack"))))

(defmacro with-op-meta
  [& body]
  `(let [r# (do ~@body)]
     (vary-meta r#
                merge
                {:stack (get-stack)
                 :plan r#
                 :form ut/*enclosing-form*})))

(defn id-merge
  [m v]
  (let [m' (assoc m :$ v)]
    (if-let [id (:id v)]
      (assoc m' id v)
      m')))

(defn let+***
  [v]
  (cond (some #{'$} (tree-seq sequential? seq v)) v
        (list? v) (concat v ['$])
        :else (list v '$)))

(defn let+**
  [[b v]]
  (if (and (seq? v)
           (= (first v) '+>>))
    (let [[_ v1 & vrest] v]
      (concat `(~'$gm$ (id-merge ~'$gm$
                                 ~(wrap-bind-form v1 v1))
                ~b ~'$gm$
                {~'$ :$} ~'$gm$) 
              (mapcat (fn [vv]
                        `(~'$gm$ (id-merge ~'$gm$
                                           ~(wrap-bind-form vv
                                                            (let+*** vv)))
                          ~b ~'$gm$
                          {~'$ :$} ~'$gm$))
                      vrest)))
    [b (wrap-bind-form v v)]))

(defn- let+*
  [bindings]
  (->> bindings
       (partition 2)
       (mapcat let+**)
       vec
       (into ['$gm$ {}])))

(defmacro let+
  [bindings & exprs]
  (let [b (let+* bindings)]
    `(let ~b ~@exprs)))

(defn prune-plan*
  [v]
  (if (and (map? v)
           (-> v :inputs not-empty))
    (assoc v :inputs :PRUNED)
    v))

(defn prune-plan
  [plan]
  (update plan
          :inputs
          (partial walk/prewalk
                   prune-plan*)))

(defn id-attrs->id
  [id-attrs]
  (if (keyword? id-attrs)
    id-attrs
    (:id id-attrs)))

(defn id-attrs->attrs
  [id-attrs]
  (if (map? id-attrs)
    (dissoc id-attrs :id)
    {}))

(defn id-attrs->ctrl-inputs
  [id-attrs]
  (if (map? id-attrs)
    (:ctrl-inputs id-attrs [])
    []))

(defn- de-ns-clj-core
  [sym]
  (cond (not (symbol? sym)) sym
        (= "clojure.core" (namespace sym)) (symbol (name sym))
        :else sym))

(defn- de-ns-clj-core-walk
  [root]
  (clojure.walk/prewalk de-ns-clj-core root))

(defn pr-code
  [c]
  (clojure.pprint/with-pprint-dispatch clojure.pprint/code-dispatch
    (binding [clojure.pprint/*print-miser-width* 60
              clojure.pprint/*print-right-margin* 79]
      (clojure.pprint/pprint
       (de-ns-clj-core-walk c)))))
