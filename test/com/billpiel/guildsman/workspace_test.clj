(ns com.billpiel.guildsman.workspace-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.dev :as dev]))

(def dummy-data
  (map (fn [x] [x x x x])
       (range 1 1000)))

(def dummy-labels (range 1 1000))

;; TODO spec

(g/def-workspace ws1
  (let [train-num 100
        test-num 100
        {:keys [data logits classes]}
        (g/id$->> (o/placeholder :data 
                                 g/dt-float
                                 [-1 2]) ;;TODO feedable iterator macro
                  (c/dense {:id :logits
                            :units 10})
                  (o/arg-max :classes $ 1))
        alpha (o/placeholder :alpha g/dt-float [])
        {:keys [labels loss opt]}
        (g/id$->> (o/placeholder :labels
                                 g/dt-int
                                 [-1])
                  (c/one-hot $ 10)
                  (c/mean-squared-error logits)
                  (c/reduce-mean :loss)
                  (c/grad-desc-opt :opt alpha))
        acc (c/accuracy :acc
                        ;; TODO clean up cast mess
                        (o/cast-tf {:SrcT g/dt-long
                                    :DstT g/dt-int}
                                   classes)
                        labels)]
    {:plugins #{dev/plugin}
     :plans [acc opt]
     :train {::dev/summaries [alpha acc loss logits]
             :targets [opt] ;;TODO include iterator next step somewhere
             :feed {:data (take train-num dummy-data)
                    #_{:type :seq ;; TODO file, files, dir?
                       :batch-size 100
                       :repeat true
                       :source (take train-num dummy-data)}
                    :labels (take train-num dummy-labels)
                    #_ {:type :seq
                             :batch-size 100
                             :repeat true
                             :source (take train-num dummy-data)}
                    :alpha 0.01 #_ #(* 0.1 (Math/pow 0.99 %)) ;;TODO represent as data!!?!?
                    }
             :duration [:steps 100] ;; or :epochs :ms
             :interval [:steps 10]}
     :test {::dev/summaries [acc]
            :targets []
            :feed {:data (take test-num (reverse dummy-data))
                   :labels (take test-num (reverse dummy-labels))
                   :alpha 0.}}
     :predict {:args [:data] ;; or map
               :return :classes}}))

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

