(ns re-frame.trace
  "Tracing for re-frame.
  Alpha quality, subject to change/break at any time."
  #?(:cljs (:require-macros [net.cgrand.macrovich :as macros]
                            [re-frame.trace :refer [finish-trace with-trace merge-trace!]]))
  (:require [re-frame.interop :as interop]
            #?(:clj [net.cgrand.macrovich :as macros])
            [re-frame.loggers :refer [console]]))

(def id (atom 0))
(def ^:dynamic *current-trace* nil)

(defn reset-tracing! []
  (reset! id 0))

#?(:cljs (goog-define trace-enabled? false)
   :clj  (def ^boolean trace-enabled? false))

(defn ^boolean is-trace-enabled?
  "See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details"
  []
  trace-enabled?)

(def trace-cbs (atom {}))

(defn register-trace-cb
  "Registers a tracing callback function which will receive a collection of one or more traces.
  Will replace an existing callback function if it shares the same key."
  [key f]
  (if trace-enabled?
    (swap! trace-cbs assoc key f)
    (console :warn "Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.")))

(defn remove-trace-cb [key]
  (swap! trace-cbs dissoc key)
  nil)

(defn next-id [] (swap! id inc))

(defn start-trace [{:keys [operation op-type tags child-of]}]
  {:id        (next-id)
   :operation operation
   :op-type   op-type
   :tags      tags
   :child-of  (or child-of (:id *current-trace*))
   :start     (interop/now)})

(macros/deftime
  (defmacro finish-trace [trace]
     `(when (is-trace-enabled?)
        (let [end#      (interop/now)
              duration# (- end# (:start ~trace))]
          (doseq [[k# cb#] @trace-cbs]
            (try (cb# [(assoc ~trace
                              :duration duration#
                              :end (interop/now))])
                 #?(:clj (catch Exception e#
                           (console :error "Error thrown from trace cb" k# "while storing" ~trace e#)))
                 #?(:cljs (catch :default e#
                            (console :error "Error thrown from trace cb" k# "while storing" ~trace e#))))))))

 (defmacro with-trace
     "Create a trace inside the scope of the with-trace macro

          Common keys for trace-opts
          :op-type - what kind of operation is this? e.g. :sub/create, :render.
          :operation - identifier for the operation, for an subscription it would be the subscription keyword
          tags - a map of arbitrary kv pairs"
     [{:keys [operation op-type tags child-of] :as trace-opts} & body]
     `(if (is-trace-enabled?)
        (binding [*current-trace* (start-trace ~trace-opts)]
          (try ~@body
               (finally (finish-trace *current-trace*))))
        (do ~@body)))

  (defmacro merge-trace! [m]
     ;; Overwrite keys in tags, and all top level keys.
     `(when (is-trace-enabled?)
        (let [new-trace# (-> (update *current-trace* :tags merge (:tags ~m))
                             (merge (dissoc ~m :tags)))]
          (set! *current-trace* new-trace#))
        nil)))
