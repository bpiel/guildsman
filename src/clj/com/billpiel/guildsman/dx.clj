(ns com.billpiel.guildsman.dx
  (:require [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.ops.gen-util :as ogu]
   [clojure.walk :as walk]))

(defn- spacer [n] (apply str (repeat n " ")))

(defn- dx-stack-text*
  [words width col indent]
  (loop [agg []
         [head & tail :as body] words
         col' col]
    (if head
      (let [hc (and (string? head) (count head))]
        (cond (= head ::br) (recur (conj agg "\n\n")
                                   tail
                                   0)
              (>= indent width) (recur (conj agg head)
                                       tail
                                       (+ col' hc))
              (< col' indent) (recur (conj agg (spacer (- indent col')))
                                     body
                                     indent)
              (> (+ hc indent) width) (recur (conj agg "\n" head "\n")
                                  tail
                                  0)
              (> (+ hc col') width) (recur (conj agg "\n")
                                           body
                                           0)
              (= col' indent) (recur (conj agg head)
                                     tail
                                     (+ col' hc))
              :else (recur (conj agg " " head)
                           tail
                           (+ col' hc 1))))
      [agg "\n"])))

(defn- dx-stack-text
  [width indent col doc]
  (ut/$- -> doc
         (clojure.string/split #"\n\n+")
         (interleave (repeat ::br))
         drop-last
         (map #(if (string? %)
                 (clojure.string/split % #"\s+")
                 %)
              $)
         flatten
         (dx-stack-text* width col indent)
         flatten
         (apply str $)))

(defn- PersistentProtocolBufferMap->str
  [doc]
  (try
    (-> doc ogu/node-def-attr-> str)
    (catch Exception e
      (str doc))))

(defn- dx->str
  [doc]
  (cond (string? doc) doc
        (keyword? doc) (name doc)
        (symbol? doc) (name doc)
        (number? doc) (str doc)
        (boolean? doc) (str doc)
        (= (type doc) flatland.protobuf.PersistentProtocolBufferMap) (PersistentProtocolBufferMap->str doc)
        (map? doc) (do (clojure.pprint/pprint (type doc))
                       (with-out-str (clojure.pprint/pprint doc)))
        :else nil))

(defn dx-get-left-col-width
  [rows]
  (->> rows
       (map first)
       (map dx->str)
       (map count)
       (apply max 0)))

(defn dx-remove-extra-lines [s]
  (clojure.string/replace s #"\n\n+" "\n\n"))

(declare dx-stack)

(defn dx-table-row
  [width indent left-col-width [head & tail]]
  (let [h' (dx->str head)
        hc (count h')
        delim (str (spacer (- left-col-width hc)) " - ")
        indent' (+ indent hc (count delim))]
    [(spacer indent) h' delim
     (->> (dx-stack {:width width
                      :indent indent'
                      :col indent'
                      :inter-lines? false}
                     (vec tail))
          flatten
          (apply str)
          clojure.string/trim)
     "\n"]))

(defn dx-sub-section
  [width indent [title & tail]]
  [(spacer indent)
   (dx->str title) "\n"
   (dx-stack {:width width
               :indent (+ indent 2)
               :col 0
               :inter-lines? true}
              (vec tail))])

(defn dx-table-section
  [width indent doc]
  (let [left-col-width (dx-get-left-col-width doc)]
    (mapv (partial dx-table-row
                   width indent left-col-width)
          doc)))

(defn dx-section
  [width indent doc]
  (if (every? vector? doc)
    (dx-table-section width indent doc)
    (dx-sub-section width indent doc)))

(defn dx-stack-element
  [width indent col doc]
  (let [doc' (dx->str doc)]
    (cond (string? doc') (dx-stack-text width indent col doc')
          (vector? doc) (dx-section width indent doc)
          (nil? doc) ""
          :else (throw (Exception. (str "what's this? " doc))))))

(defn dx-stack
  [{:keys [width indent col inter-lines?]} doc]
  (let [[head & tail] (ut/->vec doc)
        doc' (into [(dx-stack-element width indent col head)]
                   (mapv (partial dx-stack-element
                                  width indent 0)
                         (vec tail)))]
    (if inter-lines?
      (interleave doc' (repeat "\n"))
      doc')))

(defn dx
  [doc & [width indent]]
  (->> doc
       (dx-stack {:width (or width 75)
                   :indent (or indent 0)
                   :col 0
                   :inter-lines? true})
       flatten
       (apply str)
       dx-remove-extra-lines))

