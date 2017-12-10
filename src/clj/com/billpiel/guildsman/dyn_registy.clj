(ns com.billpiel.guildsman.dyn-registry)

(def registry (atom {}))

(defn register-dyn!
  [kw provider])

(defn import-dyn-registry!
  [str-or-map])

(defn realize-dyn [kw])
