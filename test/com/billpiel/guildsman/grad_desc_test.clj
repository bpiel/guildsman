(ns com.billpiel.guildsman.grad-desc-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.plan-time-comps :as p]))


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
