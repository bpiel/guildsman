(ns com.billpiel.guildsman.core
  (:require [clojure.core.async :as a]
            [com.billpiel.guildsman.graph :as gr]
            [com.billpiel.guildsman.builder :as bdr]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.tensor :as tsr]
            [com.billpiel.guildsman.op-node :as opn]
            [com.billpiel.guildsman.workflow :as wf]
            [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.dx :as dx]
            [com.billpiel.guildsman.special-utils :as sput]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [com.billpiel.guildsman.checkpoint-repo2 :as cpr]
            com.billpiel.guildsman.gradients
            com.billpiel.guildsman.grad-desc-opt
            com.billpiel.guildsman.gradients-clj
            com.billpiel.guildsman.grad-desc-opt-clj
            [com.billpiel.guildsman.data-type :as dt]
            [clojure.walk :as w]
            com.billpiel.guildsman.common
            clojure.pprint
            clojure.stacktrace)
  (:import [com.billpiel.guildsman.common Graph]
           [com.billpiel.guildsman.session Session]))

(def dt-float dt/float-kw)
(def dt-list-float dt/list-float-kw)
(def dt-double dt/double-kw)
(def dt-int dt/int-kw)
(def dt-list-int dt/list-int-kw)
(def dt-uint dt/uint-kw) ;; TODO rename? is unsigned byte?
(def dt-string dt/string-kw)
(def dt-long dt/long-kw) ;; TODO or rename all of these to use TF terms?
(def dt-bool dt/bool-kw)
(def dt-list-bool dt/list-bool-kw)
(def dt-type dt/type-kw)
(def dt-list-type dt/list-type-kw)
(def dt-tensor dt/tensor-kw)
(def dt-list-tensor dt/list-tensor-kw)
(def dt-shape dt/shape-kw)
(def dt-list-shape dt/list-shape-kw)
(def dt-list dt/list-kw)


(defmacro let+
  [& body]
  `(ut/let+ ~@body))

(defmacro id$->>
  [& body]
  `(ut/id$->> ~@body))

(defmacro with-tensor-scope
  [& body]
  `(tsc/with-scope ~@body))

(defmacro with-tensor-conversion-scope
  [& body]
  `(tsc/with-conversion-scope ~@body))

(defmacro with-tensor-scope-containing
  [tensors & body]
  `(tsc/with-scope-containing ~tensors ~@body))


(defmulti close
  "Close a Graph or Session defrecord."
  (fn [v] (type v)))

(defmethod close :default [_])

(defmethod close Graph [v]
  (com.billpiel.guildsman.GraphNI/delete (:handle v))
  (reset! (:closed v) true))

(defmethod close Session [v]
  (com.billpiel.guildsman.SessionNI/delete (:handle v)))

(defn with-close-let*
  [bindings body]
  (let [syms (->> bindings
                  (partition 2)
                  (map first)
                  (mapcat (partial tree-seq coll? seq))
                  (filter symbol?))]
    `(let ~bindings
       (let [r# (do ~@body)]
         (doseq [sym# [~@syms]] ;; TODO close graphs before sessions
           (close sym#))
         r#))))

(defmacro with-close-let
  "Calls `close` on all local bindings in `bindings`.
In the example below, both `graph` and `session` will be closed upon
  exiting the `with-close-let` form.

(with-close-let [{:keys [graph] :as session} (build->session plan)]
  ...use session...
)"
  [bindings & body]
  (with-close-let* bindings body))

(defn graph->session
  "Takes a Graph defrecord. Creates and returns a Session defrecord."
  [^Graph graph]
  (sess/create graph))

(defn build->graph
  "Given a plan, creates a Graph defrecord, builds the plan in that
  graph and returns the new graph.

  Given a Graph defrecord and a plan, builds the plan in that graph
  and returns the graph.
"
  ([plan] (build->graph (gr/create) plan))
  ([^Graph graph plan] (bdr/build->graph graph plan)))

(defn build-all->graph
  "Like `build->graph` except that it takes a sequence of plans."
  ([plans]
   (build-all->graph (build->graph (first plans))
                     (rest plans)))
  ([^Graph graph plans]
   (doseq [p plans]
     (build->graph graph p))
   graph))

(defn build->session
  "Given a plan, creates a Graph defrecord, builds the plan in that
  graph, creates a Session defrecord and returns the new session.

  Given a Graph defrecord and a plan, builds the plan in that graph,
  creates a Session defrecord and returns the new session.
"
  ([plan]
   (-> plan
       build->graph
       graph->session))
  ([^Graph graph plan]
   (->> plan
        (build->graph graph)
        graph->session)))

(defn build-all->session
  "Like `build->session` except that it takes a sequence of plans."
  ([plans]
   (-> plans
       build-all->graph
       graph->session))
  ([^Graph graph plans]
   (->> plans
        (build-all->graph graph)
        graph->session)))

(defn run
  "Runs the node at the root of `plan` within `session`.

  `feed` can be provided optionally. It is a map. Keys are either
  plans or keywords that correspond to pre-built nodes. Values will
  override the values of their respective nodes. This is typically
  used to provide values for placeholder nodes."
   [^Session session plan & [feed]]
  (sess/run session plan feed))

(defn run-all
  "Like `run` except that it takes a sequence of plans. In the example
  below, the 'opt' node is run one-hundred times, which might be done
  to train a network.

  (run-all session (repeat 100 opt))"
  [^Session session plans & [feed]]
  (sess/run-all session plans feed))

(defn fetch->tensor
  [^Session session plan & [feed]]
  (sess/fetch->tensor session plan feed))

(defn fetch-all->tensors [^Session session plans & [feed targets]]
  (sess/fetch-all->tensors session plans feed targets))

(defn fetch [^Session session plan & [feed]]
  (-> (fetch->tensor session plan feed)
      tsr/getValue))

(defn fetch-all [^Session session plans & [feed targets]]
  (->> (fetch-all->tensors session plans feed targets)
       (map tsr/getValue)))

(defn fetch-map [^Session session plans & [feed targets]]
  (let [g (:graph session)]
    (zipmap (map (comp :id
                       (partial sput/->op-node g))
                 plans)
            (fetch-all session plans feed targets))))

;; TODO rename!!
(defn exec
  {:doc (dx/dx
         '["`exec` creates a new Session defrecord, builds plan and
runs the root of plan. Returns the new session. It can optionally be
provided an existing Graph defrecord and feed map."
           [Returns "the session"]
           [Args
            [[graph "Optional. A Graph defrecord."]
             [plan "The Plan."]
             [feed "Optional. It is a map. Keys are either plans or
             keywords that correspond to pre-built nodes. Values will
             override the values of their respective nodes. This is
             typically used to provide values for placeholder nodes."]]]])}
  ([plan]
   (-> plan
       build->graph
       (exec plan)))
  ([^Graph graph plan & [feed]]
   (-> graph
       graph->session
       (run plan feed))))

(defn exec-all
  "Like `exec` except that it takes a sequence of plans."
  ([plans]
   (-> plans
       build-all->session
       (run-all plans)))
  ([^Graph graph plans & [feed]]
   (-> plans
       (build->session graph)
       (run-all plans feed))))

(defn run-global-vars-init
  "Runs all variable initialization nodes in a graph. Variable state
  exists only in the context of a session. This function is typically
  called immediately after a session is created."
  [^Session session]
  (let [g (:graph session)
        inits (into (gr/get-global-var-init-assign-ops g)
                    ;; TODO make func "run-all-inits"
                    (gr/get-nodes-in-collection g :dataset-iter-inits))]
    (run-all session inits)
    session))

(defn produce->tensor [plan & [feed]]
  (-> plan
      build->session
      run-global-vars-init
      (fetch->tensor plan feed)))

(defn produce-all->tensors [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all->tensors plans feed)))


(defn produce-all [plans & [feed]]
  (-> plans
      build-all->session
      run-global-vars-init
      (fetch-all plans feed)))

(defn produce
  "Given a plan, creates a graph, builds the plan, starts a session,
  executes the plan root, fetches and returns the value. The graph and
  session are closed automatically.

  Given a Session defrecord, plan, and, optionally a feed map, will
  build a plan, executes the plan root, fetches and returns the
  value. Graph and session are not closed."
  ([plan]
   (with-close-let [{:keys [graph] :as session} (build->session plan)]
     (-> session
         run-global-vars-init
         (fetch plan))))
  ([^Session session plan & [feed]]
   (build->graph (:graph session) plan)
   (fetch session plan feed)))

(defn ws-status [{:keys [wf-in wf-out] :as ws}]
  (let [i @wf-in
        o @wf-out
        sgo (-> o :stage :gm)
        wgo (-> o :workflow :gm)
        {:keys [heartbeat]} o]
    {:status (:status o)
     :heartbeat heartbeat
     :heartbeat-ago-s (when heartbeat
                        (quot (- (System/currentTimeMillis)
                                 heartbeat)
                              1000))
     :step (-> sgo :pos :step)
     :interval (-> sgo :pos :interval)
     :stage (-> wgo :pos :stage)
     :interrupt? (:interrupt? i)
     :ex (:ex o)}))

(defn ws-pr-status
  [ws]
  (let [{:keys [ex] :as  status'} (ws-status ws)]
    (clojure.pprint/pprint (dissoc status' :ex))
    (when ex
      (clojure.stacktrace/print-cause-trace ex))))

(defn ws-interrupt
  [{:keys [wf-out wf-in wf-chan]} & [timeout-ms]]
  (if-not (= (:status @wf-out) :running)
    true
    (do (vswap! wf-in assoc :interrupt? true)
        (let [wf-chan' @wf-chan
              [r ch] (a/alts!! [wf-chan'
                                (a/timeout (or timeout-ms 1000))])]
          (or (= ch wf-chan')
              (not (= (:status @wf-out) :running)))))))

(defn start-wf
  [wf ws & [wait-ms]]
  (let [{:keys [wf-in wf-chan]} ws]
    (when (= (:statue wf-in) :running)
      (throw (Exception. "A workflow is already running. Interrupt it first.")))
    (vswap! wf-in assoc
            :interrupt? false)
    (let [ch (wf ws)]
      (vreset! wf-chan ch))
    (Thread/sleep (or wait-ms 100)) ;; TODO use alts!!!
    (ws-status ws)))

;; TODO timeout
(defn ws-predict-async
  [ws input]
  (if-let [input-ch (some-> ws :wf-out deref :global :gm :input-ch)]
    (let [return (a/chan 1)]
      (a/>!! input-ch [input return])
      return)
    (throw (Exception. "Workspace has no input channel. Be sure prediction mode is running."))))

(defn ws-predict-sync
  [ws input]
  (-> ws
      (ws-predict-async input)
      a/<!!))

(def last-ex (atom nil))
#_ (clojure.pprint/pprint last-ex)

(defn default-init-wf
  [wf-def]
  (vary-meta ((eval (wf/render-wf-fn-src
                     [:block {:type :workflow}
                      [:init]]
                                          wf-def))
              wf-def)
             assoc
             :doc "A default implementation of a init workflow....TODO"))

(defn default-close-wf
  [wf-def]
  (vary-meta ((eval (wf/render-wf-fn-src
                     [:block {:type :workflow}
                      [:close-session]
                      [:close-graph]]
                                          wf-def))
              wf-def)
             assoc
             :doc "A default implementation of a close workflow....TODO"))

(defn mk-workspace
  [ws-name ws-cfg]
  [{:wf-in (volatile! {})
    :wf-out (volatile! {})
    :wf-chan (volatile! nil)
    :wf-closers (atom #{})
    :ws-name ws-name
    :cfg ws-cfg}
   :NOTHING?])

;; PLUGIN ============================

(defn --ws-run-all
  [session {:keys [targets feed]}]
  (run-all session targets feed))

(defn --ws-run-all-repeat
  [session {:keys [targets feed]} iters]
  (run-all session
              (->> targets
                   (repeat iters)
                   flatten)
              feed))

(defn --ws-fetch-map
  [state]
  (let [{:keys [global mode modes interval]} state
        _ (when-not mode
            (throw (Exception. "Cannot fetch-map. Mode not set.")))
        fetched-raw (some-> interval :gm :fetched-raw)
        session (-> global :gm :session)
        {:keys [fetch feed]} (-> modes :-compiled :-current)]
    {:interval
     {:fetched-raw
      (merge-with merge
                  fetched-raw 
                  {mode
                   (fetch-map session
                              fetch
                              feed
                              [])})}}))

(defn gm-plugin-setup-init-main
  [wf-def & _]
  [])

(defn gm-plugin-build-main [graph plans]
  {:global {:graph (build-all->graph plans)}})

(defn- gm-plugin-build-mode
  [graph {:keys [iters] :as mode}]
  (if (not-empty iters)
    (->> (for [[s p] iters]
           (let [dsi-cn (c/dsi-connector s p)]
             ;; TODO build-all and find-ops instead?
             (build->graph graph dsi-cn) 
             (sput/->op-node graph dsi-cn)))
         doall
         (update mode :enter into))
    mode))

(defn gm-plugin-build-modes [graph modes]
  (ut/fmap (partial gm-plugin-build-mode graph)
           modes))

(defn gm-plugin-setup-build-main
  [wf-def & _]
  [`(gm-plugin-build-main (-> ~'state :global :gm :graph)
                          (:plans ~'ws-cfg))
   `(->> ~'ws-cfg
         :modes
         (gm-plugin-build-modes (-> ~'state :global :gm :graph))
         wf/setup-modes)])

(defn gm-plugin-create-session-main
  [graph session]
  {:global {:session (or session
                         (graph->session graph))}})

(defn gm-plugin-setup-create-session-main
  [wf-def & _]
  [`(gm-plugin-create-session-main (-> ~'state :global :gm :graph)
                                   (-> ~'state :global :gm :session))])

;; TODO do it!
(defn restore-checkpoint
  [ws-use-chkpt]
  (throw (Exception. "NOT IMPLEMENTED")))

(defn- setup-chkpt-branch!
  "A `nil` repo-path opens an in-mem repo. A `nil` init-chkpt starts
  new branch with random init values."
  [session plans & [repo-path init-chkpt]]
  (let [repo (cpr/open-repo! repo-path)]
    (if-let [{:keys [id avail?] :as chkpt} (and init-chkpt
                                                (cpr/get-chkpt repo init-chkpt))]
      (if avail?
        (do (restore-checkpoint session chkpt)
            (cpr/mk-new-branch! plans repo id))
        (throw (Exception. (str "Checkpoint not available. id = " init-chkpt))))
      (do (run-global-vars-init session)
          (cpr/mk-new-branch! plans repo)))))

(defn gm-plugin-init-varis-main 
  [session branch plans {:keys [path init-chkpt]}]
#_  (if init-chkpt
    (restore-checkpoint init-chkpt)
    (run-global-vars-init session))
  (when (nil? branch) ;; continue from current state, if available
    {:global {:branch (setup-chkpt-branch! session plans path init-chkpt)}}))

(defn gm-plugin-setup-init-varis-main
  [wf-def & _]
  [`(gm-plugin-init-varis-main (-> ~'state :global :gm :session)
                               (-> ~'state :global :gm :branch)
                               (-> ~'ws-cfg :plans)
                               (-> ~'ws-cfg :repo))])

;; TODO make more efficient??
(defn gm-plugin-compile-modes-run-req
  [{:keys [mode modes] :as state}]
  (let [g (-> state :global :gm :graph)
        state' (if-not (:-compiled modes)
                 (let [mode-vals (vals modes)
                       mode-kws (->> mode-vals (mapcat keys) distinct)]
                   (->> (for [mkw mode-kws]
                          [mkw (->> mode-vals
                                    (map mkw)
                                    (apply wf/merge-mode-maps g))])
                        (into {})
                        (assoc-in state [:modes :-compiled])))
                 state)
        compiled (-> state' :modes :-compiled)]
    (->> mode
         compiled
         (assoc-in state' [:modes :-compiled :-current]))))

(defn gm-plugin-prep-for-run-repeat
  [{:keys [step feed]}]
  {:targets step
   :feed feed})

(defn gm-plugin-setup-run-repeat-inline
  [wf-def & _]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::wf/no-merge-state true)
   `(--ws-run-all-repeat ~'(-> state :global :gm :session)
                         (-> ~'state :modes :-compiled :-current
                             gm-plugin-prep-for-run-repeat)
                         (wf/query-steps ~'state :block :span))])

(defn gm-plugin-setup-fetch-map-inline
  [wf-def & _]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::wf/no-merge-state true)
   `(--ws-fetch-map ~'state)])

(defn gm-plugin-setup-mode-inline
  [wf-def mode]
  [(vary-meta `(assoc ~'state :mode ~mode)
              assoc ::wf/no-merge-state true)
   (vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::wf/no-merge-state true)
   ;; TODO only include if there's anything to run
   `(--ws-run-all (-> ~'state :global :gm :session)
                  {:targets 
                   (-> ~'state :modes :-compiled :-current :enter)})])

(defn gm-plugin-mode-form
  [hook-frms wf-def [mode]]
  `(when-not (= ~mode (:mode ~'state))
     ~(wf/default-form-renderer hook-frms wf-def)))

(defn gm-plugin-interval-post-async-form
  [hook-frms wf-def _]
  `(let [~'dlvr-sco (tsc/mk-orphan-scope :standard)]
     (->> ~'state :interval :gm :fetched-raw (tsc/add-to-scope! ~'dlvr-sco))
     (future (try
               (let [ ;; ~'state (wf/deliver-fetched ~'state)
                     ~'state (wf/merge-state :gm ~'state
                                             (wf/find-output-processors ~'state))
                     ~'_ (wf/append-fetched-to-log ~'state)
                     ~@(wf/mk-default-form-bindings hook-frms)])
               (finally
                 (tsc/close-scope! ~'dlvr-sco))))
     nil))

(defn gm-plugin-interval-block
  [wf-def {:keys [span plugin] :as args} forms contents]
  (let [span-src (wf/render-map-single-inline-src span wf-def)
        start?-src (wf/render-element-single-expr [:block-hook :interval :start?]
                                                   wf-def)
        {:keys [ids forms]} (wf/render-block-contents :interval
                                                       forms
                                                       (wf/inject-plugin wf-def
                                                                          plugin)
                                                       contents
                                                       [:pre]
                                                       [:post-async
                                                        :repeat?])]
    (wf/add-to-forms (wf/apply-subs-to-child-forms forms {'$interval-block-ids ids})
                      :interval nil
                      `(let [~'span ~span-src]
                         (when ~start?-src
                           {:push {:block-type :interval
                                   :todo [~@ids]
                                   :span ~'span}})))))

(defn gm-plugin-step-block
  [wf-def {:keys [span]} forms contents]
  (let [span-src (wf/render-map-single-inline-src span wf-def)
        start?-src (wf/render-element-single-expr [:block-hook :interval :start?]
                                               wf-def)
        hook-frms (wf/render-inline-block-contents :step wf-def contents)]
    (wf/add-to-forms forms
                  :step nil
                  `(let [~'span ~span-src]
                     (when ~start?-src
                       (let [~'state (wf/push-light-block ~'state :step {:gm {:span ~'span}})
                             ~@(wf/mk-default-form-bindings hook-frms)
                             ~'state (wf/pop-light-block ~'state)]
                         {:state ~'state
                          :push-pop {:block-type :step
                                     :span ~'span}}))))))

(defn gm-plugin-workflow-block
  [wf-def {:keys [span]} forms contents]
  (let [{:keys [ids forms] :as children} (wf/render-block-contents :workflow forms wf-def contents)]
    (wf/add-to-forms forms :workflow nil
                  `{:push {:block-type :workflow
                           :todo [~@ids]
                           :span ~span}})))

(defn gm-plugin-stage-block
  [wf-def {:keys [span plugin]} forms contents]
  (let [{:keys [ids forms]} (wf/render-block-contents :stage
                                                       forms
                                                       (wf/inject-plugin wf-def
                                                                          plugin)
                                                       contents
                                                       [:pre]
                                                       [:repeat?])]
    (wf/add-to-forms (wf/apply-subs-to-child-forms forms {'$stage-block-ids ids})
                      :stage nil
                      `{:push {:block-type :stage
                               :todo [~@ids]
                               :span ~span}})))

(defn gm-plugin-interval-start?-form
  [hook-frms wf-def & _]
  (or (some-> hook-frms first second first)
      true))

(defn gm-plugin-interval-repeat?-form
  [hook-frms wf-def _]
  `(let [~'span (-> ~'state :block :gm :span)] 
     (when ~(or (some-> hook-frms first second first)
                false)
       {:pop-push {:block-type :interval
                   :todo ~'$interval-block-ids
                   :span ~'span}})))

(defn gm-plugin-stage-repeat?-form
  [hook-frms wf-def _]
  `(let [~'span (-> ~'state :block :gm :span)]
     (when ~(or (some-> hook-frms first second first)
                false)
       {:pop-push {:block-type :stage
                   :todo ~'$stage-block-ids
                   :span ~'span}})))

(defn gm-plugin-interval-start?
  [wf-def]
  [`(wf/require-span-completable ~'state ~'span)])

(defn gm-plugin-setup-interval-post
  [wf-def]  
  [(vary-meta `(do (vreset! (:last-fetched ~'state)
                            (tsc/walk-convert-tensors
                             (-> ~'state :interval :gm :fetched)))
                   ~'state)
              assoc ::wf/no-merge-state true)])

(defn gm-plugin-setup-require-span-completable
  [wf-def & [span]]
  [`(wf/require-span-completable ~'state ~(or span 'span))])

(defn gm-plugin-setup-require-span-repeatable
  [wf-def & [span]]
  [`(wf/require-span-repeatable ~'state ~(or span 'span))])

(defn gm-plugin-setup-query-steps
  [wf-def block-type q & [offset]]
  [`(wf/query-steps ~'state ~block-type ~q ~offset)])

(defn gm-plugin-plans->op-nodes
  [graph plans]
  (mapv (partial sput/->op-node graph)
        plans))

(defn gm-plugin-init-fn-io
  [graph modes feed-args fetch-return]
  (let [fetch-ops (gm-plugin-plans->op-nodes graph fetch-return)]
    {:global {:input-ch (a/chan 1)
              :feed-args (gm-plugin-plans->op-nodes graph feed-args)
              :fetch-return  fetch-ops}
     ;; TODO don't hardcode :predict
     :modes (update-in modes [:predict :fetch] into fetch-ops)}))

(defn gm-plugin-setup-init-fn-io-main
  [wf-def & _]
  [`(gm-plugin-init-fn-io ~'(-> state :global :gm :graph)
                          ~'(-> state :modes :gm)
                          (-> ~'ws-cfg :modes :predict :feed-args)
                          (-> ~'ws-cfg :modes :predict :fetch-return))])

(defn gm-plugin-wait-take-feed-args
  [modes feed-ops input-ch]
  (let [[[input return-ch] ch] (a/alts!! [input-ch
                                          (a/timeout 100)])]
    (def ch1 ch)
    (if (= ch input-ch)
      ;; TODO don't hardcode :predict
      {:modes (update-in modes [:predict :feed]
                         merge (zipmap feed-ops input))
       :global {:return-ch return-ch}}
      ;; TODO this is bad because you can't gaurantee the state/step's name ...... oh also.....
      {:repeat? true})))

(defn gm-plugin-setup-wait-take-feed-args
  [wf-def & _]
  [`(gm-plugin-wait-take-feed-args
     ~'(-> state :modes :gm)
     ~'(-> state :global :gm :feed-args)
     ~'(-> state :global :gm :input-ch))])

(defn gm-plugin-offer-fetched-return
  [return-ch fetch-return fetched]
  (a/offer! return-ch
            (tsc/walk-convert-tensors
             (mapv fetched
                   (map :id fetch-return)))))

(defn gm-plugin-setup-offer-fetched-return
  [wf-def & _]
  [`(gm-plugin-offer-fetched-return
     ~'(-> state :global :gm :return-ch)
     ~'(-> state :global :gm :fetch-return)
     ;; TODO don't hardcode predict?
     ~'(-> state :interval :gm :fetched :predict))])

;; TODO verify session is closed
(defn gm-plugin-close-graph
  [graph session]
  (when graph
    (close graph))
  {:global {:graph nil}})

(defn gm-plugin-setup-close-graph
  [wf-def & _]
  [`(gm-plugin-close-graph ~'(-> state :global :gm :graph)
                           ~'(-> state :global :gm :session))])

(defn gm-plugin-close-session
  [session]
  (when session
    (close session))
  {:global {:session nil}})


(defn gm-plugin-setup-close-session
  [wf-def & _]
  [`(gm-plugin-close-session ~'(-> state :global :gm :session))])

(def gm-plugin
  {:meta {:kw :gm}
   :init {:main #'gm-plugin-setup-init-main}
   :build {:main #'gm-plugin-setup-build-main}
   :create-session {:main #'gm-plugin-setup-create-session-main}
   :init-varis {:main #'gm-plugin-setup-init-varis-main}
   :run-repeat {:inline #'gm-plugin-setup-run-repeat-inline}
   :fetch-map {:inline #'gm-plugin-setup-fetch-map-inline}
   :mode {:form #'gm-plugin-mode-form
          :inline #'gm-plugin-setup-mode-inline}
   :interval {:block #'gm-plugin-interval-block
              :hook-forms {:post-async #'gm-plugin-interval-post-async-form
                           :start? #'gm-plugin-interval-start?-form
                           :repeat? #'gm-plugin-interval-repeat?-form}
              :start? #'gm-plugin-interval-start?
              :post-async #'gm-plugin-setup-interval-post}
   :step {:block #'gm-plugin-step-block}
   :workflow {:block #'gm-plugin-workflow-block}
   :stage {:block #'gm-plugin-stage-block
           :hook-forms {:repeat? #'gm-plugin-stage-repeat?-form}}
   :require-span-completable {:inline #'gm-plugin-setup-require-span-completable}
   :require-span-repeatable {:inline #'gm-plugin-setup-require-span-repeatable}
   :query-steps {:inline #'gm-plugin-setup-query-steps}
   :init-fn-io {:main #'gm-plugin-setup-init-fn-io-main}
   :wait-take-feed-args {:main #'gm-plugin-setup-wait-take-feed-args}
   :offer-fetched-return {:main #'gm-plugin-setup-offer-fetched-return}
   :close-graph {:main #'gm-plugin-setup-close-graph}
   :close-session {:main #'gm-plugin-setup-close-session}})


;; END PLUGIN ========================

;; WORKSPACES ========================
(defn- mk-train-test-kernel
  [{:keys [duration interval] :as wf-def}]
  ^{:doc "A default implementation of a train-test workflow....TODO"}
  [:block {:type :workflow
           :span {:steps (second duration)}}
   [:block {:type :stage
            :span {:stages 1}}
    [:build]
    [:create-session]
    [:init-varis] ;; TODO :init-all (includes ds-iter inits)
    ;; TODO option for step 0 fetch/summaries
    #_[:block {:type :interval
             :span {}}
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]
    [:block {:type :interval
             :span {:intervals 1
                    :steps (second interval)}
             :plugin {:interval
                      {:repeat? [:require-span-repeatable]}}}
     [:block {:type :step
              :span {:steps [:query-steps :interval :remaining]}}
      [:mode :train]
      [:run-repeat]]
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]]])

(defn default-train-test-wf
  [ws-cfg]
  (let [ws-cfg' (wf/filter-modes ws-cfg [:train :test])
        src (wf/render-wf-fn-src (mk-train-test-kernel ws-cfg')
                                  ws-cfg')]
    (vary-meta ((eval src) ws-cfg')
               assoc
               :doc "A default implementation of a train-test workflow....TODO"
               :source src)))

(defn- mk-predict-kernel
  [{:keys [restore-varis] :as ws-cfg}]
  [:block {:type :workflow
           ;; TODO unlimited steps?
           :span {:steps 99999}}
   [:block {:type :stage
            ;; TODO unlimited stages?
            :span {:stages 99999}
            :plugin {:stage
                     {:repeat? [:require-span-repeatable]}}}
    [:build]
    [:create-session]
    (when restore-varis
      [:restore-varis restore-varis]) 
    [:init-fn-io]
    [:wait-take-feed-args]
    [:block {:type :interval
             :span {:intervals 1
                    :steps 1}
             :plugin {:interval
                      {:post-async [:offer-fetched-return]}}}
     [:mode :predict]
     [:fetch-map]]]])

(defmacro wf-get--workflow-meta
  [ws cmd]
  `(-> ~ws
       var
       meta))

(defmacro ws-pr-workflow-source
  [wf]
  `(ut/pr-code (:source (meta ~wf))))

(defmacro def-workspace
  [ws-name & body]
  `(do
     (when-let [~'existing (some-> (ns-resolve *ns* '~ws-name)
                                   deref)]
       (when (map? ~'existing)
         (when (and (some-> ~'existing :wf-out deref :status (= :running))
                    (not (ws-interrupt ~'existing)))
           (throw (Exception. "Could not interrupt running workflow.")))
         (ws-close ~'existing)))
     (let [ws-cfg# (do ~@body)
           [ws# meta#] (mk-workspace '~ws-name ws-cfg#)]
       (def ~ws-name ws#)
       (alter-meta! (var ~ws-name)
                    assoc
                    :wf-meta meta#)
       (doseq [auto-fn# (:auto ws-cfg#)]
         (auto-fn# ~ws-name))
       (var ~ws-name))))

;; END WORKSPACES ========================

(defn- fn-tf-returns
  [rets]
  (->> rets
       (partition 2)
       (mapv (fn [[t s]]
               {:type t :shape s}))))

(defn- fn-tf-args
  [rets]
  (->> rets
       (partition 3)
       (mapv (fn [[a t s]]
               {:name `'~a :type t :shape s}))))

(defn- fn-tf-body
  [args body]
  (w/postwalk-replace (->> args
                           (partition 3)
                           (map first)
                           (map (fn [sym] [sym `'~sym]))
                           (into {}))
                      body))

(defmacro fn-tf
  [fn-name returns args body]
  `{:func ~(name fn-name)
    :returns ~(fn-tf-returns returns)
    :args ~(fn-tf-args args)
    :body ~(fn-tf-body args body)})

(defmacro defn-tf
  [fn-name returns args body]
  `(def ~fn-name
     (fn-tf ~fn-name ~returns ~args ~body)))

;; ===========???????????????

(defn render-init-workflow
  [wf-cfg]
  (-> [:block {:type :workflow}
       [:init]]
      (wf/render-wf-fn-src wf-cfg)
      eval))

(defn render-close-workflow
  [wf-cfg]
  (-> [:block {:type :workflow}
       [:close-session]
       [:close-graph]]
      (wf/render-wf-fn-src wf-cfg)
      eval))

(defn render-workflow-from-kernel
  [kernel-fn {:keys [plugins] :as wf-cfg}]
  (let [kernel (kernel-fn wf-cfg)
        src (wf/render-wf-fn-src kernel wf-cfg)
        wf-fn (eval src)
        init-wf-fn (render-init-workflow wf-cfg)]
    ;; TODO make def-wf macro so this meta will be on var??
    (vary-meta (fn [ws]
                 (swap! (:wf-closers ws)
                        into plugins)
                 (when (a/<!! (init-wf-fn ws))
                   (wf-fn ws)))
               assoc
               :doc (-> kernel meta :doc) 
               :source src
               :wf-kernel kernel)))

(defn mk-train-test-wf
  [{:keys [plugins duration interval] :as cfg}]
  (render-workflow-from-kernel mk-train-test-kernel
                               cfg))

(defn mk-predict-wf
  [{:keys [plugins duration interval] :as cfg}]
  (render-workflow-from-kernel mk-predict-kernel
                               cfg))

(defn ws-close
  [{:keys [wf-closers] :as ws}]
  (a/<!! ((render-close-workflow {:plugins (conj @wf-closers
                                                 gm-plugin)})
          ws)))
