(ns com.billpiel.guildsman.packages)

(def registry (atom {}))

(defn register-package!
  [kw pkg])

(defn import-packages!
  [str-or-map])

(defn get-plan [pkg-kw])
