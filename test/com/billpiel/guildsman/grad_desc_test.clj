(ns com.billpiel.guildsman.grad-desc-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]))

(def apply-< (partial apply <))

(defn ndvec-less-than?
  [a b]
  (->> (map vector
            (flatten a)
            (flatten b))
       (every? apply-<)))

(defn- solidify
  "TODO -- FIX THIS! This is ridiculous. Convert mutable ndarry to immutable vec."
  [x]
  (->> x
       flatten
       (mapv (comp dec inc))))

(t/deftest sub-abs
  (t/is (= 2.0
           (g/with-tensor-scope
             (let [x (c/vari :x 0.)
                   loss (->> (o/sub x 2.)
                             o/abs)
                   opt (c/grad-desc-opt :opt 0.5 loss)
                   sess (g/build->session opt)]
               (g/run-global-vars-init sess)
               (g/run-all sess (repeat 4 opt))
               (g/produce sess x))))))

(t/deftest add-var-const
  (g/with-tensor-scope
    (let [init 10.
          x (c/vari :x init)
          loss (o/add x 0.)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (> init
               (g/produce sess x)))
      (t/is (> loss-init
               (g/produce sess loss))))))

(t/deftest add-var-var
  (g/with-tensor-scope
    (let [init-a 10.
          init-b -3.
          a (c/vari :a init-a)
          b (c/vari :b init-b)
          loss (o/add a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (> init-a
               (g/produce sess a)))
      (t/is (> init-b
               (g/produce sess b)))
      (t/is (> loss-init
               (g/produce sess loss))))))

(t/deftest bias-add-var-var
  (g/with-tensor-scope
    (let [init-a [[10.]]
          init-b [-3.]
          a (c/vari :a init-a)
          b (c/vari :b init-b)
          loss (o/bias-add a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (ndvec-less-than? (g/produce sess b)
                              init-b))
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

(t/deftest add-var-ph
  (g/with-tensor-scope
    (let [a-init [1. 2. 3.]
          feed {:b [4. 5. 6.]}
          a (c/vari :a a-init)
          b (o/placeholder :b
                           dt/float-kw
                           [3])
          loss (o/add a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss feed)]
      (g/run sess opt feed )
      (t/is (ndvec-less-than? (g/produce sess a feed)
                              a-init))
      (t/is (ndvec-less-than? (g/produce sess loss feed)
                              loss-init)))))

(t/deftest add-var-ph-1
  (g/with-tensor-scope
    (let [a-init [[1. 2. 3.]]
          feed {:b [[4. 5. 6.]]}
          a (c/vari :a a-init)
          b (o/placeholder :b
                           dt/float-kw
                           [-1 3])
          loss (o/add a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss feed)]
      (g/run sess opt feed)
      (t/is (ndvec-less-than? (g/produce sess a feed)
                              a-init))
      (t/is (ndvec-less-than? (g/produce sess loss feed)
                              loss-init)))))

(t/deftest mat-mul-var-const
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3.]]
          a (c/vari :a init-a)
          loss (o/mat-mul a [[1.] [1.] [1.]])
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

(t/deftest mat-mul-var-var
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3.]]
          init-b [[1.] [1.] [1.]]
          a (c/vari :a init-a)
          b (c/vari :b init-b)
          loss (o/mat-mul a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

(t/deftest sin
  (g/with-tensor-scope  
    (let [init-a 10.
          a (c/vari :a init-a)
          loss (o/sin a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (> loss-init
               (g/produce sess loss))))))

(t/deftest mean-var-const
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3.]]
          a (c/vari :a init-a)
          loss (o/mean a [0 1])
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest sigmoid
  (g/with-tensor-scope
    (let [init-a 1.
          a (c/vari :a init-a)
          loss (o/sigmoid a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (> loss-init
               (g/produce sess loss))))))

(t/deftest relu
  (g/with-tensor-scope
    (let [init-a 1.
          a (c/vari :a init-a)
          loss (o/relu a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (< (g/produce sess a)
               init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest relu6
  (g/with-tensor-scope
    (let [init-a 1.
          a (c/vari :a init-a)
          loss (o/relu-6 a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (< (g/produce sess a)
               init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest l2-loss
  (g/with-tensor-scope
    (let [init-a 1.
          a (c/vari :a init-a)
          loss (o/l2-loss a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (< (g/produce sess a)
               init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest conv-2d
  (g/with-tensor-scope
    (let [input-init [[[[1.] [2.] [3.]]
                       [[4.] [5.] [6.]]
                       [[7.] [8.] [9.]]]]
          input (c/vari :input input-init)
          kernel-init [[[[0.1]] [[0.2]]]
                       [[[0.3]] [[0.4]]]]
          kernel (c/vari :kernel kernel-init)
          loss (o/conv-2d {:strides [1 1 1 1]
                           :padding "SAME"
                           :data_format "NHWC"}
                          input kernel)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

(t/deftest max-pool-v2
  (g/with-tensor-scope
    (let [input-init [[[[1. 2.]
                        [5. 6.]
                        [7. 8.]
                        [3. 4.]]]]
          input (c/vari :input input-init)
          loss  (o/max-pool-v2 {:padding "VALID"
                                :data_format "NHWC"}
                               input
                               [1 1 2 1]
                               [1 1 1 1])
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

(t/deftest reshape-var-const
  (g/with-tensor-conversion-scope ;; TODO a conversion scope is necessary here because the tensor is mutable :(
    (let [init-a [1. 2. 3. 4.]
          a (c/vari :a init-a)
          loss (o/reshape a [2 2])
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (identity #_solidify (g/produce sess loss))]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))


(t/deftest dense-layer
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3. 4.]
                  [5. 6. 7. 8.]]
          a (o/placeholder :a dt/float-kw [-1 4])
          feed {:a init-a}
          loss (c/dense {:units 2}
                        a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss feed)]
      (g/run sess opt feed)
      (t/is (ndvec-less-than? (g/produce sess loss feed)
                              loss-init)))))

;; no grad defined for arg-max
#_
(t/deftest arg-max-var-const
  (let [init-a [1. 3. 2. 0.]
        a (c/vari :a init-a)
        loss (o/arg-max a 0)
        opt (c/grad-desc-opt :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (clojure.pprint/pprint  (g/produce sess a))
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest reduce-mean
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3.]]
          a (c/vari :a init-a)
          loss (c/reduce-mean a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest reduce-sum
  (g/with-tensor-scope
    (let [init-a [[1. 2. 3.]]
          a (c/vari :a init-a)
          loss (c/reduce-sum a)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess a)
                              init-a))
      (t/is (< (g/produce sess loss)
               loss-init)))))

(t/deftest mean-squared-error
  (g/with-tensor-scope
    (let [init-a [[10.]]
          init-b [-3.]
          a (c/vari :a init-a)
          b (c/vari :b init-b)
          loss (c/mean-squared-error a b)
          opt (c/grad-desc-opt :opt 0.5 loss)
          sess (g/build->session opt)
          _ (g/run-global-vars-init sess)
          loss-init (g/produce sess loss)]
      (g/run sess opt)
      (t/is (ndvec-less-than? (g/produce sess loss)
                              loss-init)))))

;; no grad for prod
#_
(t/deftest reduce-prod
  (let [init-a [[1. 2. 3.]]
        a (c/vari :a init-a)
        loss (c/reduce-prod a)
        opt (c/grad-desc-opt :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

;; no grad defined for floor
#_
(t/deftest dropout
  (let [init-a [[1. 2. 3.]]
        a (c/vari :a init-a)
        loss (c/dropout 0.5 a)
        opt (c/grad-desc-opt :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

;; no gradient defined for softmax-cross-entropy-with-logits
#_
(t/deftest softmax-cross-entropy-with-logits-var-var
  (let [init-a [[1. 2. 3.]]
        init-b [[2. 4. 4.]]
        a (c/vari :a init-a)
        b (c/vari :b init-b)
        loss (o/softmax-cross-entropy-with-logits a b)
        opt (c/grad-desc-opt :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

