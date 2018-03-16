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
  [path])

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

#_
(defn close-all
  []
  (doseq [[_ {:keys [store branches]}] @repos]
    (.close store)
    (doseq [[_ b] @branches]
      (.close (:store @b))))
  (reset! repos {}))

#_ (close-all)

#_(defn- open-map!
  [map-name store]
  (.openMap store map-name))

#_(defn- open-mvstore!
  [path]
  (clojure.java.io/make-parents path)
  (MVStore/open path))

#_(defn- get-mvstore!
  [path]
  (or (@stores path)
      (do (clojure.java.io/make-parents path)
          (let [store (open-mvstore! path)]
            (swap! stores assoc path store)
            store))))

(defn- init-db! [db]
  (create-table-branches! db))

(defn- init-branch-db! [db]
  (create-table-log! db)
  (create-table-misc! db))

(defn- insert-branch-to-db!
  [db {:keys [id steps parent-chkpt-id parent-offset-steps ws-name]}]
  (let [now (now-sql-ts)]
    (insert-single! :branches
                    {:id id 
                     :created now 
                     :updated now 
                     :steps steps 
                     :parent_chkpt parent-chkpt-id
                     :parent_offset_steps parent-offset-steps
                     :ws_name ws-name})))

(defn- insert-misc-to-branch-db!
  [db k v]
  (insert-single! :misc
                  {:k k
                   :v (npy/fast-freeze v)}))

(defn- insert-log-entry-to-branch-db!
  [db {:keys [step chkpt] :as entry}]
  (insert-single! :log
                  {:step step
                   :chkpt_id chkpt
                   :entry (npy/fast-freeze entry)}))

(defn- mk-init-branch!
  [{:keys [db] :as repo} ws-name wf-name plans {:keys [id steps parent-offset-steps]}]
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
     :log (sorted-map)
     :ws-name ws-name
     :wf-name wf-name}))

(defn mk-new-branch!
  [ws-name wf-name plans {:keys [db path] :as repo} & [chkpt]]
  (let [{:keys [id] :as br} (mk-init-branch! repo
                                             ws-name
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
        {:keys [id path db repo]} @branch-atom]
    (swap! branch-atom append-to-log*
           pos-step entry)
    (insert-log-entry-to-branch-db! db entry)
    ;; TODO use max steps
    (update-branch-steps! (:db repo) id pos-step))
  true)

(defn- insert-chkpt-to-db!
  [db chkpt-id prefix exists-local? br-id step wf-name protected?]
  (let [now (now-sql-ts)]
    (insert-single! :chkpts
                    {:id chkpt-id
                     :branch_id br-id
                     :step step
                     :created now 
                     :updated now
                     :wf_name wf-name
                     :exists_local exists-local?
                     :protected protected?})))

(defn- prep-vari-for-insert
  [chkpt-id {:keys [id shapes dtype]}]
  {:chkpt_id chkpt-id
   :vari_id id
   :shapes (str shapes)
   :dtype (name dtype)})

(defn- insert-chkpt-varis-to-db!
  [db chkpt-id varis]
  (->> varis
       (mapv (partial prep-vari-for-insert chkpt-id))
       (insert-multi! :chkpt_varis)))

(defn add-chkpt!
  [{:keys [id repo] :as branch} chkpt-id prefix exists-local? step wf-name varis]
  (let [db (repo :db)]
    (insert-chkpt-to-db! db chkpt-id prefix exists-local? id step wf-name false)
    (insert-chkpt-varis-to-db! db chkpt-id varis)
    true))

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
