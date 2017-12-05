(ns com.billpiel.guildsman.dataset-iter-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]
;; func attr val
            [flatland.protobuf.core :as pr])
;; func attr val  
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

#_(let [in1 (o/placeholder :in1 g/dt-float [1])
      in2 (o/placeholder :in2 g/dt-float [1])
      out1 (o/add :out1 in1 in2)
      g (g/build->graph out1)
      id->node (com.billpiel.guildsman.graph/id->node g)
      in1-hnd (-> "in1" id->node :handle)
      in2-hnd (-> "in2" id->node :handle)
      out1-hnd (-> "out1" id->node :handle)]
  (def f1
    (FunctionNI/graphToFunction
     (:handle g)
     "Func1"
     false
     (long-array [in1-hnd in2-hnd out1-hnd])
     (long-array [in1-hnd in2-hnd])
     (int-array [0 0])
     (long-array [out1-hnd])
     (int-array [0])
     (into-array String ["out1"])))
  f1)
