(ns com.billpiel.guildsman.grad-desc-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.plan-time-comps :as p]
            [com.billpiel.guildsman.layers :as l]
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
           (let [x (p/v :x 0.)
                 loss (->> (o/sub x 2.)
                           o/abs)
                 opt (p/grad-desc-opt2 :opt 0.5 loss)
                 sess (g/build->session opt)]
             (g/run-global-vars-init sess)
             (g/run-all sess (repeat 4 opt))
             (g/produce sess x)))))

(t/deftest add-var-const
  (let [init 10.
        x (p/v :x init)
        loss (o/add x 0.)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (> init
             (g/produce sess x)))
    (t/is (> loss-init
             (g/produce sess loss)))))

(t/deftest add-var-var
  (let [init-a 10.
        init-b -3.
        a (p/v :a init-a)
        b (p/v :b init-b)
        loss (o/add a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (> init-a
             (g/produce sess a)))
    (t/is (> init-b
             (g/produce sess b)))
    (t/is (> loss-init
             (g/produce sess loss)))))

(t/deftest bias-add-var-var
  (let [init-a [[10.]]
        init-b [-3.]
        a (p/v :a init-a)
        b (p/v :b init-b)
        loss (o/bias-add a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (ndvec-less-than? (g/produce sess b)
                            init-b))
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

(t/deftest add-var-ph
  (let [a-init [1. 2. 3.]
        feed {:b [4. 5. 6.]}
        a (p/v :a a-init)
        b (o/placeholder :b
                         dt/float-kw
                         [3])
        loss (o/add a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss feed)]
    (g/run sess opt feed )
    (t/is (ndvec-less-than? (g/produce sess a feed)
                            a-init))
    (t/is (ndvec-less-than? (g/produce sess loss feed)
                            loss-init))))

(t/deftest add-var-ph-1
  (let [a-init [[1. 2. 3.]]
        feed {:b [[4. 5. 6.]]}
        a (p/v :a a-init)
        b (o/placeholder :b
                         dt/float-kw
                         [-1 3])
        loss (o/add a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss feed)]
    (g/run sess opt feed)
    (t/is (ndvec-less-than? (g/produce sess a feed)
                            a-init))
    (t/is (ndvec-less-than? (g/produce sess loss feed)
                            loss-init))))

(t/deftest mat-mul-var-const
  (let [init-a [[1. 2. 3.]]
        a (p/v :a init-a)
        loss (o/mat-mul a [[1.] [1.] [1.]])
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

(t/deftest mat-mul-var-var
  (let [init-a [[1. 2. 3.]]
        init-b [[1.] [1.] [1.]]
        a (p/v :a init-a)
        b (p/v :b init-b)
        loss (o/mat-mul a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

(t/deftest sin
  (let [init-a 10.
        a (p/v :a init-a)
        loss (o/sin a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (> loss-init
             (g/produce sess loss)))))

(t/deftest mean-var-const
  (let [init-a [[1. 2. 3.]]
        a (p/v :a init-a)
        loss (o/mean a [0 1])
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest sigmoid
  (let [init-a 1.
        a (p/v :a init-a)
        loss (o/sigmoid a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (> loss-init
             (g/produce sess loss)))))

(t/deftest relu
  (let [init-a 1.
        a (p/v :a init-a)
        loss (o/relu a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (< (g/produce sess a)
             init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest relu6
  (let [init-a 1.
        a (p/v :a init-a)
        loss (o/relu-6 a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (< (g/produce sess a)
             init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest l2-loss
  (let [init-a 1.
        a (p/v :a init-a)
        loss (o/l2-loss a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (< (g/produce sess a)
             init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest conv-2d
  (let [input-init [[[[1.] [2.] [3.]]
                     [[4.] [5.] [6.]]
                     [[7.] [8.] [9.]]]]
        input (p/v :input input-init)
        kernel-init [[[[0.1]] [[0.2]]]
                     [[[0.3]] [[0.4]]]]
        kernel (p/v :kernel kernel-init)
        loss (o/conv-2d {:strides [1 1 1 1]
                         :padding "SAME"
                         :data_format "NHWC"}
                        input kernel)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

(t/deftest max-pool-v2
  (let [input-init [[[[1. 2.]
                      [5. 6.]
                      [7. 8.]
                      [3. 4.]]]]
        input (p/v :input input-init)
        loss  (o/max-pool-v2 {:padding "VALID"
                              :data_format "NHWC"}
                             input
                             [1 1 2 1]
                             [1 1 1 1])
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))

(t/deftest reshape-var-const
  (let [init-a [1. 2. 3. 4.]
        a (p/v :a init-a)
        loss (o/reshape a [2 2])
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (solidify (g/produce sess loss))]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))


(t/deftest dense-layer
  (let [init-a [[1. 2. 3. 4.]
                [5. 6. 7. 8.]]
        a (o/placeholder :a dt/float-kw [-1 4])
        feed {:a init-a}
        loss (l/dense {:units 2}
                      a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss feed)]
    (g/run sess opt feed)
    (t/is (ndvec-less-than? (g/produce sess loss feed)
                            loss-init))))



;; no grad defined for arg-max
#_
(t/deftest arg-max-var-const
  (let [init-a [1. 3. 2. 0.]
        a (p/v :a init-a)
        loss (o/arg-max a 0)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
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
  (let [init-a [[1. 2. 3.]]
        a (p/v :a init-a)
        loss (p/reduce-mean a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

(t/deftest reduce-sum
  (let [init-a [[1. 2. 3.]]
        a (p/v :a init-a)
        loss (p/reduce-sum a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess a)
                            init-a))
    (t/is (< (g/produce sess loss)
             loss-init))))

;; no grad for prod
#_
(t/deftest reduce-prod
  (let [init-a [[1. 2. 3.]]
        a (p/v :a init-a)
        loss (p/reduce-prod a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
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
        a (p/v :a init-a)
        loss (p/dropout 0.5 a)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
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
        a (p/v :a init-a)
        b (p/v :b init-b)
        loss (o/softmax-cross-entropy-with-logits a b)
        opt (p/grad-desc-opt2 :opt 0.5 loss)
        sess (g/build->session opt)
        _ (g/run-global-vars-init sess)
        loss-init (g/produce sess loss)]
    (g/run sess opt)
    (t/is (ndvec-less-than? (g/produce sess loss)
                            loss-init))))
