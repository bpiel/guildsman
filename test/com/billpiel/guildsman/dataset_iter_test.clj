(ns com.billpiel.guildsman.dataset-iter-test
  (:require [clojure.test :as t]
            [clojure.core.async :as a]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]
            [com.billpiel.guildsman.packages :as pkg]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework AttrValue OpDef]
           [com.billpiel.guildsman FunctionNI]))

(pkg/register-pkg! :bpiel/parse-mnist-features-fn
                   {:name "parse-mnist-features-fn"
                    :function
                    (g/fn-tf parse-mnist-features-fn
                             [g/dt-float [784]]
                             [x g/dt-string []]
                             [(o/div (->> x
                                          (o/decode-raw {:out_type g/dt-uint})
                                          (c/cast-tf g/dt-float))
                                     255.0)])})

(pkg/register-pkg! :bpiel/parse-mnist-labels-fn
                   {:name "parse-mnist-labels-fn"
                    :function
                    (g/fn-tf parse-mnist-labels-fn
                             [g/dt-int []]
                             [x g/dt-string []]
                             [(->> x
                                   (o/decode-raw {:out_type g/dt-uint})
                                   (o/unpack {:num 1 :axis 0})
                                   (c/cast-tf g/dt-int))])})

(pkg/register-pkg! :bpiel/mnist-train-60k-features-file
                   {:name "..."
                    :pkgs [:deps]
                    :asset {:records 60000                            
                            :sources [[{:type :local
                                        :path "/home/bill/repos/guildsman-conj2017/resources/mnist/train-60k-images-idx3-ubyte"
                                        :md5hash "6bbc9ace898e44ae57da46a324031adb"}]]}})

(pkg/register-pkg! :bpiel/mnist-train-60k-labels-file
                   {:name "..."
                    :pkgs [:deps]
                    :asset {:records 60000                            
                            :sources [[{:type :local
                                        :path "/home/bill/repos/guildsman-conj2017/resources/mnist/train-60k-labels-idx1-ubyte"
                                        :md5hash "6bbc9ace898e44ae57da46a324031adb"}]]}})

(pkg/register-pkg! :bpiel/mnist-train-60k-features
                   {:name "..."
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-60k-features-file)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes (o/c 16 g/dt-long) ;; TODO type hints for macros?
                                                    :record-bytes (o/c 784 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 784 g/dt-long)})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn))})

(pkg/register-pkg! :bpiel/mnist-train-60k-labels
                   {:name "..."
                    :pkgs [:deps]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-60k-labels-file)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes (o/c 8 g/dt-long)
                                                    :record-bytes (o/c 1 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 1 g/dt-long)})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn))})



(pkg/register-pkg! :bpiel/mnist-test-10k-features-file
                   {:name "..."
                    :pkgs [:deps]
                    :asset {:records 10000
                            :sources [[{:type :local
                                        :path "/home/bill/repos/guildsman-conj2017/resources/mnist/test-10k-images-idx3-ubyte"
                                        :md5hash "6bbc9ace898e44ae57da46a324031adb"}]]}})

(pkg/register-pkg! :bpiel/mnist-test-10k-labels-file
                   {:name "..."
                    :pkgs [:deps]
                    :asset {:records 10000                            
                            :sources [[{:type :local
                                        :path "/home/bill/repos/guildsman-conj2017/resources/mnist/test-10k-labels-idx1-ubyte"
                                        :md5hash "6bbc9ace898e44ae57da46a324031adb"}]]}})

(pkg/register-pkg! :bpiel/mnist-test-10k-features
                   {:name "..."
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-features-file)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes (o/c 16 g/dt-long) ;; TODO type hints for macros?
                                                    :record-bytes (o/c 784 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 784 g/dt-long)})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn))})

(pkg/register-pkg! :bpiel/mnist-test-10k-labels
                   {:name "..."
                    :pkgs [:deps]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-labels-file)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes (o/c 8 g/dt-long)
                                                    :record-bytes (o/c 1 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 1 g/dt-long)})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn))})



;; where/how would you inject a perturber?

#_(pkg/import-package-repo! "https://bpiel.github.io/guildsman-recipes/recipes.edn")

(g/def-workspace ws-dream
  (g/let+ [{:keys [features labels socket]}
           (->> (c/dsi-socket :socket
                              ;; different format for field spec??????????
                              {:fields [:features g/dt-float [-1 784]
                                        :labels g/dt-int [-1]]})
                (c/dsi-socket-outputs))
           rsum (c/reduce-sum features)
           noop (o/no-op)]
    {:plugins [dev/plugin g/gm-plugin]
     :plans [rsum noop]
     :duration [:steps 20000] #_[:epochs 1] #_[:secs 10]
     :interval [:steps 1000] #_[:records 100] ;; whoa!?!?! next best thing to secs?
     :modes {:train {:step [noop]
                     ::dev/summaries [rsum]
                     :iters {socket (c/dsi-plug {:batch-size 10}
                                                [:bpiel/mnist-train-60k-labels
                                                 :bpiel/mnist-train-60k-features])}}
             :test {::dev/summaries [rsum]
                    :iters {socket (c/dsi-plug {:batch-size 1000 #_[:epochs 1]} 
                                               [:bpiel/mnist-test-10k-features
                                                :bpiel/mnist-test-10k-labels])}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))

(g/ws-pr-workflow-source ws-dream :train-test)

(clojure.pprint/pprint  (g/ws-status ws-dream))

(g/ws-train-test ws-dream)

(g/with-tensor-conversion-scope
  (g/let+ [{:keys [iter ign]}
           (+->> (o/iterator :iter
                             {:output-shapes [[-1]]
                              :output-types [g/dt-int]})
                 (o/iterator-get-next :gn
                                      {:output-shapes [[-1]]
                                       :output-types [g/dt-int]})
                 (o/identity-tf :ign))

           {:keys [mkitr]} (+->> (o/tensor-dataset {:output-shapes [[-1]]}
                                                   [(o/placeholder :ph g/dt-int [-1])])
                                 (o/repeat-dataset {:output-shapes [[-1]]
                                                    :output-types [g/dt-int]}
                                                   $ -1)
                                 (o/make-iterator :mkitr $ iter))]
    (g/with-close-let [{:keys [graph] :as session} (g/build-all->session [ign ])]
      #_      (g/run session mkitr {:ph [0]})
      (g/produce session ign {:gn [5 6 7]}))))

(g/def-workspace ws-mnist1
  (g/let+ [{:keys [features labels socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:features g/dt-float [-1 784]
                                        :labels   g/dt-int   [-1]]})
                (c/dsi-socket-outputs))

           {:keys [logits classes]}
           (+->> features
                 (c/dense {:units 1024}) ;; TODO why is this scoped as ::req??
                 (c/dense {:id :logits
                           :units 10})
                 (o/arg-max :classes $ 1))

           {:keys [opt]}
           (+->> labels
                (c/one-hot $ 10)
                (c/mean-squared-error logits)
                (c/grad-desc-opt :opt 0.2))

           acc (c/accuracy :acc
                           ;; TODO :id isn't id arg for cast-tf
                           (c/cast-tf dt/int-kw
                                      classes)
                           labels)]
    
    {:plugins [dev/plugin g/gm-plugin]
     :plans [acc opt]
     :duration [:steps 100] ;; TODO ?? [:epochs 1] [:secs 10]
     :interval [:steps 10]
     :modes {:train {:step [opt]
                     ::dev/summaries [acc]
                     :iters {socket (c/dsi-plug {:batch-size 300
                                                 :epoch-size 300}
                                                [:bpiel/mnist-train-60k-labels
                                                 :bpiel/mnist-train-60k-features])}}
             :test {::dev/summaries [acc]
                    :fetch [acc]
                    :iters {socket (c/dsi-plug {:batch-size -1
                                                #_[:epochs 1]
                                                :epoch-size 100} 
                                               [:bpiel/mnist-test-10k-features
                                                :bpiel/mnist-test-10k-labels])}}
             :predict {:feed-args [features] #_ {:features features}
                       :fetch-return [classes]}}
     ;; TODO train-test should reset log
     :workflows {:train-test {:driver g/default-train-test-wf}
                 :predict {:driver g/default-predict-wf}}}))



(def add-ds-plan
  (c/mem-recs-ds [:features :labels]
                 [[[ 0.1 0.1] [0.2]]
                  [[ 0.1 0.] [0.1]]
                  [[ 0. 0.1] [0.1]]
                  [[ 0. 0.] [0.]]
                  [[-0.1 -0.1] [-0.2]]
                  [[-0.1 0.] [-0.1]]
                  [[0. -0.1] [-0.1]]]))

(g/def-workspace ws-add1
  (g/let+ [{:keys [features labels socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:features g/dt-float [-1 2]
                                        :labels   g/dt-float [-1 1]]})
                c/dsi-socket-outputs)

           {:keys [pred1]}
           (+->> features
                 (c/dense :pred1
                          {:units 1}))

           {:keys [opt err]}
           (+->> labels
                 (c/mean-squared-error :err pred1)
                 (c/grad-desc-opt :opt 0.1))]
    
    {:plugins [dev/plugin g/gm-plugin]
     :plans [opt]
     :duration [:steps 1000]
     :interval [:steps 1000]
     :modes {:train {:step [opt]
                     ::dev/summaries [err pred1]
                     :fetch [err]
                     :iters {socket (c/dsi-plug {:batch-size 7
                                                 :epoch-size 7}
                                                [add-ds-plan])}}
             :test {::dev/summaries [err]
                    :fetch [labels pred1]
                    :iters {socket (c/dsi-plug {:batch-size 7
                                                :epoch-size 7}
                                               [add-ds-plan])}}
             :predict {:feed-args [features]
                       :fetch-return [pred1]}}
     :workflows {:train-test {:driver g/default-train-test-wf}
                 :predict {:driver g/default-predict-wf}}}))


(g/ws-train-test-wf ws-add1)

(g/ws-pr-status ws-add1)

(g/ws-predict-wf ws-add1)

(g/ws-predict-sync ws-add1
                   [[[1.3 0.05]
                     [0.11 0.09]]])

(g/ws-interrupt ws-add1)

(-> @(:wf-out ws-add1)
    :last-fetched
    deref
    clojure.pprint/pprint )

(g/ws-do-wf ws-add1 :predict)

(do
  (def rch1 (a/chan 1))

  (def in-ch (-> ws-add1 :wf-out deref :global :gm :input-ch))

  (a/>!! in-ch [[[[0.3 0.05]
                  [0.11 0.09]]] rch1]))

(a/<!! rch1)


(def add-ds-plan
  (c/mem-recs-ds [:labels :lab2]
                 [[[] 10 123]
                  [21 278]
                  [34 356]]))

(g/def-workspace ws-simple
  (g/let+ [{:keys [labels lab2 socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:labels g/dt-int [-1]
                                        :lab2 g/dt-int [-1]]})
                c/dsi-socket-outputs)
           v1 (c/vari :v1
                      {:dtype g/dt-int
                       :shape [3]}
                      [0 0 0])
           a1 (o/assign v1 (o/identity-tf labels))
           v2 (c/vari :v2
                      {:dtype g/dt-int
                       :shape [3]}
                      [0 0 0])
           a2 (o/assign v2 (o/identity-tf lab2))
           noop1 (o/no-op :noop1 {:ctrl-inputs [a1 a2]})]
    
    {:plugins [dev/plugin g/gm-plugin]
     :plans [labels socket a1 a2 noop1]
     :duration [:steps 2]
     :interval [:steps 1]
     :modes {:train {:step [noop1]
                     :fetch [v1]
                     :iters {socket (c/dsi-plug {:batch-size 3
                                                 :epoch-size 3}
                                                [add-ds-plan])}}
             :test {:fetch [v1 v2]
                    :iters {socket (c/dsi-plug {:batch-size 3
                                                :epoch-size 1}
                                               [add-ds-plan])}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))

(g/ws-train-test-wf ws-simple)

(g/ws-pr-status ws-simple)

(-> @(:wf-out ws-simple)
    :last-fetched
    deref
    clojure.pprint/pprint )

(g/ws-pr-workflow-source ws-simple :train-test)

;; TODO something goes wrong with deleting the tensor





(def add-ds-plan2
  (c/mem-recs-ds [:features :labels]
                 [[[0. 0.] 0.]
                  [[0. 1.] 1.]
                  [[1. 1.] 2.]
                  [[-1. 1.] 0.]
                  [[1. -1.] 0.]
                  [[0.5 0.] 0.5]]))

(g/let+ [{:keys [features labels socket]}
         (->> (c/dsi-socket :socket
                            {:fields [:features g/dt-float [-1 2]
                                      :labels   g/dt-float [-1]]})
              c/dsi-socket-outputs)

         ds1 (c/mem-recs-ds [:features :labels]
                            [[[0. 0.] 0.]
                             [[0. 1.] 1.]
                             [[1. 1.] 2.]
                             [[-1. 1.] 0.]
                             [[1. -1.] 0.]
                             [[0.5 0.] 0.5]])
         
         plug (c/dsi-plug {:batch-size 6
                           :epoch-size 6}
                          [ds1])
         conn (c/dsi-connector socket plug)
         {:keys [graph] :as session} (g/build-all->session [features conn])]
  (g/run-all session [conn])
  (g/run-global-vars-init session)
  (g/with-tensor-conversion-scope
    (g/fetch-all session [features ])))

(clojure.pprint/pprint ws-mnist1)

(g/ws-do-wf ws-mnist1 :predict)

(g/ws-pr-workflow-source ws-mnist1 :predict)

(def rch1 (a/chan 1))

(def in-ch (-> ws-mnist1 :wf-out deref :global :gm :input-ch))

(a/>!! in-ch [[3.] rch1])



(tsc/set-global-conversion-scope!)

(tsc/set-global-standard-scope!)

(tsc/set-global-scope! nil)

(def x1 (g/produce (o/add [1] [2])))

(tsc/with-conversion-scope
  (g/produce (o/add [1] [2])))

(tsc/with-scope
  (g/produce (o/identity-tf 22)))

(tsc/with-conversion-scope
  (g/produce (o/iterator {:output-types [dt/float-kw]
                          :output-shapes [[1]]})))

(g/produce (o/unpack {:num 1 :axis 0}
                     [[1 2]]))


(g/with-tensor-scope
  (let [v1 (c/vari :v1 {:dtype g/dt-float :shape [2]} [0. 0.])
        x [-1. 1.]
        loss (c/mean-squared-error v1 x)
        opt (c/grad-desc-opt :opt 0.1 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run-all sess (repeat 10  opt))
    (g/with-tensor-conversion-scope
      (g/produce sess v1))))

(g/with-tensor-scope
  (let [v1 (c/vari :v1 {:dtype g/dt-float :shape [2]} [0. 0.])
        x [-1. 1.]
        loss (o/squared-difference v1 x)
        opt (c/grad-desc-opt :opt 0.1 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run-all sess (repeat 10  opt))
    (g/with-tensor-conversion-scope
      (g/produce sess v1))))



(g/with-tensor-scope
  (let [x [[ 0.1 0.1 ]
           [ 0.1 0. ]
           [ 0. 0. ]
           [-0.1 -0.1]
           [-0.1 -0.]]
        y [[0.2]
           [0.1]
           [0.]
           [-0.2]
           [-0.1]]
        d1 (c/dense :d1 {:units 1} x)
        loss (c/reduce-sum (o/squared-difference d1 y))
        opt (c/grad-desc-opt :opt 0.01 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run-all sess (repeat 1000  opt))
    (g/with-tensor-conversion-scope
      (g/produce sess d1))))

(g/with-tensor-scope
  (let [x [[ 0.1 0.1 ]
           [ 0.1 0. ]
           [ 0. 0. ]
           [-0.1 -0.1]
           [-0.1 -0.]]
        y [[0.2]
           [0.1]
           [0.]
           [-0.2]
           [-0.1]]
        d1 (c/dense :d1 {:units 1} x)
        loss (->> (o/sub d1 y)
                  o/abs
                  c/reduce-sum)
        opt (c/grad-desc-opt :opt 0.01 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run-all sess (repeat 1000  opt))
    (g/with-tensor-conversion-scope
      (g/produce sess d1))))


(def add-ds-plan
  (c/mem-recs-ds [:labels :lab2]
                 [[10 123]
                  [21 278]
                  [34 356]]))

(g/def-workspace ws-splitter
  (g/let+ [{:keys [labels lab2 socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:labels g/dt-int [-1]
                                        :lab2 g/dt-int [-1]]})
                c/dsi-socket-outputs)
           v1 (c/vari :v1
                      {:dtype g/dt-int
                       :shape [3]}
                      [0 0 0])
           a1 (o/assign v1 (o/identity-tf labels))
           v2 (c/vari :v2
                      {:dtype g/dt-int
                       :shape [3]}
                      [0 0 0])
           a2 (o/assign v2 (o/identity-tf lab2))
           noop1 (o/no-op :noop1 {:ctrl-inputs [a1 a2]})]
    
    {:init [#_dev/init]
     :plans [labels socket a1 a2 noop1]
     :modes {:train {:step [noop1]
                     :fetch [v1]
                     :iters {socket (c/dsi-plug {:batch-size 3
                                                 :epoch-size 3}
                                                [add-ds-plan])}}
             :test {:fetch [v1 v2]
                    :iters {socket (c/dsi-plug {:batch-size 3
                                                :epoch-size 1}
                                               [add-ds-plan])}}}}))


(def wf-train-test
  (g/mk-train-test-wf
   {:plugins [dev/plugin g/gm-plugin]
    :duration [:steps 1000]
    :interval [:steps 1000]}))

(g/start-wf wf-train-test ws-splitter)

(g/ws-pr-status ws-splitter)

(g/ws-close ws-splitter)

(def wf-predict
  (g/mk-predict-wf
   {:plugins [dev/plugin g/gm-plugin]}))

(def add-ds-plan
  (c/mem-recs-ds [:features :labels]
                 [[[ 0.1 0.1] [0.2]]
                  [[ 0.1 0.] [0.1]]
                  [[ 0. 0.1] [0.1]]
                  [[ 0. 0.] [0.]]
                  [[-0.1 -0.1] [-0.2]]
                  [[-0.1 0.] [-0.1]]
                  [[0. -0.1] [-0.1]]]))

(g/def-workspace ws-add1
  (g/let+ [{:keys [features labels socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:features g/dt-float [-1 2]
                                        :labels   g/dt-float [-1 1]]})
                c/dsi-socket-outputs)

           {:keys [pred1]}
           (+->> features
                 (c/dense :pred1
                          {:units 1}))

           {:keys [opt err]}
           (+->> labels
                 (c/mean-squared-error :err pred1)
                 (c/grad-desc-opt :opt 0.1))]
    
    {:plugins [dev/plugin g/gm-plugin]
     :plans [opt]
     :duration [:steps 1000]
     :interval [:steps 1000]
     :modes {:train {:step [opt]
                     ::dev/summaries [err pred1]
                     :fetch [err]
                     :iters {socket (c/dsi-plug {:batch-size 7
                                                 :epoch-size 7}
                                                [add-ds-plan])}}
             :test {::dev/summaries [err]
                    :fetch [labels pred1]
                    :iters {socket (c/dsi-plug {:batch-size 7
                                                :epoch-size 7}
                                               [add-ds-plan])}}
             :predict {:feed-args [features]
                       :fetch-return [pred1]}}
     :workflows {:train-test {:driver g/default-train-test-wf}
                 :predict {:driver g/default-predict-wf}}}))



(g/start-wf wf-train-test ws-add1)

(g/ws-pr-status ws-add1)

(g/start-wf wf-predict ws-add1)

(g/ws-predict-sync ws-add1
                   [[[1.3 0.05]
                     [0.11 0.09]]])

(g/ws-interrupt ws-add1)

(g/start-wf g/ws-close ws-add1)



(g/ws-pr-workflow-source wf-train-test)

(meta wf-train-test)

(clojure.pprint/pprint (meta wf-train-test))

(-> @(:wf-out ws-splitter)
    :last-fetched
    deref
    clojure.pprint/pprint )

(-> @(:wf-out ws-splitter)
    :global
    :gm
    clojure.pprint/pprint )

(clojure.pprint/pprint ws-splitter)
