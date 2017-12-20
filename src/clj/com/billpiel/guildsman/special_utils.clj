(ns com.billpiel.guildsman.special-utils
  (:require [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.macros :as mcro]
            [com.billpiel.guildsman.common :as com])
  (:import [com.billpiel.guildsman.common Graph]))

(defn ->op-node
  [^Graph g x]
  (cond (com/Op? x) x
        (keyword? x) ((gr/id->node g) (name x))
        (string? x) ((gr/id->node g) x)
        (:op x) (opn/get-op-by-plan g x)
        (:macro x) (->> x
                        (mcro/macro-plan->op-plan g)
                        (opn/get-op-by-plan g))))
