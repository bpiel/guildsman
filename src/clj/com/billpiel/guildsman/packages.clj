(ns com.billpiel.guildsman.packages
  (:require [clojure.core.async :as a]
            [aleph.http :as ah]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.special-utils :as sput]
            [clojure.java.io :as io]
            digest)
  (:import [java.util.zip GZIPInputStream]
           [java.nio.file Files CopyOption]))

#_ (def repo (atom nil))
(defonce repo (atom nil))

#_ (def registry (atom {}))
(defonce registry (atom {}))

(defn set-repo-path!
  [path]
  (swap! repo assoc :path path))

(defn register-pkg!
  [pkg-kw pkg]
  (swap! registry assoc pkg-kw pkg))

(defn import-pkg-repo!
  [m]
  (swap! registry
         merge
         m))

(defn export-pkgs-to-file!
  [filename & pkg-ids]
  (let [r @registry]
    (->> (if (empty? pkg-ids)
           r
           (select-keys r pkg-ids))
         (hash-map :packages)
         pr-str
         (spit filename))))

(defn import-pkgs-from-file!
  [filename & pkg-ids]
  (let [m (->> filename
               slurp
               clojure.edn/read-string
               :packages)
        m' (if (empty? pkg-ids)
             m
             (select-keys m pkg-ids))]
    (swap! registry merge m')))

(defn dl-pkg-repo!
  [url]
  (let [pkgs (-> @(ah/get url)
                 :body
                 slurp
                 clojure.edn/read-string
                 :packages)]
    (import-pkg-repo! pkgs)
    (keys pkgs)))

(defmulti exec-instr (fn [_ instr & _] instr))

(defmethod exec-instr :http
  [{:keys [repo] :as bag} _ method url]
  (when (not= method :get)
    (throw (Exception. "NOT IMPLEMENTED")))
  (let [f (format "%s/tmp/download-%d"
                     (:path repo)
                     (System/currentTimeMillis))]
    (io/make-parents f)
    ;; TODO use anomalies!?!?!
    (let [r (a/<!! (sput/dl-async-pr! url f))
          ex (ex-data r)]
      (when ex
        (throw (:ex ex)))) 
    (assoc bag
           :current
           f)))

(defmethod exec-instr :gunzip
  [{:keys [repo current] :as bag} _]
  (let [dest (format "%s/tmp/gunzip-%d"
                     (:path repo)
                     (System/currentTimeMillis))]
    (io/copy (-> current
                 io/as-file
                 io/input-stream
                 GZIPInputStream.)
             (io/as-file dest))
    (assoc bag :current dest)))

(defmethod exec-instr :local [_ _ localpath] localpath)

(defn exec-all-instrs
  [{:keys [instr] :as bag}]
  (loop [[head & tail] instr
         bag' bag]
    (if (->> bag' :failed? false? (and head))
      (recur tail
             (apply exec-instr bag'
                    (ut/->vec head)))
      bag')))

(defn verify-hash
  [{:keys [sha1hash current] :as bag}]
  (let [computed (-> current
                     io/as-file
                     digest/sha1)
        bag' (assoc bag
                    :sha1hash-comp
                    computed)]
    (if sha1hash
      (if (= sha1hash computed)
        bag'
        (do (println (format "SHA-1 hashes did not match: %s \n%s\n%s"
                             current sha1hash computed))
            (assoc bag' :failed? true)))
      bag')))

(defn deliver-asset-part
  [{:keys [current dest] :as bag}]
  (when (not= current dest)
    (io/make-parents dest)
    ;; TODO use raynes/fs ???
    (println (format "Moving %s to %s"
                     current dest))
    (Files/move (.toPath (io/as-file current))
                (.toPath (io/as-file dest))
                (into-array CopyOption [])))
  (assoc bag :current dest))

(defn mk-asset-dest-path
  [path sha1hash]
  (format "%s/assets/%s.part"
          path sha1hash))

(defn ensure-part-exists
  [{:keys [path] :as repo} {:keys [sha1hash] :as part}]
  (let [dest (mk-asset-dest-path path sha1hash)]
    (or (when (-> dest io/as-file .exists)
          (println (format "File %s exists."
                           dest))
          true)
        (ut/while-> (comp not :failed?)
          (assoc part
                 :repo repo
                 :failed? false
                 :dest dest
                 :current nil)
          exec-all-instrs
          verify-hash
          deliver-asset-part))))

(defn fetch-asset
  [repo {:keys [asset] :as pkg}]
  (loop [fails #{}
         [part & tail] (:parts asset)]
    (if part
      (if (ensure-part-exists repo part)
        (recur fails tail)
        (recur (conj fails (:name part)) tail))
      fails)))

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
         return {}
         visited #{}]
    (if head
      (if (visited head)
        (recur tail return visited)
        (let [pkg (reg head)]
          (recur (->> pkg :deps (into tail))
                 (if (:asset pkg)
                   (assoc return
                          head pkg)
                   return)
                 (conj visited head))))
      return)))

;; TODO make async/thread later
(defn prefetch-all-assets-sync
  [{:keys [cfg] :as ws}]
  (let [repo' @repo
        conj-set (fnil conj #{})]
    (when-not (:path repo')
      (throw (Exception. "Cannot fetch package assets. Package repo not set.")))
    (loop [success #{}
           fail {}
           [[k pkg] & tail] (->> cfg
                                 find-pkg-deps
                                 (traverse-find-asset-pkgs @registry))]
      (if k
        (if-let [fails (not-empty (fetch-asset repo' pkg))]
          (recur success (update fail k conj-set fails) tail)
          (recur (conj success k) fail tail))
        (let [r {:success success
                 :fail fail}]
          (clojure.pprint/pprint r)
          r)))))

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








