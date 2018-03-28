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
            [com.billpiel.guildsman.special-utils :as sput]
            [flatland.protobuf.core :as pr]
            [aleph.http :as ah]
            [manifold.stream :as ms]
            digest
            [clojure.java.io :as io])
  (:import [org.tensorflow.framework AttrValue OpDef]
           [com.billpiel.guildsman FunctionNI]
           (java.util.zip ZipFile GZIPInputStream)))

(io/copy (-> "/home/bill/train-images-idx3-ubyte.gz"
             io/as-file
             io/input-stream
             GZIPInputStream.)
         (io/output-stream  "/home/bill/train-images-idx3-ubyte"))

;; where/how would you inject a perturber? ?!?!?!?!?!?!?!?


(pkg/prefetch-all-assets-sync
 {:cfg [(c/pkg-plan :bpiel/mnist-train-60k-labels-v1)
        (c/pkg-plan :bpiel/mnist-train-60k-features-v1)
        (c/pkg-plan :bpiel/mnist-test-10k-features-v1)
        (c/pkg-plan :bpiel/mnist-test-10k-labels-v1)]})

#_(pkg/set-repo-path! "/tmp/gmpkgs")

(pkg/export-pkgs-to-file! "/home/bill/gm-web/pkgs.edn")

(pkg/dl-pkg-repo! "http://localhost:8000/pkgs.edn")


(pkg/dl-pkg-repo! "https://bpiel.github.io/guildsman-packages/pkgs.edn")

(pkg/register-pkg! :bpiel/parse-mnist-features-fn-v1
                   {:name "bpiel/parse-mnist-features-fn"
                    :function
                    (g/fn-tf parse-mnist-features-fn
                             [g/dt-float [784]]
                             [x g/dt-string []]
                             [(o/div (->> x
                                          (o/decode-raw {:out_type g/dt-uint})
                                          (c/cast-tf g/dt-float))
                                     255.0)])})

(pkg/register-pkg! :bpiel/parse-mnist-labels-fn-v1
                   {:name "bpiel/parse-mnist-labels-fn"
                    :function
                    (g/fn-tf parse-mnist-labels-fn
                             [g/dt-int []]
                             [x g/dt-string []]
                             [(->> x
                                   (o/decode-raw {:out_type g/dt-uint})
                                   (o/unpack {:num 1 :axis 0})
                                   (c/cast-tf g/dt-int))])})

(pkg/register-pkg! :bpiel/mnist-test-10k-features-file-v1
                   {:name "bpiel/mnist-test-10k-features-file-v1"
                    :asset {:records 10000        
                            :parts [{:name "mnist/t10k-images-idx3-ubyte"
                                     :sha1hash "65e11ec1fd220343092a5070b58418b5c2644e26"
                                     :instr [[:http :get "https://s3.amazonaws.com/guildsman/mnist/t10k-images-idx3-ubyte.gz"]
                                             :gunzip]}]}})

(pkg/register-pkg! :bpiel/mnist-test-10k-labels-file-v1
                   {:name "bpiel/mnist-test-10k-labels-file-v1"
                    :asset {:records 10000        
                            :parts [{:name "mnist/t10k-labels-idx1-ubyte"
                                     :sha1hash "a6d52cc628797e845885543326e9f10abb8a6f89"
                                     :instr [[:http :get "https://s3.amazonaws.com/guildsman/mnist/t10k-labels-idx1-ubyte.gz"]
                                             :gunzip]}]}})

(pkg/register-pkg! :bpiel/mnist-train-60k-features-file-v1
                   {:name "bpiel/mnist-train-60k-features-file"
                    :asset {:records 60000        
                            :parts [{:name "mnist/train-images-idx3-ubyte"
                                     :sha1hash "c3557c10f29b266e19b3eeee1553c85e0ef4a8ea"
                                     :instr [[:http :get "https://s3.amazonaws.com/guildsman/mnist/train-images-idx3-ubyte.gz"]
                                             :gunzip]}]}})

(pkg/register-pkg! :bpiel/mnist-train-60k-labels-file-v1
                   {:name "bpiel/mnist-train-60k-labels-file-v1"
                    :asset {:records 60000
                            :parts [{:name "mnist/train-labels-idx1-ubyte"
                                     :sha1hash "adbf52269f5d842899f287c269e2883e40b4f6e2"
                                     :instr [[:http :get "https://s3.amazonaws.com/guildsman/mnist/train-labels-idx1-ubyte.gz"]
                                             :gunzip]}]}})

(pkg/register-pkg! :bpiel/mnist-train-60k-features-v1
                   {:name "bpiel/mnist-train-60k-features"
                    :deps [:bpiel/mnist-train-60k-features-file-v1
                           :bpiel/parse-mnist-features-fn-v1]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-60k-features-file-v1)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes (o/c 16 g/dt-long) ;; TODO type hints for macros?
                                                    :record-bytes (o/c 784 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 784 g/dt-long)})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn-v1))})

(pkg/register-pkg! :bpiel/mnist-train-60k-labels-v1
                   {:name "bpiel/mnist-train-60k-labels"
                    :deps [:bpiel/mnist-train-60k-labels-file-v1
                           :bpiel/parse-mnist-labels-fn-v1]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-60k-labels-file-v1)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes (o/c 8 g/dt-long)
                                                    :record-bytes (o/c 1 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 1 g/dt-long)})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn-v1))})

(pkg/register-pkg! :bpiel/mnist-test-10k-features-v1
                   {:name "bpiel/mnist-test-10k-features"
                    :deps [:bpiel/mnist-test-10k-features-file-v1
                           :bpiel/parse-mnist-features-fn-v1]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-features-file)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes (o/c 16 g/dt-long) ;; TODO type hints for macros?
                                                    :record-bytes (o/c 784 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 784 g/dt-long)})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn-v1))})

(pkg/register-pkg! :bpiel/mnist-test-10k-labels-v1
                   {:name "bpiel/mnist-test-10k-labels"
                    :deps [:bpiel/mnist-test-10k-labels-file-v1
                           :bpiel/parse-mnist-labels-fn-v1]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-labels-file-v1)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes (o/c 8 g/dt-long)
                                                    :record-bytes (o/c 1 g/dt-long)
                                                    :footer-bytes (o/c 0 g/dt-long)
                                                    :buffer-bytes (o/c 1 g/dt-long)})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn-v1))})





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
    :interval [:steps 100]}))

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

(some-> ws-add1 :wf-out deref :global :gm :branch deref :last-chkpt)

(some-> ws-add1 :wf-out deref :status (= :running))

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
    
    {:plans [opt]
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
     :repo {:path "/tmp/repo1"
            :chkpt {:restore :chkpt-28f80b1a-5216-4fe1-8bed-ec84033ccc1f
                    #_nil #_ :chkGUID###
                    :props {:arbitrary? :things?}}}}))

(->> ws-add1
     :cfg
     (tree-seq coll? seq)
     (keep :gm/pkg-deps)
     (apply concat)
     distinct)



;; -- wf -- what goes in def? what goes in args?

(def wf-train-test
  (g/mk-train-test-wf
   {:plugins [dev/plugin g/gm-plugin]
    :duration [:steps 1000]
    :interval [:steps 100]
    :chkpt-interval [:secs 3600]}))

(g/start-wf wf-train-test ws-add1)

(g/ws-pr-status ws-add1)

(g/start-wf wf-predict ws-add1)

(g/ws-predict-sync ws-add1
                   [[[1.3 0.05]
                     [0.11 0.09]]])

(g/ws-interrupt ws-add1)

(g/start-wf g/ws-close ws-add1)

(g/ws-pr-workflow-source wf-predict)


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

o/restore-v2

(def v1 (c/vari :v1 [1. 2.]))

(def v2 (c/vari :v2 [3. 4. 5.]))

(def saver (o/save-v2 :saver
                      {:dtypes [g/dt-float g/dt-float]}
                      "/tmp/chkpt"
                      ["v1" "v2"]
                      ["" ""]
                      [v1 v2]))


(def gr (g/build->graph saver))

(def se (g/graph->session gr))

(g/run-global-vars-init se)


(g/with-tensor-conversion-scope
  (g/fetch-all se [v1 v2]))

(g/run se saver)

(def av1 (o/assign :av1 v1 [0. 0.]))

(def av2 (o/assign :av2 v2 [0. 0. 0.]))

(g/build-all->graph gr [av1 av2])

(g/run-all se [av1 av2])

(def restorer
  (o/restore-v2 :restorer
                {:dtypes [g/dt-float g/dt-float]}
                "/tmp/chkpt"
                ["v1" "v2"]
                ["" ""]))

(g/build-all->graph gr [restorer])

(g/with-tensor-conversion-scope
  (g/fetch se (assoc restorer
                     :output-idx 1)))

(g/close se)

(g/close gr)


(clojure.pprint/pprint restorer)

(g/with-tensor-conversion-scope
  (g/produce
   {:op :RestoreV2,
    :inputs ["/tmp/chkpt" ["v1" "v2"] ["" ""]],
    :ctrl-inputs nil,
    :id :restorer,
    :attrs {:dtypes [:float :float]},
    :scope []}))

(g/with-tensor-conversion-scope
  (g/produce {:op :RestoreV2
              :inputs ["/tmp/chkpt2"
                       ["pred1/bias/variable" "pred1/kernel/variable"]
                       ["" ""]]
              :ctrl-inputs nil
              :id :gm-chkpt-restore
              :attrs {:dtypes [:float :float]}
              :scope []
              :output-idx 0}))

(g/produce {:op :RestoreV2
                           :inputs ["/tmp/chkpt2"
                                    ["pred1/bias/variable" "pred1/kernel/variable"]
                                    ["" ""]]
                           :ctrl-inputs nil
                           :id :gm-chkpt-restore
                           :attrs {:dtypes [:float :float]}
                           :scope []
                           :output-idx 0})

(def os1 (clojure.java.io/output-stream "/home/bill/dog3.jpg"))


(def f1 (ah/get "http://ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg"
                {:raw-stream? true}))

#_ (type (:body @f1))

( (:headers @f1) "content-length")


(def dl-bytes (atom 0))

(ms/consume (fn [bcount] (clojure.pprint/pprint bcount) (swap! dl-bytes + bcount))
            (ms/map
             #(let [ba (byte-streams/to-byte-array %)]
                (.write os1 ba)
                (count ba))
             (:body @f1)))

(.close os1)



(defn dl-async!
  [url dest]
  (let [counter (atom 0)
        os (clojure.java.io/output-stream dest)
        is (ah/get url {:raw-stream? true})
        body (:body @is)
        cl (some-> "content-length" ((:headers @is)) Long/parseLong)]
    (if (= (type body) (type (byte-array 0)))
      [(a/thread
         (.write os body)
         (.close os)
         (swap! counter + (count body))
         true)
       counter
       cl]
      [(a/thread
         @(ms/consume (fn [bcount] (swap! counter + bcount))
                      (ms/map
                       #(let [ba (byte-streams/to-byte-array %)]
                          (.write os ba)
                          (count ba))
                       body))
         (.close os)
         true)
       counter
       cl])))

(defn dl-async-pr!*
  [total c-atom]
  (let [c @c-atom]
    (println (format "%.0f%% -- %d bytes received"
                     (-> c
                         (/ total)
                         (* 100.))
                     c))))

(defn dl-async-pr!
  [url dest]
  (a/go
    (try
      (let [[ch counter size] (dl-async! url dest)]
        (println (format
                  "Downloading %s
to %s
%d bytes expected
"
                  url dest size))
        (while (not= ch (second (a/alts! [ch (a/timeout 1000)])))
          (dl-async-pr!* size counter))
        (dl-async-pr!* size counter)
        (println "done")
        @counter)
      (catch Exception e
        (clojure.pprint/pprint e)
        e))))

(dl-async-pr! "http://ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg"
              "/home/bill/dog6.jpg")

(sput/dl-async-pr!
 "https://s3-us-west-2.amazonaws.com/thinktopic.datasets/mnist/t10k-labels-idx1-ubyte.gz"
 "/home/bill/t10k-labels-idx1-ubyte.gz")

(sput/dl-async-pr!
 "https://s3-us-west-2.amazonaws.com/thinktopic.datasets/mnist/train-images-idx3-ubyte.gz"
 "/home/bill/train-images-idx3-ubyte.gz")

(String.
 (:headers @(ah/get "https://s3-us-west-2.amazonaws.com/thinktopic.datasets/mnist/t10k-labels-idx1-ubyte.gz"
                 {:raw-stream? true})))

(type
 (:body @(ah/get "https://s3-us-west-2.amazonaws.com/thinktopic.datasets/mnist/t10k-labels-idx1-ubyte.gz"
                 {:raw-stream? true})))

(let [[ch counter size]
      (dl-async! "http://ghk.h-cdn.co/assets/17/20/1495031140-gettyimages-573950777.jpg"
                 "/home/bill/dog4.jpg")]
  (println size)
  (dotimes [x 100]
    (Thread/sleep 10)
    (println @counter)))

