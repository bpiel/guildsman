(ns com.billpiel.guildsman.packages
  (:require [aleph.http :as ah]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.special-utils :as sput]
            [clojure.java.io :as io]
            digest)
  (:import [java.util.zip ZipFile GZIPInputStream]))

(def repo (atom nil))

(def registry (atom {}))

(defn register-pkg!
  [pkg-kw pkg]
  (swap! registry assoc pkg-kw pkg))

(defn import-pkg-repo!
  [m]
  (swap! registry
         merge
         m))

(defn dl-repo!
  [url]
  (-> @(ah/get url)
      :body
      slurp
      clojure.edn/read-string
      import-pkg-repo!))

(defmulti exec-instr (fn [_ instr & _] instr))

(defmethod exec-instr :http
  [path _ method url]
  (when (not= method :get)
    (throw (Exception. "NOT IMPLEMENTED")))
  (let [dest (format "%s/download-%d"
                     path
                     (System/currentTimeMillis))]
    (sput/dl-async-pr! url dest)
    dest))

(defmethod exec-instr :gunzip
  [{:keys [path]} _]
  (let [dest (format "%s/gunzip-%d"
                     path
                     (System/currentTimeMillis))]
    (io/copy (-> path
                 io/as-file
                 io/input-stream
                 GZIPInputStream.)
             dest)
    dest))

(defmethod exec-instr :local [_ _ localpath] localpath)

(defn exec-all-instrs
  [bag]
  (loop [[head & tail] instr
         bag' bag]
    (if (->> bag' :failed? false? (and head))
      (apply exec-instr bag'
             (ut/->vec head))
      bag')))

(defn verify-hash
  [sha1hash filename]
  (when (-> filename
            io/as-file
            digest/sha1
            (= sha1hash))
    filename))

(defn deliver-asset-part
  [{:keys [path sha1hash]} filename]
  (let [dest (format "%s/assets/%s/payload" path sha1hash)]
    (io/make-parents dest)
    (io/copy filename dest)))

;; TODO return type of failure
#_(defn fetch-asset-part
  [repo {:keys [sha1hash instr]}]
  (some->> instr
           (exec-all-instrs repo)
           (verify-hash sha1hash) 
           (deliver-asset-part repo sha1hash)))

(defn asset-part-exists?
  [{:keys [path]} {:keys [sha1hash]}]
  (-> (format "%s/assets/%s/payload" path sha1hash)
      io/as-file
      .exists))

(defn mk-asset-dest-path
  [path sha1hash]
  (format "%s/assets/%s/payload"
          path sha1hash))

(defn ensure-part-exists
  [{:keys [path] :as repo} {:keys [sha1hash] :as part}]
  (let [dest (mk-asset-dest-path path sha1hash)]
    (or (-> dest io/as-file .exists)
        (while-> (comp not :failed?)
          (merge repo part
                 {:failed? false
                  :dest dest})
          exec-all-instrs
          verify-hash
          deliver-asset-part))))

(defn fetch-asset
  [repo {:keys [asset] :as pkg}]
  (loop [fails #{}
         [part & tail] (:parts asset)]
    (if (or (asset-part-exists? repo part)
            (fetch-asset-part repo part))
      (recur fails tail)
      (recur (conj fails (:name part)) tail))))

(defn find-pkg-deps
  [cfg]
  (->> cfg
       (tree-seq coll? seq)
       (keep :gm/pkg-deps)
       (apply concat)
       distinct))

(defn traverse-find-asset-pkgs
  [reg pkg-kws]
  (loop [[head & tail] pkg-kws
         return #{}
         visited #{}]
    (if head
      (if (visited head)
        (recur tail return visited)
        (let [deps (-> head reg :deps)]
          (recur (into tail deps)
                 (->> deps
                      (map reg)
                      (filter :asset)
                      (into return))
                 (conj visited head))))
      return)))

(defn prefetch-all-assets
  [{:keys [cfg] :as ws}]
  (let [repo' @repo
        conj-set (fnil conj #{})]
    (loop [success #{}
           fail {}
           [[k pkg] & tail] (->> cfg
                                 find-pkg-deps
                                 (traverse-find-asset-pkgs @registry))]
      (if k
        (if-let [fails (fetch-asset repo' pkg)]
          (recur success (update fail k conj-set fails) tail)
          (recur (conj success k) fail tail))
        {:success success
         :fail fail}))))

(defn get-pkg [pkg-kw]
  (or (pkg-kw @registry)
      (throw (Exception. (str "Could not find package: " pkg-kw)))))

(defn get-plan [pkg-kw]
  (-> pkg-kw
      get-pkg
      :plan))

(defn get-asset-desc [pkg-kw]
  (-> pkg-kw
      get-pkg
      :asset))

(defn get-function [pkg-kw]
  (-> pkg-kw
      get-pkg
      :function))

(defn get-asset-as-files
  [pkg-kw]
  (if-let [asset (get-asset-desc pkg-kw)]
    ;;TODO
    [(-> asset :sources first first :path)]
    (throw (Exception. (str "Package was not an asset: " pkg-kw)))))

































