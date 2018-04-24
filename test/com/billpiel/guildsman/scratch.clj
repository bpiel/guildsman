(ns com.billpiel.guildsman.scratch
  (:require [clojure.test :as t]
            [clojure.core.async :as a]
            [com.billpiel.guildsman.core :as g]
            [com.billpiel.guildsman.graph :as gr]
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
  (:import [org.tensorflow.framework AttrValue OpDef RunOptions DebugOptions GraphDef]
           [com.billpiel.guildsman FunctionNI TensorFlowNI]
           (java.util.zip ZipFile GZIPInputStream)))


(def DebugOptionsP (pr/protodef DebugOptions))
(def RunOptionsP (pr/protodef RunOptions))

(pr/protobuf-dump DebugOptionsP {:debug_tensor_watch_opts []
                                 :global_step 1})

(def p1 (pr/protobuf DebugOptionsP {:debug_tensor_watch_opts []
                                    :global_step 1}))

(.toString (.message p1))


(g/with-tensor-scope
  (let [x (c/vari :x 0.)
        loss (->> (o/sub x 2.)
                  o/abs)
        opt (c/grad-desc-opt :opt 0.33 loss)
        sess (g/build->session opt)
        run-opts (pr/protobuf-dump RunOptionsP
                                   (sput/mk-run-options-watch-graph (:graph sess)
                                                                    ["grpc://localhost:6064"])) ]
    (g/run-global-vars-init sess)
    (dotimes [n 10]
      (g/run sess opt {} run-opts))
    (clojure.pprint/pprint  (g/produce sess x))))

(g/with-tensor-scope
  (let [x (c/vari :x 0.)
        loss (->> (o/sub x 2.)
                  o/abs)
        opt (c/grad-desc-opt :opt 0.33 loss)
        graph (g/build->graph opt)]
    (def g1 graph)))

(def GraphDefP (pr/protodef GraphDef))

(-> (pr/protobuf-load GraphDefP
                      (gr/->graph-def-byte-array g1))
    .message
    .toString
    println)

(println (gr/->graph-def-text g1))
