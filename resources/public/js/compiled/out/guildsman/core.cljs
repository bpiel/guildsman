(ns guildsman.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [re-com.core :as rc]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [devtools.core :as devtools]
            [figwheel.client :as figwheel :include-macros true]
            [cognitect.transit :as t]
            [guildsman.chart :as ch]
            [guildsman.histogram-series :as hs]
            [guildsman.cytoscape :as cy]
            [goog.string :as gstring]
            [goog.string.format])
  (:import goog.History))

(enable-console-print!)

(println "start loading")

(def json-writer (t/writer :json))
(def json-reader (t/reader :json))

(rf/reg-sub
 :graph
 (fn [db _]
   (:graph db)))

(rf/reg-sub
 :charts
  (fn [db _]
    (:charts db)))

(rf/reg-sub
 :left-mode
  (fn [db _]
    (:left-mode db)))

(rf/reg-sub
 :form
  (fn [db _]
    (:form db)))

(def components
  {'chart #'ch/chart
   'histos #'hs/histogram-series
   'graph #'cy/cytoscape
   'v-box rc/v-box
   'h-box rc/h-box})

(defn mk-renderable
  [v]
  (clojure.walk/prewalk-replace components v))

(defn dispatch-ws-msg
  [msg]
  (r/render (mk-renderable msg)
            (.getElementById js/document "app")))


(rf/reg-event-db
 :ws-inbound
 (fn [db [_ {:keys [graph charts selected form] :as p}]]
   #_   (println p)
   (js/update-tb graph)
   (merge db
          (when graph
            {:graph graph})
          (when charts
            {:charts charts})
          (when selected
            {:selected selected})
          {:form form})))

(rf/reg-event-db
 :node-select
 (fn [db [_ node-id]]
   (rf/dispatch [:ws-send {:select node-id}])
   (assoc db :selected node-id)))

(rf/reg-event-db
 :ws-send
 (fn ws-send [db [_ data]]
#_   (println data)
   (.send (:ws db)
          (t/write json-writer data))
   db))

(defn ws-onmessage
  [data]
#_  (println (.-data data))
  (let [d (t/read json-reader (.-data data))]
        (println d)
    (rf/dispatch [:ws-inbound d])))

(rf/reg-event-db
 :ws-init
 (fn [db _]
   (if-let [ws (js/WebSocket. (str "ws://" (.-host js/location) "/ws"))]
     (do
       (println "ws init'd!")
       (set! (.-onmessage ws) ws-onmessage)
       (assoc db :ws ws))
     (throw (js/Error. "Websocket connection failed!")))))

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
;  :on-jsload mount-components
  )


#_(devtools/install!)

#_(init!)


;; === app END

(println "done loading.")

#_(r/render [ch/chart
           {:config
            {:transition {:duration 0}}
            :data
            {:columns [["data1" 1 4 2 5]]}
            :highlighted nil
            :selected nil}]
          (.getElementById js/document "app"))

(rf/reg-event-db
  :init-db
  (fn [db _]
    {:graph nil
     :charts nil
     :left-mode nil}))

(rf/reg-event-db
 :click-chart
 (fn [db [_ idx]]
   (assoc db :left-mode idx)))

(defn graph-view
  []
  (let [graph @(rf/subscribe [:graph])]
    (if graph
      [cy/cytoscape graph]
      [:div "no graph"])))

(defn data-point-view
  [{:keys [x test train]}]
  (->> [(when x
          [:span.step "step"
           [:span.val x]])
        (when train
          [:span.train "train"
           [:span.val (gstring/format "%.3f" train)]])
        (when test
          [:span.test "test"
           [:span.val (gstring/format "%.3f" test)]])]
       (remove nil?)
       (into [:div.last-point])))

(defn chart-view
  [ty title data]
  [:div.summary
   [:span.title title]
   [data-point-view (->> data :data :columns (mapv (juxt first last)) (into {}))]
   (case ty
     :chart [ch/chart data]
     :histos [hs/histogram-series data])])

(defn charts-view
  []
  (let [charts @(rf/subscribe [:charts])]
    (into [:div#summaries]
          (map-indexed
           (fn [i [ty title data]]
             [:div.summary-outer
              {:on-click #(rf/dispatch [:click-chart i])}
              (chart-view ty title data)])
           charts))))

(defn left-pane
  []
  (let [left-mode @(rf/subscribe [:left-mode])
        charts @(rf/subscribe [:charts])]
    (if (nil? left-mode)
      [graph-view]
      (let [[ty title data] (nth charts
                           left-mode) ]
        [:div#big-left
         [:span.close-btn {:on-click #(rf/dispatch [:click-chart nil])} "[ X close ]"]
         [chart-view ty title data]]))))

(defn right-pane
  []
  [charts-view])

(defn desc []
  (when-let [[form ns-name pos] @(rf/subscribe [:form])]
    [:div#desc
     [:pre.form form]
     [:div.loc ns-name " : " pos]]))

(defn page []
  [:tf-tensorboard {:use-hash true
                    :brand "TensorBoard"}]
  #_[rc/h-box :children
   [[rc/v-box :size "100%" :children [[rc/box :size "1 1 80px"  :child [desc]]
                                      [rc/box :size "100 1 500px" :child [left-pane]]]]
    [rc/box :size "400px" :child [right-pane]]]])

(defn init! []
  (rf/dispatch-sync [:init-db])
  (rf/dispatch-sync [:ws-init])
  (r/render [#'page]
            (.getElementById js/document "app")))

(init!)
