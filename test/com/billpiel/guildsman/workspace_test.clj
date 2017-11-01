(ns com.billpiel.guildsman.workspace-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.dev :as dev]))

(def dummy-data
  [[0. 0.]
   [0. 1.]
   [1. 0.]
   [1. 1.]])

(def dummy-labels
  [0. 1. 1. 0.])

;; TODO spec

(g/def-workspace ws1
  (let [{:keys [data logits classes]}
        (g/id$->> (o/placeholder :data 
                                 g/dt-float
                                 [-1 2]) ;;TODO feedable iterator macro
                  (c/dense {:id :logits
                            :units 1}))
        {:keys [labels loss opt]}
        (g/id$->> (o/placeholder :labels
                                 g/dt-float
                                 [-1])
                  (c/mean-squared-error logits)
                  (c/grad-desc-opt :opt 0.1))
        acc (c/accuracy :acc
                        ;; TODO clean up cast mess
                        logits
                        labels)]
    {:plugins #{dev/plugin}
     :plans [acc opt]
     :train {::dev/summaries [acc logits]
             :targets [opt] ;;TODO include iterator next step somewhere
             :feed {:data dummy-data
                    #_{:type :seq ;; TODO file, files, dir?
                       :batch-size 100
                       :repeat true
                       :source (take train-num dummy-data)}
                    :labels dummy-labels
                    #_ {:type :seq
                        :batch-size 100
                        :repeat true
                        :source (take train-num dummy-data)}}
             :duration [:steps 100] ;; or :epochs :ms
             :interval [:steps 10]}
     :test {::dev/summaries [acc]
            :targets []
            :feed {:data dummy-data
                   :labels dummy-labels}}
     :predict {:args [:data] ;; or map
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

