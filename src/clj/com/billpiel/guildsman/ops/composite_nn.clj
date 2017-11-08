(in-ns 'com.billpiel.guildsman.ops.composite)

;; based on nn_ops.py


(defn- mk-id
  [^Graph g base-kw]
  (-> base-kw
      name
      (str "_" (swap! (:counter g)
                      inc))
      keyword))

(defn- mk-activation-template
  [a]
  (if (fn? a)
    (a :$/input)
    a))

(defn- mk-activation-plan
  [template input]
  (if-not (nil? template)
    (sc/assoc-scopes-to-plan
     (w/postwalk-replace {:$/input input}
                         template))
    input))

(defn- mk-kernel
  [{:keys [input-shape filters kernel-size dtype]}]
  (let [kernel-shape (conj kernel-size (last input-shape) filters)]
    (vari :kernel
         {:dtype dtype
          :shape kernel-shape}
         (glorot-uniform-initializer kernel-shape))))

(defmethod mc/build-macro :conv2d
  [^Graph g {:keys [id inputs filters kernel-size padding activation]}]
  (let [[input] inputs
        {:keys [shape dtype]} (opn/get-desc-of-output input)
        kernel (mk-kernel {:input-shape shape
                           :dtype dtype
                           :filters filters
                           :kernel-size kernel-size})
        bias (vari :bias
                  {:dtype dtype
                   :shape [filters]}
                  (zeros [filters] dtype))]
    [(-> (o/conv-2d {:strides [1 1 1 1]
                     :padding (or padding "VALID")
                     :data_format "NHWC"} ;; TODO
                    input
                    kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))])) 

(defn conv2d
  [{:keys [id filters kernel-size padding activation] :as opts} input]
  (->> {:macro :conv2d
        :inputs [input]
        :activation (mk-activation-template activation)}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :max-pooling2d
  [^Graph g {:keys [id inputs pool-size strides]}]
  [(o/max-pool {:ksize (vec (concat [1] pool-size [1])) ;; TODO assumes 'channels_last'
                :strides (vec (concat [1] strides [1]))
                :padding "VALID"
                :data_format "NHWC"}
               (first inputs))])

(defn max-pooling2d
  [{:keys [id pool-size strides] :as opts} input]
  (->> {:macro :max-pooling2d
        :inputs [input]}
       (merge opts)
       sc/assoc-scopes-to-plan))

(defmethod mc/build-macro :dense
  [^Graph g {:keys [id inputs activation units]}]
  (let [[input] inputs
        {:keys [dtype shape]} (opn/get-desc-of-output input)
        out-sh (-> shape
                   last
                   (vector units))
        kernel (vari :kernel
                    (glorot-uniform-initializer out-sh))
        bias (vari :bias
                  (zeros [units] dtype))]
    [(-> input
         (o/mat-mul kernel)
         (o/bias-add bias)
         ((partial mk-activation-plan activation)))]))

(defn dense
  [{:keys [id activation units]} input]
  (-> {:macro :dense
       :id id
       :inputs [input]
       :units units
       :activation (mk-activation-template activation)}
      sc/assoc-scopes-to-plan
      ut/with-op-meta))

(defn- dropout*
  ([^Graph g keep-prob x]
   (dropout* g nil keep-prob x {}))
  ([^Graph g id keep-prob x & [{:keys [noise-shape seed seed2]}]]
   (let [dtype (-> x opn/get-desc-of-output :dtype)
         rnd-bin (ut/$- -> noise-shape
                        (or (o/shape x))
                        (o/random-uniform
                         {:seed (or seed
                                    (rand-int Integer/MAX_VALUE))
                          :seed2 (or seed2
                                     (rand-int Integer/MAX_VALUE))
                          :dtype dtype}
                         $)
                        (o/add keep-prob $)
                        o/floor)]
     (-> x
         (o/div keep-prob)
         (o/mul rnd-bin)))))

(defmethod mc/build-macro :dropout
  [^Graph g {:keys [id inputs noise-shape seed seed2] :as args}]
  (let [[keep-prob x] inputs]
    [(dropout* g id keep-prob x args)]))

#_(defn dropout
  ([keep-prob x]
   (dropout nil keep-prob x {}))
  ([id keep-prob x & [{:keys [noise-shape seed seed2]}]] ;; TODO make signature consistent?
   {:macro :dropout
    :id id
    :inputs [keep-prob x]
    :noise-shape noise-shape
    :seed seed
    :seed2 seed2}))


(defmethod mc/build-macro :l2-loss
  [^Graph g {:keys [id attrs inputs] :as args}]
  [(o/l2-loss id
              (or attrs {})
              (first inputs))])

(defn l2-loss
  ([] {:macro :l2-loss
       :inputs [:$/input]}))


(defmacro defn-comp-op
  [name-sym {:keys [id? attrs inputs docs] :as attr-map} & body])

(defn-comp-op dropout
  {:doc "Drops out. Stays out."
   :id :dropout ;; can be `true`, nil/false or a default value
   :attrs {noise-shape "Shape of noise"
           seed "The seed"
           seed2 "The second seed"}
   :inputs [[keep-prob "Probability of keeping"]
            [x "the thing that gets dropped"]]
   :ctrl-inputs-attr? true ;;default
   :assoc-scopes? true ;; default
   :with-op-meta? true ;; default
   :with-push-id-to-scopes true }
  {:macro :dropout
   :id id
   :inputs [keep-prob x]
   :noise-shape noise-shape
   :seed seed
   :seed2 seed2})


#_(defn dropout
  "Drops out. Stays out.

Inputs
 keep-prob - Probability of keeping
 x - the thing that gets dropped

Attributes
 noise-shape - Shape of noise
 seed - The seed
 seed - The second seed
  "
  ([id {:keys [noise-shape seed seed2 ctrl-inputs]} keep-prob x]
   (sc/with-push-both-scopes (or id :dropout)
     (sc/assoc-scopes-to-plan
      (ut/with-op-meta
        (assoc (do {:macro :dropout
                    :id id
                    :inputs [keep-prob x]
                    :noise-shape noise-shape
                    :seed seed
                    :seed2 seed2})
               :ctrl-inputs ctrl-inputs)))))
  ([id-attrs keep-prob x]
   (dropout (ut/id-attrs->id id-attrs)
            (ut/id-attrs->attrs id-attrs)
            keep-prob x))
  ([keep-prob x] (dropout nil {} keep-prob x)))

(defn defn-comp-op-arities*
  [name-sym {:keys [id attrs inputs]}]
  (let [attrs' (some-> attrs keys not-empty)
        inputs' (some->> inputs (map first) not-empty)]
    (->> [(when (and id attrs' inputs')
            `([~'id-attrs ~@inputs']
              (dropout (ut/id-attrs->id ~'id-attrs)
                       (ut/id-attrs->attrs ~'id-attrs)
                       ~@inputs')))
          (when inputs'
            `([~@inputs']
              (dropout nil {} ~@inputs')))]
         (remove nil?))))

(defn defn-comp-op-main*
  [name-sym {:keys [id attrs inputs] :as attr-map} body]
  (let [attrs' (some-> attrs keys not-empty)
        inputs' (some->> inputs (map first) not-empty)
        ctrl-inputs' (when (:ctrl-inputs-attr? attr-map true)
                       '(ctrl-inputs))
        arg-list (cond (and id attrs' inputs')
                       `[~'id
                         {:keys [~@attrs' ~@ctrl-inputs']}
                         ~@inputs'])]
    `(~arg-list
      (sc/with-push-both-scopes (or ~'id ~id)
        (sc/assoc-scopes-to-plan
         (ut/with-op-meta
           (assoc (do ~@body)
                  :ctrl-inputs ~@ctrl-inputs')))))))

(defn defn-comp-op-fn-attr-map*
  [name-sym {:keys [doc attrs inputs]}]
  {:doc (ut/dx [""
                doc
                (into ['inputs] inputs)
                (into ['attrs] (mapv vec attrs))]
              75)})

(defn defn-comp-op*
  [name-sym attrs-map body]
  `(defn ~name-sym
     ~(defn-comp-op-fn-attr-map* name-sym attrs-map)
     ~@(defn-comp-op-arities* name-sym attrs-map)
     ~(defn-comp-op-main* name-sym attrs-map body)))

(defmacro defn-comp-op
  [name-sym attrs-map & body]
  (defn-comp-op* name-sym attrs-map body))

#_(clojure.pprint/pprint
 (macroexpand
  '(defn-comp-op dropout
     {:doc "Drops out. Stays out."
      :id :dropout ;; can be `true`, nil/false or a default value
      :attrs {noise-shape "Shape of noise"
              seed "The seed"
              seed2 "The second seed"}
      :inputs [[keep-prob "Probability of keeping"]
               [x "the thing that gets dropped"]]
      :ctrl-inputs-attr? true ;;default
      :assoc-scopes? true     ;; default
      :with-op-meta? true     ;; default
      :with-push-id-to-scopes true }
     {:macro :dropout
      :id id
      :inputs [keep-prob x]
      :noise-shape noise-shape
      :seed seed
      :seed2 seed2})))


(defn-comp-op dropout
     {:doc "Drops out. Stays out."
      :id :dropout ;; can be `true`, nil/false or a default value
      :attrs {noise-shape "Shape of noise"
              seed "The seed"
              seed2 "The second seed"}
      :inputs [[keep-prob "Probability of keeping"]
               [x "the thing that gets dropped"]]
      :ctrl-inputs-attr? true ;;default
      :assoc-scopes? true     ;; default
      :with-op-meta? true     ;; default
      :with-push-id-to-scopes true }
     {:macro :dropout
      :id id
      :inputs [keep-prob x]
      :noise-shape noise-shape
      :seed seed
      :seed2 seed2})

