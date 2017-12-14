(ns com.billpiel.guildsman.ops.basic
  (:require [com.billpiel.guildsman.ops.gen :as ops-gen]
            [com.billpiel.guildsman.ops.gen-config :as cfg]
            [com.billpiel.guildsman.data-type :as dt]))


(defn- unmap-interns []
  (dorun (map (partial ns-unmap *ns*)
              (keys (ns-interns *ns*)))))

(defn generate-ops
  []
  (ops-gen/gen-ops 'com.billpiel.guildsman.ops.basic))

(defn get-const-dtype
  [v]
  (if (dt/HACK-string? v)
    dt/string-kw
    nil
#_    (-> v
        com.billpiel.guildsman.data-type/data-type-of-whatever 
        :kw
        com.billpiel.guildsman.ops.gen-config/auto-cast)))

(generate-ops)
