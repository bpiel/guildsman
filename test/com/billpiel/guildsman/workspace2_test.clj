(ns com.billpiel.guildsman.workspace2-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]))

(g/def-workspace ws1
  (g/let+ [p1 (o/placeholder :p1 g/dt-float [1])
            {:keys [v a1 tr]}
            (+>> (c/vari :v {:dtype g/dt-float :shape [1]} [0.])
                 (o/add :a1 p1)
                 (o/assign :tr v))]
    {:plugins [dev/plugin g/gm-plugin]
     :plans [tr]
     :modes {:train {:targets [tr]
                     :dev/summaries [v a1]
                     :feed {p1 [1.]}
                     :enter {:targets []}}
             :test {:dev/summaries [v a1]
                    :feed {p1 [2.]}
                    :enter {:targets []}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))

