(ns com.billpiel.guildsman.ops.single
  (:require [com.billpiel.guildsman.ops.gen :as ops-gen]
            [com.billpiel.guildsman.ops.gen-config :as cfg]))


(defn- unmap-interns []
  (dorun (map (partial ns-unmap *ns*)
              (keys (ns-interns *ns*)))))

(defn generate-ops
  []
  (ops-gen/gen-ops 'com.billpiel.guildsman.ops.single))

(generate-ops)
