(ns com.billpiel.guildsman.packages)

(def registry (atom {}))

(defn register-pkg!
  [pkg-kw pkg]
  (swap! registry assoc pkg-kw pkg))

(defn import-pkg-repo!
  [m]
  (swap! registry
         merge
         m))

(defn get-pkg [pkg-kw]
  (or (pkg-kw @registry)
      (throw (Exception. (str "Could not find package: " pkg-kw)))))

(defn get-plan [pkg-kw]
  (-> pkg-kw
      get-pkg
      :plan))

(defn get-asset-desc [pkg-kw]
  (-> pkg-kw
      get-pkg
      :asset))

(defn get-function [pkg-kw]
  (-> pkg-kw
      get-pkg
      :function))

