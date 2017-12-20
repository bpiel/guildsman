(ns com.billpiel.guildsman.tensor-scope
  (:require [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.shape :as sh])
  (:import [com.billpiel.guildsman.tensor TensorNDArray]))

(def ^:dynamic *scope*)

(defmacro with-default-scope
  [& body]
  `(binding [*scope* (push-default-scope)]
     (let [return# (do ~@body)]

       )))

(defmacro with-conversion-scope
  [& body])

(defmacro with-this-scope
  [scope & body])


