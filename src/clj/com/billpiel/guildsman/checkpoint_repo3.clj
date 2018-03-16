(ns com.billpiel.guildsman.checkpoint-repo3
  (:require [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [honeysql.core :as hny]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))

#_ (def dbs (atom {}))
(defonce dbs (atom {}))
(defonce branches (atom {}))
(defonce stores (atom {}))

(defn now-sql-ts []
  (java.sql.Timestamp. (System/currentTimeMillis)))

(defn- mk-db-spec
  [path]
  {:classname   "org.h2.Driver"
   :subprotocol "h2:file"
   :subname     path
   :user        "sa"
   :password    ""})

(defn- get-db-conn!
  [path]
  (or (@dbs path)
      (do (clojure.java.io/make-parents path)
          (let [db (-> path
                       mk-db-spec
                       j/get-connection)]
            (swap! dbs assoc path db)
            (init-db! db)
            {:connection db
             :db-path path}))))

(defn- ensure-db-conn!
  [{:keys [connection db-path] :as db}]
  (if (some-> connection .isClosed not)
    db
    (get-db-conn! db-path)))

(defn- exec-sql-resource!
  [db path]
  (->> path
       io/resource
       slurp
       (j/db-do-prepared (ensure-db-conn! db))))

(defn insert-single!
  [db table col-val-map]
  (->> {:insert-into table
        :columns (keys col-val-map)
        :values [(vals col-val-map)]}
       hny/format
       (j/execute! (ensure-db-conn! db))))


(defn- create-table-branches!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-branches.sql"))

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

(defn- open-mvstore!
  [path]
  (clojure.java.io/make-parents path)
  (MVStore/open path))

(defn- get-mvstore!
  [path]
  (or (@stores path)
      (do (clojure.java.io/make-parents path)
          (let [store (open-mvstore! path)]
            (swap! stores assoc path store)
            store))))

(defn- init-db!
  [db]
  (create-table-branches! db))

(defn- insert-branch-to-db!
  [db {:keys [id steps parent-chkpt-id parent-offset-steps ws-name]}]
  (let [now (now-sql-ts)]
    (insert-single! :branches
                    {:id id 
                     :created now 
                     :updated now 
                     :latest_step steps 
                     :parent_chkpt parent-chkpt-id
                     :parent_offset_steps parent-offset-steps
                     :ws_name ws-name})))

(defn- mk-init-branch!
  [ws-name wf-name repo-path plans {:keys [id steps parent-offset-steps]}]
  (let [br-id (gen-branch-id)
        ;; TODO windows compatible paths
        br-store-path (str repo-path "/" br-id)
        store (get-mvstore! (str br-store-path "/branch.db"))
        misc-mvm (open-map! "misc" store)]
    (.put misc-mvm "plan" (npy/fast-freeze plans))
    {:id br-id
     :repo-path repo-path
     :path br-store-path
     :store store
     :mvms {:log (open-map! "log" store)
            :misc misc-mvm}
     :plans plans
     :parent-chkpt-id id
     :parent-offset-steps ((fnil + 0 0) steps parent-offset-steps)
     :parent-offset-elapsed-sec 0
     :steps 0
     :log (sorted-map)
     :ws-name ws-name
     :wf-name wf-name}))

(defn mk-new-branch!
  [ws-name wf-name plans {:keys [db path] :as repo} & [chkpt]]
  (let [{:keys [id] :as br} (mk-init-branch! ws-name
                                             wf-name
                                             path
                                             plans
                                             chkpt)
        br-atom (atom br)]
    (swap! branches assoc id br-atom)
    (insert-branch-to-db! db br)
    br-atom))

(defn- update-branch-steps!
  [db id steps]
  (->> {:update :branches
        :set {:steps steps}
        :where [:= :id id]}
       hny/format
       (j/execute! (ensure-db-conn! db))))

(defn- append-to-log*
  [{:keys [log steps] :as branch} pos-step entry]
  (assoc branch
         :log (assoc log pos-step entry)
         :steps (max steps pos-step)))

(defn append-to-log!
  [branch-atom pos-step chkpt-id fetched]
  (let [entry {:step pos-step :chkpt chkpt-id :fetched fetched}
        {:keys [id path mvms store db]} @branch-atom]
    (swap! branch-atom append-to-log*
           pos-step entry)
    (.put (:log mvms) pos-step (npy/fast-freeze entry))
    ;; TODO use max steps
    (.commit store)
    (update-branch-steps! db id pos-step))
  true)



#_(get-db-conn! "/tmp/test4.db")

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




















