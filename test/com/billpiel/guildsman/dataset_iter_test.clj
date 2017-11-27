(ns com.billpiel.guildsman.dataset-iter-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]))


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


o/iterator-get-next
o/padded-batch-dataset
o/make-iterator

(g/produce
 (o/tensor-slice-dataset :ds1 {:output_shapes [[1]]} [(o/c [1])]))

























