(ns com.billpiel.guildsman.workspace)

(defn update-state
  [ns-str old-state new-state]
  (->> new-state
       keys
       (filter #(= (namespace %) ns-str))
       (select-keys new-state)
       (merge old-state)))

(defn mk-pre-req-forms
  [pre-reqs]
  (for [[cmd & args] pre-reqs]
    `(apply (~'ws :multi) ~cmd ~(or args []))))

(defn get-plugin-form-pairs
  [ws-name ws-def plugins hook]
  (->> (for [p plugins]
         (let [p-ns (-> p :meta :ns)]
           (when-let [f (get-in p hook)]
             [p-ns (f ws-name ws-def)])))
       (remove nil?)))

(defn mk-hook-forms
  [hook-forms]
  (->> (for [[ns-str frms] hook-forms
             frm frms]
         `(~'state (update-state ~ns-str
                                 ~'state
                                 ~frm)))
       (apply concat)))

(defn mk-hook-fn-form*
  [hook-forms]
  (when-not (empty? hook-forms)
    `(fn [~'state]
       (let [~@hook-forms]
         ~'state))))

(defn mk-hook-fn-form
  [ws-name ws-def plugins hook]
  (mk-hook-fn-form*
   (mk-hook-forms
    (get-plugin-form-pairs
     ws-name ws-def plugins hook))))


(defn get-plugin-overide-form
  [ws-name ws-def plugins hook]
  (->> (for [p plugins]
         (when-let [f (get-in p hook)]
           (f ws-name ws-def)))
       (remove nil?)
       not-empty))

(defn mk-ws-src-*
  [main-form hook ws-name ws-def plugins pre-reqs]
  (let [pre-req-forms (mk-pre-req-forms pre-reqs)
        pre-hooks (get-plugin-form-pairs ws-name ws-def plugins [hook :pre])
        pre-forms (mk-hook-forms pre-hooks)
        post-hooks (get-plugin-form-pairs ws-name ws-def plugins [hook :post])
        post-forms (mk-hook-forms post-hooks)
        override-hook (get-plugin-overide-form ws-name ws-def plugins [hook :override])
        main-form' `[~'state (merge ~'state
                                   ~(or override-hook
                                        main-form))]]
    `(fn [~'cmd ~'& ~'args]
       ~@pre-req-forms
       (let [{~'state-atom :state} ~'ws]
         (locking ~'state-atom
           (let [~'state (assoc (deref ~'state-atom)
                                :return nil)
                 ~@pre-forms
                 ~@main-form'
                 ~@post-forms]
             (swap! ~'state-atom merge ~'state)
             (:return ~'state)))))))

(defn mk-ws-src-map*
  [ws-name {:keys [plugins] :as ws-def} & cmd-defs]
  (->> (for [[cmd-kw setup-fn & [pre-reqs]] cmd-defs]
         [cmd-kw (if (sequential? setup-fn)
                   setup-fn
                   (mk-ws-src-* (setup-fn ws-name ws-def)
                                cmd-kw
                                ws-name
                                ws-def
                                plugins
                                pre-reqs))])
       (into {})))


