(ns com.billpiel.guildsman.elk
  (:import (org.eclipse.elk.core RecursiveGraphLayoutEngine)
           (org.eclipse.elk.graph ElkNode)
           (org.eclipse.elk.graph.util ElkGraphUtil)
           (org.eclipse.elk.core.util BasicProgressMonitor)
           (org.eclipse.elk.core.data LayoutMetaDataService)
           (org.eclipse.elk.core.options CoreOptions HierarchyHandling Direction)
           (org.eclipse.elk.alg.layered ElkLayered LayeredLayoutProvider)
           (org.eclipse.elk.alg.layered.options LayeredOptions)
           (org.eclipse.elk.alg.graphviz.layouter GraphvizLayoutProvider)))

(def n1 (ElkGraphUtil/createNode nil))

org.eclipse.elk.alg.graphviz.dot.transform.Command/DOT

(defn do-layered-layout
  [g]
  (LayoutMetaDataService/getInstance)
  (doto (LayeredLayoutProvider.)
    (.initialize nil)
    (.layout g (BasicProgressMonitor.))))

(defn do-graphviz-layout
  [g]
  (LayoutMetaDataService/getInstance)
  (doto (GraphvizLayoutProvider.)
    (.initialize "DOT")
    (.layout g (BasicProgressMonitor.))))

(defn do-recursive-layout
  [g]
  (doto (LayoutMetaDataService/getInstance)
    (.registerLayoutMetaDataProviders (into-array [(LayeredOptions.)])))
  (doto (RecursiveGraphLayoutEngine.)
    #_(.initialize nil)
    (.layout g (BasicProgressMonitor.))))

(defn get-x-recursive
  [^ElkNode elk-node]
  (if (nil? elk-node)
    0
    (+ (.getX elk-node)
       (get-x-recursive (.getParent elk-node)))))

(defn get-y-recursive
  [^ElkNode elk-node]
  (if (nil? elk-node)
    0
    (+ (.getY elk-node)
       (get-y-recursive (.getParent elk-node)))))

(defn elk-node->xy
  [^ElkNode elk-node]
  {:x (* 10 (.getX elk-node))
   :y (* 10 (.getY elk-node))})

(defn elk-node->xy
  [^ElkNode elk-node]
  {:x (* 10 (get-x-recursive elk-node))
   :y (* 10 (get-y-recursive elk-node))})

(defn finalize-node
  [{:keys [elk] :as node}]
  (-> node
      (assoc :position (elk-node->xy elk))
      (dissoc :elk)))

(defn finalize-edge
  [{:keys [elk] :as edge}]
  (-> edge
      (dissoc :elk)))

(defn set-include-children
  [n]
  (doto n
    (.setProperty LayeredOptions/HIERARCHY_HANDLING HierarchyHandling/SEPARATE_CHILDREN)
    (.setProperty CoreOptions/ALGORITHM LayeredOptions/ALGORITHM_ID)
    (.setProperty LayeredOptions/DIRECTION Direction/DOWN)))

(defn set-node-size
  [p]
  p
#_  (doto p
    (.setWidth (float 300))
    (.setHeight (float 300))))

(defn mk-elk-node
  [g parent agg-map node]
  (if parent
    (if-let [p (agg-map parent)]
      (-> (ElkGraphUtil/createNode p)
          set-include-children
          set-node-size)
      (throw (Exception. (format "Cannot find parent node: %s -> %s"
                                 (:id node)
                                 parent))))
    (-> (ElkGraphUtil/createNode g)
        set-include-children
        set-node-size)))

(defn mk-elk-nodes
  [g [agg-nodes agg-map] node]
  (let [{:keys [id parent]} (:data node)
        elk-node (mk-elk-node g parent agg-map node)]
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
    (do-graphviz-layout g)
    {:nodes (mapv finalize-node nodes')
     :edges (mapv finalize-edge edges')}))

(defn layout-graph-elements
  [{:keys [nodes edges] :as elems}]
  (let [g (ElkGraphUtil/createGraph)]
    (set-include-children g)
    (layout-graph-elements* g elems)))

#_
(clojure.pprint/pprint 
 (layout-graph-elements $s/*))

