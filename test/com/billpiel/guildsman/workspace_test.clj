(ns com.billpiel.guildsman.workspace-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
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

;; TODO spec

(g/def-workspace ws1
  (g/let+ [{:keys [features logits classes]}
           (+>> (o/placeholder :features 
                               g/dt-float
                               [-1 3]) ;;TODO feedable iterator macro
                (c/dense {:id :logits
                          :units 8})
                (o/arg-max {:id :classes
                            :output_type g/dt-int}
                           $ 0))
           {:keys [labels opt]}
           (+>> (o/placeholder :labels
                               g/dt-int
                               [-1])
                (c/one-hot $ 8)
                (c/mean-squared-error logits)
                (c/grad-desc-opt :opt 0.3))
           acc (c/accuracy :acc
                           classes
                           labels)]
    {:plugins #{dev/plugin}
     :plans [acc opt]
     :train {::dev/summaries [logits acc]
             :fetch [acc]
             :targets [opt] ;;TODO include iterator next step somewhere
             :feed {:features (map first train-data)
                    #_{:type :seq ;; TODO file, files, dir?
                       :batch-size 100
                       :repeat true
                       :source (take train-num dummy-data)}
                    :labels (map second train-data)
                    #_ {:type :seq
                        :batch-size 100
                        :repeat true
                        :source (take train-num dummy-data)}}
             :duration [:steps 10000] ;; or :epochs :ms :intervals
             :interval [:steps 100]}
     :test {::dev/summaries [acc]
            :fetch [acc]
            :targets []
            :feed {:features (map first test-data)
                   :labels (map second test-data)}}
     :predict {:args [:features] ;; or map
               :return :logits}}))

#_(g/ws-status ws1)

#_(g/ws-build ws1)

#_(g/ws-train-test ws1)


#_ (-> ws1 :state deref :session)

#_(clojure.pprint/pprint (g/ws-show-cmd-source ws1 :status))

#_(clojure.pprint/pprint (g/ws-show-cmd-source ws1 :ensure-vars-set))

#_(clojure.pprint/pprint (g/ws-show-cmd-source ws1 :create-session))

#_(clojure.pprint/pprint (g/ws-show-cmd-source ws1 :train-test))

#_(clojure.pprint/pprint (-> #'ws1 meta :source))

#_(clojure.pprint/pprint (macroexpand '(g/def-workspace hi {:plugins #{dev/plugin}})))


#_(g/def-workspace hi {:plugins #{dev/plugin}})





#_(clojure.pprint/pprint (g/ws-show-cmd-source hi :build))




#_(clojure.pprint/pprint hi)


