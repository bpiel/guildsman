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

(def AttrValueP (pr/protodef AttrValue))

(def OpDefP (pr/protodef OpDef))

(clojure.pprint/pprint 
 (pr/protobuf-schema AttrValueP))

(clojure.pprint/pprint 
 (pr/protobuf-schema OpDefP))

(pr/protobuf-load AttrValueP (pr/protobuf-dump AttrValueP {:func {:name "hi"}}))


(g/let+ [output-spec {:output_types [g/dt-long g/dt-long]
                      :output_shapes [[1] [1]]}
         {:keys [ph iter nx]} (+>> (o/placeholder :ph g/dt-string [])
                                   (o/iterator-from-string-handle :iter
                                                                  output-spec)
                                   (o/iterator-get-next :nx output-spec))
         ds1 (o/tensor-slice-dataset :ds1 {:output_shapes [[1] [1]]} [(o/c [[1] [3]]
                                                                           g/dt-long)
                                                                      (o/c [[2] [4]]
                                                                       g/dt-long)])
         tr-iter (o/iterator :tr-iter output-spec)
         set-tr-iter (o/make-iterator :set-tr-iter
                                      ds1
                                      tr-iter)
         tr-iter-str (o/iterator-to-string-handle tr-iter)
         {:keys [graph] :as session} (g/build-all->session [tr-iter-str nx set-tr-iter])
         handle (g/produce session tr-iter-str)
         nx1 (-> graph :state deref :id->node (get "nx") (assoc :output-idx 1))]
  (def g1 graph)
  (g/run session set-tr-iter)
  (g/produce session nx {:ph handle})
  (g/fetch session nx1 {:ph handle}))


(g/let+ [output-spec {:output_types [g/dt-long g/dt-long]
                      :output_shapes [[1] [1]]}

         ;; Output Iter
         {:keys [nx hnd]}
         (+>> (c/vari :hnd "")
              (o/iterator-from-string-handle :iter
                                             output-spec)
              (o/iterator-get-next :nx output-spec))

         ;; DS1 Dataset
         ds1 (o/tensor-slice-dataset :ds1
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[1] [3]]
                                           g/dt-long)
                                      (o/c [[2] [4]]
                                           g/dt-long)])

         ;; DS1 Input Iter 
         {:keys [ds1-iter sel-ds1]}
         (+>> (o/iterator :ds1-iter output-spec)          
              (o/iterator-to-string-handle :ds1-iter-hnd)
              (o/assign :sel-ds1 hnd))
         init-ds1-iter (o/make-iterator :init-ds1-iter
                                        ds1
                                        ds1-iter)

         ;; DS2 Dataset
         ds2 (o/tensor-slice-dataset :ds2
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[10] [30]]
                                           g/dt-long)
                                      (o/c [[20] [40]]
                                           g/dt-long)])

         ;; DS2 Input Iter 
         {:keys [ds2-iter sel-ds2]}
         (+>> (o/iterator :ds2-iter output-spec)          
              (o/iterator-to-string-handle :ds2-iter-hnd)
              (o/assign :sel-ds2 hnd))
         init-ds2-iter (o/make-iterator :init-ds2-iter
                                        ds2
                                        ds2-iter)

         {:keys [graph] :as session} (g/build-all->session [nx init-ds1-iter sel-ds1 init-ds2-iter sel-ds2])]
  (def g1 graph)
  (g/run session init-ds1-iter)
  (g/run session init-ds2-iter)

  (let [_ (g/run session sel-ds1)
        a (g/fetch session nx)
        _ (g/run session sel-ds2)
        b (g/fetch session nx)
        _ (g/run session sel-ds1)
        c (g/fetch session nx)
        _ (g/run session sel-ds2)
        d (g/fetch session nx)]
    [a b c d]))

(g/let+ [p1 (o/equal 1 1)
         s1 (assoc (o/switch 23 p1)
                   :output-idx 1)
         p2 (o/equal 1 2)
         s2 (assoc (o/switch 34 p2)
                   :output-idx 1)
         m1 (o/merge-tf {:N 2} [s1 s2])]
  (g/produce m1))


(g/let+ [output-spec {:output_types [g/dt-long g/dt-long]
                      :output_shapes [[1] [1]]}

         v-sel (c/vari :v-sel 0)
         ds1-sel (o/assign :ds1-sel v-sel 1)
         ds2-sel (o/assign :ds2-sel v-sel 2)

         ;; DS1 Dataset
         ds1 (o/tensor-slice-dataset :ds1
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[1] [3]]
                                           g/dt-long)
                                      (o/c [[2] [4]]
                                           g/dt-long)])

         ;; DS1 Input Iter 
         {:keys [ds1-iter nx1]}
         (+>> (o/iterator :ds1-iter output-spec)
              (o/iterator-get-next :nx1 output-spec))
         init-ds1-iter (o/make-iterator :init-ds1-iter
                                        ds1
                                        ds1-iter)

         ;; DS2 Dataset
         ds2 (o/tensor-slice-dataset :ds2
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[10] [30]]
                                           g/dt-long)
                                      (o/c [[20] [40]]
                                           g/dt-long)])

         ;; DS2 Input Iter 
         {:keys [ds2-iter nx2]}
         (+>> (o/iterator :ds2-iter output-spec)          
              (o/iterator-get-next :nx2 output-spec))
         init-ds2-iter (o/make-iterator :init-ds2-iter
                                        ds2
                                        ds2-iter)

         df1 (o/select (o/equal 1 v-sel) nx1 nx2)
         df2 (o/select (o/equal 1 v-sel)
                       (assoc nx1 :output-idx 1)
                        (assoc nx2 :output-idx 1))
                  
         {:keys [graph] :as session} (g/build-all->session [df1 df2 init-ds1-iter init-ds2-iter ds1-sel ds2-sel])]
  (def g1 graph)
  (g/run session init-ds1-iter)
  (g/run session init-ds2-iter)

  (let [_ (g/run session ds1-sel)
        a (g/fetch-all session [df1 df2])
        _ (g/run session ds2-sel)
        b (g/fetch-all session [df1 df2])]
    [a b]))

(g/produce (o/ref-identity (o/iterator {:output_types [g/dt-long g/dt-long]
                                        :output_shapes [[1] [1]]})))


(g/let+ [output-spec {:output_types [g/dt-long g/dt-long]
                      :output_shapes [[1] [1]]}

         ;; Output Iter
         {:keys [nx hnd]}
         (+>> (c/vari :hnd "")
              (o/iterator-from-string-handle :iter
                                             output-spec)
              (o/iterator-get-next :nx output-spec))

         ;; DS1 Dataset
         ds1 (o/tensor-slice-dataset :ds1
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[1] [3]]
                                           g/dt-long)
                                      (o/c [[2] [4]]
                                           g/dt-long)])

         ;; DS1 Input Iter 
         {:keys [ds1-iter sel-ds1]}
         (+>> (o/iterator :ds1-iter output-spec)          
              (o/iterator-to-string-handle :ds1-iter-hnd)
              (o/assign :sel-ds1 hnd))
         init-ds1-iter (o/make-iterator :init-ds1-iter
                                        ds1
                                        ds1-iter)

         ;; DS2 Dataset
         {:keys [ds2]} (+>> ds1
                            (o/take-dataset output-spec $ 1)
                            (o/repeat-dataset :ds2 output-spec $ -1))

         ;; DS2 Input Iter 
         {:keys [ds2-iter sel-ds2]}
         (+>> (o/iterator :ds2-iter output-spec)          
              (o/iterator-to-string-handle :ds2-iter-hnd)
              (o/assign :sel-ds2 hnd))
         init-ds2-iter (o/make-iterator :init-ds2-iter
                                        ds2
                                        ds2-iter)

         {:keys [graph] :as session} (g/build-all->session [nx init-ds1-iter sel-ds1 init-ds2-iter sel-ds2])]
  (def g1 graph)
  (g/run session init-ds1-iter)
  (g/run session init-ds2-iter)

  (let [_ (g/run session sel-ds1)
        a (g/fetch session nx)
        _ (g/run session sel-ds2)
        b (g/fetch session nx)
        _ (g/run session sel-ds1)
        c (g/fetch session nx)
        _ (g/run session sel-ds2)
        d (g/fetch session nx)]
    [a b c d]))



(g/let+ [output-spec {:output_types [g/dt-long g/dt-long]
                      :output_shapes [[1] [1]]}

         ;; DS1 Dataset
         ds1 (o/tensor-slice-dataset :ds1
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[1] [3]]
                                           g/dt-long)
                                      (o/c [[2] [4]]
                                           g/dt-long)])

         ;; DS2 Dataset
         ds2 (o/tensor-slice-dataset :ds2
                                     {:output_shapes [[1] [1]]}
                                     [(o/c [[10] [30]]
                                           g/dt-long)
                                      (o/c [[20] [40]]
                                           g/dt-long)])

         iter (c/iter :iter {:ds1 ds1
                             :ds2 ds2})
         {:keys [features labels]
          [ds1-sel ds1-init ds1-init-dum] :ds1
          [ds2-sel ds2-init ds2-init-dum] :ds2}
         (c/destruct-iter-plan iter)

         {:keys [graph] :as session} (g/build-all->session [ds1-init ds1-init-dum ds2-init ds2-init-dum ds1-sel ds2-sel features labels])]
  (def g1 graph)
  (g/run-global-vars-init session)
  (g/run-all session [ds1-init ds1-init-dum ds2-init ds2-init-dum])
  (let [_ (g/run session ds1-sel)
        a (g/fetch-all session [features labels])
        _ (g/run session ds2-sel)
        b (g/fetch session features)
        c (g/fetch session labels)]
    [a b c]))

o/fixed-length-record-dataset

o/bitcast
o/decode-csv
o/text-line-dataset
o/decode-raw

o/map-dataset

(let [in1 (o/placeholder :in1 g/dt-float [1]) ;; TODO const ids don't work
      in2 (o/placeholder :in2 g/dt-float [1])
      in3 (o/placeholder :in3 g/dt-float [1])
      in4 (o/placeholder :in4 g/dt-float [1])
      out1 (o/add :out1 in1 in2)
      g (g/build->graph out1)
      g2 (g/build-all->graph [in3 in4])
      id->node (com.billpiel.guildsman.graph/id->node g)
      _ (clojure.pprint/pprint  id->node)
      in1-hnd (-> "in1" id->node :handle)
      in2-hnd (-> "in2" id->node :handle)
      out1-hnd (-> "out1" id->node :handle)]
  (def f1
    (FunctionNI/graphToFunction
     (:handle g)
     "Func1"
     false
     (long-array [out1-hnd])
     (long-array [in1-hnd in2-hnd])
     (int-array [0 0])
     (long-array [out1-hnd])
     (int-array [0])
     (into-array String ["out1"])))
  (FunctionNI/copyToGraph (:handle g2) f1 0)
  (g/build->graph g2 {:op :Func1 :inputs [(o/c [2.] g/dt-float)
                                          (o/c [5.] g/dt-float)]})
  (let [id->node2 (com.billpiel.guildsman.graph/id->node g2)]
    (clojure.pprint/pprint id->node2)
    (let [s (g/graph->session g2)]
      (g/produce s (id->node2 "Func1_3"))))
  #_    f1)


(g/fn-tf func1 [{:arg x :type g/dt-float :shape [1]}
                {:arg y :type g/dt-float :shape [1]}]
         [(o/add x y)])



o/map-dataset

(g/build->graph {:op :Func1 :inputs [(o/add 1. 2.)]})



(def b1
  (g/produce
   (o/decode-raw {:out_type g/dt-uint}
                 (o/c "ABC"
                      g/dt-string))))

(def b1
  (g/produce
   (o/decode-raw {:out_type g/dt-uint}
                 (o/c (byte-array [1 2 3])
                      g/dt-string))))

(def b1
  (g/produce
   (o/decode-raw {:out_type g/dt-uint}
                 (byte-array [1 2 3]))))

(.byte-size b1)

(.dtype b1)

(String. (byte-array [91 101 51]))

(String. (byte-array [91 51 54]))


;; DREAMS ================================================

(def filename-mnist-test-images "/home/bill/repos/guildsman-conj2017/resources/mnist/test-10k-images-idx3-ubyte")


(g/let+ [{:keys [ds1]} (+>> (o/tensor-slice-dataset {:output_shapes [[1]]}
                                                    [(o/c [1. 2. 3.]
                                                          g/dt-float)])
                            (o/map-dataset :ds1
                                           {:f {:func :f1
                                                :returns [{:shape [1] :type g/dt-float}]
                                                :args [{:name 'x
                                                        :shape [1]
                                                        :type g/dt-float}]
                                                :body [(o/add 'x 1.1)]}
                                            :output_types [g/dt-float]
                                            :output_shapes [[1]]}
                                           $
                                           []))
         iter1 (o/iterator :iter1
                           {:output_types [g/dt-float]
                            :output_shapes [[1]]})
         mi1 (o/make-iterator :mi1 ds1 iter1)
         ign1 (o/iterator-get-next :ign1 {:output_types [g/dt-float]
                                          :output_shapes [[1]]}
                                   iter1)
         {:keys [graph] :as session} (g/build-all->session [mi1 ign1])]
  (g/run session mi1)
  [(g/produce session ign1)
   (g/produce session ign1)])


(g/defn-tf parse-mnist
  [g/dt-float [784]] ;; TODO unspecified shape would be nice here
  [x g/dt-string []] ;; TODO infering signature would be nice!
  [(o/div (->> x
                (o/decode-raw {:out_type g/dt-uint})
                (c/cast-tf g/dt-float))
           255.0)])

(g/defn-tf parse-mnist
  [g/dt-float [784]] ;; TODO unspecified shape would be nice here
  [x g/dt-string []] ;; TODO infering signature would be nice!
  [(o/add x 2)])

(pkg/register-pkg! :bpiel/mnist-train-60k-features
                   {:name "..."
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-10k-features-file)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes 16
                                                    :record-bytes 784
                                                    :footer-bytes 0
                                                    :buffer-bytes 784})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn))})

(pkg/register-pkg! :bpiel/mnist-train-60k-labels
                   {:name "..."
                    :pkgs [:deps]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-train-10k-labels-file)
                         (c/fixed-length-record-ds {:size 60000
                                                    :header-bytes 16
                                                    :record-bytes 1
                                                    :footer-bytes 0
                                                    :buffer-bytes 1})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn))})

(pkg/register-pkg! :bpiel/mnist-test-10k-features-file
                   {:name "..."
                    :pkgs [:deps]
                    :asset {:records 10000
                            :format-or-something?? :?????
                            :sources [[{:type :uri
                                        :uri "http://part1"
                                        :md5hash "????"}
                                       {:type :uri
                                        :uri "http://part2"
                                        :md5hash "..."}]
                                      [{:type :uri
                                        :uri "http://part1-mirror"
                                        :md5hash "..."}
                                       {:type :uri
                                        :uri "http://part2-mirror"
                                        :md5hash "..."}]]}})

(pkg/register-pkg! :bpiel/mnist-test-10k-features
                   {:name "..."
                    :desc "...."
                    :pkgs [:deps]
                    :source '()
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-features-file)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes 16
                                                    :record-bytes 784
                                                    :footer-bytes 0
                                                    :buffer-bytes 784})
                         (c/map-ds {:fields [:features]}
                                   :bpiel/parse-mnist-features-fn))})

(pkg/register-pkg! :bpiel/mnist-test-10k-labels
                   {:name "..."
                    :pkgs [:deps]
                    :plan
                    (->> (c/asset-as-files :bpiel/mnist-test-10k-labels-file)
                         (c/fixed-length-record-ds {:size 10000
                                                    :header-bytes 16
                                                    :record-bytes 1
                                                    :footer-bytes 0
                                                    :buffer-bytes 1})
                         (c/map-ds {:fields [:labels]}
                                   :bpiel/parse-mnist-labels-fn))})

;; where/how would you inject a perturber?

(pkg/import-package-repo! "https://bpiel.github.io/guildsman-recipes/recipes.edn")

;; https://bpiel.github.io/guildsman-recipes/recipes.edn
{:bpiel/mnist-train-10k
 {:name "MNIST Train 10k"
  :description "..."
  :source '()
  :plan {}}}

(g/def-workspace ws-dream
  (g/let+ [iter1 (c/dsi-socket :iter1
                               {:fields [:features :labels]})
           {:keys [features labels]} (g/destruct-dsi-socket iter1)]
    {:plugins [dev/plugin g/gm-plugin]
     :plans [tr]
     :duration [:epochs 1]
     :interval [:records 100] ;; whoa!?!?! next best thing to secs?
     :modes {:train {:step [tr]
                     ::dev/summaries [v a1]
                     :iters {iter1 (c/dsi-plug {:batch-size 10}
                                               [:bpiel/mnist-train-10k])}}
             :test {::dev/summaries [v a1]
                    :iters {iter1 (c/dsi-plug [:bpiel/mnist-test-10k])}}}
     :workflows {:train-test {:driver g/default-train-test-wf}}}))


(g/let+ [{:keys [ds1]} (+>> (c/tensor-slice-ds  {:size 3}
                                               [[[1.] [2.] [3.]]
                                                [[4.] [5.] [6.]]])
                            (c/map-ds :ds1
                                      {:fields [:features :labels]}
                                      (g/fn-tf dummy
                                               [g/dt-float [1]
                                                g/dt-float [1]]
                                               [x g/dt-float [1]
                                                y g/dt-float [1]]
                                               [(o/add :dummy1 x 0.1)
                                                (o/add :dummy2 y 0.2)]))) 
         dsi-s (c/dsi-socket :dsi-s
                             {:fields [:features g/dt-float [1]
                                       :labels g/dt-float [-1]]})
         dsi-p (c/dsi-plug :dsi-p ;; TODO id optional
                           {:batch-size 10}
                           [ds1])
         ;; TODO attrs optional
         dsi-c (c/dsi-connector :dsi-c {} dsi-s dsi-p)
         {:keys [features labels]} (c/dsi-socket-outputs dsi-s)
         {:keys [graph] :as session} (g/build-all->session [dsi-c features labels])]
  (g/run session (assoc dsi-c :output-idx 1))
  (g/run session dsi-c)
  (clojure.pprint/pprint labels)
  (g/produce session labels))


(g/let+ [out-spec {:output_types [:float :float] :output_shapes [[1] [1]]}
         iter1 (o/iterator out-spec)
         gn1 (o/iterator-get-next :gn1
                                  out-spec
                                  iter1)
         ds1 (o/tensor-slice-dataset :ds1
                                     out-spec
                                     [(o/c [[1.] [2.]])
                                      (o/c [[3.] [4.]])])
         mi1 (o/make-iterator :mi1 ds1 iter1)
         {:keys [graph] :as session} (g/build-all->session [mi1 gn1])]
  (g/run session mi1)
  (g/produce session (assoc gn1 :output-idx 1)))
