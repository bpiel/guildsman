(ns guildsman.histogram-series
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [re-com.core :as rc]))


(defn histos-state->histos-gen-map
  [{:keys [id value]}]
  (clj->js (merge value
                  {:container (.getElementById js/document 
                                               id)
                   :tooltip (.getElementById js/document 
                                               "tooltip")})))

(defn gen-histos
  [state']
  (js/histogramSeries (histos-state->histos-gen-map state')))

(defn histos-comp-did-mount
  [state this]
  (vswap! state assoc 
          :instance
          (gen-histos @state)))

(defn histos-reagent-render
  [state value]
  (let [{:keys [id]} @state]
    (println "histos-reagent-render")
    (println id)
    [:div
     [:div {:id "tooltip"}]
     [:svg {:id id :class "histos"}
      [:g
       [:g {:class "axis x"}]
       [:g {:class "axis y"}]
       [:g {:class "axis y slice"}]
       [:g {:class "stage"}
        [:rect {:class "background"}]]
       [:g {:class "x-axis-hover"}]
       [:g {:class "y-axis-hover"}]
       [:g {:class "y-slice-axis-hover"}]]]]))

(defn histos-comp-will-update
  [state this [_ new-value]]
  (vswap! state
          assoc :value new-value))

(defn histos-comp-did-update
  [state this [_ old-val]]
  (let [{:keys [value] :as state'} @state]
    (cond (not= value old-val)
          (do (println "generate")
              (vswap! state
                      assoc
                      :instance
                      (gen-histos state'))))))


(defn histogram-series
  [value]
  (println "histos/histos")
  (let [state (volatile! {:id (str (gensym "histos"))
                          :value value})]
    (r/create-class {:component-did-mount (partial histos-comp-did-mount state)
                     :component-did-update (partial histos-comp-did-update state)
                     :component-will-update (partial histos-comp-will-update state)
                     :reagent-render (partial histos-reagent-render state)}))) 
