(ns com.billpiel.guildsman.checkpoint-repo3
  (:require [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [honeysql.core :as hny]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))

#_ (def dbs (atom {}))
(defonce dbs (atom {}))
(defonce stores (atom {}))

(defn- mk-db-spec
  [path]
  {:classname   "org.h2.Driver"
   :subprotocol "h2:file"
   :subname     path
   :user        "sa"
   :password    ""})

(defn- exec-sql-resource!
  [db path]
  (->> path
       io/resource
       slurp
       (j/db-do-prepared {:connection db})))

(defn- create-table-branches!
  [db]
  (exec-sql-resource! db "sql/create-table-branches.sql"))

(defn- gen-branch-id []
  (str "br-" (java.util.UUID/randomUUID)))


(defn gen-chkpt-id []
  (str "chkpt-" (java.util.UUID/randomUUID)))

#_(j/query {:connection (@dbs "/tmp/test4.db")}
         (hny/format {:select [:*]
                      :from [:branches]}))

#_
(defn close-all
  []
  (doseq [[_ {:keys [store branches]}] @repos]
    (.close store)
    (doseq [[_ b] @branches]
      (.close (:store @b))))
  (reset! repos {}))

#_ (close-all)

(defn- open-map!
  [map-name store]
  (.openMap store map-name))

(defn- open-mvstore
  [path]
  (clojure.java.io/make-parents path)
  (MVStore/open path))

(defn- init-db!
  [db]
  (create-table-branches! db))

(defn- get-db-conn!
  [path]
  (or (@dbs path)
      (do (clojure.java.io/make-parents path)
          (let [db (-> path
                       mk-db-spec
                       j/get-connection)]
            (swap! dbs assoc path db)
            (init-db! db)
            db))))

(defn mk-new-branch!
  [plans {:keys [db] :as repo} & [chkpt]]
  )

@dbs


(get-db-conn! "/tmp/test4.db")

#_ (do
     (defn open-repo! [path]
       (if-let [repo (@repos path)]
         repo
         (if-let [store (open-mvstore (str path "/repo.db"))]
           (let [repo (mk-init-repo! path store)]
             (swap! repos assoc path repo)
             repo)
           (throw (Exception. (str "Could not open train-repo " path))))))


     (defn mk-new-branch!
       [plans {:keys [path] :as repo} & [chkpt]]
       (let [branch (mk-init-branch! path plans chkpt)
             branch-atom (atom branch)]
         (swap! (:branches repo)
                assoc (:id branch) branch-atom)
         branch-atom))

     (defn append-to-log!
       [branch-atom pos-step chkpt-id fetched]
       (let [entry {:step pos-step :chkpt chkpt-id :fetched fetched}
             {:keys [path mvms store]} @branch-atom]
         (swap! branch-atom append-to-log*
                pos-step entry)
         (.put (:log mvms) pos-step (npy/fast-freeze entry))
         ;; TODO use max steps
         (.put (:props mvms) "step" pos-step)
         (.commit store)
         (def x1 [path pos-step]))
       true))
