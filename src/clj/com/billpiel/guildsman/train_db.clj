(ns com.billpiel.guildsman.train-db
  (:require [taoensso.nippy :as npy])
  (:import [org.h2.mvstore MVStore MVMap]))

(def db (atom nil))

(defn- mk-init-db
  [store']
  {:store store'
   :maps {}})

(defn open-db!
  [path]
  (if-let [store' (MVStore/open path)]
    (reset! db (mk-init-store-atom store'))
    (throw (Exception. (str "Could not open train-db " path)))))

(defn- open-map!*
  [maps' store' kw]
  (if (maps' kw)
    maps'
    (assoc maps' kw
           (.openMap @store' (name kw)))))

(defn- open-map!
  [kw]
  (-> maps
      (swap! open-map!* store kw)
      kw))

(defn- mk-session-branch-id []
  (-> (gensym "sb")
      name
      keyword))

(defn- mk-session-branch
  ([] (mk-session-branch nil nil))
  ([parent-branch parent-step]
   ))

(open-db "/tmp/store1")

(def b1 (open-map! :b1))

(.put b1 "count" 1)


(def xxx @store)
