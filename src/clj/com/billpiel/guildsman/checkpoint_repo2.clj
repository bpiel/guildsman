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

(defn- open-mvstore
  [path]
  (clojure.java.io/make-parents path)
  (MVStore/open path))

(defn open-repo! [path]
  (if-let [repo (@repos path)]
    repo
    (if-let [store (open-mvstore (str path "/repo.db"))]
      (let [repo (mk-init-repo! path store)]
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
        br-store-path (str repo-path "/" br-id)
        store (open-mvstore (str br-store-path "/branch.db"))]
    {:id br-id
     :repo-path repo-path
     :path br-store-path
     :store store
     :mvms {:log (open-map! "log" store)
            :props (open-map! "props" store)}
     :plans plans
     :parent-chkpt-id id
     :parent-steps (or steps 0)
     :steps 0
     :log (sorted-map)}))

(defn mk-new-branch!
  [plans {:keys [path] :as repo} & [chkpt]]
  (let [branch (mk-init-branch! path plans chkpt)
        branch-atom (atom branch)]
    (swap! (:branches repo)
           assoc (:id branch) branch-atom)
    branch-atom))

(defn append-to-log*
  [{:keys [log steps] :as branch} pos-step entry]
  (assoc branch
         :log (assoc log pos-step entry)
         :steps (max steps pos-step)))

(defn append-to-log!
  [branch-atom pos-step fetched]
  (def ba1 branch-atom)
  (def ps1 pos-step)
  (def f1 fetched)
  (let [entry {:step pos-step :fetched fetched}
        mvms (:mvms @branch-atom)]
    (swap! branch-atom append-to-log*
           pos-step entry)
    (.put (:log mvms) pos-step (npy/freeze entry))
    ;; TODO use max steps
    (.put (:props mvms) "step" pos-step))
  true)

#_
(-> repos deref vals first :branches deref  (get "br-11031454-121d-4bfa-bfd0-9876f6408ed4") deref :log clojure.pprint/pprint )

#_
(-> repos deref vals first :branches deref  keys clojure.pprint/pprint )
