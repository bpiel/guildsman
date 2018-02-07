(ns com.billpiel.guildsman.workspace2-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]))


(def color-idx
  (zipmap [:red :orange :yellow :green :blue :purple :black :white]
          (range)))

(def train-data
  [[[1. -1. -1.] (color-idx :red)]
   [[1. 0. -1.] (color-idx :orange)]
   [[1. 1. -1.] (color-idx :yellow)]
   [[-1. 1. -1.] (color-idx :green)]
   [[-1. -1. 1.] (color-idx :blue)]
   [[1. -1. 1.] (color-idx :purple)]
   [[-1. -1. -1.] (color-idx :black)]
   [[1. 1. 1.] (color-idx :white)]])

(def test-data
  [[[0.9 -1. -0.8] (color-idx :red)]
   [[1. 0.2 -1.] (color-idx :orange)]
   [[0.8 1. -1.] (color-idx :yellow)]
   [[-1. 0.9 -1.] (color-idx :green)]
   [[-0.8 -1. 1.] (color-idx :blue)]
   [[1. -0.9 1.] (color-idx :purple)]
   [[-1. -0.8 -1.] (color-idx :black)]
   [[0.8 0.9 1.] (color-idx :white)]])


(g/def-workspace ws1
  (g/let+ [p1 (o/placeholder :p1 g/dt-float [1])
           {:keys [v a1 tr]}
           (+->> (c/vari :v {:dtype g/dt-float :shape [1]} [0.])
                 (o/add :a1 p1)
                 (o/assign :tr v))]
    {:plugins [dev/plugin g/gm-plugin]
     :plans [tr]
     :duration [:steps 100000]
     :interval [:steps 10000]
     :modes {:train {:targets [tr]
                     ::dev/summaries [v a1]
                     :feed {p1 [1.]}
                     :fetch [a1]
                     :enter {:targets []}}
             :test {::dev/summaries [v a1]
                    :feed {p1 [2.]}
                    :fetch [a1]
                    :enter {:targets []}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))



#_(clojure.pprint/pprint 
   (g/ws-status ws1))

#_(g/ws-train-test ws1)



#_(clojure.pprint/pprint  $.ws1/$log)

