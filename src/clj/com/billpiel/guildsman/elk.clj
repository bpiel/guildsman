(ns com.billpiel.guildsman.elk
  (:import (org.eclipse.elk.graph ElkNode)
           (org.eclipse.elk.graph.util ElkGraphUtil)
           (org.eclipse.elk.core.util BasicProgressMonitor)
           (org.eclipse.elk.core.data LayoutMetaDataService)
           (org.eclipse.elk.alg.layered ElkLayered LayeredLayoutProvider)))


(defn do-layered-layout
  [g]
  (LayoutMetaDataService/getInstance)
  (doto (LayeredLayoutProvider.)
    (.initialize nil)
    (.layout g (BasicProgressMonitor.))))

(defn elk-node->xy
  [^ElkNode elk-node]
  {:x (* 10 (.getX elk-node))
   :y (* 10 (.getY elk-node))})

(defn finalize-node
  [{:keys [elk] :as node}]
  (-> node
      (assoc :position (elk-node->xy elk))
      (dissoc :elk)))

(defn finalize-edge
  [{:keys [elk] :as edge}]
  (-> edge
      (dissoc :elk)))

(defn mk-elk-node
  [g parent agg-map node]
  (:??????????????))

(defn mk-elk-nodes
  [g [agg-nodes agg-map] node]
  (let [{:keys [id parent]} (:data node)
        elk-node (ElkGraphUtil/createNode g)]
    [(conj agg-nodes (assoc node :elk elk-node))
     (assoc agg-map id elk-node)]))

(defn mk-elk-edges
  [g node->elk edge]
  (let [{:keys [source target]} (:data edge)
        source-node (node->elk source)
        target-node (node->elk target)]
    (if-let [elk-edge (and source-node target-node
                           (ElkGraphUtil/createSimpleEdge source-node target-node))]
      (assoc edge :elk elk-edge)
      edge)))

(defn layout-graph-elements*
  [g {:keys [nodes edges] :as elems}]
  (let [[nodes' node->elk] (reduce (partial mk-elk-nodes g)
                                   [[] {}]
                                   nodes)
        edges' (mapv (partial mk-elk-edges g node->elk)
                     edges)]
    (do-layered-layout g)
    {:nodes (mapv finalize-node nodes')
     :edges (mapv finalize-edge edges')}))

(defn layout-graph-elements
  [{:keys [nodes edges] :as elems}]
  (let [g (ElkGraphUtil/createGraph)]
    (layout-graph-elements* g elems)))

#_
(clojure.pprint/pprint 
 (layout-graph-elements $s/*))
