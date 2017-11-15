(ns thinking
  (:require [com.billpiel.guildsman.util :as ut]
            [com.billpiel.guildsman.core :as gm]
            [com.billpiel.guildsman.session :as sess]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]))


(def color-idx
  (zipmap [:red :orange :yellow :green :blue :purple :black :white]
          (range)))

(def train-data
  [[[1. -1. -1.] (color-idx :red)]
   [[1. 0. -1.] (color-idx :orange)]
   [[1. 1. -1.] (color-idx :yellow)]
   [[-1. 1. -1.] (color-idx :green)]
   [[-1. -1. 1.] (color-idx :blue)]
   [[1. -1. 1.] (color-idx :purple)]
   [[-1. -1. -1.] (color-idx :black)]
   [[1. 1. 1.] (color-idx :white)]])

(def test-data
  [[[0.9 -1. -0.8] (color-idx :red)]
   [[1. 0.2 -1.] (color-idx :orange)]
   [[0.8 1. -1.] (color-idx :yellow)]
   [[-1. 0.9 -1.] (color-idx :green)]
   [[-0.8 -1. 1.] (color-idx :blue)]
   [[1. -0.9 1.] (color-idx :purple)]
   [[-1. -0.8 -1.] (color-idx :black)]
   [[0.8 0.9 1.] (color-idx :white)]])


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

(def ws-cfg
  (gm/let+ [{:keys [features logits classes]}
            (+>> (o/placeholder :features 
                                gm/dt-float
                                [-1 3]) ;;TODO feedable iterator macro
                 (c/dense {:id :logits
                           :units 8})
                 (o/arg-max {:id :classes
                             :output_type gm/dt-int}
                            $ 0))
            {:keys [labels opt]}
            (+>> (o/placeholder :labels
                                gm/dt-int
                                [-1])
                 (c/one-hot $ 8)
                 (c/mean-squared-error logits)
                 (c/grad-desc-opt :opt 0.3))
            acc (c/accuracy :acc
                            classes
                            labels)]
      
    {:plans [acc opt]
     :modes {:train {:targets [opt]
                     :dev/summaries [acc]
                     :feed {:features (map first train-data)
                            :labels (map second train-data)}
                     :enter {:targets []}}
             :test {:dev/summaries [acc]
                    :feed {:features (map first test-data)
                           :labels (map second test-data)}
                    :enter {:targets []}}}}))

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

(defn --wf-compile-modes-run-req
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

(defn --wf-clear-fetched
  [state]
  (update (assoc-in state [:interval :gm :fetched-raw] nil)
          :interval
          (fn [m]
            (ut/fmap #(dissoc % :fetched)
                     m))))

;; merge-state could be a macro?!!?!?!??

(defn --wf-merge-state-modes*
  [g {:keys [targets feed fetch]}]
  {:targets (mapv (partial sess/->op-node g)
                  targets)
   :fetch (mapv (partial sess/->op-node g)
                  fetch)
   :feed (into {}
               (for [[k v] feed]
                 [(sess/->op-node g k) v]))})

(defn --wf-merge-state-modes
  [g modes]
  (ut/fmap (partial ut/fmap
                    (partial --wf-merge-state-modes* g))
           (dissoc modes :-compiled)))

(defn --wf-merge-state [kw state returned-state]
  (let [{:keys [block-type]} state
        {block :block
         global :global
         workflow :workflow
         stage :stage
         interval :interval
         modes :modes
         step :step}
        returned-state
        state' (merge-with (partial merge-with merge)
                           state
                           {:global {kw global}
                            :workflow {kw workflow}
                            :stage {kw stage}
                            :interval {kw interval}
                            :modes {kw modes}
                            :step {kw step}}
                           (when block-type
                             {block-type {kw block}}))
        state'' (assoc state' :block (when block-type (block-type state')))]
    (if-not (= (:modes state) (:modes state''))
      (update state'' :modes
              (partial --wf-merge-state-modes
                       (-> state :global :gm :graph)))
      state'')))

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

(defn --ws-init-vars-main [session]
  (gm/run-global-vars-init session)
  {:global {:varis-set true}})

(defn --wf-deliver-fetched
  [{:keys [modes interval] :as state}]
  (if-let [fetched-raw (-> interval :gm :fetched-raw not-empty)]
    (->> (for [[pk pv] (dissoc modes :-compiled)
               [mk {:keys [fetch]}] pv
               f fetch]
           (let [f-id-str (:id f)]
             [[pk :fetched mk f-id-str] (get-in fetched-raw [mk f-id-str])]))
         (reduce (fn [agg [path v]]
                   (assoc-in agg path v))
                 interval)
         (assoc state :interval))
    state))

(defn dev--plugin-interval-post
  [fetched step]
  (clojure.pprint/pprint [fetched step])
  )

(defn --ws-build [graph plans]
  {:global {:graph (gm/build-all->graph plans)}})

(defn --wf-setup-modes
  [modes]
  {:modes (ut/fmap #(select-keys % [:targets :fetch :feed])
                   modes)})

(defn dev--plugin-build-post
  [state summaries]
  {:modes {:train {:fetch (:train summaries)}
           :test {:fetch (:test summaries)}}})

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
    (if (and r offset)
      (+ r  offset)
      r)))



(defn --ws-create-session
  [graph session]
  {:global {:session (gm/graph->session graph)}})


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
                :block-type :global}] 
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
                                                 (--wf-setup-modes (:modes ws-cfg)))
                         state (--wf-merge-state :dev/plugin state
                                                 (dev--plugin-build-post ;; setup modes run reqs here??????
                                                  state
                                                  {:train (-> ws-cfg :modes :train :dev/summaries)
                                                   :test (-> ws-cfg :modes :test :dev/summaries)}))]
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
                               :todo [:clear-fetched :mode-train :fetch-map :mode-test :fetch-map :interval-post-async]
                               :span span}}))

                   :clear-fetched {:state (--wf-clear-fetched state)}
                   
                   :mode-train (when-not (= :train (:mode state))
                                 (let [state (assoc state :mode :train)
                                       state (--wf-merge-state :gm state
                                                               (--ws-run-all (-> state :global :gm :session)
                                                                             (-> ws-cfg :modes :train :enter)))]
                                   {:state state}))
                   :fetch-map
                   (let [state (--wf-compile-modes-run-req state)
                         state (--wf-merge-state :gm state
                                                 (--ws-fetch-map state))]
                     {:state state})
                   :mode-test (when-not (= :test (:mode state))
                                (let [state (assoc state :mode :test)
                                      state (--wf-merge-state :gm state
                                                              (--ws-run-all (-> state :global :gm :session)
                                                                            (-> ws-cfg :modes :test :enter)))]
                                  {:state state}))
                   :interval-post-async
                   (do (future (let [state (--wf-deliver-fetched state)
                                     state (--wf-merge-state :dev/plugin state
                                                             (dev--plugin-interval-post
                                                              (-> state :interval :dev/plugin :fetched)
                                                              (-> state :stage :gm :pos :step)))]))
                       nil)                     
                   :interval-2
                   (let [span {:interval 1
                               :steps 100}]
                     (when (--wf-require-span-completable state span)
                       {:push {:block-type :interval
                               :todo [:clear-fetched :step-1 :step-2 :mode-test :fetch-map :interval-post-async :interval-2-repeat?]
                               :span span}}))
                   :step-1
                   (let [span {:steps (--wf-steps state :interval :remaining -1)}]
                     (when (--wf-require-span-completable state span)
                       (let [state (--wf-push-light-block state :step {:gm {:span span}})
                             state (--wf-compile-modes-run-req state)
                             state (--wf-merge-state :gm state
                                                     (--ws-run-all-repeat (-> state :global :gm :session)
                                                                          (-> state :modes :-compiled :-current)
                                                                          (--wf-steps state :block :span)))
                             state (--wf-pop-light-block state)]
                         {:state state
                          :push-pop {:block-type :step
                                     :span span}})))
                   :step-2
                   (let [span {:steps 1}]
                     (when (--wf-require-span-completable state span)
                       (let [state (--wf-push-light-block state :step {:gm {:span span}})
                             state (--wf-compile-modes-run-req state)
                             state (--wf-merge-state :gm state
                                                     (--ws-fetch-map state))
                             state (--wf-pop-light-block state)]
                         {:state state
                          :push-pop {:block-type :step
                                     :span span}})))
                   :interval-2-repeat?
                   (let [span {:interval 1
                               :steps 100}]
                     (when (--wf-require-span-repeatable state span)
                       {:pop-push {:block-type :interval
                                   :todo [:clear-fetched :mode-train :step-1 :step-2 :mode-test :fetch-map :interval-post-async :interval-2-repeat?]
                                   :span span}})))]
      (let [[stack current todo state] (--wf-loop result
                                                  stack
                                                  current
                                                  todo
                                                  state)]
        #_(Thread/sleep 100)
        (if (nil? current)
          #_(clojure.pprint/pprint state)
          :cool
          (recur stack current todo state))))))



#_(wf1 {:gm {:pos {:step 0
                   :interval 0
                   :stage 0}
             :limit {:steps 400}}})
