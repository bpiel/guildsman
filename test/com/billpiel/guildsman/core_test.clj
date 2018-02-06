(ns com.billpiel.guildsman.core-test
  (:require [clojure.test :as t]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]))


(t/deftest addition-scalar-float
  (t/is (= 3.0
           (g/with-tensor-conversion-scope
             (g/produce
              (o/add 1. 2.))))))

