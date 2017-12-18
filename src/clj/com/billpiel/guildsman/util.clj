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



(defn- spacer [n] (apply str (repeat n " ")))

(defn- dx-stack-text*
  [words width col indent]
  (loop [agg []
         [head & tail :as body] words
         col' col]
    (if head
      (let [hc (and (string? head) (count head))]
        (cond (= head ::br) (recur (conj agg "\n\n")
                                   tail
                                   0)
              (>= indent width) (recur (conj agg head)
                                       tail
                                       (+ col' hc))
              (< col' indent) (recur (conj agg (spacer (- indent col')))
                                     body
                                     indent)
              (> hc width) (recur (conj agg "\n" head "\n")
                                  tail
                                  0)
              (> (+ hc col') width) (recur (conj agg "\n")
                                           body
                                           0)
              (= col' indent) (recur (conj agg head)
                                     tail
                                     (+ col' hc))
              :else (recur (conj agg " " head)
                           tail
                           (+ col' hc 1))))
      [agg "\n"])))

(defn- dx-stack-text
  [width indent col doc]
  ($- -> doc
      (clojure.string/split #"\n\n+")
      (interleave (repeat ::br))
      drop-last
      (map #(if (string? %)
              (clojure.string/split % #"\s+")
              %)
           $)
      flatten
      (dx-stack-text* width col indent)
      flatten
      (apply str $)))

(defn restv [v] (-> v rest vec))

(defn- dx->str
  [doc]
  (cond (string? doc) doc
        (keyword? doc) (name doc)
        (symbol? doc) (name doc)
        (number? doc) (str doc)
        :else nil))

#_ (def dx-element nil)
(defmulti dx-element
  (fn [mode width indent doc] mode))

(defn dx-stack-element
  [width indent col doc]
  (let [doc' (dx->str doc)]
    (cond (string? doc') (dx-stack-text width indent col doc')
          (vector? doc) (dx-element :section width indent doc)
          (nil? doc) ""
          :else (throw (Exception. (str "what's this? " doc))))))

(defn dx-section-element
  [width indent doc]
  (let [doc' (dx->str doc)]
    (cond (string? doc') (dx-stack-text width indent 0 doc')
          (and (vector? doc)
               (not-empty doc)) (dx-element :table width indent doc)
          (empty? doc) []
          (nil? doc) []
          :else (throw (Exception. (str "what's this? " doc))))))

(defn dx-prep-section-contents**
  [[head tail] item]
  (let [head' (or head [])
        tail' (or tail [])]
    (if (vector? item)
      [head' (conj (or tail' []) item)]
      [(conj head' tail' item) []])))

(defn not-empty2
  [v]
  (when (or (-> v nil? not)
            (not-empty v))
    v))

(defn dx-prep-section-contents*
  [doc]
  (let [[head tail] (reduce dx-prep-section-contents**
                            [] doc)]
    (->> (conj head tail)
         (keep not-empty2))))

(defn dx-prep-section-contents
  [doc]
  (if-let [s (dx->str doc)]
    [s]
    (dx-prep-section-contents* doc)))

(defn dx-prep-stack-contents
  [doc]
  (if (vector? doc)
    doc
    [doc]))

(defn dx-element-stack
  [width indent doc col & [inter-lines?]]
  (let [doc' (dx-prep-stack-contents doc)
        out [(dx-stack-element width indent col (first doc'))
             (mapv (partial dx-stack-element
                            width indent 0)
                   (restv doc'))]]
    (if inter-lines?
      (interleave out (repeat "\n"))
      out)))

(defmethod dx-element :stack
  [_ width indent doc]
  (dx-element-stack width indent doc 0 (= indent 0)))

(defmethod dx-element :section
  [_ width indent [title & tail]]
  ["\n"
   (spacer indent)
   (dx->str title) "\n"
   (mapv (partial dx-section-element
                  width (+ indent 2))
         (dx-prep-section-contents (vec tail)))
   "\n"])

(defn dx-get-left-col-width
  [rows]
  (->> rows
       (map first)
       (map dx->str)
       (map count)
       (apply max 0)))

(defn dx-table-row
  [width indent left-col-width [head & tail]]
  (let [h' (dx->str head)
        hc (count h')
        delim (str (spacer (- left-col-width hc)) " - ")]
    [(spacer indent) h' delim
     (->> (dx-element-stack width
                        (+ indent hc (count delim))
                        (vec tail)
                        (+ indent hc (count delim)))
          flatten
          (apply str)
          clojure.string/trim)
     "\n"]))

(defmethod dx-element :table
  [_ width indent doc]
  (let [left-col-width (dx-get-left-col-width doc)]
    (mapv (partial dx-table-row
                   width indent left-col-width)
          doc)))

(defn dx-remove-extra-lines [s]
  (clojure.string/replace s #"\n\n+" "\n\n"))

(defn dx
  [doc & [width indent]]
  (->> doc
       (dx-element
        :stack
        (or width 75)
        (or indent 0))
       flatten
       (apply str "\n")
       dx-remove-extra-lines))

(defn defn-comp-op-arities
  [name-sym {:keys [id attrs inputs]}]
  (let [attrs' (some-> attrs keys not-empty)
        inputs' (some->> inputs (map first) not-empty)]
    (->> [(when (and id attrs' inputs')
            `([~'id-attrs ~@inputs']
              (~name-sym (ut/id-attrs->id ~'id-attrs)
                       (ut/id-attrs->attrs ~'id-attrs)
                       ~@inputs')))
          (when inputs'
            `([~@inputs']
              (~name-sym nil {} ~@inputs')))]
         (remove nil?))))

(defn defn-comp-op-main*
  [name-sym {:keys [id attrs inputs] :as attr-map} body]
  (let [attrs' (some-> attrs keys not-empty)
        inputs' (some->> inputs (map first) not-empty)
        ctrl-inputs' (when (:ctrl-inputs-attr? attr-map true)
                       '(ctrl-inputs))
        arg-list (cond (and id attrs' inputs')
                       `[~'id
                         {:keys [~@attrs' ~@ctrl-inputs']}
                         ~@inputs']
                       (and id attrs')
                       `[~'id
                         {:keys [~@attrs' ~@ctrl-inputs']}]
                       (and id inputs' ctrl-inputs')
                       `[~'id
                         {:keys [~@ctrl-inputs']}
                         ~@inputs'])]
    `(~arg-list
      (sc/with-push-both-scopes (or ~'id ~id)
        (sc/assoc-scopes-to-plan
         (ut/with-op-meta
           (assoc (do ~@body)
                  :ctrl-inputs ~@ctrl-inputs')))))))

(defn defn-comp-op-fn-attr-map
  [name-sym {:keys [doc attrs inputs]}]
  {:doc (dx [doc
             (when (not-empty inputs)
               (into ['inputs] inputs))
             (when (not-empty attrs)
               (into ['attrs] (mapv vec attrs)))]
            75)})

(defn- defn-comp-op*
  [name-sym attrs-map body]
  `(defn ~name-sym
     ~(defn-comp-op-fn-attr-map name-sym attrs-map)
     ~@(defn-comp-op-arities name-sym attrs-map)
     ~(defn-comp-op-main* name-sym attrs-map body)))

(defmacro defn-comp-op
  [name-sym attrs-map & body]
  (defn-comp-op* name-sym
    (merge {:ctrl-inputs-attr? true
            :assoc-scopes? false
            :with-op-meta? true
            :with-push-id-to-scopes true}
           attrs-map)
    body))

(defmacro defn-comp-macro-op
  [name-sym attrs-map & body]
  (defn-comp-op* name-sym
    (merge {:ctrl-inputs-attr? true
            :assoc-scopes? true
            :with-op-meta? true
            :with-push-id-to-scopes true}
           attrs-map)
    body))



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
