(ns guildsman.dashboard
  (:require cljsjs.vega
            cljsjs.vega-embed))


(def vspec (JSON.parse "{
    \"$schema\": \"https://vega.github.io/schema/vega-lite/v2.json\",
    \"data\": { \"name\": \"table\" },
    \"width\": 400,
    \"mark\": \"line\",
    \"encoding\": {
        \"x\": { \"field\": \"x\", \"type\": \"quantitative\", \"scale\": { \"zero\": false } },
        \"y\": { \"field\": \"y\", \"type\": \"quantitative\" },
        \"color\": { \"field\": \"category\", \"type\": \"nominal\" }
    }
}"))

(def view (-> vspec
              js/vega.parse
              (js/vega.View.)
              (.renderer "canvas")
              (.initialize "#graph")
              .run))

(.then (js/vegaEmbed "#graph" vspec )
       #(def view %))

view

(def cs1 (.insert (js/vega.changeset)
                        (clj->js [{:x 10 :y 75 :category 0}
                                  {:x 11 :y 10 :category 0}
                                  {:x 12 :y 100 :category 1}
                                  {:x 13 :y 50 :category 1}])))

(.run (.change (.-view view)
               "table"
               cs1))
