(ns com.billpiel.guildsman.checkpoint-repo2
  (:require [clojure.core.async :as a]
            [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))


(defonce repos (atom {}))

(defn- open-map
  [map-name store]
  (.openMap store map-name))

(defn- mk-init-repo
  [path store]
  {:path path
   :store store
   :mvms {;; ch-id => (br-id, step)
          :chkpts (open-map "checkpoints" store)}
   ;; br-id => atoms
   :branches {}})

(defn open-repo! [path]
  (if-let [repo (@repos path)]
    repo
    (if-let [store (MVStore/open path)]
      (let [repo (mk-init-repo store)]
        (swap! repos assoc path repo)
        repo)
      (throw (Exception. (str "Could not open train-repo " path))))))

(defn get-chkpt
  [repo chkpt-id])

(defn get-branch-by-chkpt
  [repo chkpt-id])

(defn mk-new-branch
  [plans repo])

(defn append-to-log
  [branch-atom pos-step entry])
