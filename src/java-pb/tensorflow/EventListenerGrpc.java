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
 * EventListener: Receives Event protos, e.g., from debugged TensorFlow
 * runtime(s).
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.11.0)",
    comments = "Source: tensorflow/core/debug/debug_service.proto")
public final class EventListenerGrpc {

  private EventListenerGrpc() {}

  public static final String SERVICE_NAME = "tensorflow.EventListener";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getSendEventsMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.util.Event,
      tensorflow.DebugService.EventReply> METHOD_SEND_EVENTS = getSendEventsMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.util.Event,
      tensorflow.DebugService.EventReply> getSendEventsMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.util.Event,
      tensorflow.DebugService.EventReply> getSendEventsMethod() {
    return getSendEventsMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.util.Event,
      tensorflow.DebugService.EventReply> getSendEventsMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.util.Event, tensorflow.DebugService.EventReply> getSendEventsMethod;
    if ((getSendEventsMethod = EventListenerGrpc.getSendEventsMethod) == null) {
      synchronized (EventListenerGrpc.class) {
        if ((getSendEventsMethod = EventListenerGrpc.getSendEventsMethod) == null) {
          EventListenerGrpc.getSendEventsMethod = getSendEventsMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.util.Event, tensorflow.DebugService.EventReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.EventListener", "SendEvents"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.util.Event.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.DebugService.EventReply.getDefaultInstance()))
                  .setSchemaDescriptor(new EventListenerMethodDescriptorSupplier("SendEvents"))
                  .build();
          }
        }
     }
     return getSendEventsMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getSendTracebacksMethod()} instead. 
  public static final io.grpc.MethodDescriptor<tensorflow.DebugService.CallTraceback,
      tensorflow.DebugService.EventReply> METHOD_SEND_TRACEBACKS = getSendTracebacksMethodHelper();

  private static volatile io.grpc.MethodDescriptor<tensorflow.DebugService.CallTraceback,
      tensorflow.DebugService.EventReply> getSendTracebacksMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<tensorflow.DebugService.CallTraceback,
      tensorflow.DebugService.EventReply> getSendTracebacksMethod() {
    return getSendTracebacksMethodHelper();
  }

  private static io.grpc.MethodDescriptor<tensorflow.DebugService.CallTraceback,
      tensorflow.DebugService.EventReply> getSendTracebacksMethodHelper() {
    io.grpc.MethodDescriptor<tensorflow.DebugService.CallTraceback, tensorflow.DebugService.EventReply> getSendTracebacksMethod;
    if ((getSendTracebacksMethod = EventListenerGrpc.getSendTracebacksMethod) == null) {
      synchronized (EventListenerGrpc.class) {
        if ((getSendTracebacksMethod = EventListenerGrpc.getSendTracebacksMethod) == null) {
          EventListenerGrpc.getSendTracebacksMethod = getSendTracebacksMethod = 
              io.grpc.MethodDescriptor.<tensorflow.DebugService.CallTraceback, tensorflow.DebugService.EventReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.EventListener", "SendTracebacks"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.DebugService.CallTraceback.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.DebugService.EventReply.getDefaultInstance()))
                  .setSchemaDescriptor(new EventListenerMethodDescriptorSupplier("SendTracebacks"))
                  .build();
          }
        }
     }
     return getSendTracebacksMethod;
  }
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  @java.lang.Deprecated // Use {@link #getSendSourceFilesMethod()} instead. 
  public static final io.grpc.MethodDescriptor<org.tensorflow.framework.DebuggedSourceFiles,
      tensorflow.DebugService.EventReply> METHOD_SEND_SOURCE_FILES = getSendSourceFilesMethodHelper();

  private static volatile io.grpc.MethodDescriptor<org.tensorflow.framework.DebuggedSourceFiles,
      tensorflow.DebugService.EventReply> getSendSourceFilesMethod;

  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static io.grpc.MethodDescriptor<org.tensorflow.framework.DebuggedSourceFiles,
      tensorflow.DebugService.EventReply> getSendSourceFilesMethod() {
    return getSendSourceFilesMethodHelper();
  }

  private static io.grpc.MethodDescriptor<org.tensorflow.framework.DebuggedSourceFiles,
      tensorflow.DebugService.EventReply> getSendSourceFilesMethodHelper() {
    io.grpc.MethodDescriptor<org.tensorflow.framework.DebuggedSourceFiles, tensorflow.DebugService.EventReply> getSendSourceFilesMethod;
    if ((getSendSourceFilesMethod = EventListenerGrpc.getSendSourceFilesMethod) == null) {
      synchronized (EventListenerGrpc.class) {
        if ((getSendSourceFilesMethod = EventListenerGrpc.getSendSourceFilesMethod) == null) {
          EventListenerGrpc.getSendSourceFilesMethod = getSendSourceFilesMethod = 
              io.grpc.MethodDescriptor.<org.tensorflow.framework.DebuggedSourceFiles, tensorflow.DebugService.EventReply>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "tensorflow.EventListener", "SendSourceFiles"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  org.tensorflow.framework.DebuggedSourceFiles.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  tensorflow.DebugService.EventReply.getDefaultInstance()))
                  .setSchemaDescriptor(new EventListenerMethodDescriptorSupplier("SendSourceFiles"))
                  .build();
          }
        }
     }
     return getSendSourceFilesMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static EventListenerStub newStub(io.grpc.Channel channel) {
    return new EventListenerStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static EventListenerBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new EventListenerBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static EventListenerFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new EventListenerFutureStub(channel);
  }

  /**
   * <pre>
   * EventListener: Receives Event protos, e.g., from debugged TensorFlow
   * runtime(s).
   * </pre>
   */
  public static abstract class EventListenerImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Client(s) can use this RPC method to send the EventListener Event protos.
     * The Event protos can hold information such as:
     *   1) intermediate tensors from a debugged graph being executed, which can
     *      be sent from DebugIdentity ops configured with grpc URLs.
     *   2) GraphDefs of partition graphs, which can be sent from special debug
     *      ops that get executed immediately after the beginning of the graph
     *      execution.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<org.tensorflow.util.Event> sendEvents(
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      return asyncUnimplementedStreamingCall(getSendEventsMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * Send the tracebacks of a TensorFlow execution call.
     * </pre>
     */
    public void sendTracebacks(tensorflow.DebugService.CallTraceback request,
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      asyncUnimplementedUnaryCall(getSendTracebacksMethodHelper(), responseObserver);
    }

    /**
     * <pre>
     * Send a collection of source code files being debugged.
     * </pre>
     */
    public void sendSourceFiles(org.tensorflow.framework.DebuggedSourceFiles request,
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      asyncUnimplementedUnaryCall(getSendSourceFilesMethodHelper(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSendEventsMethodHelper(),
            asyncBidiStreamingCall(
              new MethodHandlers<
                org.tensorflow.util.Event,
                tensorflow.DebugService.EventReply>(
                  this, METHODID_SEND_EVENTS)))
          .addMethod(
            getSendTracebacksMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                tensorflow.DebugService.CallTraceback,
                tensorflow.DebugService.EventReply>(
                  this, METHODID_SEND_TRACEBACKS)))
          .addMethod(
            getSendSourceFilesMethodHelper(),
            asyncUnaryCall(
              new MethodHandlers<
                org.tensorflow.framework.DebuggedSourceFiles,
                tensorflow.DebugService.EventReply>(
                  this, METHODID_SEND_SOURCE_FILES)))
          .build();
    }
  }

  /**
   * <pre>
   * EventListener: Receives Event protos, e.g., from debugged TensorFlow
   * runtime(s).
   * </pre>
   */
  public static final class EventListenerStub extends io.grpc.stub.AbstractStub<EventListenerStub> {
    private EventListenerStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EventListenerStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EventListenerStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EventListenerStub(channel, callOptions);
    }

    /**
     * <pre>
     * Client(s) can use this RPC method to send the EventListener Event protos.
     * The Event protos can hold information such as:
     *   1) intermediate tensors from a debugged graph being executed, which can
     *      be sent from DebugIdentity ops configured with grpc URLs.
     *   2) GraphDefs of partition graphs, which can be sent from special debug
     *      ops that get executed immediately after the beginning of the graph
     *      execution.
     * </pre>
     */
    public io.grpc.stub.StreamObserver<org.tensorflow.util.Event> sendEvents(
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      return asyncBidiStreamingCall(
          getChannel().newCall(getSendEventsMethodHelper(), getCallOptions()), responseObserver);
    }

    /**
     * <pre>
     * Send the tracebacks of a TensorFlow execution call.
     * </pre>
     */
    public void sendTracebacks(tensorflow.DebugService.CallTraceback request,
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendTracebacksMethodHelper(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Send a collection of source code files being debugged.
     * </pre>
     */
    public void sendSourceFiles(org.tensorflow.framework.DebuggedSourceFiles request,
        io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendSourceFilesMethodHelper(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * EventListener: Receives Event protos, e.g., from debugged TensorFlow
   * runtime(s).
   * </pre>
   */
  public static final class EventListenerBlockingStub extends io.grpc.stub.AbstractStub<EventListenerBlockingStub> {
    private EventListenerBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EventListenerBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EventListenerBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EventListenerBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Send the tracebacks of a TensorFlow execution call.
     * </pre>
     */
    public tensorflow.DebugService.EventReply sendTracebacks(tensorflow.DebugService.CallTraceback request) {
      return blockingUnaryCall(
          getChannel(), getSendTracebacksMethodHelper(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Send a collection of source code files being debugged.
     * </pre>
     */
    public tensorflow.DebugService.EventReply sendSourceFiles(org.tensorflow.framework.DebuggedSourceFiles request) {
      return blockingUnaryCall(
          getChannel(), getSendSourceFilesMethodHelper(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * EventListener: Receives Event protos, e.g., from debugged TensorFlow
   * runtime(s).
   * </pre>
   */
  public static final class EventListenerFutureStub extends io.grpc.stub.AbstractStub<EventListenerFutureStub> {
    private EventListenerFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private EventListenerFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected EventListenerFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new EventListenerFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Send the tracebacks of a TensorFlow execution call.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.DebugService.EventReply> sendTracebacks(
        tensorflow.DebugService.CallTraceback request) {
      return futureUnaryCall(
          getChannel().newCall(getSendTracebacksMethodHelper(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Send a collection of source code files being debugged.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<tensorflow.DebugService.EventReply> sendSourceFiles(
        org.tensorflow.framework.DebuggedSourceFiles request) {
      return futureUnaryCall(
          getChannel().newCall(getSendSourceFilesMethodHelper(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SEND_TRACEBACKS = 0;
  private static final int METHODID_SEND_SOURCE_FILES = 1;
  private static final int METHODID_SEND_EVENTS = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final EventListenerImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(EventListenerImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SEND_TRACEBACKS:
          serviceImpl.sendTracebacks((tensorflow.DebugService.CallTraceback) request,
              (io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply>) responseObserver);
          break;
        case METHODID_SEND_SOURCE_FILES:
          serviceImpl.sendSourceFiles((org.tensorflow.framework.DebuggedSourceFiles) request,
              (io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply>) responseObserver);
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
        case METHODID_SEND_EVENTS:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.sendEvents(
              (io.grpc.stub.StreamObserver<tensorflow.DebugService.EventReply>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class EventListenerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    EventListenerBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return tensorflow.DebugService.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("EventListener");
    }
  }

  private static final class EventListenerFileDescriptorSupplier
      extends EventListenerBaseDescriptorSupplier {
    EventListenerFileDescriptorSupplier() {}
  }

  private static final class EventListenerMethodDescriptorSupplier
      extends EventListenerBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    EventListenerMethodDescriptorSupplier(String methodName) {
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
      synchronized (EventListenerGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new EventListenerFileDescriptorSupplier())
              .addMethod(getSendEventsMethodHelper())
              .addMethod(getSendTracebacksMethodHelper())
              .addMethod(getSendSourceFilesMethodHelper())
              .build();
        }
      }
    }
    return result;
  }
}
