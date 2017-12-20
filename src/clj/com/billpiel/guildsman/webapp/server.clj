(ns com.billpiel.guildsman.webapp.server
  (:require [clojure.core.async :as a]
            [compojure.core :as c]
            [compojure.handler :as ch]
            [compojure.route :as cr]
            [aleph.http :as ah]
            [manifold.stream :as ms]
            [taoensso.timbre :as log]
            [cognitect.transit :as t]
            [clojure.java.io :as io]
            [com.billpiel.guildsman.tensor :as tsr])
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream]
           [com.billpiel.guildsman.tensor TensorNDArray])
  (:gen-class))

(defonce server (atom nil))
(defonce ws-conn (atom nil))

(defn diff-views
  [v1 v2]
  v2
  #_(merge-with (fn [a b]
                (when-not (= a b)
                  (or b [:div "empty"])))
              v1 v2))

(def view (atom {:graph nil
                 :right [:div]
                 :selected nil}))

(def selected-node (volatile! nil))

(def last-view-fn (volatile! nil))

(def view-update-delay-ms 500)

(defonce view-chan (a/chan (a/sliding-buffer 1)))

(defn ->transit
  [v]
  (def v1 v)
  (let [baos (ByteArrayOutputStream.)
        tw (t/writer baos :json
                     {:handlers
                      {com.billpiel.guildsman.tensor.TensorNDArray (t/write-handler
                                                          (constantly "list")
                                                          vec
                                                          str)}})]
    (t/write tw v)
    (.toByteArray baos)))

(defn respond-transit
  [data & [ws]]
  (when-let [ws' (or ws @ws-conn)]
    (ms/try-put! ws'
                 (String. (->transit data)) ;; TODO this can't be a byte array or something???
                 200)))

(defn update-view
  [& [view-fn]]
  (let [f (or view-fn @last-view-fn)
        v-old @view]
    (->> (swap! view f @selected-node)
         (diff-views v-old)
         respond-transit)))

(defonce view-chan-thread-state (volatile! nil))
(defonce view-chan-thread-ex (volatile! nil))

(defn view-chan-thread
  []
  (vreset! view-chan-thread-state :starting)
  (vreset! view-chan-thread-ex nil)
  #_ (clojure.pprint/pprint @view-chan-thread-ex)
  (a/thread
    (vreset! view-chan-thread-state :running)
    (try
      (loop []
        (when-let [f (a/<!! view-chan)]
          (vreset! last-view-fn f)
          (update-view f)
          (Thread/sleep view-update-delay-ms) ;; TODO ok? bad?
          (recur)))
      (vreset! view-chan-thread-state :done)
      (catch Exception e
        (vreset! view-chan-thread-state :exception)
        (vreset! view-chan-thread-ex e)))))

(defn start-view-chan-thread
  []
  (if (#{:starting :running} @view-chan-thread-state)
    (log/info "View-chan thread already running.")
    (do (view-chan-thread)
        (log/info "View-chan thread started."))))

(defn read-transit-string
  [s]
  (-> s
      .getBytes
      (ByteArrayInputStream.)
      (t/reader :json)
      t/read))


#_(defn update-view
  [new-view]
  (let [view' @view]
    (reset! view new-view)
    (->> new-view
         (diff-views view')
         respond-transit)))

(defn ws-inbound-handler
  [ws data]
  (def ib-data data)
#_  (println data)
  (let [data' (read-transit-string data)]
    (when-let [{:keys [select]} data']
      (vreset! selected-node select)
      (update-view))))

(defn ws-handler
  [req]
  (let [ws @(ah/websocket-connection req)
        current-ws @ws-conn]
    (when current-ws
      (try (ms/close! current-ws)
           (catch Exception e)))
    (reset! ws-conn ws)
    #_(ms/on-closed ws unsub-fn)
    (ms/consume (partial ws-inbound-handler
                         ws)
                ws)))

(defn uri->content-type
  [uri]
  (or (-> uri
           (clojure.string/split #"\.")
           last
           ({"js" "application/javascript"
             "css" "text/css"
             "html" "text/html"}))
      "text/plain"))

(defn get-public-resource
  [uri]
  {:status 200
   :headers {"Content-Type" (uri->content-type uri)}
   :body (-> (str "public" uri) io/resource slurp)})

(c/defroutes routes
  (c/GET "/ws" [] #'ws-handler)
  (c/GET "/" [] (fn [_] (-> "public/app.html" io/resource slurp)))
  (c/GET "*" [] (fn [{:keys [uri]}] (get-public-resource uri))))

(defn start-server []
  (log/info "starting http server...")
  (try
    (if-not @server
      (do (reset! server
                  (ah/start-server #'routes {:port 5080}))
          (log/info "started http server on port 5080"))
      (log/info "server already running"))
    (start-view-chan-thread)
    (catch Exception e
      (log/error e "EXCEPTION while trying to start http server"))))

(defn stop-server []
  (log/info "stopping http server...")
  (try
    (@server :timeout 100)
    (reset! server nil)
    (log/info "stopped http server on port 5080")
    (catch Exception e
      (log/error e "EXCEPTION while trying to stop http server"))))

#_ (stop-server)

#_(start-server)
