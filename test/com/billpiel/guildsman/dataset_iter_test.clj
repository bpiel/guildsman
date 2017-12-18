(ns com.billpiel.guildsman.dataset-iter-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]
            [com.billpiel.guildsman.packages :as pkg]
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
                                                    :header-bytes (o/c 16 g/dt-long)
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
                                                    :header-bytes (o/c 16 g/dt-long)
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


(g/def-workspace ws-mnist1
  (g/let+ [{:keys [features labels socket]}
           (->> (c/dsi-socket :socket
                              {:fields [:features g/dt-float [-1 784]
                                        :labels   g/dt-int   [-1]]})
                (c/dsi-socket-outputs))

           {:keys [logits classes]}
           (+>> features
                (c/dense {:id :logits
                          :units 10})
                (o/arg-max :classes $ 1))

           {:keys [opt]}
           (+>> labels
                (c/one-hot $ 10)
                (c/mean-squared-error logits)
                (c/grad-desc-opt :opt 0.1))

           acc (c/accuracy :acc
                           (c/cast-tf dt/int-kw
                                      classes)
                           labels)]
    
    {:plugins [dev/plugin g/gm-plugin]
     :plans [acc opt]
     :duration [:steps 100] #_[:epochs 1] #_[:secs 10]
     :interval [:steps 1] #_[:records 100] ;; whoa!?!?! next best thing to secs?
     :modes {:train {:step [opt]
                     ::dev/summaries [acc]
                     :iters {socket (c/dsi-plug {:batch-size 10}
                                                [:bpiel/mnist-train-60k-labels
                                                 :bpiel/mnist-train-60k-features])}}
             :test {::dev/summaries [acc]
                    :iters {socket (c/dsi-plug {:batch-size 10 #_[:epochs 1]} 
                                               [:bpiel/mnist-test-10k-features
                                                :bpiel/mnist-test-10k-labels])}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))

(clojure.pprint/pprint 
 (g/ws-status ws-mnist1))

(g/ws-train-test ws-mnist1)

;; TODO non-trainable varis

(type $s/*)
