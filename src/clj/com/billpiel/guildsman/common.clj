(ns com.billpiel.guildsman.common)

(defrecord Graph [^long handle ^clojure.lang.Atom state ^clojure.lang.Atom closed ^Object handle-lock ^clojure.lang.Atom counter])

(defrecord GraphRef [^clojure.lang.Atom closed ^Object handle-lock])

(defrecord Op [id
               aliases
               op
               inputs
               ctrl-inputs
               hash
               attrs
               handle
               output-idx
               n-outputs
               shapes
               dtypes
               ^GraphRef graphref])

(defn Op? [o] (= (type o) Op))

