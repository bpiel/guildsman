(ns com.billpiel.guildsman.checkpoint-repo
  (:require [clojure.core.async :as a]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))



;; - wf pushes to train repo
;; - dev uses train repo
;; - save checkpoints
;; - restore checkpoints
;; - def repo/repo
;;  - how to set ws state/branch??

;; - how are repo / ws / wf connected ??????? <<=============================

;; - and what of remote!?!?!?


;; - write all sorts of stuff to session branch: start/end, status, plan
;; - split out some props from branches
;; - don't use branch count as id (branches may get deleted)

;; need to be able to lookup (chkpt,repo) => branch

#_ (def repo  (volatile! nil))

(defonce repos (atom {}))

(defonce branches (atom {}))

#_ (-> @repo :mvms :branches .keyList)

#_ (-> @repo :log)

#_ (-> @repo :mvms :log (.get 34) npy/thaw)

#_ (-> @repo :log mvm->sorted-map type)

(defn- open-map
  [map-name store]
  (.openMap store map-name))

(defn- find-next-branch-id* [n] (str "br" n))

(defn- find-next-branch-id!
  [repo-atom]
  (let [repo' @repo-atom
        br-base-mvm (-> repo' :mvms :branches :base)
        [id idn] (loop [idn (:next-id repo')]
                (let [id' (find-next-branch-id* idn)]
                  (if (.containsKey br-base-mvm id')
                    (recur (inc idn))
                    [id' idn])))]
    (swap! repo-atom assoc :next-id (inc idn))
    id))

#_(defn- mk-init-repo
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

(defn- mk-init-repo
  [path store]
  {:path path
   :store store
   :next-id (-> br-base-mvm .size inc)
   :mvms {;; maps to branch ids
          :chkpts (open-map "checkpoints" store)}
   ;; map of atoms??
   :branches {}})

(defn- mk-init-branch
  [repo br-store br-id]
  (let [log (open-map "branches-log" store)]
    {:repo repo
     :store store
     :id br-id
     :mvms {:base (open-map "base" store)
            :log (open-map "log" store)
            :chkpts (open-map "checkpoints" store)}
     :log (mvm->sorted-map log)}))

(defn open-repo! [path]
  (when-not (nil? (@repos path))
      (throw (Exception. "A train-repo is already open. Close it before opening.")))
    (if-let [store (MVStore/open path)]
      (swap! repos assoc path (mk-init-repo store))
      (throw (Exception. (str "Could not open train-repo " path)))))

(defn close-repo! [repo-key]
  (when-let [store (:store (@repos repo-key))]
      (when-not (.isClosed store)
        (.close store)))
    (swap! repos assoc repo-key nil))

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
  [repo' br-id]
  (let [{:keys [base step indexed]} (-> repo'
                                        :mvms
                                        :branches)]
    (when-let [br-base (.get base br-id)]
      (assoc (npy/thaw br-base)
             :step (.get step br-id)
             :indexed (.get indexed br-id)))))

(defn- get-branch+log
  [{:keys [store] :as repo'} br-id & [defaults]]
  (let [br (or (get-branch repo' br-id)
               (mk-default-branch br-id defaults))
        log-mvm (->> br-id
                     mk-branch-log-id
                     (.openMap store))]
    {:branch br
     :log-mvm log-mvm
     ;; make sure it's a clj sorted-map
     :log (thaw-log log-mvm)}))

(defn- set-branch!
  [repo' {:keys [branch log-mvm log]}]
  (-> repo'
      (assoc-in [:selected :branch] branch)
      (assoc-in [:selected :log] log)
      (assoc-in [:mvms :log] log-mvm)))

(defn- select-branch!
  [br-id & [defaults]]
  (let [{:keys [branch] :as repo'} @repo]
    (if (= (:id branch) br-id)
      true
      (let [br (get-branch+log repo'
                               br-id
                               defaults)]
        (swap! repo set-branch! br)
        (:branch br)))))

(defn- save-branch-to-branches!*
  [mvms id k v]
  (-> mvms :branches k (.put id v)))

(defn- save-branch-to-branches!
  [{:keys [id step indexed] :as br} repo-atom]
  (let [br' (dissoc br :step :indexed)
        {:keys [mvms]} @repo-atom
        f (partial save-branch-to-branches!* mvms id)]
    (f :base (npy/freeze br'))
    (f :step step)
    (f :indexed indexed))
  br)

(defn init-session-branch!
  ([] (init-session-branch! nil nil))
  ([parent-branch parent-step]
   (-> repo
       find-next-branch-id!
       (select-branch! {:parent-branch parent-branch
                        :parent-step parent-step})
       (save-branch-to-branches! repo))))

(defn append-to-log
  [{:keys [step] :as entry}]
  (let [{:keys [mvms selected]} @repo]
      (-> mvms
          :log
          (.put step (npy/freeze entry)))
      (save-branch-to-branches!* mvms
                                 (-> selected :branch :id)
                                 :step step))
    (swap! repo
            update :log
            assoc step entry)

  entry)

(defn load-branch!
  [br-id]
  (select-branch! br-id))



#_ (
    (open-repo! "/tmp/store2")

    (close-repo!)

    (load-branch! "br1")

    (load-branch! "br3")
    
    (init-session-branch!)

    (append-to-log {:step 2 :data :hi})
    
    (append-to-log {:step 34 :data :hoo})

    (clojure.pprint/pprint @repo)
    
    (init-session-branch! :p1 222)
    )
