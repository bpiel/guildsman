(defproject com.billpiel/guildsman "0.0.1-DEV"
  :description "TensorFlow library for Clojure"
  
  :url "http://example.com/FIXME"

  :license {:name "Apache License, Version 2.0"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}
  
  :source-paths ["src/clj"]
  
  :java-source-paths ["src/java"]

  :plugins [[lein-cljsbuild "1.1.5"]]
   
  :dependencies [[org.clojure/clojure "1.9.0-RC1"]
                 [org.clojure/core.async "0.3.465"]
                 [org.clojars.ghaskins/protobuf "3.3.1-1"]

                 ;; web app
                 [com.google.guava/guava "21.0"] ;; dependency problems w/ piggieback
                 [org.clojure/clojurescript "1.9.908"]
                 [aleph "0.4.3"]
                 [ring/ring-core "1.5.1"] 
                 [javax.servlet/servlet-api "2.5"]
                 [compojure "1.6.0"]
                 [com.cognitect/transit-clj "0.8.300"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.1"]
                 #_[re-com "0.9.0"]
                 [re-com "2.1.0"]
                 [re-frisk "0.4.5"]
                 [com.taoensso/timbre "4.8.0"]
                 [org.eclipse.elk/org.eclipse.elk.alg.layered "0.3.0" :exclusions [com.google.guava/guava]]

                 ;; move to dev deps later
                 [binaryage/devtools "0.9.4"]
                 [com.cemerick/piggieback "0.2.2-20150424.212437-1"]
                 [figwheel-sidecar "0.5.13"]]

 ; :hooks [leiningen.cljsbuild]
  
  :profiles
  {:dev
   {:dependencies []
    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    :plugins      [[lein-figwheel "0.5.13"]]
;    :prep-tasks [["cljsbuild" "once" "main"] "javac" "compile"]
    }}

  :cljsbuild
  {:builds
   {:main {:source-paths ["src/cljs"]
           :compiler     {:main                 guildsman.core
                          :output-to            "resources/public/js/compiled/app.js"
                          :output-dir           "resources/public/js/compiled/out"
                          :asset-path           "js/compiled/out"
                          :source-map-timestamp true
                          :preloads             [devtools.preload]
                          :external-config      {:devtools/config {:features-to-install :all}}}}}}

  
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"
                        "resources/public/assets/app/css"]})
