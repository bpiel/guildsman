// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/contrib/verbs/verbs_service.proto

package org.tensorflow.contrib.verbs;

public interface ErrorStatusProtoOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.ErrorStatusProto)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 error_code = 1;</code>
   */
  int getErrorCode();

  /**
   * <code>string error_message = 2;</code>
   */
  java.lang.String getErrorMessage();
  /**
   * <code>string error_message = 2;</code>
   */
  com.google.protobuf.ByteString
      getErrorMessageBytes();

  /**
   * <code>string error_details = 3;</code>
   */
  java.lang.String getErrorDetails();
  /**
   * <code>string error_details = 3;</code>
   */
  com.google.protobuf.ByteString
      getErrorDetailsBytes();
}
