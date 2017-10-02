(ns com.billpiel.guildsman.gradients2
  (:require [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.op-build :as obld]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.macros :as mcro]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.util :as ut])
  (:import [com.billpiel.guildsman.common Graph]))

(defn assoc-meta-handle-to-plan
  [p]
  (assoc p :handle (-> p meta ::opn/handle)))

(defn discover-new-plans-from-ids*
  [^Graph g id]
  (let [plan (assoc-meta-handle-to-plan (opn/id->plan g id))]
    [plan (flatten (map plan [:inputs :ctrl-inputs]))]))

(defn discover-new-plans-from-ids
  [^Graph g ids]
  (loop [existing-ids (-> g :state deref :id->node keys set)
         discovered []
         [id & tail] ids]
    (if id
      (let [[plan ids'] (discover-new-plans-from-ids* g id)
            ids'' (remove existing-ids ids')]
        (recur (into existing-ids ids'')
               (conj discovered plan)
               (concat tail ids'')))
      discovered)))

(defn discover-new-op-nodes-from-ids
  [^Graph g ids]
  (let [gref (gr/mk-graph-ref g)]
    (mapv #(opn/create-from-handle (:handle %) gref )
          (discover-new-plans-from-ids g ids))))

(defn discover-new-op-nodes-from-handles
  [^Graph g op-handles]
  (let [ids (map opn/handle->id op-handles)]
    (discover-new-op-nodes-from-ids g ids)))

(defmethod mcro/build-macro :gradients
  [^Graph g plan]
  (let [out-idx-fn #(or (:output-idx %) 0)
        [y-op dx-op x-ops] (:inputs plan)
        y-handle (:handle y-op)
        y-idx (out-idx-fn y-op)
        x-handles (mapv :handle x-ops)
        x-idx  (mapv out-idx-fn x-ops)
        dx-handle (:handle dx-op)
        dx-idx (out-idx-fn dx-op)
        x-count (count x-ops)
        dy-handles (long-array x-count)
        dy-idxs (int-array x-count)]
    (def ag1 {;:y-op y-op
              ;:dx-op dx-op
              ;:x-ops x-ops
              :y-handle y-handle
              :y-idx y-idx
              :x-handles x-handles
              :x-idx x-idx
              :dx-handle dx-handle
              :dx-idx dx-idx
              :dy-handles dy-handles
              :dy-idxs dy-idxs})
    #_ (clojure.pprint/pprint ag1)
    (clojure.pprint/pprint ag1)
    #_(throw (Exception. "NAH"))
    (com.billpiel.guildsman.GraphNI/addGradients (:handle g)
                                 (long-array [y-handle]) (int-array [y-idx])
                                 (long-array x-handles) (int-array x-idx)
                                 (long-array [dx-handle]) (int-array [dx-idx])
                                 dy-handles dy-idxs)
    (let [dy-handles-vec (vec dy-handles)
          dy-idx-vec (vec dy-idxs)]
      (def ag2 [dy-handles-vec dy-idx-vec])
#_      (clojure.pprint/pprint ag2)
      (throw (Exception. "NOPE"))
      (let [discovered (discover-new-op-nodes-from-handles g
                                                           dy-handles-vec)]
        (dorun (map (partial gr/add-op-to-state! g)
                    discovered))
        ;; TODO aliases? what? do something!
        (mapv #(assoc % :output-idx %2)
              (take x-count discovered)
              dy-idx-vec)))))
