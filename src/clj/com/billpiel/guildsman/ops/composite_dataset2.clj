(in-ns 'com.billpiel.guildsman.ops.composite)

(defn- mk-ds-outs
  [dsets]
  [{:fields [{:name :features :shape [] :type :float}]
     :size 10000}])

(defmethod mc/build-macro :dsi-plug
  [^Graph g {:keys [id inputs ds-outs batch-size] :as args}]
  [:iter-str-hnd
   :init-iter])

(ut/defn-comp-macro-op dsi-plug
  {:doc
   "Dataset iterator plug. Plugs into dsi-socket..... Usually used in
   a workspace's :mode->:iter"
   :id :dsi-plug ;; TODO why is :id mandatory? how is it used?
   :attrs {batch-size "The size of the batch.. negotiable."}
   :inputs [[datasets "A vector of one or more datasets. Keywords will be realized as dyns." ]]}
  (let [;; TODO might be plans already!
        dsets (mapv dr/realize-dyn datasets)]   
    {:macro :dsi-plug
     :id id
     :inputs [dsets]
     :ds-outs (mk-ds-outs dsets)
     :batch-size batch-size}))

(defmethod mc/build-macro :dsi-socket
  [^Graph g {:keys [id attrs inputs] :as args}]
  [:iter-hnd-vari
   :each-field...])

(ut/defn-comp-macro-op dsi-socket
  {:doc "Dataset Iterator Socket......"
   :id :dsi-socket
   :attrs {fields "vector of fields"} ;; TODO!!!
   ;; TODO input is required
   :inputs [[dummy "dummy"]]}
  {:macro :dsi-socket
   :id id
   :inputs []
   :fields fields})

(defn dsi-socket-fields
  [{:keys [fields] :as plan}]
  (into {}
        (map-indexed (fn [idx f]
                       [f (assoc plan
                                 :output-idx (inc idx))])
                     fields)))


(defmethod mc/build-macro :fixed-length-record-ds
  [^Graph g {:keys [id inputs] :as args}]
  (let [[filenames header-bytes record-bytes footer-bytes buffer-bytes] inputs]
    [(o/fixed-length-record-dataset id
                                    filenames
                                    header-bytes
                                    record-bytes
                                    footer-bytes
                                    buffer-bytes)]))

(ut/defn-comp-macro-op fixed-length-record-ds
  {:doc ""
   :id :fixed-length-record-ds
   :attrs {size ""
           header-bytes ""
           record-bytes ""
           footer-bytes ""
           buffer-bytes ""}
   :inputs [[filenames ""]]}
  {:macro :fixed-length-record-ds
   :id id
   :inputs [filenames header-bytes record-bytes footer-bytes buffer-bytes]
   :size size
   :fields [{:type dt/string-kw :shape []}]})

(defn fields->ds-attrs
  [fields]
  {:output_types []
   :output_shapes []})

(defmethod mc/build-macro :map-ds
  [^Graph g {:keys [id inputs fields f] :as args}]
  [(o/map-dataset id
                  (assoc (fields->ds-attrs fields)
                         :f f)                  
                  (first inputs)
                  ;; TODO support other args
                  [])])

(defn- mk-field-specs
  [fields]
  (->> fields
       (partition 3)
       (mapv (fn [[a t s]]
               {:field `'~a :type t :shape s}))))

(ut/defn-comp-macro-op map-ds
  {:doc ""
   :id :map-ds
   :attrs {fields ""}
   :inputs [[f "the function"]
            [input-ds ""]]}
  {:macro :map-ds
   :id id
   :inputs [input-ds]
   :f f
   :size (:size input-ds) ;; TODO might be dyn
   ;; TODO get types from fn return????????
   :fields (mk-field-specs fields)})
