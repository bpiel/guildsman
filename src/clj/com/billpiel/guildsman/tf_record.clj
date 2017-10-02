(ns com.billpiel.guildsman.tf-record
  (:require [flatland.protobuf.core :as pr]
            com.billpiel.guildsman.common)
  (:import [org.tensorflow.framework OpDef OpList MetaGraphDef GraphDef NodeDef Summary]
           [org.tensorflow.util Event]
           [com.billpiel.guildsman.common Graph Op GraphRef]
           [org.tensorflow.hadoop.util TFRecordWriter]))

(def EventP (pr/protodef Event))
(def GraphDefP (pr/protodef GraphDef))
(def SummaryP (pr/protodef Summary))


(defn get-wall-time [] (double (/ (System/currentTimeMillis) 1000.)))

(defn spit-bytes
  "Slurp the bytes from a slurpable thing"
  [f ba]
  (let [bais (java.io.ByteArrayInputStream. ba)]
    (with-open [out (clojure.java.io/output-stream f)]
      (clojure.java.io/copy bais out))))

(defn slurp-bytes
  "Slurp the bytes from a slurpable thing"
  [x]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream x) out)
    (.toByteArray out)))

(defn mk-tfrecord-byte-buffer
  [filename]
  (with-open [out (java.io.ByteArrayOutputStream.)]
    (clojure.java.io/copy (clojure.java.io/input-stream filename) out)
    (-> out
        .toByteArray
        java.nio.ByteBuffer/wrap
        (.order java.nio.ByteOrder/LITTLE_ENDIAN)
        .asReadOnlyBuffer)))

(defn read-event-from-tfrecord-byte-buffer
  [^java.nio.ByteBuffer tfrecs-bb]
  (when (.hasRemaining tfrecs-bb)
    (let [length (.getLong tfrecs-bb) ;; TODO unsigned???
          masked-crc32-of-length (.getInt tfrecs-bb)
          ba (byte-array length)
          _ (.get tfrecs-bb ba 0 length)
          masked-crc32-of-data (.getInt tfrecs-bb)]
      (pr/protobuf-load EventP ba))))

(defn tfrec-bb->event-seq
  "I hope this isn't terribly wrong"
  [^java.nio.ByteBuffer tfrecs-bb]
  (let [dup (-> tfrecs-bb
                .slice
                (.order java.nio.ByteOrder/LITTLE_ENDIAN))
        evt (read-event-from-tfrecord-byte-buffer dup)]
    (if evt
      (lazy-cat [evt] (tfrec-bb->event-seq dup))
      [])))

(defn extract-from-tf-event
  [evt]
  (let [k (-> evt
            (dissoc :wall-time)
            keys
            first)
        v (evt k)]
    (case k
      :file-version v
      :graph-def (pr/protobuf-load GraphDefP (.toByteArray v))
      :summary (pr/protobuf-load SummaryP (.toByteArray v)))))

(defn tfrec-bb->seq
  [^java.nio.ByteBuffer tfrecs-bb]
  (map extract-from-tf-event
       (tfrec-bb->event-seq tfrecs-bb)))

(defn tfrec-file->seq
  [filename]
  (-> filename
      mk-tfrecord-byte-buffer
      tfrec-bb->seq))

(defn tfrec-file->event-seq
  [filename]
  (-> filename
      mk-tfrecord-byte-buffer
      tfrec-bb->event-seq))

(defn mk-version-event
  []
  {:wall-time (get-wall-time)
   :file-version "brain.Event:2"})

(defn mk-graphdef-event
  [graphdef-bytes]
  {:wall-time (get-wall-time)
   :graph-def graphdef-bytes})

(defn byte-arrays->tf-rec-byte-array
  [byte-arrays]
  (let [baos (java.io.ByteArrayOutputStream.)
        leos (java.io.DataOutputStream. baos)
        tfrw (TFRecordWriter. leos)]
    (doseq [ba byte-arrays]
      (.write tfrw ba 0 (count ba)))
    (.toByteArray baos)))

(defn events->tf-recs-bytes
  [evts]
  (map (partial pr/protobuf-dump EventP)
       evts))

(defn graph->event-ba
  [^Graph g]
  (->> [(mk-version-event)
        (-> g
            :handle
            com.billpiel.guildsman.GraphNI/toGraphDef
            mk-graphdef-event)]
       events->tf-recs-bytes
       byte-arrays->tf-rec-byte-array))

(defn write-graphdef-to-events-file
  [^Graph g filename]
  (->> g
       graph->event-ba
       (spit-bytes filename)))
