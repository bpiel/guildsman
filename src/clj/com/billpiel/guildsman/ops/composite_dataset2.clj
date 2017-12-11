(in-ns 'com.billpiel.guildsman.ops.composite)

(defn- set-ds-fields
  [plan fields]
  (assoc-in plan [:xprops :ds-fields]
            fields))



(defmethod mc/build-macro :remix-ds
  [^Graph g {:keys [id inputs fields-in fields] :as args}]
  ;; TODO zip multiple dsets
  ;; TODO re-map mismatched fields
  
  )

(ut/defn-comp-macro-op remix-ds
  {:doc ""
   :id :remix-ds ;; TODO why is :id mandatory? how is it used?
   :attrs {fields ""}
   :inputs [[datasets "" ]]}
#_  (let [zipped-ds (if (> 1 (count datasets))
                    (zip-ds datasets)
                    (first datasets))]
    {:macro :remix-ds
     :id id
     :inputs [zipped-ds]
     :fields-in (mapv :fields datasets)
     :fields fields
     :size (apply min (keep :size datasets))}))

(defmethod mc/build-macro :dsi-plug
  [^Graph g {:keys [id inputs batch-size] :as args}]
  (let [remixed-ds (first inputs)
        ds-outs (mc/ds-outs remixed-ds)
        iter (o/iterator :iterator ds-outs)
        iter-hnd (o/iterator-to-string-handle :iter-hnd ds-outs iter)
        init-iter (o/make-iterator :init-iter
                                   remixed-ds
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
   :inputs [[datasets "A vector of one or more datasets. Keywords will be realized as packages." ]]}
  (let [ ;; TODO might be plans already!
        dsets datasets #_(mapv pkg/get-plan datasets)
        remixed-ds (remix-ds {:fields fields} dsets)]   
    {:macro :dsi-plug
     :id id
     :inputs [remixed-ds]
     :ds-outs (mapv #(select-keys % [:fields :field-specs])
                    dsets)
     :batch-size batch-size
     :epoch-size (:size remixed-ds)}))

(defn- field-specs->outs-attrs
  [field-specs]
  {:output_types (mapv first field-specs)
   :output_shapes (mapv second field-specs)})

(defmethod mc/build-macro :dsi-socket
  [^Graph g {:keys [id fields field-specs inputs] :as args}]
  (let [outs-attrs (field-specs->outs-attrs field-specs)
        v (o/variable :iter-hnd-vari {:shape [] :dtype dt/string-kw})
        iter (o/iterator-from-string-handle :out-iter
                                            outs-attrs
                                            v)
        get-next (o/iterator-get-next :get-next
                                      outs-attrs
                                      iter)]
    (into [v iter]
          (map-indexed (fn [idx _]
                         (assoc get-next
                                :output-idx idx))
                       fields))))

(ut/defn-comp-macro-op dsi-socket
  {:doc "Dataset Iterator Socket......"
   :id :dsi-socket
   :attrs {fields "vector containing series of field triples (name, type, shape)"}}
  (let [field-trpls (partition 3 fields)]
    {:macro :dsi-socket
     :id id
     :inputs []
     :fields (map first field-trpls)
     :field-specs (map ut/restv field-trpls)}))

(defn dsi-socket-outputs
  [{:keys [fields] :as plan}]
  (into {:-select-vari plan
         :iter (assoc plan
                      :output-idx 1)}
        (map-indexed (fn [idx f]
                       [f (assoc plan
                                 :output-idx (+ 2 idx))])
                     fields)))



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
   ;; TODO assoc fields/shapes/types to both inputs -- or something??????
   :inputs [socket plug]})


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
           header-bytes "...plan"
           record-bytes "...plan"
           footer-bytes "...plan"
           buffer-bytes "...plan"}
   :inputs [[filenames ""]]}
  {:macro :fixed-length-record-ds
   :id id
   :inputs [filenames header-bytes record-bytes footer-bytes buffer-bytes]
   :size size
;   :field-specs [dt/string-kw []]
   :fields [nil]})

(defn fields->ds-attrs
  [field-specs]
  (let [fs (partition 2 field-specs)]
    {:output_types (mapv first fs)
     :output_shapes (mapv second fs)}))

(defmethod mc/build-macro :map-ds
  [^Graph g {:keys [id inputs f] :as args}]
  (let [input (first inputs)]
    [(o/map-dataset id
                    (assoc (fields->ds-attrs (mc/ds-outs input))
                           :f f)                  
                    input
                    ;; TODO support other args
                    [])]))

#_(defn- map-ds-mk-field-attr
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
   :size (:size input-ds) ;; TODO might be pkg
   ;; TODO get types from fn return????????
   :field-specs (vec (mapcat (juxt :type :shape) (:returns f)))   
   :fields fields})


(defmethod mc/build-macro :tensor-slice-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  [(o/tensor-slice-dataset id
                           {:output_shapes (mapv (comp first :shapes)
                                                 inputs)}
                           inputs)])

(ut/defn-comp-macro-op tensor-slice-ds
  {:doc ""
   :id :tensor-slice-ds
   :attrs {fields "field names"}
   ;; TODO I'd rather components be an & args thing
   :inputs [[components "vectors of tensors/plans"]]}
  {:macro :tensor-slice-ds
   :id id
   :inputs components
   :fields fields})
