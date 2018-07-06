// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/kernels/boosted_trees/boosted_trees.proto

package org.tensorflow.framework;

/**
 * <pre>
 * NodeMetadata encodes metadata associated with each node in a tree.
 * </pre>
 *
 * Protobuf type {@code tensorflow.boosted_trees.NodeMetadata}
 */
public  final class NodeMetadata extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.boosted_trees.NodeMetadata)
    NodeMetadataOrBuilder {
  // Use NodeMetadata.newBuilder() to construct.
  private NodeMetadata(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private NodeMetadata() {
    gain_ = 0F;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private NodeMetadata(
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
          case 13: {

            gain_ = input.readFloat();
            break;
          }
          case 18: {
            org.tensorflow.framework.Leaf.Builder subBuilder = null;
            if (originalLeaf_ != null) {
              subBuilder = originalLeaf_.toBuilder();
            }
            originalLeaf_ = input.readMessage(org.tensorflow.framework.Leaf.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(originalLeaf_);
              originalLeaf_ = subBuilder.buildPartial();
            }

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
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_NodeMetadata_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_NodeMetadata_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.framework.NodeMetadata.class, org.tensorflow.framework.NodeMetadata.Builder.class);
  }

  public static final int GAIN_FIELD_NUMBER = 1;
  private float gain_;
  /**
   * <pre>
   * The gain associated with this node.
   * </pre>
   *
   * <code>float gain = 1;</code>
   */
  public float getGain() {
    return gain_;
  }

  public static final int ORIGINAL_LEAF_FIELD_NUMBER = 2;
  private org.tensorflow.framework.Leaf originalLeaf_;
  /**
   * <pre>
   * The original leaf node before this node was split.
   * </pre>
   *
   * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
   */
  public boolean hasOriginalLeaf() {
    return originalLeaf_ != null;
  }
  /**
   * <pre>
   * The original leaf node before this node was split.
   * </pre>
   *
   * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
   */
  public org.tensorflow.framework.Leaf getOriginalLeaf() {
    return originalLeaf_ == null ? org.tensorflow.framework.Leaf.getDefaultInstance() : originalLeaf_;
  }
  /**
   * <pre>
   * The original leaf node before this node was split.
   * </pre>
   *
   * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
   */
  public org.tensorflow.framework.LeafOrBuilder getOriginalLeafOrBuilder() {
    return getOriginalLeaf();
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
    if (gain_ != 0F) {
      output.writeFloat(1, gain_);
    }
    if (originalLeaf_ != null) {
      output.writeMessage(2, getOriginalLeaf());
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (gain_ != 0F) {
      size += com.google.protobuf.CodedOutputStream
        .computeFloatSize(1, gain_);
    }
    if (originalLeaf_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getOriginalLeaf());
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
    if (!(obj instanceof org.tensorflow.framework.NodeMetadata)) {
      return super.equals(obj);
    }
    org.tensorflow.framework.NodeMetadata other = (org.tensorflow.framework.NodeMetadata) obj;

    boolean result = true;
    result = result && (
        java.lang.Float.floatToIntBits(getGain())
        == java.lang.Float.floatToIntBits(
            other.getGain()));
    result = result && (hasOriginalLeaf() == other.hasOriginalLeaf());
    if (hasOriginalLeaf()) {
      result = result && getOriginalLeaf()
          .equals(other.getOriginalLeaf());
    }
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + GAIN_FIELD_NUMBER;
    hash = (53 * hash) + java.lang.Float.floatToIntBits(
        getGain());
    if (hasOriginalLeaf()) {
      hash = (37 * hash) + ORIGINAL_LEAF_FIELD_NUMBER;
      hash = (53 * hash) + getOriginalLeaf().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.framework.NodeMetadata parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.NodeMetadata parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.NodeMetadata parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.NodeMetadata parseFrom(
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
  public static Builder newBuilder(org.tensorflow.framework.NodeMetadata prototype) {
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
   * NodeMetadata encodes metadata associated with each node in a tree.
   * </pre>
   *
   * Protobuf type {@code tensorflow.boosted_trees.NodeMetadata}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.boosted_trees.NodeMetadata)
      org.tensorflow.framework.NodeMetadataOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_NodeMetadata_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_NodeMetadata_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.framework.NodeMetadata.class, org.tensorflow.framework.NodeMetadata.Builder.class);
    }

    // Construct using org.tensorflow.framework.NodeMetadata.newBuilder()
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
      gain_ = 0F;

      if (originalLeafBuilder_ == null) {
        originalLeaf_ = null;
      } else {
        originalLeaf_ = null;
        originalLeafBuilder_ = null;
      }
      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_NodeMetadata_descriptor;
    }

    public org.tensorflow.framework.NodeMetadata getDefaultInstanceForType() {
      return org.tensorflow.framework.NodeMetadata.getDefaultInstance();
    }

    public org.tensorflow.framework.NodeMetadata build() {
      org.tensorflow.framework.NodeMetadata result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.framework.NodeMetadata buildPartial() {
      org.tensorflow.framework.NodeMetadata result = new org.tensorflow.framework.NodeMetadata(this);
      result.gain_ = gain_;
      if (originalLeafBuilder_ == null) {
        result.originalLeaf_ = originalLeaf_;
      } else {
        result.originalLeaf_ = originalLeafBuilder_.build();
      }
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
      if (other instanceof org.tensorflow.framework.NodeMetadata) {
        return mergeFrom((org.tensorflow.framework.NodeMetadata)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.framework.NodeMetadata other) {
      if (other == org.tensorflow.framework.NodeMetadata.getDefaultInstance()) return this;
      if (other.getGain() != 0F) {
        setGain(other.getGain());
      }
      if (other.hasOriginalLeaf()) {
        mergeOriginalLeaf(other.getOriginalLeaf());
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
      org.tensorflow.framework.NodeMetadata parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.framework.NodeMetadata) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private float gain_ ;
    /**
     * <pre>
     * The gain associated with this node.
     * </pre>
     *
     * <code>float gain = 1;</code>
     */
    public float getGain() {
      return gain_;
    }
    /**
     * <pre>
     * The gain associated with this node.
     * </pre>
     *
     * <code>float gain = 1;</code>
     */
    public Builder setGain(float value) {
      
      gain_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The gain associated with this node.
     * </pre>
     *
     * <code>float gain = 1;</code>
     */
    public Builder clearGain() {
      
      gain_ = 0F;
      onChanged();
      return this;
    }

    private org.tensorflow.framework.Leaf originalLeaf_ = null;
    private com.google.protobuf.SingleFieldBuilderV3<
        org.tensorflow.framework.Leaf, org.tensorflow.framework.Leaf.Builder, org.tensorflow.framework.LeafOrBuilder> originalLeafBuilder_;
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public boolean hasOriginalLeaf() {
      return originalLeafBuilder_ != null || originalLeaf_ != null;
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public org.tensorflow.framework.Leaf getOriginalLeaf() {
      if (originalLeafBuilder_ == null) {
        return originalLeaf_ == null ? org.tensorflow.framework.Leaf.getDefaultInstance() : originalLeaf_;
      } else {
        return originalLeafBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public Builder setOriginalLeaf(org.tensorflow.framework.Leaf value) {
      if (originalLeafBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        originalLeaf_ = value;
        onChanged();
      } else {
        originalLeafBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public Builder setOriginalLeaf(
        org.tensorflow.framework.Leaf.Builder builderForValue) {
      if (originalLeafBuilder_ == null) {
        originalLeaf_ = builderForValue.build();
        onChanged();
      } else {
        originalLeafBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public Builder mergeOriginalLeaf(org.tensorflow.framework.Leaf value) {
      if (originalLeafBuilder_ == null) {
        if (originalLeaf_ != null) {
          originalLeaf_ =
            org.tensorflow.framework.Leaf.newBuilder(originalLeaf_).mergeFrom(value).buildPartial();
        } else {
          originalLeaf_ = value;
        }
        onChanged();
      } else {
        originalLeafBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public Builder clearOriginalLeaf() {
      if (originalLeafBuilder_ == null) {
        originalLeaf_ = null;
        onChanged();
      } else {
        originalLeaf_ = null;
        originalLeafBuilder_ = null;
      }

      return this;
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public org.tensorflow.framework.Leaf.Builder getOriginalLeafBuilder() {
      
      onChanged();
      return getOriginalLeafFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    public org.tensorflow.framework.LeafOrBuilder getOriginalLeafOrBuilder() {
      if (originalLeafBuilder_ != null) {
        return originalLeafBuilder_.getMessageOrBuilder();
      } else {
        return originalLeaf_ == null ?
            org.tensorflow.framework.Leaf.getDefaultInstance() : originalLeaf_;
      }
    }
    /**
     * <pre>
     * The original leaf node before this node was split.
     * </pre>
     *
     * <code>.tensorflow.boosted_trees.Leaf original_leaf = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        org.tensorflow.framework.Leaf, org.tensorflow.framework.Leaf.Builder, org.tensorflow.framework.LeafOrBuilder> 
        getOriginalLeafFieldBuilder() {
      if (originalLeafBuilder_ == null) {
        originalLeafBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            org.tensorflow.framework.Leaf, org.tensorflow.framework.Leaf.Builder, org.tensorflow.framework.LeafOrBuilder>(
                getOriginalLeaf(),
                getParentForChildren(),
                isClean());
        originalLeaf_ = null;
      }
      return originalLeafBuilder_;
    }
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }

    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }


    // @@protoc_insertion_point(builder_scope:tensorflow.boosted_trees.NodeMetadata)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.boosted_trees.NodeMetadata)
  private static final org.tensorflow.framework.NodeMetadata DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.framework.NodeMetadata();
  }

  public static org.tensorflow.framework.NodeMetadata getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<NodeMetadata>
      PARSER = new com.google.protobuf.AbstractParser<NodeMetadata>() {
    public NodeMetadata parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new NodeMetadata(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<NodeMetadata> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<NodeMetadata> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.framework.NodeMetadata getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
