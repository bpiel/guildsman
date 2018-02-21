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

#_ (def db  (volatile! nil))

(defonce db (volatile! nil))

#_ (-> @db :mvms :branches .keyList)

#_ (-> @db :log)

#_ (-> @db :mvms :log (.get 34) npy/thaw)

#_ (-> @db :log mvm->sorted-map type)

(defn- open-map
  [map-name & [store]]
  (-> store
      (or (:store @db))
      (.openMap map-name)))

(defn- find-next-branch-id* [n] (str "br" n))

(defn- find-next-branch-id!
  [db-atom]
  (let [db' @db-atom
        br-base-mvm (-> db' :mvms :branches :base)
        [id idn] (loop [idn (:next-id db')]
                (let [id' (find-next-branch-id* idn)]
                  (if (.containsKey br-base-mvm id')
                    (recur (inc idn))
                    [id' idn])))]
    (vswap! db-atom assoc :next-id (inc idn))
    id))

(defn- mk-init-db
  [store]
  (let [br-base-mvm (open-map "branches-base" store)]
    {:store store
     :next-id (-> br-base-mvm .size inc)
     :selected {:branch nil    ;; {:id # :count 0 :indexed -1 :log-id ...-log}
                :log nil}
     :mvms {:branches {:base (open-map "branches-base" store)
                       :step (open-map "branches-step" store)
                       :indexed (open-map "branches-indexed" store)}
            :log nil}}))

(defn open-db! [path]
  (locking db
    (when-not (nil? @db)
      (throw (Exception. "A train-db is already open. Close it before opening.")))
    (if-let [store (MVStore/open path)]
      (vreset! db (mk-init-db store))
      (throw (Exception. (str "Could not open train-db " path))))))

(defn close-db! []
  (locking db
    (when-let [store (:store @db)]
      (when-not (.isClosed store)
        (.close store)))
    (vreset! db nil)))

(defn- mk-default-branch
  [br-id {:keys [parent-branch parent-step]}]
  {:id br-id
   :step 0
   :indexed -1
   :parent-branch parent-branch
   :parent-step parent-step
   :created (System/currentTimeMillis)})

(defn- thaw-log
  [mvm]
  (into (sorted-map)
        (for [[k v] mvm]
          [k (npy/thaw v)])))

(defn- mk-branch-log-id [br-id] (str br-id "-log"))

(defn- get-branch
  [db' br-id]
  (let [{:keys [base step indexed]} (-> db'
                                        :mvms
                                        :branches)]
    (when-let [br-base (.get base br-id)]
      (assoc (npy/thaw br-base)
             :step (.get step br-id)
             :indexed (.get indexed br-id)))))

(defn- get-branch+log
  [{:keys [store] :as db'} br-id & [defaults]]
  (let [br (or (get-branch db' br-id)
               (mk-default-branch br-id defaults))
        log-mvm (->> br-id
                     mk-branch-log-id
                     (.openMap store))]
    {:branch br
     :log-mvm log-mvm
     ;; make sure it's a clj sorted-map
     :log (thaw-log log-mvm)}))

(defn- set-branch!
  [db' {:keys [branch log-mvm log]}]
  (-> db'
      (assoc-in [:selected :branch] branch)
      (assoc-in [:selected :log] log)
      (assoc-in [:mvms :log] log-mvm)))

(defn- select-branch!
  [br-id & [defaults]]
  (let [{:keys [branch] :as db'} @db]
    (if (= (:id branch) br-id)
      true
      (let [br (get-branch+log db'
                               br-id
                               defaults)]
        (vswap! db set-branch! br)
        (:branch br)))))

(defn- save-branch-to-branches!*
  [mvms id k v]
  (-> mvms :branches k (.put id v)))

(defn- save-branch-to-branches!
  [{:keys [id step indexed] :as br} db-atom]
  (let [br' (dissoc br :step :indexed)
        {:keys [mvms]} @db-atom
        f (partial save-branch-to-branches!* mvms id)]
    (f :base (npy/freeze br'))
    (f :step step)
    (f :indexed indexed))
  br)

(defn init-session-branch!
  ([] (init-session-branch! nil nil))
  ([parent-branch parent-step]
   (locking db
     (-> db
         find-next-branch-id!
         (select-branch! {:parent-branch parent-branch
                          :parent-step parent-step})
         (save-branch-to-branches! db)))))

(defn append-to-log
  [{:keys [step] :as entry}]
  (locking db
    (let [{:keys [mvms selected]} @db]
      (-> mvms
          :log
          (.put step (npy/freeze entry)))
      (save-branch-to-branches!* mvms
                                 (-> selected :branch :id)
                                 :step step))
    (vswap! db
            update :log
            assoc step entry))
  entry)

(defn load-branch!
  [br-id]
  (select-branch! br-id))



#_ (
    (open-db! "/tmp/store2")

    (close-db!)

    (load-branch! "br1")

    (load-branch! "br3")
    
    (init-session-branch!)

    (append-to-log {:step 2 :data :hi})
    
    (append-to-log {:step 34 :data :hoo})

    (clojure.pprint/pprint @db)
    
    (init-session-branch! :p1 222)
    )
