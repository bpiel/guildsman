(ns com.billpiel.guildsman.special-utils
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.macros :as mcro]
            [com.billpiel.guildsman.common :as com]
            [com.billpiel.guildsman.dx :as dx]
            [com.billpiel.guildsman.util :as ut]
            [clojure.core.async :as a]
            [aleph.http :as ah]
            [manifold.stream :as ms])
  (:import [com.billpiel.guildsman.common Graph]))

(defn ->op-node
  [^Graph g x]
  (cond (com/Op? x) x
        (keyword? x) ((gr/id->node g) (name x))
        (string? x) ((gr/id->node g) x)
        (:op x) (opn/get-op-by-plan g x)
        (:macro x) (->> x
                        (mcro/macro-plan->op-plan g)
                        (opn/get-op-by-plan g))))

(defn search-ops
  [^Graph g qry]
  (or (when (ut/regex? qry)
        (let [id->node (gr/id->node g)]
          (->> id->node
               keys
               (filter (partial re-find qry))
               (mapv id->node))))
      (when-let [r (->op-node g qry)]
        [r])))

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
  [name-sym {:keys [id attrs inputs assoc-scopes? with-op-meta? with-push-id-to-scopes?] :as attr-map} body]
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
                         ~@inputs'])
        steps (remove nil?
                      [(if (:ctrl-inputs-attr? attr-map true)
                         `(assoc (do ~@body)
                                 :ctrl-inputs ~@ctrl-inputs')
                         `(do ~@body))
                       (when assoc-scopes?
                         `sc/assoc-scopes-to-plan)
                       (when with-push-id-to-scopes?
                         `(sc/with-push-both-scopes (or ~'id ~id)))
                       (when with-op-meta?
                         `ut/with-op-meta)])]
    `(~arg-list
      (->> ~@steps))))

(defn defn-comp-op-fn-attr-map
  [name-sym {:keys [doc attrs inputs]}]
  {:doc (dx/dx [doc
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
            :with-push-id-to-scopes? true}
           attrs-map)
    body))

(defmacro defn-comp-macro-op
  [name-sym attrs-map & body]
  (defn-comp-op* name-sym
    (merge {:ctrl-inputs-attr? true
            :assoc-scopes? true
            :with-op-meta? true
            :with-push-id-to-scopes? false}
           attrs-map)
    body))

(defn dl-async!
  [url dest]
  (let [counter (atom 0)
        os (clojure.java.io/output-stream dest)
        is (ah/get url {:raw-stream? true})
        body (:body @is)
        cl (some-> "content-length" ((:headers @is)) Long/parseLong)]
    (if (= (type body) (type (byte-array 0)))
      [(a/thread
         (.write os body)
         (.close os)
         (swap! counter + (count body))
         true)
       counter
       cl]
      [(a/thread
         @(ms/consume (fn [bcount] (swap! counter + bcount))
                      (ms/map
                       #(let [ba (byte-streams/to-byte-array %)]
                          (.write os ba)
                          (count ba))
                       body))
         (.close os)
         true)
       counter
       cl])))

(defn dl-async-pr!*
  [total c-atom]
  (let [c @c-atom]
    (println (format "%.0f%% -- %d bytes received"
                     (-> c
                         (/ total)
                         (* 100.))
                     c))))

(defn dl-async-pr!
  [url dest]
  (a/go
    (try
      (let [[ch counter size] (dl-async! url dest)]
        (println (format
                  "Downloading %s
to %s
%d bytes expected
"
                  url dest size))
        (while (not= ch (second (a/alts! [ch (a/timeout 1000)])))
          (dl-async-pr!* size counter))
        (dl-async-pr!* size counter)
        (println "done")
        @counter)
      (catch Exception e
        (clojure.pprint/pprint e)
        e))))
