(ns thinking)

;; init state?
{:global {:gm {:pos {:step 0
                     :interval 0
                     :stage 0}}}
 :block-type nil}

;; example state
{:workflow {:gm {:step 0
                 :interval 0
                 :stage 0}
            :dev/plugin {}}
 :block-type :workflow
 :modes {:-compiled {:-current {}
                     :train {:targets []
                             :fetch []
                             :feed {}}
                     :test {}}
         :gm {:train {:targets []
                      :feed {}
                      :fetch []}
              :test {}}
         :dev/plugin {:train {}}}
 :block {:gm {:fetched {}}
         :dev/plugin {:fetched {}}}}

;; merge-state should be a macro?!!?!?!??

(def ws-cfg)

(defn --wf-merge-popped-state [state1 state2])

(defn --wf-set-current-mode [state])

(defn --wf-merge-state [kw state1 state2])

(defn --ws-run
  [global-state modes-state])

(defn --wf-require-span-completable [state span])

(defn --ws-fetch-map
  [global-state modes-state])

(defn --ws-init-vars-main [session])

(defn --wf-compile-fetched [state])

(defn dev--plugin-interval-post
  [fetched step])

(defn --ws-build [graph plans])

(defn dev--plugin-build-post
  [state summaries])

(defn --wf-steps
  [state block q & [offset]])

(defn --wf-compile-run-req [state])

(defn --ws-run-repeat
  [session run-req iters])

(defn --ws-create-session
  [graph session] )



(defn wf1
  [global-state]
  (loop [stack (list)
         done (list)
         current nil
         todo (list)
         state {:global global-state
                :block-type nil}] ;; scoped: global(atom?) workflow stage interval step (mode?)
    (if (nil? current)
      (cond (not-empty todo)
            (let [[head & tail] todo]
              (recur stack done head tail state))
            (not-empty stack)
            (let [[head & tail] stack
                  [done' current' todo' state'] head]
              (recur tail
                     (conj done' current')
                     nil
                     todo'
                     (--wf-merge-popped-state state state')))
            :else state)
      (let [result (case current
                     :workflow {:push {:block-type :workflow
                                       :todo [:stage-1]
                                       :span {}}}
                     :stage-1 
                     {:act [:push [:build-1 :create-session-1 :init-varis-1 :setup-modes-1 :interval-1 :interval-2]]}
                     :build-1
                     (let [state (--wf-merge-state :gm state
                                                   (--ws-build (-> state :global :gm :graph)
                                                               (:plans ws-cfg)))
                           state (--wf-merge-state :gm state
                                                   (dev--plugin-build-post ;; setup modes run reqs here??????
                                                    state
                                                    {:modes {:train (-> ws-cfg :modes :train :dev/summaries)
                                                             :test (-> ws-cfg :modes :test :dev/summaries)}}))]
                       {:state state})
                     :create-session-1
                     {:state (--wf-merge-state :gm state
                                               (--ws-create-session (-> state :global :gm :graph)
                                                                    (-> state :global :gm :session)))}
                     :init-varis-1
                     {:state (--wf-merge-state :gm state
                                               (--ws-init-vars-main (-> state :global :gm :session)))}
                     :interval-1
                     (let [span {:intervals 0}]
                       (when (--wf-require-span-completable state span)
                         {:act [:push {:block :interval
                                       :todo [:mode-train :fetch-map :mode-test :fetch-map :interval-post-async :interval-1-close]
                                       :span span}]}))
                     :mode-train (when-not (= :train (:mode state))
                                   (let [state (assoc state :mode :train)
                                         state (--wf-set-current-mode state)
                                         state (--wf-merge-state :gm state
                                                                 (--ws-run (-> state :global)
                                                                           (-> state :modes)))]
                                     {:state state}))
                     :fetch-map {:state (--wf-merge-state :gm
                                                          (--ws-fetch-map (-> state :global)
                                                                          (-> state :modes)))}
                     :mode-test (when-not (= :test (:mode state))
                                  (let [state (assoc state :mode :test)
                                        state (--wf-merge-state :gm state
                                                                (--ws-run (-> state :global)
                                                                          (-> state :modes)))]
                                    {:state state}))
                     :interval-post-async
                     (do (future (let [state (--wf-compile-fetched state)
                                       state (--wf-merge-state :dev/plugin state
                                                               (dev--plugin-interval-post
                                                                (-> state :block :dev/plugin :fetched)
                                                                (-> state :block :gm :step)))]))
                         nil)                     
                     :interval-2
                     (let [span {:interval 1
                                 :steps 100}]
                       (when (--wf-require-span-completable state span)
                         {:act [:push {:block :interval
                                       :todo [:step-1 :step-2 :interval-post-async :interval-2-close]
                                       :span span}]}))
                     :step-1
                     (let [span {:steps (--wf-steps state :block :remaining -1)}]
                       (when (--wf-require-span-completable state span)
                         (let [state (--wf-compile-run-req state)
                               state (--wf-merge-state :gm state
                                                       (--ws-run-repeat (-> state :global :session)
                                                                        (-> state :modes :-compiled :-current)
                                                                        (--wf-steps state :block :span)))]
                           {:state state})))
                     :step-2
                     (let [span {:steps (--wf-steps state :block :remaining -1)}]
                       (when (--wf-require-span-completable state span)
                         {:state (--wf-merge-state :gm state
                                                   (--ws-run (-> state :global)
                                                             (-> state :modes)))}))
                     :interval-2-close
                     (let [span {:interval 1
                                 :steps 100}]
                       (when (--wf-require-span-completable state span)
                         {:pop :block
                          :push {:block :interval
                                 :todo [:step-1 :step-2 :interval-2-close]
                                 :span span}})))]))))
