(ns guildsman.chart
       (:require [re-frame.core :as rf]
                 [reagent.core :as r]
                 [re-com.core :as rc]))

(defn chart-state->bb-gen-map
  [state {:keys [id config data]}]
  (println "!!!!!!!!1 chart-state->bb-gen-map !!!!!!!!")

  (clj->js (assoc config
                  :transition {:duration 0}
                  :data data
                  :bindto (str "#" (:id @state)))))

(defn chart-comp-did-mount
  [state value this]
  (vswap! state
           (fn [{:keys [id]}]
             (assoc value
                    :id id
                    :instance (.generate js/bb (chart-state->bb-gen-map state value))))))

(defn chart-reagent-render
  [state value]
  (let [{:keys [id]} @state]
    (println "chart-reagent-render")
    (println id)
    [:div {:id id}]))

(defn chart-comp-will-update
  [state this [_ new-value]]
  (vswap! state
          (fn [{:keys [id instance]}]
            (assoc new-value
                   :id id
                   :instance instance))))

(defn chart-comp-did-update
  [state this [_ {:keys [config data highlighted selected] :as old-val}]]
  (let [{:keys [instance] :as state'} @state]
    (cond (not= config (:config state'))
          (do (println "generate")
              (vswap! state
                      assoc
                      :instance
                      (.generate js/bb (chart-state->bb-gen-map state state'))))

          (not= data (:data state'))
          (do (println "load")
              (.load instance (clj->js (merge (:data state') {:unload true}))))

          (not= [highlighted selected] [(:highlighted state')
                                        (:selected state')])
          (do ;(println "flush")
            (.flush instance)))))


(defn chart
  [value]
  (println "chart/chart")
  (let [state (volatile! {:id (str (gensym "chart"))})]
    (r/create-class {:component-did-mount (partial chart-comp-did-mount state value)
                     :component-did-update (partial chart-comp-did-update state)
                     :component-will-update (partial chart-comp-will-update state)
                     :reagent-render (partial chart-reagent-render state)})))
    
