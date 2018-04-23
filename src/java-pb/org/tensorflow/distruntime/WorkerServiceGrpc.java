package org.tensorflow.distruntime;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.11.0)",
    comments = "Source: tensorflow/core/protobuf/worker_service.proto")
public final class WorkerServiceGrpc {

  private WorkerServiceGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.grpc.WorkerService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getGetStatusMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest,
      org.tensorflow.distruntime.GetStatusResponse> METHOD_GET_STATUS = getGetStatusMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest,
      org.tensorflow.distruntime.GetStatusResponse> getGetStatusMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest,
      org.tensorflow.distruntime.GetStatusResponse> getGetStatusMethod() {
    return getGetStatusMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest,
      org.tensorflow.distruntime.GetStatusResponse> getGetStatusMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.GetStatusRequest, org.tensorflow.distruntime.GetStatusResponse> getGetStatusMethod;
    if ((getGetStatusMethod = WorkerServiceGrpc.getGetStatusMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getGetStatusMethod = WorkerServiceGrpc.getGetStatusMethod) == null) {
          WorkerServiceGrpc.getGetStatusMethod = getGetStatusMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.GetStatusRequest, org.tensorflow.distruntime.GetStatusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "GetStatus"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.GetStatusRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.GetStatusResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("GetStatus"))
                  .build();
          }
        }
     }
     return getGetStatusMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getCreateWorkerSessionMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest,
      org.tensorflow.distruntime.CreateWorkerSessionResponse> METHOD_CREATE_WORKER_SESSION = getCreateWorkerSessionMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest,
      org.tensorflow.distruntime.CreateWorkerSessionResponse> getCreateWorkerSessionMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest,
      org.tensorflow.distruntime.CreateWorkerSessionResponse> getCreateWorkerSessionMethod() {
    return getCreateWorkerSessionMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest,
      org.tensorflow.distruntime.CreateWorkerSessionResponse> getCreateWorkerSessionMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.CreateWorkerSessionRequest, org.tensorflow.distruntime.CreateWorkerSessionResponse> getCreateWorkerSessionMethod;
    if ((getCreateWorkerSessionMethod = WorkerServiceGrpc.getCreateWorkerSessionMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getCreateWorkerSessionMethod = WorkerServiceGrpc.getCreateWorkerSessionMethod) == null) {
          WorkerServiceGrpc.getCreateWorkerSessionMethod = getCreateWorkerSessionMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CreateWorkerSessionRequest, org.tensorflow.distruntime.CreateWorkerSessionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "CreateWorkerSession"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CreateWorkerSessionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CreateWorkerSessionResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("CreateWorkerSession"))
                  .build();
          }
        }
     }
     return getCreateWorkerSessionMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getDeleteWorkerSessionMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeleteWorkerSessionRequest,
      org.tensorflow.distruntime.DeleteWorkerSessionResponse> METHOD_DELETE_WORKER_SESSION = getDeleteWorkerSessionMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeleteWorkerSessionRequest,
      org.tensorflow.distruntime.DeleteWorkerSessionResponse> getDeleteWorkerSessionMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeleteWorkerSessionRequest,
      org.tensorflow.distruntime.DeleteWorkerSessionResponse> getDeleteWorkerSessionMethod() {
    return getDeleteWorkerSessionMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeleteWorkerSessionRequest,
      org.tensorflow.distruntime.DeleteWorkerSessionResponse> getDeleteWorkerSessionMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeleteWorkerSessionRequest, org.tensorflow.distruntime.DeleteWorkerSessionResponse> getDeleteWorkerSessionMethod;
    if ((getDeleteWorkerSessionMethod = WorkerServiceGrpc.getDeleteWorkerSessionMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getDeleteWorkerSessionMethod = WorkerServiceGrpc.getDeleteWorkerSessionMethod) == null) {
          WorkerServiceGrpc.getDeleteWorkerSessionMethod = getDeleteWorkerSessionMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.DeleteWorkerSessionRequest, org.tensorflow.distruntime.DeleteWorkerSessionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "DeleteWorkerSession"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.DeleteWorkerSessionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.DeleteWorkerSessionResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("DeleteWorkerSession"))
                  .build();
          }
        }
     }
     return getDeleteWorkerSessionMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getRegisterGraphMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest,
      org.tensorflow.distruntime.RegisterGraphResponse> METHOD_REGISTER_GRAPH = getRegisterGraphMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest,
      org.tensorflow.distruntime.RegisterGraphResponse> getRegisterGraphMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest,
      org.tensorflow.distruntime.RegisterGraphResponse> getRegisterGraphMethod() {
    return getRegisterGraphMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest,
      org.tensorflow.distruntime.RegisterGraphResponse> getRegisterGraphMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.RegisterGraphRequest, org.tensorflow.distruntime.RegisterGraphResponse> getRegisterGraphMethod;
    if ((getRegisterGraphMethod = WorkerServiceGrpc.getRegisterGraphMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getRegisterGraphMethod = WorkerServiceGrpc.getRegisterGraphMethod) == null) {
          WorkerServiceGrpc.getRegisterGraphMethod = getRegisterGraphMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RegisterGraphRequest, org.tensorflow.distruntime.RegisterGraphResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "RegisterGraph"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RegisterGraphRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RegisterGraphResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("RegisterGraph"))
                  .build();
          }
        }
     }
     return getRegisterGraphMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getDeregisterGraphMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest,
      org.tensorflow.distruntime.DeregisterGraphResponse> METHOD_DEREGISTER_GRAPH = getDeregisterGraphMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest,
      org.tensorflow.distruntime.DeregisterGraphResponse> getDeregisterGraphMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest,
      org.tensorflow.distruntime.DeregisterGraphResponse> getDeregisterGraphMethod() {
    return getDeregisterGraphMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest,
      org.tensorflow.distruntime.DeregisterGraphResponse> getDeregisterGraphMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.DeregisterGraphRequest, org.tensorflow.distruntime.DeregisterGraphResponse> getDeregisterGraphMethod;
    if ((getDeregisterGraphMethod = WorkerServiceGrpc.getDeregisterGraphMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getDeregisterGraphMethod = WorkerServiceGrpc.getDeregisterGraphMethod) == null) {
          WorkerServiceGrpc.getDeregisterGraphMethod = getDeregisterGraphMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.DeregisterGraphRequest, org.tensorflow.distruntime.DeregisterGraphResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "DeregisterGraph"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.DeregisterGraphRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.DeregisterGraphResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("DeregisterGraph"))
                  .build();
          }
        }
     }
     return getDeregisterGraphMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getRunGraphMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest,
      org.tensorflow.distruntime.RunGraphResponse> METHOD_RUN_GRAPH = getRunGraphMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest,
      org.tensorflow.distruntime.RunGraphResponse> getRunGraphMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest,
      org.tensorflow.distruntime.RunGraphResponse> getRunGraphMethod() {
    return getRunGraphMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest,
      org.tensorflow.distruntime.RunGraphResponse> getRunGraphMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.RunGraphRequest, org.tensorflow.distruntime.RunGraphResponse> getRunGraphMethod;
    if ((getRunGraphMethod = WorkerServiceGrpc.getRunGraphMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getRunGraphMethod = WorkerServiceGrpc.getRunGraphMethod) == null) {
          WorkerServiceGrpc.getRunGraphMethod = getRunGraphMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RunGraphRequest, org.tensorflow.distruntime.RunGraphResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "RunGraph"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RunGraphRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RunGraphResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("RunGraph"))
                  .build();
          }
        }
     }
     return getRunGraphMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getCleanupGraphMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest,
      org.tensorflow.distruntime.CleanupGraphResponse> METHOD_CLEANUP_GRAPH = getCleanupGraphMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest,
      org.tensorflow.distruntime.CleanupGraphResponse> getCleanupGraphMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest,
      org.tensorflow.distruntime.CleanupGraphResponse> getCleanupGraphMethod() {
    return getCleanupGraphMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest,
      org.tensorflow.distruntime.CleanupGraphResponse> getCleanupGraphMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupGraphRequest, org.tensorflow.distruntime.CleanupGraphResponse> getCleanupGraphMethod;
    if ((getCleanupGraphMethod = WorkerServiceGrpc.getCleanupGraphMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getCleanupGraphMethod = WorkerServiceGrpc.getCleanupGraphMethod) == null) {
          WorkerServiceGrpc.getCleanupGraphMethod = getCleanupGraphMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CleanupGraphRequest, org.tensorflow.distruntime.CleanupGraphResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "CleanupGraph"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CleanupGraphRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CleanupGraphResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("CleanupGraph"))
                  .build();
          }
        }
     }
     return getCleanupGraphMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getCleanupAllMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest,
      org.tensorflow.distruntime.CleanupAllResponse> METHOD_CLEANUP_ALL = getCleanupAllMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest,
      org.tensorflow.distruntime.CleanupAllResponse> getCleanupAllMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest,
      org.tensorflow.distruntime.CleanupAllResponse> getCleanupAllMethod() {
    return getCleanupAllMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest,
      org.tensorflow.distruntime.CleanupAllResponse> getCleanupAllMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.CleanupAllRequest, org.tensorflow.distruntime.CleanupAllResponse> getCleanupAllMethod;
    if ((getCleanupAllMethod = WorkerServiceGrpc.getCleanupAllMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getCleanupAllMethod = WorkerServiceGrpc.getCleanupAllMethod) == null) {
          WorkerServiceGrpc.getCleanupAllMethod = getCleanupAllMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.CleanupAllRequest, org.tensorflow.distruntime.CleanupAllResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "CleanupAll"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CleanupAllRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.CleanupAllResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("CleanupAll"))
                  .build();
          }
        }
     }
     return getCleanupAllMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getRecvTensorMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest,
      org.tensorflow.distruntime.RecvTensorResponse> METHOD_RECV_TENSOR = getRecvTensorMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest,
      org.tensorflow.distruntime.RecvTensorResponse> getRecvTensorMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest,
      org.tensorflow.distruntime.RecvTensorResponse> getRecvTensorMethod() {
    return getRecvTensorMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest,
      org.tensorflow.distruntime.RecvTensorResponse> getRecvTensorMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.RecvTensorRequest, org.tensorflow.distruntime.RecvTensorResponse> getRecvTensorMethod;
    if ((getRecvTensorMethod = WorkerServiceGrpc.getRecvTensorMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getRecvTensorMethod = WorkerServiceGrpc.getRecvTensorMethod) == null) {
          WorkerServiceGrpc.getRecvTensorMethod = getRecvTensorMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.RecvTensorRequest, org.tensorflow.distruntime.RecvTensorResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "RecvTensor"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RecvTensorRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.RecvTensorResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("RecvTensor"))
                  .build();
          }
        }
     }
     return getRecvTensorMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getLoggingMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest,
      org.tensorflow.distruntime.LoggingResponse> METHOD_LOGGING = getLoggingMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest,
      org.tensorflow.distruntime.LoggingResponse> getLoggingMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest,
      org.tensorflow.distruntime.LoggingResponse> getLoggingMethod() {
    return getLoggingMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest,
      org.tensorflow.distruntime.LoggingResponse> getLoggingMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.LoggingRequest, org.tensorflow.distruntime.LoggingResponse> getLoggingMethod;
    if ((getLoggingMethod = WorkerServiceGrpc.getLoggingMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getLoggingMethod = WorkerServiceGrpc.getLoggingMethod) == null) {
          WorkerServiceGrpc.getLoggingMethod = getLoggingMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.LoggingRequest, org.tensorflow.distruntime.LoggingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "Logging"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.LoggingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.LoggingResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("Logging"))
                  .build();
          }
        }
     }
     return getLoggingMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getTracingMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest,
      org.tensorflow.distruntime.TracingResponse> METHOD_TRACING = getTracingMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest,
      org.tensorflow.distruntime.TracingResponse> getTracingMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest,
      org.tensorflow.distruntime.TracingResponse> getTracingMethod() {
    return getTracingMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest,
      org.tensorflow.distruntime.TracingResponse> getTracingMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.distruntime.TracingRequest, org.tensorflow.distruntime.TracingResponse> getTracingMethod;
    if ((getTracingMethod = WorkerServiceGrpc.getTracingMethod) == null) {
      synchronized (WorkerServiceGrpc.class) {
        if ((getTracingMethod = WorkerServiceGrpc.getTracingMethod) == null) {
          WorkerServiceGrpc.getTracingMethod = getTracingMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.distruntime.TracingRequest, org.tensorflow.distruntime.TracingResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.grpc.WorkerService", "Tracing"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.TracingRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.distruntime.TracingResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new WorkerServiceMethodDescriptorSupplier("Tracing"))
                  .build();
          }
        }
     }
     return getTracingMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static WorkerServiceStub newStub(io.grpc.Channel channel) {
    return new WorkerServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static WorkerServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new WorkerServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static WorkerServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new WorkerServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class WorkerServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void getStatus(org.tensorflow.distruntime.GetStatusRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetStatusMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateWorkerSessionMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deleteWorkerSession(org.tensorflow.distruntime.DeleteWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeleteWorkerSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteWorkerSessionMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRegisterGraphMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getDeregisterGraphMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void runGraph(org.tensorflow.distruntime.RunGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRunGraphMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCleanupGraphMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCleanupAllMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void recvTensor(org.tensorflow.distruntime.RecvTensorRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRecvTensorMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void logging(org.tensorflow.distruntime.LoggingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getLoggingMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void tracing(org.tensorflow.distruntime.TracingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getTracingMethodHelper(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetStatusMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.GetStatusRequest,
                org.tensorflow.distruntime.GetStatusResponse>(
                  this, METHODID_GET_STATUS)))
          .addMethod(
            getCreateWorkerSessionMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CreateWorkerSessionRequest,
                org.tensorflow.distruntime.CreateWorkerSessionResponse>(
                  this, METHODID_CREATE_WORKER_SESSION)))
          .addMethod(
            getDeleteWorkerSessionMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.DeleteWorkerSessionRequest,
                org.tensorflow.distruntime.DeleteWorkerSessionResponse>(
                  this, METHODID_DELETE_WORKER_SESSION)))
          .addMethod(
            getRegisterGraphMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RegisterGraphRequest,
                org.tensorflow.distruntime.RegisterGraphResponse>(
                  this, METHODID_REGISTER_GRAPH)))
          .addMethod(
            getDeregisterGraphMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.DeregisterGraphRequest,
                org.tensorflow.distruntime.DeregisterGraphResponse>(
                  this, METHODID_DEREGISTER_GRAPH)))
          .addMethod(
            getRunGraphMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RunGraphRequest,
                org.tensorflow.distruntime.RunGraphResponse>(
                  this, METHODID_RUN_GRAPH)))
          .addMethod(
            getCleanupGraphMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CleanupGraphRequest,
                org.tensorflow.distruntime.CleanupGraphResponse>(
                  this, METHODID_CLEANUP_GRAPH)))
          .addMethod(
            getCleanupAllMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.CleanupAllRequest,
                org.tensorflow.distruntime.CleanupAllResponse>(
                  this, METHODID_CLEANUP_ALL)))
          .addMethod(
            getRecvTensorMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.RecvTensorRequest,
                org.tensorflow.distruntime.RecvTensorResponse>(
                  this, METHODID_RECV_TENSOR)))
          .addMethod(
            getLoggingMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.LoggingRequest,
                org.tensorflow.distruntime.LoggingResponse>(
                  this, METHODID_LOGGING)))
          .addMethod(
            getTracingMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.distruntime.TracingRequest,
                org.tensorflow.distruntime.TracingResponse>(
                  this, METHODID_TRACING)))
          .build();
    }
  }

  /**
   */
  public static final class WorkerServiceStub extends io.grpc.stub.AbstractStub<WorkerServiceStub> {
    private WorkerServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void getStatus(org.tensorflow.distruntime.GetStatusRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetStatusMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateWorkerSessionMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deleteWorkerSession(org.tensorflow.distruntime.DeleteWorkerSessionRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeleteWorkerSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteWorkerSessionMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRegisterGraphMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeregisterGraphMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void runGraph(org.tensorflow.distruntime.RunGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRunGraphMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCleanupGraphMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCleanupAllMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void recvTensor(org.tensorflow.distruntime.RecvTensorRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRecvTensorMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void logging(org.tensorflow.distruntime.LoggingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getLoggingMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public void tracing(org.tensorflow.distruntime.TracingRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getTracingMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class WorkerServiceBlockingStub extends io.grpc.stub.AbstractStub<WorkerServiceBlockingStub> {
    private WorkerServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.GetStatusResponse getStatus(org.tensorflow.distruntime.GetStatusRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetStatusMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CreateWorkerSessionResponse createWorkerSession(org.tensorflow.distruntime.CreateWorkerSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateWorkerSessionMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.DeleteWorkerSessionResponse deleteWorkerSession(org.tensorflow.distruntime.DeleteWorkerSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), getDeleteWorkerSessionMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RegisterGraphResponse registerGraph(org.tensorflow.distruntime.RegisterGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), getRegisterGraphMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.DeregisterGraphResponse deregisterGraph(org.tensorflow.distruntime.DeregisterGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), getDeregisterGraphMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RunGraphResponse runGraph(org.tensorflow.distruntime.RunGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), getRunGraphMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CleanupGraphResponse cleanupGraph(org.tensorflow.distruntime.CleanupGraphRequest request) {
      return blockingUnaryCall(
          getChannel(), getCleanupGraphMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.CleanupAllResponse cleanupAll(org.tensorflow.distruntime.CleanupAllRequest request) {
      return blockingUnaryCall(
          getChannel(), getCleanupAllMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.RecvTensorResponse recvTensor(org.tensorflow.distruntime.RecvTensorRequest request) {
      return blockingUnaryCall(
          getChannel(), getRecvTensorMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.LoggingResponse logging(org.tensorflow.distruntime.LoggingRequest request) {
      return blockingUnaryCall(
          getChannel(), getLoggingMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public org.tensorflow.distruntime.TracingResponse tracing(org.tensorflow.distruntime.TracingRequest request) {
      return blockingUnaryCall(
          getChannel(), getTracingMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class WorkerServiceFutureStub extends io.grpc.stub.AbstractStub<WorkerServiceFutureStub> {
    private WorkerServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private WorkerServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected WorkerServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new WorkerServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.GetStatusResponse> getStatus(
        org.tensorflow.distruntime.GetStatusRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetStatusMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CreateWorkerSessionResponse> createWorkerSession(
        org.tensorflow.distruntime.CreateWorkerSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateWorkerSessionMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.DeleteWorkerSessionResponse> deleteWorkerSession(
        org.tensorflow.distruntime.DeleteWorkerSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteWorkerSessionMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RegisterGraphResponse> registerGraph(
        org.tensorflow.distruntime.RegisterGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRegisterGraphMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.DeregisterGraphResponse> deregisterGraph(
        org.tensorflow.distruntime.DeregisterGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getDeregisterGraphMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RunGraphResponse> runGraph(
        org.tensorflow.distruntime.RunGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRunGraphMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CleanupGraphResponse> cleanupGraph(
        org.tensorflow.distruntime.CleanupGraphRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCleanupGraphMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.CleanupAllResponse> cleanupAll(
        org.tensorflow.distruntime.CleanupAllRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCleanupAllMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.RecvTensorResponse> recvTensor(
        org.tensorflow.distruntime.RecvTensorRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRecvTensorMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.LoggingResponse> logging(
        org.tensorflow.distruntime.LoggingRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getLoggingMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * See worker.proto for details.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.distruntime.TracingResponse> tracing(
        org.tensorflow.distruntime.TracingRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTracingMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_STATUS = 0;
  private static final int METHODID_CREATE_WORKER_SESSION = 1;
  private static final int METHODID_DELETE_WORKER_SESSION = 2;
  private static final int METHODID_REGISTER_GRAPH = 3;
  private static final int METHODID_DEREGISTER_GRAPH = 4;
  private static final int METHODID_RUN_GRAPH = 5;
  private static final int METHODID_CLEANUP_GRAPH = 6;
  private static final int METHODID_CLEANUP_ALL = 7;
  private static final int METHODID_RECV_TENSOR = 8;
  private static final int METHODID_LOGGING = 9;
  private static final int METHODID_TRACING = 10;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final WorkerServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(WorkerServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_STATUS:
          serviceImpl.getStatus((org.tensorflow.distruntime.GetStatusRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.GetStatusResponse>) responseObserver);
          break;
        case METHODID_CREATE_WORKER_SESSION:
          serviceImpl.createWorkerSession((org.tensorflow.distruntime.CreateWorkerSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CreateWorkerSessionResponse>) responseObserver);
          break;
        case METHODID_DELETE_WORKER_SESSION:
          serviceImpl.deleteWorkerSession((org.tensorflow.distruntime.DeleteWorkerSessionRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeleteWorkerSessionResponse>) responseObserver);
          break;
        case METHODID_REGISTER_GRAPH:
          serviceImpl.registerGraph((org.tensorflow.distruntime.RegisterGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RegisterGraphResponse>) responseObserver);
          break;
        case METHODID_DEREGISTER_GRAPH:
          serviceImpl.deregisterGraph((org.tensorflow.distruntime.DeregisterGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.DeregisterGraphResponse>) responseObserver);
          break;
        case METHODID_RUN_GRAPH:
          serviceImpl.runGraph((org.tensorflow.distruntime.RunGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RunGraphResponse>) responseObserver);
          break;
        case METHODID_CLEANUP_GRAPH:
          serviceImpl.cleanupGraph((org.tensorflow.distruntime.CleanupGraphRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupGraphResponse>) responseObserver);
          break;
        case METHODID_CLEANUP_ALL:
          serviceImpl.cleanupAll((org.tensorflow.distruntime.CleanupAllRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.CleanupAllResponse>) responseObserver);
          break;
        case METHODID_RECV_TENSOR:
          serviceImpl.recvTensor((org.tensorflow.distruntime.RecvTensorRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.RecvTensorResponse>) responseObserver);
          break;
        case METHODID_LOGGING:
          serviceImpl.logging((org.tensorflow.distruntime.LoggingRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.LoggingResponse>) responseObserver);
          break;
        case METHODID_TRACING:
          serviceImpl.tracing((org.tensorflow.distruntime.TracingRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.distruntime.TracingResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class WorkerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    WorkerServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return org.tensorflow.distruntime.WorkerServiceProtos.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("WorkerService");
    }
  }

  private static final class WorkerServiceFileDescriptorSupplier
      extends WorkerServiceBaseDescriptorSupplier {
    WorkerServiceFileDescriptorSupplier() {}
  }

  private static final class WorkerServiceMethodDescriptorSupplier
      extends WorkerServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    WorkerServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (WorkerServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new WorkerServiceFileDescriptorSupplier())
              .addMethod(getGetStatusMethodHelper())
              .addMethod(getCreateWorkerSessionMethodHelper())
              .addMethod(getDeleteWorkerSessionMethodHelper())
              .addMethod(getRegisterGraphMethodHelper())
              .addMethod(getDeregisterGraphMethodHelper())
              .addMethod(getRunGraphMethodHelper())
              .addMethod(getCleanupGraphMethodHelper())
              .addMethod(getCleanupAllMethodHelper())
              .addMethod(getRecvTensorMethodHelper())
              .addMethod(getLoggingMethodHelper())
              .addMethod(getTracingMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
