(ns thinking
  (:require [com.billpiel.guildsman.util :as ut]))

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
         :dev/plugin {:fetched {}}}
 :-compiled {:pos {}
             :span {}}}

;; merge-state should be a macro?!!?!?!??

(def ws-cfg)

(defn --wf-merge-popped-state
  [state1 state2])

(defn --wf-set-current-mode [state])

(defn --wf-merge-state [kw state returned-state]
  (let [{:keys [block-type]} state
        {block :block
         workflow :workflow
         stage :stage
         interval :interval
         modes :modes
         step :step}
        returned-state
        state' (merge-with (partial merge-with merge)
                           state
                           {:workflow {kw workflow}
                            :stage {kw stage}
                            :interval {kw interval}
                            :modes {kw modes}
                            :step {kw step}}
                           (when block-type
                             {block-type {kw block}}))]
    (assoc state' :block (when block-type (block-type state')))))

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

(defn --wf-loop-push-new-state
  [block-type span state]
  (assoc state
         :block-type block-type
         block-type {:gm {:pos {:step 0
                                :interval 0
                                :stage 0}
                          :span span}}
         :block nil))

(defn --wf-loop-push
  [{:keys [block-type span] todo' :todo} stack done current todo state]
  [(conj stack [done current todo state])
   (list)
   nil
   todo'
   (--wf-loop-push-new-state block-type span state)])

(defn --wf-merge-result-state
  [result state]
  (merge state
         (:state result)))

(defn --wf-loop
  [result stack done current todo state]
  (let [[stack done current todo state]
        (or (when result
              (let [[stack done current todo state]
                    (or (when-let [push (:push result)]
                          (--wf-loop-push push stack done current todo state))
                        [stack done current todo state])]
                [stack done current todo
                 (--wf-merge-result-state result state)]))
            [stack done current todo state])]
    (loop [[stack done current todo state]
           [stack done nil todo state]]
#_      (println "--wf-loop")
#_      (clojure.pprint/pprint [stack done current todo state])
      (cond (or current
                (every? empty? [stack current todo]))
            [stack done current todo state]

            (not-empty todo)
            (let [[head & tail] todo]
              (recur [stack done head tail state]))
            
            (not-empty stack)
            (let [[head & tail] stack
                  [done' current' todo' state'] head]
              (recur [tail
                      (conj done' current')
                      nil
                      todo'
                      (--wf-merge-popped-state state state')]))
            
            :else (throw
                   (Exception.
                    (str "--wf-loop: not sure what to do with this "
                     (with-out-str
                       (clojure.pprint/pprint [stack done current todo state])))))))))

(defn wf1
  [global-state]
  (loop [stack (list)
         done (list)
         current nil
         todo (list :workflow)
         state {:global global-state
                :block-type nil}] ;; scoped: global(atom?) workflow stage interval step (mode?)
    #_(clojure.pprint/pprint [:current current
                            :state state
                            :todo todo
                            :stack stack])
    (let [result (case current
                   nil nil
                   :workflow {:push {:block-type :workflow
                                     :todo [:stage-1]
                                     :span {:steps 10000}}}
                   :stage-1
                   {:push {:block-type :stage
                           :todo [:build-1 :create-session-1 :init-varis-1 :interval-1 :interval-2]
                           :span {}}}

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
                               :span span}})))]
      (let [[stack done current todo state] (--wf-loop result
                                                       stack
                                                       done
                                                       current
                                                       todo
                                                       state)]
        #_(Thread/sleep 300)
        (if (nil? current)
          (clojure.pprint/pprint state)
          (recur stack done current todo state))))))



 (wf1 {:global {:gm {:pos {:step 0
                           :interval 0
                           :stage 0}}}
       :block-type nil})

