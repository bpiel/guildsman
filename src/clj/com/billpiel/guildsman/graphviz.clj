(ns com.billpiel.guildsman.graphviz
  (:require [com.billpiel.guildsman.util :as ut]))

#_ (do

    

     (import [org.graphviz gv])
     
     (comment))

(defmacro with-ensure-valid
  [g & body]
  `(let [state# (:state ~g)]
     (locking state#
       (when-not (-> state# deref :valid?)
         (throw (Exception. (str "Cannot operate on a deleted graph. " (:id ~g)))))
       ~@body)))

(defn add-props!
  [gvo props]
  (doseq [[k v] props]
    (gv/setv gvo k v))
  gvo)

(defn read-props
  [gvo prop-keys]
  (into {}
        (for [k prop-keys]
          [k (gv/getv gvo k)])))

(defn get-graph
  [graph-gvo subgraphs id]
  (if (nil? id)
    graph-gvo
    (or (:gvo (subgraphs id))
        (throw (Exception. (str "Couldn't find subgraph " id))))))

(defn mk-empty-digraph
  [id props]
  (let [obj (gv/digraph id)]
    (add-props! obj props)
    {:id id
     :gvo obj
     :state (volatile!
             {:valid? true
              :props (read-props obj (keys props))
              :subgraphs {}
              :nodes {}
              :edges []})}))

(defn- mk-subgraph
  [parent-gvo {:keys [id props] :as sg}]
  (-> (gv/graph parent-gvo id)
      (add-props! props)))

(defn add-subgraph*
  [{:keys [subgraphs] :as state} graph-gvo {:keys [id subgraph] :as sg}]
  (if (subgraphs id)
    state
    (->> (mk-subgraph (get-graph graph-gvo subgraphs subgraph) sg)
         (assoc sg :gvo)
         (assoc-in state [:subgraphs id]))))

(defn add-subgraph
  [{:keys [gvo state] :as g} sg]
  (with-ensure-valid g
    (vswap! state add-subgraph* gvo sg)))

(defn mk-node
  [parent-gvo {:keys [id props] :as node}]
  (-> (gv/node parent-gvo id)
      (add-props! props)))

(defn add-node*
  [{:keys [subgraphs nodes] :as state} graph-gvo {:keys [id subgraph] :as node}]
  (if (nodes id)
    state
    (->> (mk-node (get-graph graph-gvo subgraphs subgraph) node)
         (assoc node :gvo)
         (assoc-in state [:nodes id]))))

(defn add-node
  [{:keys [gvo state] :as g} node]
  (with-ensure-valid g
    (vswap! state add-node* gvo node)))

(defn mk-edge
  [parent-gvo source target props]
  (-> (gv/edge parent-gvo source target)
      (add-props! props)))

(defn add-edge*
  [{:keys [subgraphs edges nodes] :as state} graph-gvo {:keys [source target props subgraph] :as edge}]
  (let [source-gvo (some-> source nodes :gvo)
        target-gvo (some-> target nodes :gvo)]
    (->> (mk-edge (get-graph graph-gvo subgraphs subgraph)
                  source target props)
         (assoc edge :gvo)
         (update state :edges conj))))

(defn add-edge
  [{:keys [gvo state] :as g} edge]
  (with-ensure-valid g
    (vswap! state add-edge* gvo edge)))

(defn layout
  [g engine]
  (with-ensure-valid g
    (gv/layout (:gvo g) engine)))

(defn render-result
  [g file-format]
  (with-ensure-valid g  
    (gv/renderresult (:gvo g) file-format)))

(defn render
  [g file-format filename]
  (with-ensure-valid g
    (gv/render (:gvo g)
               file-format
               filename)))

(defn- delete
  [{:keys [gvo]}]
  (gv/rm gvo))

(defn delete-graph
  [{:keys [gvo state] :as g}]
  (with-ensure-valid g
    (vswap! state assoc :valid? false)
    (let [{:keys [nodes edges subgraphs]} @state]
      (doseq [v edges]
        (delete v))
      (doseq [[k v] nodes]
        (delete v))
      (doseq [[k v] subgraphs]
        (delete v))
      (delete g))))

(defn- refresh-node-props
  [{:keys [gvo] :as node}]
  (assoc node
         :props
         (read-props gvo ["pos"])))

(defn refresh-props*
  [state]
  (-> state
      (update :nodes
              (partial ut/fmap refresh-node-props))
      (update :edges
              (partial mapv refresh-node-props))))

(defn refresh-props
  [{:keys [state] :as g}]
  (with-ensure-valid g
    (vswap! state refresh-props*)))

#_ (do

     (def g1 (mk-empty-digraph "g1" {}))

     (def sg1 (add-subgraph g1 {:id "cluster_sg1"}))

     (def n1 (add-node g1 {:id "nn1" :subgraph "cluster_sg1"}))
     
     (def n2 (add-node g1 {:id "n2"}))

     (def e1->2 (add-edge g1 {:source "nn1" :target "n2"}))

     (layout g1 "dot")

     (render-result g1 "dot")
     
     (render g1 "png" "/home/bill/g1.png")

     (refresh-props g1)

     (-> g1 :state deref :nodes clojure.pprint/pprint )

     (-> g1 :state deref :edges clojure.pprint/pprint )
     
     (delete-graph g1)


     (def g1 (gv/digraph "G"))

     (def sg1 (gv/graph g1 "cluster_SG1"))

     (gv/setv g1 "aaa" "xxx")

     (gv/getv g1 "aaa")

     (def n1 (gv/node g1 "node1"))

     (def n2 (gv/node sg1 "node2"))

     (def n3 (gv/node sg1 "node3"))

     (def e1->2 (gv/edge n1 n2))

     (def e3->1 (gv/edge n3 n1))

     (gv/layout (:gvo g1) "dot")

     (gv/renderresult (:gvo g1) "dot")

     (gv/render (:gvo g1) "png" "/home/bill/g1.png")

     (gv/getv n1 "pos")

     (gv/getv n3 "pos"))







