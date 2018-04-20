(ns com.billpiel.guildsman.scratch
  (:require [clojure.test :as t]
            [clojure.core.async :as a]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.ops.basic :as o]
            [com.billpiel.guildsman.ops.composite :as c]
            [com.billpiel.guildsman.data-type :as dt]
            [com.billpiel.guildsman.dev :as dev]
            [com.billpiel.guildsman.packages :as pkg]
            [com.billpiel.guildsman.tensor-scope :as tsc]
            [com.billpiel.guildsman.special-utils :as sput]
            [flatland.protobuf.core :as pr]
            [aleph.http :as ah]
            [manifold.stream :as ms]
            digest
            [clojure.java.io :as io])
  (:import [org.tensorflow.framework AttrValue OpDef RunOptions DebugOptions]
           [com.billpiel.guildsman FunctionNI]
           (java.util.zip ZipFile GZIPInputStream)))


(def DebugOptionsP (pr/protodef DebugOptions))
(def RunOptionsP (pr/protodef RunOptions))

(pr/protobuf-dump DebugOptionsP {:debug_tensor_watch_opts []
                                 :global_step 1})


(g/with-tensor-scope
  (let [x (c/vari :x 0.)
        loss (->> (o/sub x 2.)
                  o/abs)
        opt (c/grad-desc-opt :opt 0.5 loss)
        sess (g/build->session opt)]
    (g/run-global-vars-init sess)
    (g/run sess opt {} 
      (pr/protobuf-dump RunOptionsP
                        (sput/mk-run-options-watch-graph (:graph sess) ["localhost:6064"])))
    #_    (g/run-global-vars-init sess)
    #_    (g/run-all sess (repeat 4 opt))
    #_    (g/produce sess x)))
