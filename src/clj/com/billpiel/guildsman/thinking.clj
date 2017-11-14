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

(defn --wf-pop-state
  [state]
  (let [{block-type-exiting :block-type} state
        block-type-entering (last (--wf-higher-blocks block-type-exiting))
        bts (pluralize-block block-type-exiting)
        span (when block-type-exiting
               (-> state block-type-exiting :gm :span bts))]
    (-> (reduce (fn [agg item]
                  (update-in agg
                             [item :gm :pos block-type-exiting]
                             (fnil + 0 0) span))
                state
                (--wf-higher-blocks block-type-exiting))
        (assoc :block-type block-type-entering)
        (dissoc :block))))

(defn --wf-set-current-mode [state]
  state)

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

(defn --wf-require-span-completable
  [{:keys [block]} span]
  (if (->> span vals (filter number?) (some (complement pos?)))
    false
    (let [limit (-> block :gm :limit)
          pos (-> block :gm :pos)]
      (every? (fn [bt]
                (if-let [r (bt limit)]
                  (>= (- r ((singularize-block bt) pos 0))
                      (bt span 0))
                  true))
              (keys span)))))

(defn --wf-require-span-repeatable
  [{:keys [block-type] :as state} span]
  (let [parent-block-type (last (--wf-higher-blocks block-type))
        parent-block (parent-block-type state)]
    (if (->> span vals (filter number?) (some (complement pos?)))
      false
      (let [limit (-> parent-block :gm :limit)
            pos (-> parent-block :gm :pos)]
        (every? (fn [bt]
                  (if-let [r (bt limit)]
                    (>= (- r ((singularize-block bt) pos 0))
                        (bt span 0))
                    true))
                (keys span))))))

(defn --ws-fetch-map
  [global-state modes-state])

(defn --ws-init-vars-main [session])

(defn --wf-compile-fetched [state]
  state)

(defn dev--plugin-interval-post
  [fetched step])

(defn --ws-build [graph plans])

(defn dev--plugin-build-post
  [state summaries])

(defn --wf-steps
  [state block-type q & [offset]]
  (let [{:keys [pos limit span]} (-> state block-type :gm)
        p-step (:step pos 0)
        l-steps (:steps limit)
        s-steps (:steps span)
        r (case q
            :remaining (when l-steps
                         (- l-steps p-step))
            :span s-steps
            (throw (Exception. (str "--wf-steps: query not supported "
                                    q))))]
    (when (and r offset)
      (+ r  offset)
      r)))

(defn --wf-compile-run-req [state]
  state)

(defn --ws-run-repeat
  [session run-req iters])

(defn --ws-create-session
  [graph session] )

;; (min (- up-limit up-pos) new-span)

(defn --wf-loop-calc-limit
  [block-type span state]
  (if-let [one-up (last (--wf-higher-blocks block-type))]
    (let [lower (--wf-lower-blocks block-type)
          {:keys [pos limit]} (-> state one-up :gm)]
      (into {}
            (for [bt lower]
              (let [bts (pluralize-block bt)
                    r (bts limit)
                    p (bt pos 0)
                    s (bts span)]
                [bts (some->> [(when r (- r p))
                              s]
                             (remove nil?)
                             not-empty
                             (apply min))]))))
    {}))

(defn --wf-loop-push-new-state
  [block-type span state]
  (assoc state
         :block-type block-type
         block-type {:gm {:pos {:step 0
                                :interval 0
                                :stage 0}
                          :span span
                          :limit (--wf-loop-calc-limit
                                      block-type span state)}}
         :block nil))

(defn --wf-loop-push
  [{:keys [block-type span] todo' :todo} stack current todo state]
  [(conj stack [current todo])
   nil
   todo'
   (--wf-loop-push-new-state block-type span state)])

(defn --wf-loop-pop-push
  [pop-push stack current todo state]
  (let [[head & tail] stack
        [current' todo'] head
        
        [stack state]
        [tail (--wf-pop-state state)]]
    (--wf-loop-push pop-push stack current' todo state)))

(defn --wf-loop-push-pop
  [push-pop stack current todo state]
  (let [[stack current todo state]
        (--wf-loop-push push-pop stack current todo state)
        [head & tail] stack
        [current' todo'] head]
    [tail nil todo' (--wf-pop-state state)]))

#_(defn --wf-merge-result-state
  [result state]
  (merge-with (partial merge-with merge)
              state
              (:state result)))

(defn --wf-assoc-block-to-state
  [{:keys [block-type] :as state}]
  (if block-type
    (assoc state :block (block-type state {}))
    state))

(defn --wf-loop
  [result stack current todo state]
  (let [state (:state result state)
        [stack current todo state]
        (or (when result
              (or (when-let [push (:push result)]
                    (--wf-loop-push push stack current todo state))
                  (when-let [push-pop (:push-pop result)]
                    (--wf-loop-push-pop push-pop stack current todo state))
                  (when-let [pop-push (:pop-push result)]
                    (--wf-loop-pop-push pop-push stack current todo state))))
            [stack current todo state])]
    (loop [[stack current todo state]
           [stack nil todo state]]
      #_      (println "--wf-loop")
      #_      (clojure.pprint/pprint [stack current todo state])
      (cond (or current
                (every? empty? [stack current todo]))
            [stack current todo (--wf-assoc-block-to-state state)]

            (not-empty todo)
            (let [[head & tail] todo]
              (recur [stack head tail state]))
            
            (not-empty stack)
            (let [[head & tail] stack
                  [current' todo'] head]
              (recur [tail
                      nil
                      todo'
                      (--wf-pop-state state)]))
            
            :else (throw
                   (Exception.
                    (str "--wf-loop: not sure what to do with this "
                         (with-out-str
                           (clojure.pprint/pprint [stack current todo state])))))))))

(defn wf1
  [global-state]
  (loop [stack (list)
         current nil
         todo (list :workflow)
         state {:global global-state
                :block-type :global}] ;; scoped: global(atom?) workflow stage interval step (mode?)
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
                   (let [span {}]
                     (when (--wf-require-span-completable state span)
                       {:push {:block-type :interval
                               :todo [:mode-train :fetch-map :mode-test :fetch-map :interval-post-async]
                               :span span}}))
                   :mode-train (when-not (= :train (:mode state))
                                 (let [state (assoc state :mode :train)
                                       state (--wf-set-current-mode state)
                                       state (--wf-merge-state :gm state
                                                               (--ws-run (-> state :global)
                                                                         (-> state :modes)))]
                                   {:state state}))
                   :fetch-map {:state (--wf-merge-state :gm state
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
                       {:push {:block-type :interval
                               :todo [:step-1 :step-2 :interval-post-async :interval-2-close]
                               :span span}}))
                   :step-1
                   (let [span {:steps (--wf-steps state :block :remaining -1)}]
                     (when (--wf-require-span-completable state span)
                       (let [state (--wf-compile-run-req state)
                             state (--wf-merge-state :gm state
                                                     (--ws-run-repeat (-> state :global :session)
                                                                      (-> state :modes :-compiled :-current)
                                                                      (--wf-steps state :block :span)))]
                         {:state state
                          :push-pop {:block-type :step
                                     :span span}})))
                   :step-2
                   (let [span {:steps 1}]
                     (when (--wf-require-span-completable state span)
                       {:state (--wf-merge-state :gm state
                                                 (--ws-fetch-map (-> state :global)
                                                                 (-> state :modes)))
                        :push-pop {:block-type :step
                                   :span span}}))
                   :interval-2-close
                   (let [span {:interval 1
                               :steps 100}]
                     (when (--wf-require-span-repeatable state span)
                       {:pop-push {:block-type :interval
                                   :todo [:step-1 :step-2 :interval-2-close]
                                   :span span}})))]
      (let [[stack current todo state] (--wf-loop result
                                                  stack
                                                  current
                                                  todo
                                                  state)]
        #_(Thread/sleep 100)
        (if (nil? current)
          (clojure.pprint/pprint state)
          (recur stack current todo state))))))



#_(wf1 {:gm {:pos {:step 0
                   :interval 0
                   :stage 0}
             :limit {:steps 400}}})

