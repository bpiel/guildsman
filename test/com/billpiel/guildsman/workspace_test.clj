(ns com.billpiel.guildsman.workspace-test
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


#_(g/produce
 (o/iterator-to-string-handle (o/iterator {:output_types [g/dt-float]
                                           :output_shapes [[]]} )))

#_(g/produce
 (o/iterator {:output_types [g/dt-float]
              :output_shapes [[]]} ))

#_(g/let+ [ph (o/placeholder :ph dt/string-kw [])
         idph (o/identity-tf ph)
         ph-itr (o/iterator-from-string-handle :ph-itr
                                               {:output_types [dt/long-kw]
                                                :output_shapes [[1]]}
                                               ph)
         ign (o/iterator-get-next {:output_types [dt/long-kw]
                                   :output_shapes [[1]]}
                                  ph-itr)
         ds (o/range-dataset
             {:output_types [dt/long-kw]
              :output_shapes [[1]]}
             0 5 1)
         itr (o/iterator :itr {:output_types [dt/long-kw]
                               :output_shapes [[1]]})
         mitr (o/make-iterator :mitr
                               ds itr)
         itr-hnd (o/iterator-to-string-handle itr)
         sess (g/build-all->session [mitr itr-hnd ph-itr])]
  (def t1  (g/produce sess itr-hnd))
  (g/run sess mitr)
  [(g/produce sess ign {:ph t1})
   (g/produce sess ign {:ph t1})
   (g/produce sess ign {:ph t1})
   (g/produce sess ign {:ph t1})
   (g/produce sess ign {:ph t1})
   ])


[:workflow
 {:plugins #{}
  :modes {:train {:pre []
                  :post []
                  :targets []
                  :feed {}
                  :fetch []}
          :validate {:pre []
                     :post []
                     :targets []
                     :feed {}
                     :fetch []}
          :test {:pre []
                 :post []
                 :targets []
                 :feed {}
                 :fetch []}}
  :interval {:pre []
             :post []}
  :main [[:build]
         [:start-session]
         [:init-vars]
         [:process
          [:intervals
           {:duration :???
            :pre []
            :main [[:mode :train]
                   [:steps
                    {:count :???
                     :middle [:run {:target []
                                    :feed {}}]
                     :last [:fetch {:target []
                                    :feed {}
                                    :fetch {}}]}]
                   [:mode :validate]
                   [:fetch {:target []
                            :feed {}
                            :fetch {}}]
                   [:early-stop?]]
            :post [[:load :last-checkpoint]
                   [:mode :test]
                   [:fetch {:target []
                            :feed {}
                            :fetch {}}]]}]]]}]

[:block {:type :workflow
         :hooks {:mode {:train {:enter [[:run {:targets [:select-train-ds]}]]}
                        :test {:enter [[:run {:targets [:select-test-ds]}]]}}}
         ;; hmmmmmmmmmmmmmmm
         :always [[:no-interrupt]]
         :span {:steps 10000}}
 [:block {:type :stage}
  [:build {:plan {}}]
  [:start-session]
  [:init-varis]
  [:block {:type :interval
           :span {:intervals 0}} ;; 0-span interval to catch pre-run fetches
   [:mode :train]
   [:fetch]
   [:mode :test]
   [:fetch]]
  [:block {:type :interval
           :pre [[:require-span-completable]] ;; default for all blocks?
           :span {:interval 1
                  :steps 100}
           :repeat? [:require-span-completable]
           }
   [:block {:type :step
            :span {:steps [:steps :block :remaining -1]}
            :pre [[:mode :train]]}
    [:run-span-steps]]
   [:block {:type :step
            :pre [[:mode :train]]}
    [:fetch]]
   [:mode :test]
   [:fetch]]]]


[:block {:type :workflow
         :hooks {:mode {:train {:enter [[:run {:targets [:select-train-ds]}]]}
                        :test {:enter [[:run {:targets [:select-test-ds]}]]}}}
         ;; hmmmmmmmmmmmmmmm
         :always [[:no-interrupt]]
         :span {:steps 10000}}
 [:block {:type :stage}
  [:build {:plan {}}]
  [:start-session]
  [:init-varis]
  [:block {:type :interval
           :span {:intervals 0}} ;; 0-span interval to catch pre-run fetches
   [:mode :train]
   [:fetch]
   [:mode :test]
   [:fetch]]
  [:block {:type :interval
           :start? [[:require-span-completable]] ;; default for all blocks?
           :span {:interval 1
                  :steps 100}}
   [:block {:type :step
            :span {:steps '(dec block-steps-remaining)}
            :pre [[:mode :train]]}
    [:run-span-steps]]
   [:block {:type :step
            :pre [[:mode :train]]}
    [:fetch]]
   [:mode :validate]
   [:fetch]
   [:repeat-block? [:require-span-completable]]]
  [:block {:type :interval
           :span {:intervals 0}} ;; 0-span interval to catch final test fetches
   [:rewind-checkpoint]
   [:mode :test]
   [:fetch]]]]


steps
- limit
- done
- remaining
interval-steps
stage-steps
steps-steps

block-steps (which ever block we're in??? min of all scopes??)

intervals
 - limit
 - done
 - remaining
