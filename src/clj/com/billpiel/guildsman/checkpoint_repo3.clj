(ns com.billpiel.guildsman.checkpoint-repo3
  (:require [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [honeysql.core :as hny]
            [taoensso.nippy :as npy]))

#_ (def dbs (atom {}))
(defonce dbs (atom {}))
(defonce branches (atom {}))
(defonce repos (atom {}))

(defn now-sql-ts []
  (java.sql.Timestamp. (System/currentTimeMillis)))

(defn- mk-db-spec
  [path]
  {:classname "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname path})

(declare init-db!)

(defn- get-db-conn!
  [path]
  (or (@dbs path)
      (do (clojure.java.io/make-parents path)
          (let [db {:connection (-> path
                                    mk-db-spec
                                    j/get-connection)
                    :db-path path}]
            (swap! dbs assoc path db)
            (init-db! db)
            db))))

(defn get-repo!
  [path]
  (or (@repos path)
      (do (clojure.java.io/make-parents path)
          (let [repo {:db (get-db-conn! (str path "/repo.db"))
                      :path path}]
            (swap! repos assoc path repo)
            repo))))

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

(defn insert-multi!
  [db table col-val-maps]
  (let [ks (-> col-val-maps first keys)]
    (->> {:insert-into table
          :columns ks
          :values (mapv (apply juxt ks)
                        col-val-maps)}
         hny/format
         (j/execute! (ensure-db-conn! db)))))

(defn- create-table-branches!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-branches.sql"))

(defn- create-table-chkpts!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-chkpts.sql"))

(defn- create-table-chkpts-varis!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-chkpts-varis.sql"))

(defn- create-table-log!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-log.sql"))

(defn- create-table-misc!
  [db]
  (exec-sql-resource! (ensure-db-conn! db) "sql/create-table-misc.sql"))

(defn- gen-branch-id []
  (str "br-" (java.util.UUID/randomUUID)))


(defn gen-chkpt-id []
  (str "chkpt-" (java.util.UUID/randomUUID)))

#_(j/query cn1
         (hny/format {:select [:*]
                      :from [:branches]}))

(defn close-all
  []
  (doseq [[_ {:keys [connection]}] @dbs]
    (.close connection))
  (reset! dbs {}))

#_ (close-all)

(defn- init-db! [db]
  (create-table-branches! db)
  (create-table-chkpts! db)
  (create-table-chkpts-varis! db))

(defn- init-branch-db! [db]
  (create-table-log! db)
  (create-table-misc! db))

(defn- insert-branch-to-db!
  [db {:keys [id steps parent-chkpt-id parent-offset-steps ws-name]}]
  (let [now (now-sql-ts)]
    (insert-single! db :branches
                    {:id id 
                     :created now 
                     :updated now 
                     :steps steps 
                     :parent_chkpt parent-chkpt-id
                     :parent_offset_steps parent-offset-steps
                     :ws_name ws-name})))

(defn- insert-misc-to-branch-db!
  [db k v]
  (insert-single! db :misc
                  {:k k
                   :v (npy/fast-freeze v)}))

(defn- insert-log-entry-to-branch-db!
  [db {:keys [step chkpt] :as entry}]
  (insert-single! db :log
                  {:step step
                   :chkpt_id chkpt
                   :entry (npy/fast-freeze entry)}))

(defn- mk-init-branch!
  [{:keys [db path] :as repo} ws-name wf-name plans {:keys [id steps parent-offset-steps]}]
  (let [br-id (gen-branch-id)
        ;; TODO windows compatible paths
        br-path (str (:path repo) "/" br-id)
        branch-db (get-db-conn! (str br-path "/branch.db"))]
    (init-branch-db! branch-db)
    (insert-misc-to-branch-db! branch-db "plans" plans)
    {:id br-id
     :repo repo
     :path br-path
     :db branch-db
     :plans plans
     :parent-chkpt-id id
     :parent-offset-steps ((fnil + 0 0) steps parent-offset-steps)
     :parent-offset-elapsed-sec 0
     :steps 0
     :final-chkpt? false
     :last-chkpt nil
     :log (sorted-map)
     :ws-name ws-name
     :wf-name wf-name}))

(defn mk-new-branch!
  [ws-name wf-name plans {:keys [db] :as repo} & [chkpt]]
  (let [{:keys [id] :as br} (mk-init-branch! repo
                                             ws-name
                                             wf-name
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
  [{:keys [log steps last-chkpt] :as branch} pos-step entry chkpt-id]
  (assoc branch
         :log (assoc log pos-step entry)
         :steps (max steps pos-step)
         ;; TODO set these in add-chkpt too
         :last-chkpt (or chkpt-id last-chkpt)
         :final-chkpt? (-> chkpt-id nil? not)))

(defn append-to-log!
  [branch-atom pos-step chkpt-id fetched]
  (let [entry {:step pos-step :chkpt chkpt-id :fetched fetched}
        {:keys [id path db repo]} @branch-atom]
    (swap! branch-atom append-to-log*
           pos-step entry chkpt-id)
    (insert-log-entry-to-branch-db! db entry)
    ;; TODO use max steps
    (update-branch-steps! (:db repo) id pos-step))
  true)


(defn- bool->sql [v]
  (if v 1 0))

(defn- sql->bool [v]
  (= v 1))

(defn- chkpt-db->clj
  [{:keys [id branch_id step created updated wf_name exists_local protected]}]
  {:id id
   :branch-id branch_id
   :step step
   :created created
   :updated updated
   :wf-name wf_name
   :exists-local? (sql->bool exists_local)
   :protected? (sql->bool protected)})

(defn- select-chkpt
  [db chkpt-id]
  (->> {:select [:*]
        :from [:chkpts]
        :where [:= :id chkpt-id]}
       hny/format
       (j/query db)
       first
       chkpt-db->clj))

(defn- insert-chkpt-to-db!
  [db chkpt-id prefix exists-local? br-id step wf-name protected?]
  (let [now (now-sql-ts)]
    (insert-single! db :chkpts
                    {:id chkpt-id
                     :branch_id br-id
                     :step step
                     :created now 
                     :updated now
                     :wf_name wf-name
                     :exists_local (bool->sql exists-local?)
                     :protected (bool->sql protected?)})))

(defn- prep-vari-for-insert
  [chkpt-id {:keys [id shapes dtypes]}]
  {:chkpt_id chkpt-id
   :vari_id id
   :shape (-> shapes first str)
   :dtype (-> dtypes first name)})

(defn- insert-chkpt-varis-to-db!
  [db chkpt-id varis]
  (->> varis
       (mapv (partial prep-vari-for-insert chkpt-id))
       (insert-multi! db :chkpts_varis)))

(defn- add-chkpt*
  [branch chkpt-id]
  (assoc branch
         :last-chkpt chkpt-id
         :final-chkpt? true))

(defn add-chkpt!
  [branch-atom chkpt-id prefix exists-local? step wf-name varis]
  (let [{:keys [id repo] :as branch} @branch-atom
        db (repo :db)]
    (swap! branch-atom add-chkpt* chkpt-id)
    (insert-chkpt-to-db! db chkpt-id prefix exists-local? id step wf-name false)
    (insert-chkpt-varis-to-db! db chkpt-id varis)
    true))

(defn get-chkpt
  [{:keys [db]} chkpt-id]
  (select-chkpt db chkpt-id))

(defn inspect-repo
  [path]
  (let [{:keys [db]} (get-repo! path)
        db' (ensure-db-conn! db)]
    {:branches (j/query db'
                        (hny/format {:select [:*]
                                     :from [:branches]}))
     :chkpts (j/query db'
                        (hny/format {:select [:*]
                                     :from [:chkpts]}))}))

#_(clojure.pprint/pprint  (inspect-repo "/tmp/repo1"))
