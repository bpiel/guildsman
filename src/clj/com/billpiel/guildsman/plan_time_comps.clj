(ns com.billpiel.guildsman.plan-time-comps
  (:require [com.billpiel.guildsman.ops :as o]
            [com.billpiel.guildsman.ops-gen-util :as ogu]
            [com.billpiel.guildsman.scope :as sc]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.util :as ut]
            [clojure.walk :as w]))

;; from math grad py
(defn safe-shape-div
  [x y]
  (->> y
       o/ones-like
       (o/maximum y)
       (o/floor-div x)))

(defn to-int32
  [x]
  (o/cast-tf {:DstT :int32}
             x))

(defn reduction-dims
  [x & [axis]]
  (or axis
      (o/range-tf (int 0)
                  (o/rank x)
                  (int 1))))

(defn reduced-shape
  [input-shape axes]
  (let [input-shape' (to-int32 input-shape)
        axes' (to-int32 axes)
        input-rank (o/size input-shape')
        axes'' (o/mod-tf (o/add axes' input-rank)
                         input-rank)
        axes-shape (o/shape axes'')]
    (o/dynamic-stitch [(o/range-tf (int 0)
                                   input-rank
                                   (int 1))
                       axes'']
                      [input-shape' (o/fill axes-shape (int 1))])))


(defn broadcast-mul
  [v mx]
  (o/mul (o/expand-dims v (int -1))
         mx))

(defn grad-desc-opt
  "MACRO"
  ([id alpha target] (grad-desc-opt id {} alpha target))
  ([id {:keys [scope] :as attrs} alpha target]
   (sc/with-push-both-scopes (or scope :gradients)
     (sc/assoc-scopes-to-plan
      {:macro :grad-desc-opt
       :id id
       :inputs [target alpha]
       :no-auto-scope? true}))))

(defn grad-desc-opt2
  "MACRO"
  ([id alpha target] (grad-desc-opt2 id {} alpha target))
  ([id {:keys [scope] :as attrs} alpha target]
   (sc/with-push-both-scopes (or scope :gradients)
     (sc/assoc-scopes-to-plan
      {:macro :grad-desc-opt2
       :id id
       :inputs [target alpha]
       :no-auto-scope? true}))))

(defn gradient
  "MACRO"
  [id y dxs output-idx]
  (sc/assoc-scopes-to-plan
   {:macro :grad
    :id id
    :output-idx output-idx
    :inputs [y dxs]
    :no-auto-scope? true}))

(defn gradient2
  "MACRO"
  [id y dx xs]
  (sc/assoc-scopes-to-plan
   {:macro :gradients
    :id id
    :output-idx 0 #_ output-idx
    :inputs [y dx xs]
    :no-auto-scope? true}))

(defn accuracy
  ([a b] (accuracy nil a b))  
  ([id a b]
   (ut/$- ->> (o/equal a b)
          (o/cast-tf {:SrcT dt/bool-kw :DstT dt/float-kw})
          (o/mean :accuracy $ (reduction-dims $))
          (sc/with-push-both-scopes (or id :accuracy)))))








