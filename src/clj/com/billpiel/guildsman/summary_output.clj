(ns com.billpiel.guildsman.summary-output
  (:require [flatland.protobuf.core :as pr])
  (:import [org.tensorflow.framework Summary]))

(def SummaryP (pr/protodef Summary))

(defn pb-load-summary [ba] (pr/protobuf-load SummaryP ba))

(defn hist-bytes->histo-bins
  [smry]
  (let [h smry
        {:keys [bucket-limit bucket] mx :max mn :min}
        (-> h
            :value
            first
            :histo)]
    {:mx (or mx (-> bucket-limit drop-last last))
     :mn (or mn (first bucket-limit)) ;; because :min is null sometimes?
     :bins (mapv (fn [x x' y]
                   {:x x
                    :y y
                    :dx (- x' x)})
                 bucket-limit
                 (-> bucket-limit
                     rest
                     drop-last)
                 bucket)}))

(defn merge-hists
  [{x1 :x y1 :y dx1 :dx} {y2 :y dx2 :dx}]
  {:x x1
   :y (+ y1 y2)
   :dx (+ dx1 dx2)})

(defn normalize-hist
  [scale {:keys [y dx] :as h}]
  (assoc h :y (* scale (/ y dx))))

(defn hist-bytes->histo-bins2
  [smry]
  (let [{:keys [mx mn bins]} (hist-bytes->histo-bins smry)
        spread (- mx mn)
        min-dx (/ spread 100.)]
    (loop [[head & tail] bins
           agg []
           current nil]
      (cond (nil? head)
            (->> current
                 (conj agg)
                 (remove nil?)
                 (mapv (partial normalize-hist
                                min-dx)))

            (nil? current)
            (recur tail agg head)

            :else (let [{:keys [dx] :as nxt} (merge-hists current head)]
                    (if (> dx min-dx)
                      (recur tail
                             (conj agg nxt)
                             nil)
                      (recur tail
                             agg
                             nxt)))))))

(defn histogram-summary-output-processor
  [ba]
  (-> ba
      pb-load-summary
      hist-bytes->histo-bins2))

(defn scalar-summary-output-processor
  [ba]
  (-> ba pb-load-summary :value first :simple-value ))
