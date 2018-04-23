package tensorflow;

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
 * <pre>
 * The TPUProfiler service retrieves performance information about
 * the programs running on connected TPUs over a period of time.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.11.0)",
    comments = "Source: tensorflow/contrib/tpu/profiler/tpu_profiler.proto")
public final class TPUProfilerGrpc {

  private TPUProfilerGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.TPUProfiler";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getProfileMethod()} instead. 
  public static final io.grpc.MethodDescriptor<tensorflow.TpuProfiler.ProfileRequest,
      tensorflow.TpuProfiler.ProfileResponse> METHOD_PROFILE = getProfileMethodHelper();

  private static volatile io.grpc.MethodDescriptor<tensorflow.TpuProfiler.ProfileRequest,
      tensorflow.TpuProfiler.ProfileResponse> getProfileMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<tensorflow.TpuProfiler.ProfileRequest,
      tensorflow.TpuProfiler.ProfileResponse> getProfileMethod() {
    return getProfileMethodHelper();
  }

  private static io.grpc.MethodDescriptor<tensorflow.TpuProfiler.ProfileRequest,
      tensorflow.TpuProfiler.ProfileResponse> getProfileMethodHelper() {
    io.grpc.MethodDescriptor<tensorflow.TpuProfiler.ProfileRequest, tensorflow.TpuProfiler.ProfileResponse> getProfileMethod;
    if ((getProfileMethod = TPUProfilerGrpc.getProfileMethod) == null) {
      synchronized (TPUProfilerGrpc.class) {
        if ((getProfileMethod = TPUProfilerGrpc.getProfileMethod) == null) {
          TPUProfilerGrpc.getProfileMethod = getProfileMethod = 
              io.grpc.MethodDescriptor.<tensorflow.TpuProfiler.ProfileRequest, tensorflow.TpuProfiler.ProfileResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.TPUProfiler", "Profile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfiler.ProfileRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfiler.ProfileResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new TPUProfilerMethodDescriptorSupplier("Profile"))
                  .build();
          }
        }
     }
     return getProfileMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TPUProfilerStub newStub(io.grpc.Channel channel) {
    return new TPUProfilerStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TPUProfilerBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TPUProfilerBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TPUProfilerFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TPUProfilerFutureStub(channel);
  }

  /**
   * <pre>
   * The TPUProfiler service retrieves performance information about
   * the programs running on connected TPUs over a period of time.
   * </pre>
   */
  public static abstract class TPUProfilerImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes, and returns data.
     * </pre>
     */
    public void profile(tensorflow.TpuProfiler.ProfileRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfiler.ProfileResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getProfileMethodHelper(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getProfileMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                tensorflow.TpuProfiler.ProfileRequest,
                tensorflow.TpuProfiler.ProfileResponse>(
                  this, METHODID_PROFILE)))
          .build();
    }
  }

  /**
   * <pre>
   * The TPUProfiler service retrieves performance information about
   * the programs running on connected TPUs over a period of time.
   * </pre>
   */
  public static final class TPUProfilerStub extends io.grpc.stub.AbstractStub<TPUProfilerStub> {
    private TPUProfilerStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfilerStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfilerStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfilerStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes, and returns data.
     * </pre>
     */
    public void profile(tensorflow.TpuProfiler.ProfileRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfiler.ProfileResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getProfileMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The TPUProfiler service retrieves performance information about
   * the programs running on connected TPUs over a period of time.
   * </pre>
   */
  public static final class TPUProfilerBlockingStub extends io.grpc.stub.AbstractStub<TPUProfilerBlockingStub> {
    private TPUProfilerBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfilerBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfilerBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfilerBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes, and returns data.
     * </pre>
     */
    public tensorflow.TpuProfiler.ProfileResponse profile(tensorflow.TpuProfiler.ProfileRequest request) {
      return blockingUnaryCall(
          getChannel(), getProfileMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The TPUProfiler service retrieves performance information about
   * the programs running on connected TPUs over a period of time.
   * </pre>
   */
  public static final class TPUProfilerFutureStub extends io.grpc.stub.AbstractStub<TPUProfilerFutureStub> {
    private TPUProfilerFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfilerFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfilerFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfilerFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes, and returns data.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.TpuProfiler.ProfileResponse> profile(
        tensorflow.TpuProfiler.ProfileRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getProfileMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_PROFILE = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TPUProfilerImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TPUProfilerImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_PROFILE:
          serviceImpl.profile((tensorflow.TpuProfiler.ProfileRequest) request,
              (io.grpc.stub.StreamObserver<tensorflow.TpuProfiler.ProfileResponse>) responseObserver);
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

  private static abstract class TPUProfilerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TPUProfilerBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return tensorflow.TpuProfiler.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TPUProfiler");
    }
  }

  private static final class TPUProfilerFileDescriptorSupplier
      extends TPUProfilerBaseDescriptorSupplier {
    TPUProfilerFileDescriptorSupplier() {}
  }

  private static final class TPUProfilerMethodDescriptorSupplier
      extends TPUProfilerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TPUProfilerMethodDescriptorSupplier(String methodName) {
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
      synchronized (TPUProfilerGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TPUProfilerFileDescriptorSupplier())
              .addMethod(getProfileMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
