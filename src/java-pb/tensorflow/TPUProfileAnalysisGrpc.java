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
 *&#47;/////////////////////////////////////////////////////////////////////////////
 * TPUProfileAnalysis service provide entry point for profiling TPU and for
 * serving profiled data to Tensorboard through GRPC
 * //////////////////////////////////////////////////////////////////////////////
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.11.0)",
    comments = "Source: tensorflow/contrib/tpu/profiler/tpu_profiler_analysis.proto")
public final class TPUProfileAnalysisGrpc {

  private TPUProfileAnalysisGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.TPUProfileAnalysis";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getNewSessionMethod()} instead. 
  public static final io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest,
      tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> METHOD_NEW_SESSION = getNewSessionMethodHelper();

  private static volatile io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest,
      tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> getNewSessionMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest,
      tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> getNewSessionMethod() {
    return getNewSessionMethodHelper();
  }

  private static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest,
      tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> getNewSessionMethodHelper() {
    io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest, tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> getNewSessionMethod;
    if ((getNewSessionMethod = TPUProfileAnalysisGrpc.getNewSessionMethod) == null) {
      synchronized (TPUProfileAnalysisGrpc.class) {
        if ((getNewSessionMethod = TPUProfileAnalysisGrpc.getNewSessionMethod) == null) {
          TPUProfileAnalysisGrpc.getNewSessionMethod = getNewSessionMethod = 
              io.grpc.MethodDescriptor.<tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest, tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.TPUProfileAnalysis", "NewSession"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new TPUProfileAnalysisMethodDescriptorSupplier("NewSession"))
                  .build();
          }
        }
     }
     return getNewSessionMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getEnumSessionsMethod()} instead. 
  public static final io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest,
      tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> METHOD_ENUM_SESSIONS = getEnumSessionsMethodHelper();

  private static volatile io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest,
      tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> getEnumSessionsMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest,
      tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> getEnumSessionsMethod() {
    return getEnumSessionsMethodHelper();
  }

  private static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest,
      tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> getEnumSessionsMethodHelper() {
    io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest, tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> getEnumSessionsMethod;
    if ((getEnumSessionsMethod = TPUProfileAnalysisGrpc.getEnumSessionsMethod) == null) {
      synchronized (TPUProfileAnalysisGrpc.class) {
        if ((getEnumSessionsMethod = TPUProfileAnalysisGrpc.getEnumSessionsMethod) == null) {
          TPUProfileAnalysisGrpc.getEnumSessionsMethod = getEnumSessionsMethod = 
              io.grpc.MethodDescriptor.<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest, tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.TPUProfileAnalysis", "EnumSessions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new TPUProfileAnalysisMethodDescriptorSupplier("EnumSessions"))
                  .build();
          }
        }
     }
     return getEnumSessionsMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getGetSessionToolDataMethod()} instead. 
  public static final io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest,
      tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> METHOD_GET_SESSION_TOOL_DATA = getGetSessionToolDataMethodHelper();

  private static volatile io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest,
      tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> getGetSessionToolDataMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest,
      tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> getGetSessionToolDataMethod() {
    return getGetSessionToolDataMethodHelper();
  }

  private static io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest,
      tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> getGetSessionToolDataMethodHelper() {
    io.grpc.MethodDescriptor<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest, tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> getGetSessionToolDataMethod;
    if ((getGetSessionToolDataMethod = TPUProfileAnalysisGrpc.getGetSessionToolDataMethod) == null) {
      synchronized (TPUProfileAnalysisGrpc.class) {
        if ((getGetSessionToolDataMethod = TPUProfileAnalysisGrpc.getGetSessionToolDataMethod) == null) {
          TPUProfileAnalysisGrpc.getGetSessionToolDataMethod = getGetSessionToolDataMethod = 
              io.grpc.MethodDescriptor.<tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest, tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.TPUProfileAnalysis", "GetSessionToolData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new TPUProfileAnalysisMethodDescriptorSupplier("GetSessionToolData"))
                  .build();
          }
        }
     }
     return getGetSessionToolDataMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TPUProfileAnalysisStub newStub(io.grpc.Channel channel) {
    return new TPUProfileAnalysisStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TPUProfileAnalysisBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TPUProfileAnalysisBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TPUProfileAnalysisFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TPUProfileAnalysisFutureStub(channel);
  }

  /**
   * <pre>
   *&#47;/////////////////////////////////////////////////////////////////////////////
   * TPUProfileAnalysis service provide entry point for profiling TPU and for
   * serving profiled data to Tensorboard through GRPC
   * //////////////////////////////////////////////////////////////////////////////
   * </pre>
   */
  public static abstract class TPUProfileAnalysisImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes.
     * TPUProfileAnalysis service delegate this to TPUProfiler service.
     * Populate the profiled data in repository, then return status to caller.
     * </pre>
     */
    public void newSession(tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getNewSessionMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * Enumerate existing sessions and return available profile tools.
     * </pre>
     */
    public void enumSessions(tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getEnumSessionsMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * Retrieve specific tool's data for specific session.
     * </pre>
     */
    public void getSessionToolData(tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetSessionToolDataMethodHelper(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getNewSessionMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest,
                tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse>(
                  this, METHODID_NEW_SESSION)))
          .addMethod(
            getEnumSessionsMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest,
                tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse>(
                  this, METHODID_ENUM_SESSIONS)))
          .addMethod(
            getGetSessionToolDataMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest,
                tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse>(
                  this, METHODID_GET_SESSION_TOOL_DATA)))
          .build();
    }
  }

  /**
   * <pre>
   *&#47;/////////////////////////////////////////////////////////////////////////////
   * TPUProfileAnalysis service provide entry point for profiling TPU and for
   * serving profiled data to Tensorboard through GRPC
   * //////////////////////////////////////////////////////////////////////////////
   * </pre>
   */
  public static final class TPUProfileAnalysisStub extends io.grpc.stub.AbstractStub<TPUProfileAnalysisStub> {
    private TPUProfileAnalysisStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfileAnalysisStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfileAnalysisStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfileAnalysisStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes.
     * TPUProfileAnalysis service delegate this to TPUProfiler service.
     * Populate the profiled data in repository, then return status to caller.
     * </pre>
     */
    public void newSession(tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getNewSessionMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Enumerate existing sessions and return available profile tools.
     * </pre>
     */
    public void enumSessions(tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getEnumSessionsMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Retrieve specific tool's data for specific session.
     * </pre>
     */
    public void getSessionToolData(tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest request,
        io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetSessionToolDataMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   *&#47;/////////////////////////////////////////////////////////////////////////////
   * TPUProfileAnalysis service provide entry point for profiling TPU and for
   * serving profiled data to Tensorboard through GRPC
   * //////////////////////////////////////////////////////////////////////////////
   * </pre>
   */
  public static final class TPUProfileAnalysisBlockingStub extends io.grpc.stub.AbstractStub<TPUProfileAnalysisBlockingStub> {
    private TPUProfileAnalysisBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfileAnalysisBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfileAnalysisBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfileAnalysisBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes.
     * TPUProfileAnalysis service delegate this to TPUProfiler service.
     * Populate the profiled data in repository, then return status to caller.
     * </pre>
     */
    public tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse newSession(tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest request) {
      return blockingUnaryCall(
          getChannel(), getNewSessionMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Enumerate existing sessions and return available profile tools.
     * </pre>
     */
    public tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse enumSessions(tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest request) {
      return blockingUnaryCall(
          getChannel(), getEnumSessionsMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Retrieve specific tool's data for specific session.
     * </pre>
     */
    public tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse getSessionToolData(tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetSessionToolDataMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   *&#47;/////////////////////////////////////////////////////////////////////////////
   * TPUProfileAnalysis service provide entry point for profiling TPU and for
   * serving profiled data to Tensorboard through GRPC
   * //////////////////////////////////////////////////////////////////////////////
   * </pre>
   */
  public static final class TPUProfileAnalysisFutureStub extends io.grpc.stub.AbstractStub<TPUProfileAnalysisFutureStub> {
    private TPUProfileAnalysisFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TPUProfileAnalysisFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TPUProfileAnalysisFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TPUProfileAnalysisFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Starts a profiling session, blocks until it completes.
     * TPUProfileAnalysis service delegate this to TPUProfiler service.
     * Populate the profiled data in repository, then return status to caller.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse> newSession(
        tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getNewSessionMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Enumerate existing sessions and return available profile tools.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse> enumSessions(
        tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getEnumSessionsMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Retrieve specific tool's data for specific session.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse> getSessionToolData(
        tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetSessionToolDataMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_NEW_SESSION = 0;
  private static final int METHODID_ENUM_SESSIONS = 1;
  private static final int METHODID_GET_SESSION_TOOL_DATA = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TPUProfileAnalysisImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TPUProfileAnalysisImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_NEW_SESSION:
          serviceImpl.newSession((tensorflow.TpuProfilerAnalysis.NewProfileSessionRequest) request,
              (io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.NewProfileSessionResponse>) responseObserver);
          break;
        case METHODID_ENUM_SESSIONS:
          serviceImpl.enumSessions((tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsRequest) request,
              (io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.EnumProfileSessionsAndToolsResponse>) responseObserver);
          break;
        case METHODID_GET_SESSION_TOOL_DATA:
          serviceImpl.getSessionToolData((tensorflow.TpuProfilerAnalysis.ProfileSessionDataRequest) request,
              (io.grpc.stub.StreamObserver<tensorflow.TpuProfilerAnalysis.ProfileSessionDataResponse>) responseObserver);
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

  private static abstract class TPUProfileAnalysisBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TPUProfileAnalysisBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return tensorflow.TpuProfilerAnalysis.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TPUProfileAnalysis");
    }
  }

  private static final class TPUProfileAnalysisFileDescriptorSupplier
      extends TPUProfileAnalysisBaseDescriptorSupplier {
    TPUProfileAnalysisFileDescriptorSupplier() {}
  }

  private static final class TPUProfileAnalysisMethodDescriptorSupplier
      extends TPUProfileAnalysisBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TPUProfileAnalysisMethodDescriptorSupplier(String methodName) {
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
      synchronized (TPUProfileAnalysisGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TPUProfileAnalysisFileDescriptorSupplier())
              .addMethod(getNewSessionMethodHelper())
              .addMethod(getEnumSessionsMethodHelper())
              .addMethod(getGetSessionToolDataMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
