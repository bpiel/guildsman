package org.tensorflow.contrib.verbs;

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
    comments = "Source: tensorflow/contrib/verbs/verbs_service.proto")
public final class VerbsServiceGrpc {

  private VerbsServiceGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.VerbsService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getGetRemoteAddressMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.contrib.verbs.GetRemoteAddressRequest,
      org.tensorflow.contrib.verbs.GetRemoteAddressResponse> METHOD_GET_REMOTE_ADDRESS = getGetRemoteAddressMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.contrib.verbs.GetRemoteAddressRequest,
      org.tensorflow.contrib.verbs.GetRemoteAddressResponse> getGetRemoteAddressMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.contrib.verbs.GetRemoteAddressRequest,
      org.tensorflow.contrib.verbs.GetRemoteAddressResponse> getGetRemoteAddressMethod() {
    return getGetRemoteAddressMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.contrib.verbs.GetRemoteAddressRequest,
      org.tensorflow.contrib.verbs.GetRemoteAddressResponse> getGetRemoteAddressMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.contrib.verbs.GetRemoteAddressRequest, org.tensorflow.contrib.verbs.GetRemoteAddressResponse> getGetRemoteAddressMethod;
    if ((getGetRemoteAddressMethod = VerbsServiceGrpc.getGetRemoteAddressMethod) == null) {
      synchronized (VerbsServiceGrpc.class) {
        if ((getGetRemoteAddressMethod = VerbsServiceGrpc.getGetRemoteAddressMethod) == null) {
          VerbsServiceGrpc.getGetRemoteAddressMethod = getGetRemoteAddressMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.contrib.verbs.GetRemoteAddressRequest, org.tensorflow.contrib.verbs.GetRemoteAddressResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.VerbsService", "GetRemoteAddress"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.contrib.verbs.GetRemoteAddressRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.contrib.verbs.GetRemoteAddressResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new VerbsServiceMethodDescriptorSupplier("GetRemoteAddress"))
                  .build();
          }
        }
     }
     return getGetRemoteAddressMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static VerbsServiceStub newStub(io.grpc.Channel channel) {
    return new VerbsServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static VerbsServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new VerbsServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static VerbsServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new VerbsServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class VerbsServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void getRemoteAddress(org.tensorflow.contrib.verbs.GetRemoteAddressRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.contrib.verbs.GetRemoteAddressResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetRemoteAddressMethodHelper(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetRemoteAddressMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.contrib.verbs.GetRemoteAddressRequest,
                org.tensorflow.contrib.verbs.GetRemoteAddressResponse>(
                  this, METHODID_GET_REMOTE_ADDRESS)))
          .build();
    }
  }

  /**
   */
  public static final class VerbsServiceStub extends io.grpc.stub.AbstractStub<VerbsServiceStub> {
    private VerbsServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VerbsServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VerbsServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VerbsServiceStub(channel, callOptions);
    }

    /**
     */
    public void getRemoteAddress(org.tensorflow.contrib.verbs.GetRemoteAddressRequest request,
        io.grpc.stub.StreamObserver<org.tensorflow.contrib.verbs.GetRemoteAddressResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetRemoteAddressMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class VerbsServiceBlockingStub extends io.grpc.stub.AbstractStub<VerbsServiceBlockingStub> {
    private VerbsServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VerbsServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VerbsServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VerbsServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public org.tensorflow.contrib.verbs.GetRemoteAddressResponse getRemoteAddress(org.tensorflow.contrib.verbs.GetRemoteAddressRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetRemoteAddressMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class VerbsServiceFutureStub extends io.grpc.stub.AbstractStub<VerbsServiceFutureStub> {
    private VerbsServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VerbsServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VerbsServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VerbsServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<org.tensorflow.contrib.verbs.GetRemoteAddressResponse> getRemoteAddress(
        org.tensorflow.contrib.verbs.GetRemoteAddressRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetRemoteAddressMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_REMOTE_ADDRESS = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final VerbsServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(VerbsServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_REMOTE_ADDRESS:
          serviceImpl.getRemoteAddress((org.tensorflow.contrib.verbs.GetRemoteAddressRequest) request,
              (io.grpc.stub.StreamObserver<org.tensorflow.contrib.verbs.GetRemoteAddressResponse>) responseObserver);
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

  private static abstract class VerbsServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    VerbsServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return org.tensorflow.contrib.verbs.VerbsServiceProtos.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("VerbsService");
    }
  }

  private static final class VerbsServiceFileDescriptorSupplier
      extends VerbsServiceBaseDescriptorSupplier {
    VerbsServiceFileDescriptorSupplier() {}
  }

  private static final class VerbsServiceMethodDescriptorSupplier
      extends VerbsServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    VerbsServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (VerbsServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new VerbsServiceFileDescriptorSupplier())
              .addMethod(getGetRemoteAddressMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
