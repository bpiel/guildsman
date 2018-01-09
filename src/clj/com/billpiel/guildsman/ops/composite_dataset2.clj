(in-ns 'com.billpiel.guildsman.ops.composite)

;; TODO include :pkgs in macro plans
;; TODO weird macro double-naming thing
;; TODO don't scope one-op macros below


(defn- set-ds-props
  [plan fields size]
  "fields: [{:name :field1 :type :float :shape [1]} ...]"
  (update plan :xprops
          merge
          {:ds-fields fields
           :ds-size size}))

(defn- copy-ds-props
  [target {:keys [ds-fields ds-size]}]
  (update target :xprops
          merge
          {:ds-fields ds-fields
           :ds-size ds-size}))

(defn- ds-fields-prop->output-attrs
  [ds-fields-prop]
  {:output_types (mapv :type ds-fields-prop)
   :output_shapes (mapv :shape ds-fields-prop)})

(defn- ds->output-attrs
  [{:keys [ds-fields]}]
  (ds-fields-prop->output-attrs ds-fields))

(defmethod mc/build-macro :repeat-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  (let [[n dataset] inputs]
    [(copy-ds-props (o/repeat-dataset id
                                      (ds->output-attrs dataset)
                                      dataset (cast-tf dt/long-kw n))
                    dataset)]))

(sput/defn-comp-macro-op repeat-ds
  {:doc ""
   :id :repeat-ds
   :attrs {fields "field names"
           size "size"}
   :inputs [[n "number of times to repeat"] ;; TODO multiply to get size? unless -1, then use original size????
            [dataset "the dataset to repeat"]]}
  {:macro :repeat-ds
   :id id
   :inputs [n dataset]
   :fields fields})

(defmethod mc/build-macro :take-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  (let [[n dataset] inputs]
    [(copy-ds-props (o/take-dataset id
                                    (ds->output-attrs dataset)
                                    dataset (cast-tf dt/long-kw n))
                    dataset)]))

(sput/defn-comp-macro-op take-ds
  {:doc ""
   :id :take-ds
   :attrs {fields "field names"
           size "size"}  ;; uneccesary??
   :inputs [[n "number of records to take"] ;; TODO use as size
            [dataset "the dataset to take"]]}
  {:macro :take-ds
   :id id
   :inputs [n dataset]
   :fields fields})

(defn- remix-ds-zip-fn
  [inputs]
  (if (> (count inputs) 1)
    (o/zip-dataset (assoc (ds-fields-prop->output-attrs
                           (mapcat :ds-fields inputs))
                          :N (count inputs))
                   inputs)
    inputs))

(defn- int->arg-sym [i]
  (-> i
      (+ 97)
      char
      str
      symbol))

(defn fields->name-sym-map
  [in-fields]
  (into {}
        (for [{n :name} in-fields]
          [])))

(defn- remix-ds-map-fn-fn
  [in-fields out-fields]
  (let [in-fields' (map #(update % :name (comp symbol name))
                        in-fields)
        name->in-field (->> (map
                             (fn [a b]
                               [(:name a) b])
                             in-fields
                             in-fields')
                            (into {}))
        out-fields-mapped (map name->in-field
                               out-fields)]
    {:f {:func :remix-ds-map-fn
         :returns (mapv #(select-keys % [:shape :type])
                        out-fields-mapped)
         :args (mapv (comp name->in-field :name)
                     in-fields)
         :body (mapv :name out-fields-mapped)}
     :output_shapes (mapv :shape out-fields-mapped)
     :output_types (mapv :type out-fields-mapped)}))

(defn- remix-ds-map-fn
  [zipped-ds inputs fields]
  (let [in-fields (mapcat :ds-fields inputs)
        out-field-names (mapv :name fields)]
    (if-not false ;; TODO
      (o/map-dataset (remix-ds-map-fn-fn in-fields out-field-names)
                     zipped-ds
                     [])
      zipped-ds)))

(defmethod mc/build-macro :remix-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  [(let [size (some->> inputs (keep :ds-size) not-empty (apply min))]
      (-> inputs
          remix-ds-zip-fn
          (remix-ds-map-fn inputs fields)
          (set-ds-props fields
                        size)))])


(sput/defn-comp-macro-op remix-ds
  {:doc ""
   :id :remix-ds ;; TODO why is :id mandatory? how is it used?
   :attrs {fields ""}
   :inputs [[datasets "" ]]}
  {:macro :remix-ds
   :id id
   :inputs datasets
   :fields fields})


(defmethod mc/build-macro :dsi-plug
  [^Graph g {:keys [id inputs fields batch-size epoch-size] :as args}]
  (let [epoch-size' (or epoch-size
                        (some->> inputs (keep :ds-size) not-empty (apply min)))
        batch-size' (if (= batch-size -1)
                      epoch-size'
                      (or batch-size 1))
        out-attrs (ds-fields-prop->output-attrs fields)
        batch-count (ut/ceil-quot epoch-size' batch-size')
        ds (ut/$- ->> inputs
                  (remix-ds {:fields fields})
                  (repeat-ds -1)
                  (o/batch-dataset (ds-fields-prop->output-attrs fields)
                                   $
                                   batch-size')
                  (set-ds-props $
                                fields
                                batch-count)
                  (take-ds batch-count)
                  (repeat-ds -1))
        iter (o/iterator :iterator out-attrs)
        iter-hnd (o/iterator-to-string-handle :iter-hnd out-attrs iter)
        init-iter (o/make-iterator :init-iter
                                   ds
                                   iter)]
    [iter-hnd
     (-> init-iter
         (ut/append-collections [:dataset-iter-inits])
         ut/build-eagerly)]))

(sput/defn-comp-macro-op dsi-plug
  {:doc
   "Dataset iterator plug. Plugs into dsi-socket..... Usually used in
   a workspace's :mode->:iter"
   :id :dsi-plug ;; TODO why is :id mandatory? how is it used?
   :attrs {batch-size "The size of the batch.. negotiable."
           epoch-size "OPTIONAL"
           fields "Usually provided by dsi-connector."}
   :inputs [[datasets "A vector of one or more datasets. Keywords will be realized as packages." ]]}
  (let [dsets (mapv (fn [i] (if (keyword? i)
                              (pkg-plan i)
                              i))
                    datasets)]   
    {:macro :dsi-plug
     :id id
     :inputs dsets
     :batch-size batch-size
     :epoch-size epoch-size
     :fields fields}))

(defmethod mc/build-macro :dsi-socket
  [^Graph g {:keys [id fields inputs] :as args}]
  (let [outs-attrs (ds-fields-prop->output-attrs fields)
        v (o/variable :iter-hnd-vari {:shape [] :dtype dt/string-kw})
        iter (ut/build-eagerly
              (o/iterator-from-string-handle :out-iter
                                             outs-attrs
                                             v))
        get-next (o/iterator-get-next :get-next
                                      outs-attrs
                                      iter)]
    (into [v iter]
          (map-indexed (fn [idx _]
                         (assoc get-next
                                :output-idx idx))
                       fields))))

(defn- dsi-socket-ds-fields-prop
  [fields]
  (mapv (fn [[n t s]]
          {:name n
           :type t
           :shape s})
        (partition 3 fields)))

(sput/defn-comp-macro-op dsi-socket
  {:doc "Dataset Iterator Socket......"
   :id :dsi-socket
   :attrs {fields "vector containing series of field triples (name, type, shape)"}}
  (let [field-trpls (partition 3 fields)]
    {:macro :dsi-socket
     :id id
     :inputs []
     :fields (dsi-socket-ds-fields-prop fields)}))

(defn dsi-socket-outputs
  [{:keys [fields] :as plan}]
  (into {(:id plan) plan
         :-iter (assoc plan
                       :output-idx 1)}
        (map-indexed (fn [idx f]
                       [(:name f) (assoc plan
                                         :output-idx (+ 2 idx))])
                     fields)))

(defmethod mc/build-macro :dsi-connector
  [^Graph g {:keys [id attrs inputs] :as args}]
  (let [[socket plug-hnd plug-init] inputs]
    [(o/assign socket plug-hnd)
     plug-init]))

(sput/defn-comp-macro-op dsi-connector
  {:doc "Dataset Iterator Connector. Used internally by workflows..."
   :id :dsi-connector
   :inputs [[socket "dsi socket"]
            [plug "dsi plug"]]}
  (let [plug' (assoc plug :fields (:fields socket))
        plug0 (assoc plug' :output-idx 0)
        plug1 (assoc plug' :output-idx 1)]
    {:macro :dsi-connector
     :id id
     :inputs [socket
              plug0
              plug1]}))


(defmethod mc/build-macro :fixed-length-record-ds
  [^Graph g {:keys [id inputs size] :as args}]
  (let [[filenames header-bytes record-bytes footer-bytes buffer-bytes] inputs]
    [(set-ds-props
      (o/fixed-length-record-dataset id
                                     filenames
                                     header-bytes
                                     record-bytes
                                     footer-bytes
                                     buffer-bytes)
      [{:name nil :type dt/string-kw :shape []}]
      size)]))

(sput/defn-comp-macro-op fixed-length-record-ds
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
   :size size})

(defn fields->ds-attrs
  [field-specs]
  (let [fs (partition 2 field-specs)]
    {:output_types (mapv first fs)
     :output_shapes (mapv second fs)}))


(defn- map-ds-fields-prop
  [fields {:keys [returns]}]
  (mapv (fn [f {t :type s :shape}]
          {:name f
           :type t
           :shape s})
        fields
        returns))

(defmethod mc/build-macro :map-ds
  [^Graph g {:keys [id inputs f fields] :as args}]
  (let [{:keys [ds-size] :as input} (first inputs)
        ds-fields-prop (map-ds-fields-prop fields f)]
    [(set-ds-props (o/map-dataset id
                                  (assoc (ds-fields-prop->output-attrs ds-fields-prop)
                                         :f f)                  
                                  input
                                  ;; TODO support other args
                                  [])
                   ds-fields-prop
                   ds-size)]))


(sput/defn-comp-macro-op map-ds
  {:doc ""
   :id :map-ds
   :attrs {fields ""}
   :inputs [[f "the function"]
            [input-ds ""]]}
  {:macro :map-ds
   :id id
   :inputs [input-ds]
   :f (if (keyword? f)
        (pkg/get-function f)
        f)
   :fields fields})

(defn- tensor-slice-ds-ds-fields-prop
  [fields inputs]
  (mapv (fn [f {:keys [types shapes]}]
          {:name f
           :type (first types)
           :shape (first shapes)})
        fields
        inputs))

(defn- tensor-slice-ds-ds-size-prop
  [inputs]
  (->> inputs
       (map (comp first first :shapes))
       (apply min)))

(defmethod mc/build-macro :tensor-slice-ds
  [^Graph g {:keys [id inputs fields] :as args}]
  [(set-ds-props (o/tensor-slice-dataset id
                                         {:output_shapes (mapv (comp first :shapes)
                                                               inputs)}
                                         inputs)
                 (tensor-slice-ds-ds-fields-prop fields inputs)
                 (tensor-slice-ds-ds-size-prop inputs))])

(sput/defn-comp-macro-op tensor-slice-ds
  {:doc ""
   :id :tensor-slice-ds
   :attrs {fields "field names"}
   ;; TODO I'd rather components be an & args thing
   :inputs [[components "vectors of tensors/plans"]]}
  {:macro :tensor-slice-ds
   :id id
   :inputs (mapv o/c components)
   :fields fields})
