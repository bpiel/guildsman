(ns thinking2
  (:require [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.core :as gm]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]))

(def wf-def
  [:block {:type :workflow
           :span {:steps 10000}}
   [:block {:type :stage
            :span {:stages 1}}
    [:build]
    [:start-session]
    [:init-varis]
    [:block {:type :interval
             :span {}}
     [:mode :train]
     [:fetch-map]
     [:mode :test]
     [:fetch-map]]
    [:block {:type :interval
             :span {:intervals 1
                    :steps 100}
             :repeat? [:require-span-repeatable]}
     [:block {:type :step
              :span {:steps [:steps :interval :remaining -1]}}
      [:mode :train]
      [:run-repeat]]
     [:block {:type :step
              :span {:steps 1}}
      [:mode :train]
      [:fetch-map]]
     [:mode :test]
     [:fetch-map]]]])

(def ws-cfg
  {:plans [(o/add :a1 1 2)]
   :modes {:train {:targets []
                   :dev/summaries [:a1]
                   :feed {}
                   :enter {:targets []}}
           :test {:dev/summaries [:a1]
                  :feed {}
                  :enter {:targets []}}}})

(defn render-block-contents [block-type ws-cfg contents]
  )

(defn render-inline-block-contents [& _])

(defn render-hook-lets [hook-frms] )

(defn apply-subs-to-child-forms
  [children subs])

(def block-order [:global :workflow :stage :interval :step])

(defn --wf-higher-blocks [block-type]
  (take-while (complement #{block-type})
              block-order))

(defn --wf-lower-blocks [block-type]
  (rest (drop-while (complement #{block-type})
                    block-order)))

(def pluralize-block
  {:step :steps
   :interval :intervals
   :stage :stages
   :workflow :workflows
   :mode :modes})

(def singularize-block
  (clojure.set/map-invert pluralize-block))


(defn dev-plugin-setup-build-post
  [ws-cfg]
  [`(dev-plugin-build-post ~'state
                           ~'{:train (-> ws-cfg :modes :train :dev/summaries)
                              :test (-> ws-cfg :modes :test :dev/summaries)})])

(defn dev-plugin-train-interval-post
  [fetched step]
  (clojure.pprint/pprint [fetched step]))

(defn dev-plugin-setup-train-interval-post
  [ws-cfg]
  [`(dev--plugin-interval-post
     ~'(-> state :interval :dev/plugin :fetched)
     ~'(-> state :stage :gm :pos :step))])

(def dev-plugin
  {:meta {:kw :dev/plugin
          :desc "dev things"}
   :build {:post dev-plugin-setup-build-post}
   :interval {:post-async dev-plugin-setup-train-interval-post}})

(defn gm-plugin-build-main [graph plans]
  {:global {:graph (gm/build-all->graph plans)}})

(defn gm-plugin-setup-build-main
  [ws-cfg]
  [`(gm-plugin-build-main (-> ~'state :global :gm :graph)
                          (:plans ~'ws-cfg))
   `(--wf-setup-modes (:modes ~'ws-cfg))])

(defn gm-plugin-do-setup-mode-main
  [modes]
  {:modes (ut/fmap #(select-keys % [:targets :fetch :feed])
                   modes)})

(defn gm-plugin-setup-create-session-main
  [ws-cfg]
  [`(--ws-build (-> ~'state :global :gm :graph)
                (:plans ~'ws-cfg))
   `(--wf-setup-modes (:modes ~'ws-cfg))])

(defn gm-plugin-init-varis-main [session]
  (gm/run-global-vars-init session)
  {:global {:varis-set true}})

(defn gm-plugin-setup-init-varis-main
  [ws-cfg]
  [`(gm-plugin-init-varis-main (-> state :global :gm :session))])

(defn --wf-merge-mode-maps
  [g & ms]
  {:targets (->> ms
                 (map :targets)
                 (apply concat)
                 distinct                 
                 vec)
   :fetch (->> ms
               (map :fetch)
               (apply concat)
               distinct
               vec)
   :feed (or (some->> ms
                      (keep :feed)
                      not-empty
                      (apply merge))
             {})})

(defn gm-plugin-compile-modes-run-req
  [{:keys [mode modes] :as state}]
  (let [g (-> state :global :gm :graph)
        state' (if-not (:-compiled modes)
                 (let [mode-vals (vals modes)
                       mode-kws (->> mode-vals (mapcat keys) distinct)]
                   (->> (for [mkw mode-kws]
                          [mkw (->> mode-vals
                                    (map mkw)
                                    (apply --wf-merge-mode-maps g))])
                        (into {})
                        (assoc-in state [:modes :-compiled])))
                 state)
        compiled (-> state' :modes :-compiled)]
    (->> mode
         compiled
         (assoc-in state' [:modes :-compiled :-current]))))

(defn --ws-fetch-map
  [state]
  (let [{:keys [global mode modes interval]} state
        _ (when-not mode
            (throw (Exception. "Cannot fetch-map. Mode not set.")))
        fetched-raw (some-> interval :gm :fetched-raw)
        session (-> global :gm :session)
        {:keys [fetch feed targets]} (-> modes :-compiled :-current)]
    {:interval
     {:fetched-raw
      (merge-with merge
                  fetched-raw 
                  {mode
                   (gm/fetch-map session
                                 fetch
                                 feed
                                 targets)})}}))

(defn --ws-run-all
  [session {:keys [targets feed]}]
  (gm/run-all session targets feed))

(defn --ws-run-all-repeat
  [session {:keys [targets feed]} iters]
  (gm/run-all session
              (->> targets
                   (repeat iters)
                   flatten)
              feed))

(defn gm-plugin-setup-fetch-map-inline
  [ws-cfg]
  [(vary-meta `(gm-plugin-compile-modes-run-req ~'state)
              assoc ::no-merge-state true)
   `(--ws-fetch-map ~'state)])

(defn gm-plugin-setup-mode-inline
  [ws-cfg mode]
  [(vary-meta `(assoc ~'state :mode ~mode)
              assoc ::no-merge-state true)
   `(--ws-run-all (-> ~'state :global :gm :session)
                  (-> ~'ws-cfg :modes :test :enter))])

(defn default-workspace-form
  [hook-frms ws-cfg]
  `(let [ya# :dayada]
     1))

(defn gm-plugin-mode-form
  [hook-frms ws-cfg mode]
  `(when-not (= ~mode (:mode state))
     ~(default-workspace-form hook-frms ws-cfg)))

(defn gm-plugin-interval-post-async-form
  [hook-frms ws-cfg]
  `(do (future (let [~@(render-hook-lets hook-frms)]))
       nil))

(defn gm-plugin-interval-repeat-form
  [hook-frms ws-cfg {:keys [span start?]}]
  `(let [span ~span]
     (when ~start?
       {:pop-push {:block-type :interval
                   :todo [~'$interval-block-ids]
                   :span ~'span}})))

(defn gm-plugin-interval-block
  [ws-cfg {:keys [span start?]} contents]
  (let [{:keys [ids] :as children} (render-block-contents :interval ws-cfg contents)]
    {:children (apply-subs-to-child-forms children {'$interval-block-ids ids})
     :form `(let [~'span ~span]
              (when ~start?
                {:push {:block-type :interval
                        :todo [~@ids]
                        :span ~'span}}))}))

(defn --wf-push-light-block
  [state block-type init-block-state]
  (assoc state
         :block-type block-type
         block-type init-block-state
         :block init-block-state))

(defn --wf-pop-light-block
  [{:keys [block-type] :as state}]
  (let [parent-block-type (last (--wf-higher-blocks block-type))]
    (-> state
        (dissoc block-type)
        (assoc :block (parent-block-type state)
               :block-type parent-block-type))))


(defn gm-plugin-step-block
  [ws-cfg {:keys [span start?]} contents]
  (let [{:keys [hook-frms] :as children} (render-inline-block-contents :step  ws-cfg contents)]  
    {:form `(let [~'span ~span]
              (when ~start?
                (let [~'state (--wf-push-light-block ~'state :step {:gm {:span ~'span}})
                      ~@(render-hook-lets hook-frms)
                      ~'state (--wf-pop-light-block ~'state)]
                  {:state ~'state
                   :push-pop {:block-type :step
                              :span ~'span}})))}))

(defn gm-plugin-workflow-block
  [ws-cfg {:keys [span]} contents]
  (let [{:keys [ids] :as children} (render-block-contents :interval ws-cfg contents)]
    {:children children
     :form `{:push {:block-type :workflow
                    :todo [~@ids]
                    :span ~span}}}))

(defn gm-plugin-stage-block
  [ws-cfg {:keys [span]} contents]
  (let [{:keys [ids] :as children} (render-block-contents :interval ws-cfg contents)]
    {:children children
     :form `{:push {:block-type :stage
                    :todo [~@ids]
                    :span ~span}}}))

(defn gm-plugin-setup-step-main
  [ws-cfg]
  [`(gm-plugin-compile-modes-run-req ~'state)
   `(--ws-fetch-map ~'state)])

(def gm-plugin
  {:meta {:kw :gm}
   :build {:main gm-plugin-setup-build-main}
   :create-session {:main gm-plugin-setup-create-session-main}
   :init-varis {:main gm-plugin-setup-init-varis-main}
   :fetch-map {:inline gm-plugin-setup-fetch-map-inline}
   :mode {:form gm-plugin-mode-form
          :main gm-plugin-setup-mode-inline}
   :interval {:block gm-plugin-interval-block
              :post-async {:form gm-plugin-interval-post-async-form}
              :repeat? {:form gm-plugin-interval-repeat-form}}
   :step {:block gm-plugin-step-block
          :main gm-plugin-setup-step-main}
   :workflow {:block gm-plugin-workflow-block}
   :stage {:block gm-plugin-stage-block}})

(defn render-workflow
  [[block-type opts] {:keys [plugins] :as ws-cfg}]
  (when-not (= block-type :workflow)
    (throw (Exception. "top-level block must be `:workflow`.")))
  (render-block :workflow ws-cfg))

(render-workflow wf-def ws-cfg)
