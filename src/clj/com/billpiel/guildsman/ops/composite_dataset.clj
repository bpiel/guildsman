(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on dataset_ops.py

(defn- plan-iter-ds-field-keys
  [dsets]
  [[:features :labels]
   ;; nil if all same
   {:ds1 [:features :labels]
    :ds2 [:labels :features]}])



(defn- simple-iter
  [^Graph g id inputs ds-keys fields-out])


(defn- mk-plex-iter-map
  [selected-idx  k ds output-spec idx]
  (sc/with-push-both-scopes k
    (ut/let+ [{:keys [iterator iter-hnd]}
              (+>> (o/iterator :iterator output-spec)          
                   (o/iterator-to-string-handle :iter-hnd))

              {:keys [dummy-ds]}
              (+>> (o/take-dataset output-spec ds 1)
                   (o/repeat-dataset :dummy-ds output-spec $ -1))
              
              {:keys [dummy-iter dummy-iter-hnd]}
              (+>> (o/iterator :dummy-iter output-spec)
                   (o/iterator-to-string-handle :dummy-iter-hnd))
              
              {:keys [get-next]}
              (+>> (o/select (o/equal idx selected-idx)
                             iter-hnd
                             dummy-iter-hnd)
                   (o/iterator-from-string-handle :out-iter
                                                  output-spec)
                   (o/iterator-get-next :get-next output-spec))
              
              init-iter (o/make-iterator :init-iter
                                         ds
                                         iterator)
              init-dummy-iter (o/make-iterator :init-dummy-iter
                                               dummy-ds
                                               dummy-iter)]
      {:get-next get-next
       :init-iter init-iter
       :init-dummy-iter init-dummy-iter})))

(defn- mk-select-tree*
  [selected agg [idx option]]
  (if agg
    (o/select (o/equal selected idx)
              option
              agg)
    option))

;; TODO include field id in outer select op id
(defn- mk-select-tree
  [selected options]
  (->> options
       (map-indexed vector)
       reverse
       (reduce (partial mk-select-tree*
                        selected)
               nil)))

(defn- mk-iter-field
  [selected-idx fields-in iter-maps field-out]
  (let [idxs (map #(.indexOf % field-out)
                  fields-in)
        nexts (map (fn [i m]
                     (-> m
                         :get-next
                         (assoc :output-idx i)))
                   idxs
                   iter-maps)]
    (mk-select-tree selected-idx
                    nexts)))

(defn- mk-iter-selector [n]
  (let [selected-idx (vari :selected-idx {:dtype dt/int-kw :shape []} 0)]
    {:selected-idx selected-idx
     ;; TODO include ds id in selector id
     :selectors (for [i (range n)]
                  (o/assign selected-idx i))}))

;; returns fields(select op), [sel-ds(assign) init-ds (mk-iter ^collection?)], the rest???
(defn- plex-iter
  [^Graph g id inputs output-specs ds-keys fields-out fields-in]
  (let [{:keys [selected-idx selectors]} (mk-iter-selector (count ds-keys))
        iter-ms (map (partial mk-plex-iter-map selected-idx)
                     ds-keys inputs output-specs (range (count ds-keys)))
        fields-in' (mapv fields-in ds-keys)
        fields (mapv (partial mk-iter-field
                              selected-idx
                              fields-in'
                              iter-ms)
                     fields-out)]
    (->> (map (fn [m s]
                [s (:init-iter m) (:init-dummy-iter m)])
          iter-ms selectors)         
         (into fields)
         flatten)))

#_(clojure.pprint/pprint 
 (plex-iter nil
            :PLEX-ID
            [{:id :ds1} {:id :ds2}]
            [(get-ds-output-specs nil)
             (get-ds-output-specs nil)]
            [:ds1 :ds2]
            [:a :b :c]
            {:ds1 [:a :b :c]
             :ds2 [:b :a :c]}))


(defn- get-ds-output-specs
  [ds]
  {:output_types [dt/long-kw dt/long-kw]
   :output_shapes [[1] [1]]})

(defmethod mc/build-macro :iter
  [^Graph g {:keys [id inputs ds-keys field-keys] :as args}]
  (let [[fields-out fields-in] field-keys]
    (let [output-specs (map get-ds-output-specs inputs)]
      (if (nil? fields-in)
        (simple-iter g id inputs output-specs ds-keys fields-out)
        (plex-iter g id inputs output-specs ds-keys fields-out fields-in)))))

(ut/defn-comp-macro-op iter
  {:doc "All-Powerful Dataset Iterator"
   :id :iter
   :attrs {dummy "hi"} ;; TODO!!!
   :inputs [[ds-map "A map having dataset ops as values."]]}
  {:macro :iter
   :id id
   :inputs (vec (vals ds-map)) ;; TODO can you assume `vals` and `keys` return same order?
   :ds-keys (keys ds-map)
   :field-keys (plan-iter-ds-field-keys (vals ds-map))})

(defn destruct-iter-plan
  [{:keys [ds-keys field-keys] :as iter-plan}]
  (when-not (= (:macro iter-plan) :iter)
    (throw (Exception. (format "This is not an iter: %s" iter-plan))))
  (into {}
        (concat
         (map-indexed (fn [i k]
                        [k (assoc iter-plan :output-idx i)])
                      (first field-keys))
         (map (fn [i k]
                [k
                 [(assoc iter-plan :output-idx i)
                  (assoc iter-plan :output-idx (+ 1 i))
                  (assoc iter-plan :output-idx (+ 2 i))]])
              (range (count (first field-keys)) 10000 3)
              ds-keys))))
