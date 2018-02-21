(ns com.billpiel.guildsman.train-db
  (:require [clojure.core.async :as a]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))

;; - wf pushes to train db
;; - dev uses train db
;; - save checkpoints
;; - restore checkpoints
;; - def db/repo
;;  - how to set ws state/branch??

;; - write all sorts of stuff to session branch: start/end, status, plan
;; - split out some props from branches
;; - don't use branch count as id (branches may get deleted)

;; (def db  (volatile! nil))

(defonce db (volatile! nil))

#_ (-> @db :maps :branches .keyList)

#_ (-> @db :log)

#_ (-> @db :maps :log (.get 34) npy/thaw)

#_ (-> @db :log mvm->sorted-map type)

(defn- mvm->sorted-map
  [mvm]
  (into (sorted-map)
        (for [[k v] mvm]
          [k v])))

(defn- mk-init-db
  [store]
  {:store store
   :branch nil ;; {:id # :count 0 :indexed -1 :log-id ...-log}
   :log {}
   :maps {:branches (.openMap store "branches")
          :log nil
          :indices {}}})

(defn open-db! [path]
  (locking db
    (when-not (nil? @db)
      (throw (Exception. "A train-db is already open. Close it before opening.")))
    (if-let [store (MVStore/open path)]
      (vreset! db (mk-init-db store))
      (throw (Exception. (str "Could not open train-db " path))))))

(defn close-db! []
  (locking db
    (-> @db :store .close)
    (vreset! db nil)))

(defn- mk-default-branch
  [br-id {:keys [parent-branch parent-step]}]
  {:id br-id
   :step 0
   :indexed -1
   :log-id (-> br-id
               name
               (str "-log"))
   :parent-branch parent-branch
   :parent-step parent-step
   :created (System/currentTimeMillis)})

(defn- query-db-for-branch
  [store branches br-id & [defaults]]
  (let [br (or (.get branches (name br-id))
               (mk-default-branch br-id defaults))
        log-mv (or (.openMap store (:log-id br)))]
    {:branch br
     :log-mv log-mv
     ;; make sure it's a clj map
     :log (mvm->sorted-map log-mv)}))

(defn- set-branch!
  [db' {:keys [branch log-mv log]}]
  (-> db'
      (assoc :branch branch
             :log log)
      (assoc-in [:maps :log] log-mv)))

(defn- select-branch!
  [br-id & [defaults]]
  (let [{:keys [branch store maps]} @db]
    (if (= (:id branch) br-id)
      true
      (let [br (query-db-for-branch store
                                    (:branches maps)
                                    br-id
                                    defaults)]
        (vswap! db set-branch! br)
        br))))

(defn- save-branch-to-branches!
  [{:keys [id] :as br}]
  (-> @db :maps :branches (.put id (npy/freeze br)))
  br)

(defn mk-session-branch-id
  []
  (keyword (str "br"
                (or (some-> @db :maps :branches .size inc)
                    1))))

(defn init-session-branch!
  ([] (init-session-branch! nil nil))
  ([parent-branch parent-step]
   (locking db
     (-> (mk-session-branch-id)
         (select-branch! {:parent-branch parent-branch
                          :parent-step parent-step})
         :branch
         save-branch-to-branches!))))

(defn append-to-log
  [{:keys [step] :as entry}]
  (locking db
    (-> @db
        :maps
        :log
        (.put step (npy/freeze entry)))
    (vswap! db
            update :log
            assoc step entry)
;; TODO update branch `steps` value too

    )
  entry)



#_ (
    (open-db! "/tmp/store6")

    (close-db!)

    (init-session-branch!)

    (append-to-log {:step 34 :data :hoo})

    
    (init-session-branch! :p1 222)
    )
