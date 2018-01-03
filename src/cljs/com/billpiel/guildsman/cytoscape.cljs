(ns guildsman.cytoscape
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :as rc]))

(def c1 (volatile! nil))
(def a1 (atom nil))

(def last-node-click (volatile! [nil 0]))

(defn now-ts [] (.getTime (js/Date.)))

(defn on-click-node
  [xc-api evt-js]
  (def evt-js1 evt-js)
  (let [{target "target"} (js->clj evt-js)
        [last-node last-ts] @last-node-click]
    (if (= last-node target)
      (let [now (now-ts)]
        (println (- now last-ts))
        (if (< (- now last-ts) 750)
          (cond (.isExpandable xc-api target)
                (.expand xc-api target)

                (.isCollapsible xc-api target)
                (.collapse xc-api target))
          (println "single same")))
      (println "different"))
    (vreset! last-node-click
             [target (now-ts)])
    (rf/dispatch [:node-select (.id target)])))

(defn setup-cyto
  [cy]
  (println "START setup-cyto")
  (println "DONE setup-cyto")
  #_  (let [xc-api (.expandCollapse cy (clj->js {:layoutBy {:name "dagre"
                                                            :nodeSep 600
                                                            :rankSep 100}
                                                 :fisheye false
                                                 :animate true
                                                 :undoable false
                                                 :cueEnabled false}))]
        (.collapseAll xc-api)
        (.on cy "tap" "node" (partial on-click-node xc-api))
        (println "DONE setup-cyto")))

(defn cyto-state->cyto-gen-map
  [{:keys [id value]}]
  (println "cyto-state->cyto-gen-map")
  (println id)
  (clj->js (merge value
                  {:container (.getElementById js/document 
                                               id)})))

(defn gen-cyto
  [state']
  (println "gen-cyto")
  (let [c (js/cytoscape (cyto-state->cyto-gen-map state'))]
    (vreset! c1 c)
    (println  "gen-cyto POST vreset")
    c))

(defn dist
  [x1 y1 x2 y2]
  (let [dx (- x2 x1)
        dy (- y2 y1)]
    (Math/sqrt (+ (* dy dy)
                  (* dx dx)))))

(defn steeper?
  [x1 y1 x2 y2 x3 y3]
  (< (* (- x1 x3)
        (- y1 y2))
     (* (- x1 x2)
        (- y1 y3))))

(defn inside-box?
  [x1 y1 x2 y2 xp yp]
  (and (or (< x1 xp x2)
           (> x1 xp x2))
       (or (< y1 yp y2)
           (> y1 yp y2))))

(defn find-intersection
  [x1 y1 x2 y2 x3 y3]
  (let [dx (- x2 x1)
        dy (- y2 y1)
        k (/ (- (* dy (- x3 x1))
                (* dx (- y3 y1)))
             (+ (* dy dy)
                (* dx dx)))
        x4 (- x3 (* k dy))
        y4 (+ y3 (* k dx))]
    [x4 y4]))

(defn rel-coords
  [x1 y1 x2 y2 x3 y3]
  (let [[x4 y4] (find-intersection x1 y1 x2 y2 x3 y3)
        d12 (dist x1 y1 x2 y2)
        d14 (dist x1 y1 x4 y4)
        d34 (dist x3 y3 x4 y4)
        st (if (steeper? x1 y1 x2 y2 x3 y3) 1 -1)]
    (when (inside-box? x1 y1 x2 y2 x4 y4)
      [(* d34 st) (/ d14 d12)])))

#_(defn perp-coords
  [x1 y1 x2 y2 xp yp]
  (let [dx (- x2 x1)
        dy (- y2 y1)
        k (/ (- (* dy (- xp x1))
                (* dx (- yp y1)))
             (+ (* dy dy)
                (* dx dx)))
        x4 (- xp (* k dy))
        y4 (+ yp (* k dx))
        d (Math/sqrt (+ (* (- y2 y1)
                           (- y2 y1))
                        (* (- x2 x1)
                           (- x2 x1))))
        ypt (Math/sqrt (+ (* (- y4 y1)
                             (- y4 y1))
                          (* (- x4 x1)
                             (- x4 x1))))
        xpt (dist x1 y1 x2 y2 xp yp)]
    [xpt (/ ypt d)]))

(defn js->xy
  [xy]
  ((juxt #(get % "x")
         #(get % "y"))
   (js->clj xy)))

(defn node->xy
  [n]
  (-> (.position n)
      js->xy))

(defn manhattan
  [x1 y1 x2 y2]
  (+ (Math/abs (- x1 x2))
     (Math/abs (- y1 y2))))

(defn p
  [x]
  (when false
    (println x)))

(defn find-nearbys
  [x1 y1 x2 y2]
  (keep (fn [n]
          (let [[xp yp] (node->xy n)]
            (p "------")
            (when-let [pc (rel-coords x1 y1 x2 y2 xp yp)]
              (p pc)
              (p "------")
              pc)))
        (.toArray (.$ @c1 "node"))))

#_(def e1 (-> (.$ @c1 "edge[source = 'loss']")
            .first))

(defn near-edge?
  [[xp yp]]
  (< -50. xp 50.))

(defn mk-ctrl-point
  [[x y]]
  [(if (<= x 0)
     (+ 50 x)
     (- x 50))
#_   (if (<= x 0)
    100 -100)
   #_(if (<= x 0)
     (- -50 x)
     (- 50 x))
   y])

(defn mk-ctrl-styles
  [ps]
  [(clojure.string/join " " (map str (map first ps)))
   (clojure.string/join " " (map str (map second ps)))])

(defn route-edge
  [edge]
  (let [[sx sy] (js->xy (.sourceEndpoint edge))
        [dx dy] (js->xy (.targetEndpoint edge))
        [cpd cpw] (mk-ctrl-styles
                   (sort-by second
                            (map mk-ctrl-point
                                 (filter near-edge?
                                         (find-nearbys sx sy dx dy)))))]
    (p [cpd cpw])
    (p "===========")
    (-> edge
        #_        (.style "curveStyle" "unbundled-bezier")
        (.style "controlPointDistances" cpd)
        (.style "controlPointWeights" cpw))))

(defn route-all-edges
  []
  #_(p "route-all-edges")
  (.map (.$ @c1 "edge")
        route-edge))

#_(route-all-edges)

#_(def in1 (.setInterval js/window
                       route-all-edges
                       100))

#_(.clearInterval js/window in1)

#_(.map (.$ @c1 "edge[source = 'loss']")
      route-edge)

#_(route-edge e1)

#_(-> (.$ @c1 "node[")
    (.map node->xy)
    js->clj)

#_(.fit @c1)


#_(-> (.$ @c1 "edge[source = 'loss']")
    (.style "curveStyle" "unbundled-bezier")
    (.style "controlPointStepSize" "10")
    (.style "controlPointWeight" "0.5"))

#_(def e1
  (-> (.$ @c1 "edge[source = 'loss']")
      .first))

#_(vreset! c1
           (js/cytoscape (clj->js {:container (.getElementById js/document "cyto2")
                                   :layout {:name "preset"}
                                   :style [{:selector "edge"
                                            :style {"curve-style" "unbundled-bezier"
                                                    "edge-distances" "node-position"
                                                    :control-point-distances [0]
                                                    :control-point-weights [0.5]}}]
                                   :elements {:nodes [{:data {:id "a"}
                                                       :position {:x 0 :y 0}}
                                                      {:data {:id "b"}
                                                       :position {:x 100 :y 100}}
                                                      {:data {:id "c"}}
                                                      {:data {:id "d"}}
                                                      {:data {:id "e"}}
                                                      {:data {:id "f"}} ]
                                              :edges [{:data {:source "a"
                                                              :target "b"}}
                                                      {:data {:source "c"
                                                              :target "d"}}]}})))

#_(vreset! c1
         (js/cytoscape (clj->js {:container (.getElementById js/document "cyto6")
                                 :style [{:selector "edge"
                                          :style {"curve-style" "unbundled-bezier"
                                                  "edge-distances" "node-position"
                                                  :control-point-distances [0]
                                                  :control-point-weights [0.5]}}]
                                 :elements {:nodes [{:data {:id "a"}}
                                                    {:data {:id "b"}}]
                                            :edges [{:data {:source "a"
                                                            :target "b"}}]}})))


(defn cyto-comp-did-mount
  [state this]
  (vswap! state assoc 
          :instance
          (gen-cyto @state))
  (setup-cyto (:instance @state)))

(defn cyto-reagent-render
  [state value]
  (let [{:keys [id]} @state]
    (println "cyto-reagent-render")
    (println id)
    [:div {:id id :style {:width "100%" :height "100%"}}]))

(defn cyto-comp-will-update
  [state this [_ new-value]]
  (vswap! state
          assoc :value new-value))

(defn cyto-comp-did-update
  [state this [_ {:keys [config data highlighted selected] :as old-val}]]
  (let [{:keys [value] :as state'} @state]
    (cond #_(not= config (:config state'))
          (not= value old-val)
          (do (println "generate")
              (vswap! state
                      assoc
                      :instance
                      (gen-cyto state'))
              (setup-cyto (:instance @state)))
          #_ ((not= data (:data state'))
              (do (println "load")
                  (.load instance (clj->js (merge (:data state') {:unload true}))))

              (not= [highlighted selected] [(:highlighted state')
                                            (:selected state')])
              (do                       ;(println "flush")
                (.flush instance))))))


(defn cytoscape
  [value]
  (println "cyto/cyto")
  (let [state (volatile! {:id (str (gensym "cyto"))
                          :value value})]
    (r/create-class {:component-did-mount (partial cyto-comp-did-mount state)
                     :component-did-update (partial cyto-comp-did-update state)
                     :component-will-update (partial cyto-comp-will-update state)
                     :reagent-render (partial cyto-reagent-render state)}))) 
