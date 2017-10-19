(in-ns 'com.billpiel.guildsman.ops.composite)


(defn grad-desc-opt-clj
  "MACRO"
  ([id alpha target] (grad-desc-opt-clj id {} alpha target))
  ([id {:keys [scope] :as attrs} alpha target]
   (sc/with-push-both-scopes (or scope :gradients)
     (sc/assoc-scopes-to-plan
      {:macro :grad-desc-opt-clj
       :id id
       :inputs [target alpha]
       :no-auto-scope? true}))))

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

(defn gradients-clj
  "MACRO"
  [id y dxs output-idx]
  (sc/assoc-scopes-to-plan
   {:macro :gradients-clj
    :id id
    :output-idx output-idx
    :inputs [y dxs]
    :no-auto-scope? true}))

(defn gradients
  "MACRO"
  [id y dx xs]
  (sc/assoc-scopes-to-plan
   {:macro :gradients
    :id id
    :output-idx 0 #_ output-idx
    :inputs [y dx xs]
    :no-auto-scope? true}))

