(ns com.billpiel.guildsman.webapp.server
  (:require [compojure.core :as c]
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

(def view (atom {:graph nil
                 :right [:div]
                 :selected nil}))

(def selected-node (atom nil))

(def selected-node-receiver (atom nil))

(defn selected-node-watcher
  [k r old-val new-val]
  (when-let [f @selected-node-receiver]
    (f new-val old-val)))

(defn init-selected-node
  []
  (def selected-node (atom nil))
  (add-watch selected-node
             ::selected-node-watcher
             #'selected-node-watcher))

(init-selected-node)

(defn read-transit-string
  [s]
  (-> s
      .getBytes
      (ByteArrayInputStream.)
      (t/reader :json)
      t/read))

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
                 (String. (->transit data))
                 200)))

(defn diff-views
  [v1 v2]
  v2
  #_(merge-with (fn [a b]
                (when-not (= a b)
                  (or b [:div "empty"])))
              v1 v2))

(defn update-view
  [new-view]
  (let [view' @view]
    (reset! view new-view)
    (->> new-view
         (diff-views view')
         respond-transit)))

(defn ws-inbound-handler
  [ws data]
  (def ib-data data)
  (println data)
  (let [data' (read-transit-string data)]
    (when-let [{:keys [select]} data']
      (reset! selected-node select))))

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
    (reset! server
            (ah/start-server #'routes {:port 5080}))
    (log/info "started http server on port 5080")
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
