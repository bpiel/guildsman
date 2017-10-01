(ns com.billpiel.guildsman.shape
  (:require [com.billpiel.guildsman.util :as util]))

(defn unknown [] nil)

(def unknown nil?)

(defn scalar [] [])

(defn scalar? [sh] (and (sequential? sh)
                        (empty? sh)))

(def create vector)

(defn num-dimensions [sh]
  (if sh
    (count sh)
    -1))

(defn num-dimensions-seq [s]
  (loop [n 0
         s' s]
    (if (sequential? s')
      (recur (inc n) (first s'))
      n)))

(defn zeros-array-by-fn
  [sh f]
  (let [c (count sh)]
    (case c
      0 (first (f 1))
      1 (f (first sh))
      (to-array (repeatedly (first sh)
                            #(zeros-array-by-fn (drop 1 sh)
                                                f))))))

(defn const-md-vec
  [sh c]
  (case (count sh)
    0 c
    1 (vec (repeat (first sh) c))
    (vec (repeatedly (first sh)
                     #(const-md-vec (drop 1 sh)
                                    c)))))

(defn shape-of-seq
  [s]
  (loop [agg []
         v s]
    (if (sequential? v)
      (recur (conj agg (count v))
             (first v))
      agg)))


(defn apply-shape-to-vec
  [s v]
  (let [dim (first s)]
    (case (count s)
      0 v
      1 (vec (take dim v))
      (vec (take dim
                 (mapv (partial apply-shape-to-vec (drop 1 s))
                       (partition (quot (count v) dim) v)))))))

(defn tensor-attr-shape->vec
  [tas]
  (mapv :size (:dim tas)))































