(ns com.billpiel.guildsman.dev
  (:require [clojure.core.async :as a]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.shape :as sh]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.macros :as mcro]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.ops.gen :as ops-gen]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.webapp.server :as wsvr]
            [com.billpiel.guildsman.tf-record :as tfr]
            [flatland.protobuf.core :as pr])
  (:import [com.billpiel.guildsman.common Graph Op]
           [com.billpiel.guildsman.session Session]
           [org.tensorflow.framework Summary]))

(def dev-nses (atom #{}))
(def SummaryP (pr/protodef Summary))

(defn enable-op-meta-assoc
  [& [debug-mode?]]
  (when (or (nil? debug-mode?)
            (true? debug-mode?))
    (reset! ops-gen/assoc-meta-to-op?
            true))
  (when (false? debug-mode?)
    (reset! ops-gen/assoc-meta-to-op?
            false)))

(defn activate-dev-mode
  [& [enable?]]
  (enable-op-meta-assoc enable?)
  (if-not (false? enable?)
    (do #_(swap! g/plugins conj ::dev)
        (wsvr/start-server))
    (throw (Exception. "NOT IMPLEMENTED"))))

#_ (activate-dev-mode true)
#_ (wsvr/start-server)

(defn- mk-ns-sym [sym] (->> sym name (str "$.") symbol))

(defn release-dev-ns
  [ns-sym]
  (when-let [dev-ns (and (@dev-nses ns-sym)
                         (the-ns ns-sym))]
    ;; TODO check if graph/session is running
    (g/close (ns-resolve dev-ns 'graph))
    (g/close (ns-resolve dev-ns 'session))
    (remove-ns ns-sym)
    (swap! dev-nses disj ns-sym)
    (println "removed ns " ns-sym)))

(defn- unmap-interns [ns']
  (dorun (map (partial ns-unmap ns')
              (keys (ns-interns ns')))))

(defn mk-nodes-in-ns
  [^Graph g ns']
  (doseq [[k v] (-> g :state deref :id->node)]
    (intern ns'
            (symbol (clojure.string/replace k #"/" ">"))
            (vary-meta v
                       assoc :ns ns'))))

(defn plan [^Op op-node] (-> op-node meta :plan))
(defn stack [^Op op-node] (-> op-node meta :stack))

(defn get-ns [op] (-> op meta :ns))
(defn get-log [op] @(ns-resolve (get-ns op)
                                '$log))

;; CYTO ===============================================

(defn mk-id-seq
  [id-parts]
  (loop [r []
         ctx nil
         [head & tail] id-parts]
    (if head
      (let [path (str ctx (when ctx "/"))]
        (recur (conj r {:data (merge {:id (str path head) :name head}
                                     (when ctx {:parent ctx}))})
               (str path head)
               tail))
      r)))

(defn drop-output-idx [id]
  (try (first (clojure.string/split id #":"))
       (catch Exception e
         (def e1 e)
         #_ (clojure.pprint/pprint e1)
         (clojure.pprint/pprint id))))

(defn filter-cyto-edges
  [edges]
  (filter (fn [{:keys [data]}]
            (let [{:keys [source target]} data]
              (and (= (nil? (re-find #"gradient" source))
                      (nil? (re-find #"gradient" target)))
                   (= (nil? (re-find #"summaries" source))
                      (nil? (re-find #"summaries" target)))
                   (= (nil? (re-find #"Const" source))
                      (nil? (re-find #"Const" target))))))
          edges))

(defn filter-cyto-nodes
  [nodes]
  (remove (fn [{:keys [data]}]
            (re-find #"Const_" (:id data)))
          nodes))

(defn filter-cyto
  [cyto]
  (-> cyto
      (update :edges filter-cyto-edges)
      (update :nodes filter-cyto-nodes)))

(defn mk-node-defs
  [{:keys [id] :as node}]
  (mk-id-seq (clojure.string/split (drop-output-idx id)
                                   #"/")))

(defn- mk-edge-defs
  [opnode]
  (let [id-src (drop-output-idx (:id opnode))]
    (map (fn [id-target]
           {:data {:source (drop-output-idx id-target) :target id-src }})
          (-> opnode :inputs flatten))))


(defn mk-graph-def
  [^Graph g]
  (let [nodes (-> g :state deref :id->node vals)]
    {:nodes (distinct (mapcat mk-node-defs nodes))
     :edges (mapcat mk-edge-defs nodes)}))

(defn mk-cyto
  [elements]
  {:layout {:name "preset"}
   :style [{:selector "node"
            :style {:content "data(name)"
                    :border-width 3
                    :border-color "#333"
                    :font-size 35
                    :background-color "#FFC"
                    :shape "ellipse"
                    :height 80
                    :width 200
                    :text-valign "center"
                    }}
           {:selector "edge"
            :style {:width 5
                    "curve-style" "unbundled-bezier"
                    :control-point-distances [0]
                    :control-point-weights [0.5]
                    :line-color "#888"
                    :arrow-scale 1.5
                    :target-arrow-color "#d00"
                    :target-arrow-shape "triangle"}}
           {:selector "node.cy-expand-collapse-collapsed-node"
            :style {:font-size 40
                    :background-color "#FFC"
                    :border-width 5
                    :border-color "#333"
                    :shape "rectangle"
                    :height 100
                    :width 300
                    :text-valign "center"
                    }}
           {:selector ":parent"
            :style {:font-size 80
                    :background-color "white"
                    :text-valign "top"
                    :border-color "#CC9"
                    :border-width 10
                    }}
           {:selector ":selected"
            :style {:background-color "lightblue"}}]      
   :elements (filter-cyto elements)})

;; END CYTO ==========================================

;; SUMMARIES ==========================================

(defn mk-summary-data**
  [id {:keys [train test]} step]
  (let [train' (get train id)
        test' (get test id)]
    (if (sequential? train')
      {:step step
       :bins train'}
      {:x step
       :train train'
       :test test'})))

(defn mk-summary-data*
  [re agg [_ entry]]
  (let [{:keys [step fetched]} entry]
    (merge-with into
                agg
                (into {}
                      (for [[k _] (:train fetched)]
                        (when (and (string? k)
                                   (re-find re k))
                          [k [(mk-summary-data** k fetched step)]]))))))

(defn mk-summary-data
  [selected log]
  (reduce (partial mk-summary-data* (->> selected
                                           (format "summaries/%s($|/.*)?")
                                           re-pattern))
          {}
          log))

(defn ->chart-map
  [d]
  {:config {}
   :data {:type "area"
          :x "x"
          :columns [(into [:x] (map :x d))
                    (into [:train] (map :train d))
                    (into [:test] (map :test d))]}})

(defn- mk-summaries
  [selected log]
  (when-let [data (some-> (mk-summary-data selected log)
                          not-empty)]
    (vec
     (for [[id d] data]
       (if (-> d first :bins)
         [:histos id
          {:mode "offset"
           :timeProperty "step"
           :data d}]
         [:chart id (->chart-map d)])))))

(defn find-selected-op
  [dev-ns selected]
  (try
    (when selected
      @(ns-resolve dev-ns
                   (symbol (clojure.string/replace selected
                                                   #"/" ">"))))
    (catch Exception e
      nil)))

(defn web-view-updater
  [^Graph g dev-ns log current-view selected-node-id]
  (let [charts (mk-summaries selected-node-id log)
        sel-op (find-selected-op dev-ns selected-node-id)]
    {:graph (mk-cyto (mk-graph-def g))
     :charts (if (nil? charts) [] charts)
     :selected selected-node-id
     :form (some->> sel-op meta :form (mapv str))}))

(defn send-web-view-updater
  [^Graph g dev-ns log]
  (a/offer! wsvr/view-chan
            (partial web-view-updater g dev-ns log)))

(defn op->summary-id [op & [suffix]]
  (ut/$- ->> op
         :id
         (str "summaries/")
         (str $ suffix)))

(defn find-ops-to-summarize
  [^Graph g target]
  (->> (ut/$- some-> target
              :id
              name
              (str "/.*")
              re-pattern
              (opn/find-ops g $)
              (filter #(-> % :op #{:VariableV2})
                      $))
       (into [(->> target
                   (mcro/macro-plan->op-plan g)
                   (opn/find-op g))])
       distinct))

(defn agd->delta-ratio-smry
  [^Graph g smry-id {[v-id alpha-id delta-id] :inputs}]
  (let [c 0.0000001
        v (opn/find-op g v-id)
        delta (opn/find-op g delta-id)
        alpha (opn/find-op g alpha-id)]
    (when (and v delta alpha)
      (o/scalar-summary {:id smry-id} smry-id
                        (sc/with-push-both-scopes :summaries
                          (c/reduce-mean
                           (o/div (o/add c
                                         (o/sqrt
                                          (c/reduce-sum
                                           (o/mul (o/mul alpha
                                                         (o/abs delta))
                                                  (o/mul alpha
                                                         (o/abs delta))))))
                                  (o/add c
                                         (o/sqrt
                                          (c/reduce-sum
                                           (o/mul v v)))))))))))

(defn mk-summary-plan
  [^Graph g vari->agd target]
  (let [smry-id (op->summary-id target)
        agd (some-> target :id vari->agd first) ;; TODO `first` is bad?
        agd-smry-id (when agd
                      (op->summary-id target "/update_ratio"))
        scalar? (-> target
                    opn/get-desc-of-output
                    :shape
                    sh/scalar?)
        id->node (gr/id->node g)]
    [(or (id->node smry-id)
         (if scalar?
           (o/scalar-summary {:id smry-id} smry-id target)
           (o/histogram-summary {:id smry-id} smry-id target)))
     (when (and agd (-> agd-smry-id id->node nil?))
       (agd->delta-ratio-smry g agd-smry-id agd))]))

(defn mk-summary-plans
  [g vari->agd target]
  (->> (if-let [target' (opn/find-op g target)]
         [target']
         (find-ops-to-summarize g target))
       (map (partial mk-summary-plan g vari->agd))
       flatten
       (remove nil?)))

(defn find-gd-appliers
  [^Graph g]
  (->> g
       gr/id->node
       vals
       (filter #(-> % :op #{:ApplyGradientDescent}))
       (group-by #(-> % :inputs first))))

(defn add-summaries
  [^Graph g summaries]
  (let [vari->agd (find-gd-appliers g)
        added (->> summaries
                   (mapcat (partial mk-summary-plans g
                                    vari->agd))
                   (remove nil?))]
    (g/build-all->graph g added)
    added))

(defn pb-load-summary [ba] (pr/protobuf-load SummaryP ba))

(defn hist-bytes->histo-bins
  [smry]
  (let [h smry
        {:keys [bucket-limit bucket] mx :max mn :min}
        (-> h
            :value
            first
            :histo)]
    {:mx (or mx (-> bucket-limit drop-last last))
     :mn (or mn (first bucket-limit)) ;; because :min is null sometimes?
     :bins (mapv (fn [x x' y]
                   {:x x
                    :y y
                    :dx (- x' x)})
                 bucket-limit
                 (-> bucket-limit
                     rest
                     drop-last)
                 bucket)}))

(defn merge-hists
  [{x1 :x y1 :y dx1 :dx} {y2 :y dx2 :dx}]
  {:x x1
   :y (+ y1 y2)
   :dx (+ dx1 dx2)})

(defn normalize-hist
  [scale {:keys [y dx] :as h}]
  (assoc h :y (* scale (/ y dx))))

(defn hist-bytes->histo-bins2
  [smry]
  (let [{:keys [mx mn bins]} (hist-bytes->histo-bins smry)
        spread (- mx mn)
        min-dx (/ spread 100.)]
    (loop [[head & tail] bins
           agg []
           current nil]
      (cond (nil? head)
            (->> current
                 (conj agg)
                 (remove nil?)
                 (mapv (partial normalize-hist
                                min-dx)))

            (nil? current)
            (recur tail agg head)

            :else (let [{:keys [dx] :as nxt} (merge-hists current head)]
                    (if (> dx min-dx)
                      (recur tail
                             (conj agg nxt)
                             nil)
                      (recur tail
                             agg
                             nxt)))))))

(defn fetched->log-entry*
  [ba]
  (let [smry (pb-load-summary ba)]
    (if-let [value (-> smry :value first :simple-value )]
      value
      (hist-bytes->histo-bins2 smry))))

(defn- fetched->log-entry
  [^Graph g fetched]
  (ut/$- -> fetched
         (ut/fmap (partial ut/fmap fetched->log-entry*)
                  $)))

;; END SUMMARIES ==============================

;; PLUGIN =====================================

(defn plugin-init-post
  [ws-name]
  (let [ns-sym (mk-ns-sym ws-name)
        _ (release-dev-ns ns-sym) ;; TODO necessary?
        ws-ns (create-ns ns-sym)
        log (atom (sorted-map))]
    (swap! dev-nses conj ns-sym)
    (intern ws-ns '$log log)
    {:global {:ws-ns ws-ns
              :log log}}))

(defn plugin-setup-init-post [{:keys [ws-name]} & _]
  [`(plugin-init-post '~ws-name)])

(defn plugin-build-post
  [^Graph g ws-ns summaries]
  (mk-nodes-in-ns g ws-ns)
  (intern ws-ns '$graph g)
  {:modes
   (->> summaries
        (ut/fmap (partial add-summaries g))
        (ut/fmap (partial hash-map :fetch)))})

(defn plugin-setup-build-post
  [ws-cfg & _]
  [`(plugin-build-post ~'(-> state :global :gm :graph)
                       ~'(-> state :global ::plugin :ws-ns)
                       (->> ~'ws-cfg :modes (ut/fmap ::summaries)))])

(defn plugin-create-session-post
  [^Session s ws-ns]
  (intern ws-ns '$session s)
  {})

(defn plugin-setup-create-session-post
  [ws-cfg & _]
  [`(plugin-create-session-post ~'(-> state :global :gm :session)
                                ~'(-> state :global ::plugin :ws-ns))])

(defn plugin-interval-post
  [^Graph g ws-ns log-atom fetched step]
  (swap! log-atom
         assoc step
         {:step step
          :fetched (fetched->log-entry g fetched)})
  (send-web-view-updater g ws-ns @log-atom)
  #_(clojure.pprint/pprint [fetched step]))

(defn plugin-setup-interval-post
  [ws-cfg]
  [`(plugin-interval-post
     ~'(-> state :global :gm :graph) 
     ~'(-> state :global ::plugin :ws-ns) ;; TODO hard code ns instead of lookup??
     ~'(-> state :global ::plugin :log)
     ~'(-> state :interval ::plugin :fetched)
     ~'(-> state :stage :gm :pos :step))])

(def plugin
  {:meta {:kw ::plugin
          :desc "dev things"}
   :init {:post  #'plugin-setup-init-post}
   :build {:post #'plugin-setup-build-post}
   :create-session {:post #'plugin-setup-create-session-post}
   :interval {:post-async #'plugin-setup-interval-post}})


;; END PLUGIN =================================
