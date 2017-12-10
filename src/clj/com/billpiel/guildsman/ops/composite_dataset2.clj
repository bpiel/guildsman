(in-ns 'com.billpiel.guildsman.ops.composite)

(defn- mk-ds-outs
  [dsets]
  [{:fields [{:name :features :shape [] :type :float}]
     :size 10000}])

(defn- dsi-plug-iter-attrs
  [fields]
  (let [f' (-> fields
               first
               :fields)]
    {:output_shapes (mapv :shapes f')
     :output_types (mapv :types f')}))

(defmethod mc/build-macro :dsi-plug
  [^Graph g {:keys [id inputs ds-outs batch-size fields] :as args}]
  ;; TODO zip multiple dsets
  ;; TODO re-map mismatched fields
  (let [iter (o/iterator :iterator (dsi-plug-iter-attrs ds-outs))
        iter-hnd (o/iterator-to-string-handle :iter-hnd iter)
        init-iter (o/make-iterator :init-iter
                                   (first inputs)
                                   iter)]
    [iter-hnd
     init-iter]))

(ut/defn-comp-macro-op dsi-plug
  {:doc
   "Dataset iterator plug. Plugs into dsi-socket..... Usually used in
   a workspace's :mode->:iter"
   :id :dsi-plug ;; TODO why is :id mandatory? how is it used?
   :attrs {batch-size "The size of the batch.. negotiable."
           fields "Usually provided by dsi-connector."}
   :inputs [[datasets "A vector of one or more datasets. Keywords will be realized as dyns." ]]}
  (let [;; TODO might be plans already!
        dsets datasets #_(mapv dr/realize-dyn datasets)]   
    {:macro :dsi-plug
     :id id
     :inputs [dsets]
     :ds-outs (mk-ds-outs dsets)
     :batch-size batch-size
     :fields fields}))

(defmethod mc/build-macro :dsi-socket
  [^Graph g {:keys [id fields field-specs inputs] :as args}]
  (let [v (o/variable :iter-hnd-vari {:shape [] :dtype dt/string-kw})
        iter (o/iterator-from-string-handle :out-iter
                                            output-spec
                                            v)
        get-next (o/iterator-get-next :get-next output-spec
                                      iter)]
    (into [v]
          (map-indexed (fn [idx _]
                         (assoc get-next
                                :output-idx idx))
                       fields))))

(ut/defn-comp-macro-op dsi-socket
  {:doc "Dataset Iterator Socket......"
   :id :dsi-socket
   :attrs {fields "vector of fields"} ;; TODO!!!
   ;; TODO input is required
   :inputs []}
  {:macro :dsi-socket
   :id id
   :inputs []
   :fields fields})

(defmethod mc/build-macro :dsi-connector
  [^Graph g {:keys [id attrs inputs] :as args}]
  [:assign-plug-hnd-to-socket-vari
   :init-iter])

(ut/defn-comp-macro-op dsi-connector
  {:doc "Dataset Iterator Connector. Used internally by workflows..."
   :id :dsi-connector
   :inputs [[socket "dsi socket"]
            [plug "dsi plug"]]}
  {:macro :dsi-connector
   :id id
   ;; TODO assoc fields/shapes/types to both inputs
   :inputs [socket plug]})

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
  {:output_types (mapv :type fields)
   :output_shapes (mapv :shape fields)})

(defmethod mc/build-macro :map-ds
  [^Graph g {:keys [id inputs fields f] :as args}]
  [(o/map-dataset id
                  (assoc (fields->ds-attrs fields)
                         :f f)                  
                  (first inputs)
                  ;; TODO support other args
                  [])])

(defn- map-ds-mk-field-attr
  [fields {:keys [returns]}]
  (mapv (fn [f st]
          {:field f
           :shape (:shape st)
           :type (:type st)})
        fields
        returns))

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
   :fields (map-ds-mk-field-attr fields f)})

(defmethod mc/build-macro :tensor-slice-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  [(o/tensor-slice-dataset id
                           {:output_shapes (mapv (comp first :shapes)
                                                 inputs)}
                           inputs)])

(ut/defn-comp-macro-op tensor-slice-ds
  {:doc ""
   :id :tensor-slice-ds
   :attrs {fields "field names"
           size "this is dumb"}
   ;; TODO I'd rather components be an & args thing
   :inputs [[components "vectors of tensors/plans"]]}
  {:macro :tensor-slice-ds
   :id id
   :inputs components
   :size size ;; TODO
   :fields fields})
