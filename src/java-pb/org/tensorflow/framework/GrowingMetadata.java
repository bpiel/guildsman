// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/kernels/boosted_trees/boosted_trees.proto

package org.tensorflow.framework;

/**
 * Protobuf type {@code tensorflow.boosted_trees.GrowingMetadata}
 */
public  final class GrowingMetadata extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.boosted_trees.GrowingMetadata)
    GrowingMetadataOrBuilder {
  // Use GrowingMetadata.newBuilder() to construct.
  private GrowingMetadata(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GrowingMetadata() {
    numTreesAttempted_ = 0L;
    numLayersAttempted_ = 0L;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private GrowingMetadata(
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
          case 8: {

            numTreesAttempted_ = input.readInt64();
            break;
          }
          case 16: {

            numLayersAttempted_ = input.readInt64();
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
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_GrowingMetadata_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_GrowingMetadata_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.framework.GrowingMetadata.class, org.tensorflow.framework.GrowingMetadata.Builder.class);
  }

  public static final int NUM_TREES_ATTEMPTED_FIELD_NUMBER = 1;
  private long numTreesAttempted_;
  /**
   * <pre>
   * Number of trees that we have attempted to build. After pruning, these
   * trees might have been removed.
   * </pre>
   *
   * <code>int64 num_trees_attempted = 1;</code>
   */
  public long getNumTreesAttempted() {
    return numTreesAttempted_;
  }

  public static final int NUM_LAYERS_ATTEMPTED_FIELD_NUMBER = 2;
  private long numLayersAttempted_;
  /**
   * <pre>
   * Number of layers that we have attempted to build. After pruning, these
   * layers might have been removed.
   * </pre>
   *
   * <code>int64 num_layers_attempted = 2;</code>
   */
  public long getNumLayersAttempted() {
    return numLayersAttempted_;
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
    if (numTreesAttempted_ != 0L) {
      output.writeInt64(1, numTreesAttempted_);
    }
    if (numLayersAttempted_ != 0L) {
      output.writeInt64(2, numLayersAttempted_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (numTreesAttempted_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, numTreesAttempted_);
    }
    if (numLayersAttempted_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(2, numLayersAttempted_);
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
    if (!(obj instanceof org.tensorflow.framework.GrowingMetadata)) {
      return super.equals(obj);
    }
    org.tensorflow.framework.GrowingMetadata other = (org.tensorflow.framework.GrowingMetadata) obj;

    boolean result = true;
    result = result && (getNumTreesAttempted()
        == other.getNumTreesAttempted());
    result = result && (getNumLayersAttempted()
        == other.getNumLayersAttempted());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + NUM_TREES_ATTEMPTED_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getNumTreesAttempted());
    hash = (37 * hash) + NUM_LAYERS_ATTEMPTED_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getNumLayersAttempted());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.framework.GrowingMetadata parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.GrowingMetadata parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.GrowingMetadata parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.GrowingMetadata parseFrom(
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
  public static Builder newBuilder(org.tensorflow.framework.GrowingMetadata prototype) {
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
   * Protobuf type {@code tensorflow.boosted_trees.GrowingMetadata}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.boosted_trees.GrowingMetadata)
      org.tensorflow.framework.GrowingMetadataOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_GrowingMetadata_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_GrowingMetadata_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.framework.GrowingMetadata.class, org.tensorflow.framework.GrowingMetadata.Builder.class);
    }

    // Construct using org.tensorflow.framework.GrowingMetadata.newBuilder()
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
      numTreesAttempted_ = 0L;

      numLayersAttempted_ = 0L;

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_GrowingMetadata_descriptor;
    }

    public org.tensorflow.framework.GrowingMetadata getDefaultInstanceForType() {
      return org.tensorflow.framework.GrowingMetadata.getDefaultInstance();
    }

    public org.tensorflow.framework.GrowingMetadata build() {
      org.tensorflow.framework.GrowingMetadata result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.framework.GrowingMetadata buildPartial() {
      org.tensorflow.framework.GrowingMetadata result = new org.tensorflow.framework.GrowingMetadata(this);
      result.numTreesAttempted_ = numTreesAttempted_;
      result.numLayersAttempted_ = numLayersAttempted_;
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
      if (other instanceof org.tensorflow.framework.GrowingMetadata) {
        return mergeFrom((org.tensorflow.framework.GrowingMetadata)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.framework.GrowingMetadata other) {
      if (other == org.tensorflow.framework.GrowingMetadata.getDefaultInstance()) return this;
      if (other.getNumTreesAttempted() != 0L) {
        setNumTreesAttempted(other.getNumTreesAttempted());
      }
      if (other.getNumLayersAttempted() != 0L) {
        setNumLayersAttempted(other.getNumLayersAttempted());
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
      org.tensorflow.framework.GrowingMetadata parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.framework.GrowingMetadata) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long numTreesAttempted_ ;
    /**
     * <pre>
     * Number of trees that we have attempted to build. After pruning, these
     * trees might have been removed.
     * </pre>
     *
     * <code>int64 num_trees_attempted = 1;</code>
     */
    public long getNumTreesAttempted() {
      return numTreesAttempted_;
    }
    /**
     * <pre>
     * Number of trees that we have attempted to build. After pruning, these
     * trees might have been removed.
     * </pre>
     *
     * <code>int64 num_trees_attempted = 1;</code>
     */
    public Builder setNumTreesAttempted(long value) {
      
      numTreesAttempted_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Number of trees that we have attempted to build. After pruning, these
     * trees might have been removed.
     * </pre>
     *
     * <code>int64 num_trees_attempted = 1;</code>
     */
    public Builder clearNumTreesAttempted() {
      
      numTreesAttempted_ = 0L;
      onChanged();
      return this;
    }

    private long numLayersAttempted_ ;
    /**
     * <pre>
     * Number of layers that we have attempted to build. After pruning, these
     * layers might have been removed.
     * </pre>
     *
     * <code>int64 num_layers_attempted = 2;</code>
     */
    public long getNumLayersAttempted() {
      return numLayersAttempted_;
    }
    /**
     * <pre>
     * Number of layers that we have attempted to build. After pruning, these
     * layers might have been removed.
     * </pre>
     *
     * <code>int64 num_layers_attempted = 2;</code>
     */
    public Builder setNumLayersAttempted(long value) {
      
      numLayersAttempted_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Number of layers that we have attempted to build. After pruning, these
     * layers might have been removed.
     * </pre>
     *
     * <code>int64 num_layers_attempted = 2;</code>
     */
    public Builder clearNumLayersAttempted() {
      
      numLayersAttempted_ = 0L;
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


    // @@protoc_insertion_point(builder_scope:tensorflow.boosted_trees.GrowingMetadata)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.boosted_trees.GrowingMetadata)
  private static final org.tensorflow.framework.GrowingMetadata DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.framework.GrowingMetadata();
  }

  public static org.tensorflow.framework.GrowingMetadata getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GrowingMetadata>
      PARSER = new com.google.protobuf.AbstractParser<GrowingMetadata>() {
    public GrowingMetadata parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new GrowingMetadata(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GrowingMetadata> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GrowingMetadata> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.framework.GrowingMetadata getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

