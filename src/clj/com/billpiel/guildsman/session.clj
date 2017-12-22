(ns com.billpiel.guildsman.session
  (:require [com.billpiel.guildsman.common :as com]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.op-node :as op-node]
            [com.billpiel.guildsman.macros :as mcro]
            [com.billpiel.guildsman.util :as util]
            [com.billpiel.guildsman.special-utils :as sput]
            [com.billpiel.guildsman.tensor-mgr :as tm]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.data-type :as dt])
  (:import [com.billpiel.guildsman.common Graph]))

(defrecord Session [handle ^Graph graph])

(defrecord RunRequest [fetch targets feed options return-meta])

;; https://www.tensorflow.org/api_docs/java/reference/org/tensorflow/Session.Runner
{:targets [] ;; ops
 :feed {} ;; map op/output => tensor
 :fetch [] ;; outputs or operations
 :options (byte-array [])
 :return-meta false}

(defn mk-run-req
  [& [fetch targets feed return-meta options]]
  (RunRequest. (or fetch [])
               (or targets [])
               (or feed {})
               (or options (byte-array []))
               (or return-meta false)))

(defn create [^Graph g]
  (Session. (com.billpiel.guildsman.SessionNI/allocate (:handle g))
            g))

(defn ->op-node-strict
  [^Graph g x]
  (if-let [r (sput/->op-node g x)]
    r
    (throw (Exception. (format "No op-node found for: %s"
                               x)))))

(defn- ->handles-idx-pairs
  [plans ^Graph g]
  (or (some->> plans
               not-empty
               (mapv (partial ->op-node-strict g))
               (mapv (juxt :handle :output-idx)))
      []))

(defn- ->handles
  [plans ^Graph g]
  (map first
       (->handles-idx-pairs plans
                            g)))

(defn- feed->
  [^Graph g feed]
  (def g1 g)
  (let [{:keys [id->node]} (-> g :state deref)]
    (if (not-empty feed)
      (apply map vector
             (for [[k v] feed]
               (let [{:keys [handle dtypes] :as node}
                     (-> (if (keyword? k)
                           k
                           (:id k))
                         name
                         id->node)
                     ;; TODO don't assume output-idx 0
                     dtype (first dtypes)]
                 (when (nil? node)
                   (throw (Exception. (str "No node found to feed: " k))))
                 [(-> v
                      (dt/maybe-convert-whatever dtype)
                      tm/get-tensor-ref-by-value)
                  handle
                  ;; TODO don't hard code 0
                  0])))
      [[] [] []])))

;; TODO use Graph doSync
(defn run-req->handles
  [^Session s ^RunRequest req]
  (tsc/with-default-scope
    (let [{:keys [fetch targets feed return-meta options]} req
          g (:graph s)
          fetch-pairs (->handles-idx-pairs fetch g)
          fetch-handles (map first fetch-pairs)
          fetch-idxs (map second fetch-pairs)
          outputs (long-array (vec
                               (take (count fetch)
                                     (repeatedly #(:handle (tm/get-tensor-ref-by-value 0))))))
          [in-tsrs in-ops in-idx] (feed-> g feed)
          _ (def in-tsrs1 (vec in-tsrs))
          maybe-meta (com.billpiel.guildsman.SessionNI/run
                       (:handle s) 
                       options
                       (long-array (map :handle in-tsrs)) ;; inputTensorHandles
                       (long-array in-ops)     ;; inputOpHandles
                       (int-array in-idx)      ;; inputOpIndices
                       (long-array fetch-handles) ;; outputOpHandles
                       (int-array fetch-idxs)     ;; outputOpIndices
                       (long-array (->handles targets g))
                       ;; targetOpHandles
                       return-meta
                       outputs)]
#_      (doseq [t in-tsrs]
        (tm/release-tensor-ref t))
      outputs
      #_    {:output-handles outputs
             :meta-data maybe-meta})))

(defn run-req->tensors
  [^Session s ^RunRequest req]
  (let [handles (run-req->handles s req)]
    (mapv tm/get-tensor-ref-by-handle
          handles)))

(defn fetch-all->tensors [^Session session plans & [feed targets]]
  (->> (mk-run-req plans targets feed)
       (run-req->tensors session)))

(defn fetch->tensor [^Session session plan & [feed targets]]
  (first (fetch-all->tensors session [plan] feed targets)))

(defn run [^Session session plan & [feed]]
  (run-req->tensors session
                    (mk-run-req [] [plan] feed))
  session)

(defn run-all [^Session session plans & [feed]]
  (doseq [p plans]
    (run session p feed))
  session)
