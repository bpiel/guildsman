(ns com.billpiel.guildsman.workspace-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.dev :as dev]))

(def dummy-data (range 1 1000))

;; TODO spec

(g/def-workspace ws1
  (let [train-num 100
        test-num 100
        {:keys [data logits hidden classes]}
        (g/id$->> (o/placeholder :data 
                                 g/dt-float
                                 [-1 784]) ;;TODO feedable iterator macro
                  (c/dense {:id :hidden
                            :units 1024})
                  (c/dropout (o/placeholder :keep g/dt-float []))
                  (c/dense {:id :logits
                            :units 10})
                  (o/arg-max :classes $ 1))
        ;; vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        alpha (o/placeholder :alpha g/dt-float [])
        ;; ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        {:keys [labels loss opt]}
        (g/id$->> (o/placeholder :labels
                                 g/dt-int
                                 [-1])
                  (c/one-hot $ 10)
                  (o/softmax-cross-entropy-with-logits logits)
                  (c/reduce-mean :loss)
                  ;; vvvvvvvvvvvvvvvvvvvvvvvvv                   
                  (c/grad-desc-opt :opt alpha))
        ;; ^^^^^^^^^^^^^^^^^^^^^^^^^
        acc (c/accuracy :acc
                        ;; TODO clean up cast mess
                        (o/cast-tf {:SrcT g/dt-long
                                    :DstT g/dt-int}
                                   classes)
                        labels)]
    {:plugins #{dev/plugin}
     :plans [acc opt]
     :train {::dev/summaries [alpha acc loss logits hidden]
             :targets [opt]  ;;TODO include iterator next step somewhere
             :feed {:data {:type :seq ;; TODO file, files, dir?
                           :batch-size 100
                           :repeat true
                           :source (take train-num dummy-data)}
                    :labels {:type :seq
                             :batch-size 100
                             :repeat true
                             :source (take train-num dummy-data)}
                    ;; vvvvvvvvvvvvvvvvvvvvvvvvv
                    :alpha #(* 0.1 (Math/pow 0.99 %)) ;;TODO represent as data!!?!?
                    ;; ^^^^^^^^^^^^^^^^^^^^^^^^^
                    :keep 0.2}
             :duration [:steps 100] ;; or :epochs :ms
             :interval [:steps 10]}
     :test {::dev/summaries [acc]
            :targets []
            :feed {:data (take test-num (reverse dummy-data))
                   :labels (take test-num (reverse dummy-data))
                   :alpha 0.
                   :keep 1.}}
     :predict {:args [:data] ;; or map
               :return :classes}}))
