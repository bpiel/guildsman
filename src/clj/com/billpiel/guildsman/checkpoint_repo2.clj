(ns com.billpiel.guildsman.checkpoint-repo2
  (:require [clojure.core.async :as a]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))


(defonce repos (atom {}))

(defn- open-map!
  [map-name store]
  (.openMap store map-name))

(defn- mk-init-repo!
  [path store]
  {:path path
   :store store
   ;; ch-id => (br-id, step)
   :chkpts (open-map! "checkpoints" store) 
   ;; br-id => atoms
   :branches (atom {})})

(defn open-repo! [path]
  (if-let [repo (@repos path)]
    repo
    (if-let [store (MVStore/open (str path "/repo.db"))]
      (let [repo (mk-init-repo! store)]
        (swap! repos assoc path repo)
        repo)
      (throw (Exception. (str "Could not open train-repo " path))))))

(defn get-chkpt
  [repo chkpt-id]
  (-> repo
      :chkpts
      (.get chkpt-id)))

#_(defn get-branch-by-chkpt-id
  "Returns branch atom"
  [{:keys [branches] :as repo} chkpt-id]
  (let [b @branches]
    (-> (get-chkpt repo chkpt-id)
        :br-id
        b)))

(defn- gen-branch-id []
  (str "br-" (java.util.UUID/randomUUID)))

(defn- mk-init-branch!
  [repo-path plans {:keys [id steps]}]
  (let [br-id (gen-branch-id)
        ;; TODO win compatible paths
        br-store-path-base (str repo-path "/" br-id)
        br-store-path-props (str br-store-path-base "/props.db")
        br-store-path-log (str br-store-path-base "/log.db")]
    {:id br-id
     :repo-path repo-path
     :path br-store-path-base
     :stores {:props (MVStore/open br-store-path-props)
              :log (MVStore/open br-store-path-log)}
     :plans plans
     :parent-chkpt-id id
     :parent-steps (or steps 0)
     :steps 0
     :log (sorted-map)}))

(defn mk-new-branch!
  [plans {:keys [path] :as repo} & [chkpt-id]]
  (let [branch (mk-init-branch! path plans chkpt-id)
        branch-atom (atom branch)]
    (swap! (:branches repo)
           assoc (:br-id branch) branch-atom)
    branch-atom))

(defn append-to-log*
  [{:keys [log steps] :as branch} pos-step entry]
  (assoc branch
         :log (assoc log pos-step entry)
         :steps (max steps pos-step)))

(defn append-to-log!
  [branch-atom pos-step fetched]
  (let [entry {:step pos-step :fetched fetched}]
    (swap! append-to-log*
           pos-step entry)
    (-> @branch-atom
        :log
        (assoc pos-step (npy/freeze entry))))
  true)












































