// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/debug/debugger_event_metadata.proto

package third_party.tensorflow.core.debug;

public final class DebuggerEventMetadataOuterClass {
  private DebuggerEventMetadataOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface DebuggerEventMetadataOrBuilder extends
      // @@protoc_insertion_point(interface_extends:third_party.tensorflow.core.debug.DebuggerEventMetadata)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string device = 1;</code>
     */
    java.lang.String getDevice();
    /**
     * <code>string device = 1;</code>
     */
    com.google.protobuf.ByteString
        getDeviceBytes();

    /**
     * <code>int32 output_slot = 2;</code>
     */
    int getOutputSlot();

    /**
     * <code>int32 num_chunks = 3;</code>
     */
    int getNumChunks();

    /**
     * <code>int32 chunk_index = 4;</code>
     */
    int getChunkIndex();
  }
  /**
   * <pre>
   * Encapsulates per-event data related to debugging.
   * </pre>
   *
   * Protobuf type {@code third_party.tensorflow.core.debug.DebuggerEventMetadata}
   */
  public  static final class DebuggerEventMetadata extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:third_party.tensorflow.core.debug.DebuggerEventMetadata)
      DebuggerEventMetadataOrBuilder {
    // Use DebuggerEventMetadata.newBuilder() to construct.
    private DebuggerEventMetadata(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private DebuggerEventMetadata() {
      device_ = "";
      outputSlot_ = 0;
      numChunks_ = 0;
      chunkIndex_ = 0;
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
    }
    private DebuggerEventMetadata(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      int mutable_bitField0_ = 0;
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            default: {
              if (!input.skipField(tag)) {
                done = true;
              }
              break;
            }
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              device_ = s;
              break;
            }
            case 16: {

              outputSlot_ = input.readInt32();
              break;
            }
            case 24: {

              numChunks_ = input.readInt32();
              break;
            }
            case 32: {

              chunkIndex_ = input.readInt32();
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.class, third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.Builder.class);
    }

    public static final int DEVICE_FIELD_NUMBER = 1;
    private volatile java.lang.Object device_;
    /**
     * <code>string device = 1;</code>
     */
    public java.lang.String getDevice() {
      java.lang.Object ref = device_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        device_ = s;
        return s;
      }
    }
    /**
     * <code>string device = 1;</code>
     */
    public com.google.protobuf.ByteString
        getDeviceBytes() {
      java.lang.Object ref = device_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        device_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int OUTPUT_SLOT_FIELD_NUMBER = 2;
    private int outputSlot_;
    /**
     * <code>int32 output_slot = 2;</code>
     */
    public int getOutputSlot() {
      return outputSlot_;
    }

    public static final int NUM_CHUNKS_FIELD_NUMBER = 3;
    private int numChunks_;
    /**
     * <code>int32 num_chunks = 3;</code>
     */
    public int getNumChunks() {
      return numChunks_;
    }

    public static final int CHUNK_INDEX_FIELD_NUMBER = 4;
    private int chunkIndex_;
    /**
     * <code>int32 chunk_index = 4;</code>
     */
    public int getChunkIndex() {
      return chunkIndex_;
    }

    private byte memoizedIsInitialized = -1;
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getDeviceBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, device_);
      }
      if (outputSlot_ != 0) {
        output.writeInt32(2, outputSlot_);
      }
      if (numChunks_ != 0) {
        output.writeInt32(3, numChunks_);
      }
      if (chunkIndex_ != 0) {
        output.writeInt32(4, chunkIndex_);
      }
    }

    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getDeviceBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, device_);
      }
      if (outputSlot_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(2, outputSlot_);
      }
      if (numChunks_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(3, numChunks_);
      }
      if (chunkIndex_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(4, chunkIndex_);
      }
      memoizedSize = size;
      return size;
    }

    private static final long serialVersionUID = 0L;
    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata)) {
        return super.equals(obj);
      }
      third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata other = (third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata) obj;

      boolean result = true;
      result = result && getDevice()
          .equals(other.getDevice());
      result = result && (getOutputSlot()
          == other.getOutputSlot());
      result = result && (getNumChunks()
          == other.getNumChunks());
      result = result && (getChunkIndex()
          == other.getChunkIndex());
      return result;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + DEVICE_FIELD_NUMBER;
      hash = (53 * hash) + getDevice().hashCode();
      hash = (37 * hash) + OUTPUT_SLOT_FIELD_NUMBER;
      hash = (53 * hash) + getOutputSlot();
      hash = (37 * hash) + NUM_CHUNKS_FIELD_NUMBER;
      hash = (53 * hash) + getNumChunks();
      hash = (37 * hash) + CHUNK_INDEX_FIELD_NUMBER;
      hash = (53 * hash) + getChunkIndex();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     * Encapsulates per-event data related to debugging.
     * </pre>
     *
     * Protobuf type {@code third_party.tensorflow.core.debug.DebuggerEventMetadata}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:third_party.tensorflow.core.debug.DebuggerEventMetadata)
        third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadataOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor;
      }

      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.class, third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.Builder.class);
      }

      // Construct using third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      public Builder clear() {
        super.clear();
        device_ = "";

        outputSlot_ = 0;

        numChunks_ = 0;

        chunkIndex_ = 0;

        return this;
      }

      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor;
      }

      public third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata getDefaultInstanceForType() {
        return third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.getDefaultInstance();
      }

      public third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata build() {
        third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      public third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata buildPartial() {
        third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata result = new third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata(this);
        result.device_ = device_;
        result.outputSlot_ = outputSlot_;
        result.numChunks_ = numChunks_;
        result.chunkIndex_ = chunkIndex_;
        onBuilt();
        return result;
      }

      public Builder clone() {
        return (Builder) super.clone();
      }
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          Object value) {
        return (Builder) super.setField(field, value);
      }
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return (Builder) super.clearField(field);
      }
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return (Builder) super.clearOneof(oneof);
      }
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, Object value) {
        return (Builder) super.setRepeatedField(field, index, value);
      }
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          Object value) {
        return (Builder) super.addRepeatedField(field, value);
      }
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata) {
          return mergeFrom((third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata other) {
        if (other == third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata.getDefaultInstance()) return this;
        if (!other.getDevice().isEmpty()) {
          device_ = other.device_;
          onChanged();
        }
        if (other.getOutputSlot() != 0) {
          setOutputSlot(other.getOutputSlot());
        }
        if (other.getNumChunks() != 0) {
          setNumChunks(other.getNumChunks());
        }
        if (other.getChunkIndex() != 0) {
          setChunkIndex(other.getChunkIndex());
        }
        onChanged();
        return this;
      }

      public final boolean isInitialized() {
        return true;
      }

      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object device_ = "";
      /**
       * <code>string device = 1;</code>
       */
      public java.lang.String getDevice() {
        java.lang.Object ref = device_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          device_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string device = 1;</code>
       */
      public com.google.protobuf.ByteString
          getDeviceBytes() {
        java.lang.Object ref = device_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          device_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string device = 1;</code>
       */
      public Builder setDevice(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        device_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string device = 1;</code>
       */
      public Builder clearDevice() {
        
        device_ = getDefaultInstance().getDevice();
        onChanged();
        return this;
      }
      /**
       * <code>string device = 1;</code>
       */
      public Builder setDeviceBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        device_ = value;
        onChanged();
        return this;
      }

      private int outputSlot_ ;
      /**
       * <code>int32 output_slot = 2;</code>
       */
      public int getOutputSlot() {
        return outputSlot_;
      }
      /**
       * <code>int32 output_slot = 2;</code>
       */
      public Builder setOutputSlot(int value) {
        
        outputSlot_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>int32 output_slot = 2;</code>
       */
      public Builder clearOutputSlot() {
        
        outputSlot_ = 0;
        onChanged();
        return this;
      }

      private int numChunks_ ;
      /**
       * <code>int32 num_chunks = 3;</code>
       */
      public int getNumChunks() {
        return numChunks_;
      }
      /**
       * <code>int32 num_chunks = 3;</code>
       */
      public Builder setNumChunks(int value) {
        
        numChunks_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>int32 num_chunks = 3;</code>
       */
      public Builder clearNumChunks() {
        
        numChunks_ = 0;
        onChanged();
        return this;
      }

      private int chunkIndex_ ;
      /**
       * <code>int32 chunk_index = 4;</code>
       */
      public int getChunkIndex() {
        return chunkIndex_;
      }
      /**
       * <code>int32 chunk_index = 4;</code>
       */
      public Builder setChunkIndex(int value) {
        
        chunkIndex_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>int32 chunk_index = 4;</code>
       */
      public Builder clearChunkIndex() {
        
        chunkIndex_ = 0;
        onChanged();
        return this;
      }
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return this;
      }

      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return this;
      }


      // @@protoc_insertion_point(builder_scope:third_party.tensorflow.core.debug.DebuggerEventMetadata)
    }

    // @@protoc_insertion_point(class_scope:third_party.tensorflow.core.debug.DebuggerEventMetadata)
    private static final third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata();
    }

    public static third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<DebuggerEventMetadata>
        PARSER = new com.google.protobuf.AbstractParser<DebuggerEventMetadata>() {
      public DebuggerEventMetadata parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
          return new DebuggerEventMetadata(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<DebuggerEventMetadata> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<DebuggerEventMetadata> getParserForType() {
      return PARSER;
    }

    public third_party.tensorflow.core.debug.DebuggerEventMetadataOuterClass.DebuggerEventMetadata getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n3tensorflow/core/debug/debugger_event_m" +
      "etadata.proto\022!third_party.tensorflow.co" +
      "re.debug\"e\n\025DebuggerEventMetadata\022\016\n\006dev" +
      "ice\030\001 \001(\t\022\023\n\013output_slot\030\002 \001(\005\022\022\n\nnum_ch" +
      "unks\030\003 \001(\005\022\023\n\013chunk_index\030\004 \001(\005b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_third_party_tensorflow_core_debug_DebuggerEventMetadata_descriptor,
        new java.lang.String[] { "Device", "OutputSlot", "NumChunks", "ChunkIndex", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}