(ns com.billpiel.guildsman.checkpoint-repo2
  (:require [clojure.core.async :as a]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))


(defonce repos (atom {}))

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

(defn gen-chkpt-id []
  (str "chkpt-" (java.util.UUID/randomUUID)))

(defn mk-init-chkpt
  [id prefix avail? br-id step varis]
  {:id id
   :prefix prefix
   :avail? avail?
   :created (System/currentTimeMillis)
   :br-id br-id
   :step step
   ;; [{:id :shape :type}...]
   :varis varis})

(defn add-chkpt!
  [branch id prefix avail? br-id step varis]
  (.put (-> branch :mvms :chkpts)
        id
        (npy/fast-freeze (mk-init-chkpt id prefix avail? br-id step varis))))

(defn- mk-init-branch!
  [repo-path plans {:keys [id steps]}]
  (let [br-id (gen-branch-id)
        ;; TODO windows compatible paths
        br-store-path (str repo-path "/" br-id)
        store (open-mvstore (str br-store-path "/branch.db"))]
    {:id br-id
     :repo-path repo-path
     :path br-store-path
     :store store
     :mvms {:log (open-map! "log" store)
            :chkpts (open-map! "checkpoints" store)
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
  true)



#_
(-> repos deref vals first :branches deref  (get "br-11031454-121d-4bfa-bfd0-9876f6408ed4") deref :log clojure.pprint/pprint )

#_
(-> repos deref vals first :branches deref  keys clojure.pprint/pprint )

(defn inpect-mvm
  [map-name mvm]
  (let [val-fn (case map-name
                 ("log" #_"checkpoints") npy/fast-thaw
                 identity)]
    (->> (for [e (.entrySet mvm)]
           [(.getKey e) (-> e .getValue val-fn)])
         (into {}))))

(defn inspect-store
  [store]
  (->> (for [m (.getMapNames store)]
         [m (inpect-mvm m (open-map! m store))])
       (into {})))

(defn inspect-repo
  [repo-path]
  (let [{:keys [store] :as repo} (open-repo! repo-path)]
    (->> (for [m (.getMapNames store)]
           [m (inpect-mvm m (open-map! m store))])
         (into {}))))

#_ ((.getMapNames (:store s1))

    (inspect-repo "/tmp/repo3")

    (def bs1 (:store (@repos "/tmp/repo3")))

    (def bs1 (open-mvstore "/tmp/repo3/repo.db"))

    (def bs2 (open-mvstore "/tmp/repo5/br-ceaf36af-1c7c-4653-8512-e6fc38ceaf9c/branch.db"))

    (inspect-store bs1)

    (clojure.pprint/pprint (inspect-store bs2))

    (.getMapNames bs2)
    
    (.close bs2))
