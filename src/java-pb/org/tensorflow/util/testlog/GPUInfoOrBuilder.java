// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/util/test_log.proto

package org.tensorflow.util.testlog;

public interface GPUInfoOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.GPUInfo)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * e.g. "Tesla K40c"
   * </pre>
   *
   * <code>string model = 1;</code>
   */
  java.lang.String getModel();
  /**
   * <pre>
   * e.g. "Tesla K40c"
   * </pre>
   *
   * <code>string model = 1;</code>
   */
  com.google.protobuf.ByteString
      getModelBytes();

  /**
   * <pre>
   * Final entry in output of "nvidia-smi -L"
   * </pre>
   *
   * <code>string uuid = 2;</code>
   */
  java.lang.String getUuid();
  /**
   * <pre>
   * Final entry in output of "nvidia-smi -L"
   * </pre>
   *
   * <code>string uuid = 2;</code>
   */
  com.google.protobuf.ByteString
      getUuidBytes();

  /**
   * <pre>
   * e.g. "0000:04:00.0"
   * </pre>
   *
   * <code>string bus_id = 3;</code>
   */
  java.lang.String getBusId();
  /**
   * <pre>
   * e.g. "0000:04:00.0"
   * </pre>
   *
   * <code>string bus_id = 3;</code>
   */
  com.google.protobuf.ByteString
      getBusIdBytes();
}
