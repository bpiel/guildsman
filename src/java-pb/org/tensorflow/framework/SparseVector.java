// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/kernels/boosted_trees/boosted_trees.proto

package org.tensorflow.framework;

/**
 * Protobuf type {@code tensorflow.boosted_trees.SparseVector}
 */
public  final class SparseVector extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:tensorflow.boosted_trees.SparseVector)
    SparseVectorOrBuilder {
  // Use SparseVector.newBuilder() to construct.
  private SparseVector(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SparseVector() {
    index_ = java.util.Collections.emptyList();
    value_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private SparseVector(
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
            if (!((mutable_bitField0_ & 0x00000001) == 0x00000001)) {
              index_ = new java.util.ArrayList<java.lang.Integer>();
              mutable_bitField0_ |= 0x00000001;
            }
            index_.add(input.readInt32());
            break;
          }
          case 10: {
            int length = input.readRawVarint32();
            int limit = input.pushLimit(length);
            if (!((mutable_bitField0_ & 0x00000001) == 0x00000001) && input.getBytesUntilLimit() > 0) {
              index_ = new java.util.ArrayList<java.lang.Integer>();
              mutable_bitField0_ |= 0x00000001;
            }
            while (input.getBytesUntilLimit() > 0) {
              index_.add(input.readInt32());
            }
            input.popLimit(limit);
            break;
          }
          case 21: {
            if (!((mutable_bitField0_ & 0x00000002) == 0x00000002)) {
              value_ = new java.util.ArrayList<java.lang.Float>();
              mutable_bitField0_ |= 0x00000002;
            }
            value_.add(input.readFloat());
            break;
          }
          case 18: {
            int length = input.readRawVarint32();
            int limit = input.pushLimit(length);
            if (!((mutable_bitField0_ & 0x00000002) == 0x00000002) && input.getBytesUntilLimit() > 0) {
              value_ = new java.util.ArrayList<java.lang.Float>();
              mutable_bitField0_ |= 0x00000002;
            }
            while (input.getBytesUntilLimit() > 0) {
              value_.add(input.readFloat());
            }
            input.popLimit(limit);
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
      if (((mutable_bitField0_ & 0x00000001) == 0x00000001)) {
        index_ = java.util.Collections.unmodifiableList(index_);
      }
      if (((mutable_bitField0_ & 0x00000002) == 0x00000002)) {
        value_ = java.util.Collections.unmodifiableList(value_);
      }
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_SparseVector_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_SparseVector_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            org.tensorflow.framework.SparseVector.class, org.tensorflow.framework.SparseVector.Builder.class);
  }

  public static final int INDEX_FIELD_NUMBER = 1;
  private java.util.List<java.lang.Integer> index_;
  /**
   * <code>repeated int32 index = 1;</code>
   */
  public java.util.List<java.lang.Integer>
      getIndexList() {
    return index_;
  }
  /**
   * <code>repeated int32 index = 1;</code>
   */
  public int getIndexCount() {
    return index_.size();
  }
  /**
   * <code>repeated int32 index = 1;</code>
   */
  public int getIndex(int index) {
    return index_.get(index);
  }
  private int indexMemoizedSerializedSize = -1;

  public static final int VALUE_FIELD_NUMBER = 2;
  private java.util.List<java.lang.Float> value_;
  /**
   * <code>repeated float value = 2;</code>
   */
  public java.util.List<java.lang.Float>
      getValueList() {
    return value_;
  }
  /**
   * <code>repeated float value = 2;</code>
   */
  public int getValueCount() {
    return value_.size();
  }
  /**
   * <code>repeated float value = 2;</code>
   */
  public float getValue(int index) {
    return value_.get(index);
  }
  private int valueMemoizedSerializedSize = -1;

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
    getSerializedSize();
    if (getIndexList().size() > 0) {
      output.writeUInt32NoTag(10);
      output.writeUInt32NoTag(indexMemoizedSerializedSize);
    }
    for (int i = 0; i < index_.size(); i++) {
      output.writeInt32NoTag(index_.get(i));
    }
    if (getValueList().size() > 0) {
      output.writeUInt32NoTag(18);
      output.writeUInt32NoTag(valueMemoizedSerializedSize);
    }
    for (int i = 0; i < value_.size(); i++) {
      output.writeFloatNoTag(value_.get(i));
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    {
      int dataSize = 0;
      for (int i = 0; i < index_.size(); i++) {
        dataSize += com.google.protobuf.CodedOutputStream
          .computeInt32SizeNoTag(index_.get(i));
      }
      size += dataSize;
      if (!getIndexList().isEmpty()) {
        size += 1;
        size += com.google.protobuf.CodedOutputStream
            .computeInt32SizeNoTag(dataSize);
      }
      indexMemoizedSerializedSize = dataSize;
    }
    {
      int dataSize = 0;
      dataSize = 4 * getValueList().size();
      size += dataSize;
      if (!getValueList().isEmpty()) {
        size += 1;
        size += com.google.protobuf.CodedOutputStream
            .computeInt32SizeNoTag(dataSize);
      }
      valueMemoizedSerializedSize = dataSize;
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
    if (!(obj instanceof org.tensorflow.framework.SparseVector)) {
      return super.equals(obj);
    }
    org.tensorflow.framework.SparseVector other = (org.tensorflow.framework.SparseVector) obj;

    boolean result = true;
    result = result && getIndexList()
        .equals(other.getIndexList());
    result = result && getValueList()
        .equals(other.getValueList());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (getIndexCount() > 0) {
      hash = (37 * hash) + INDEX_FIELD_NUMBER;
      hash = (53 * hash) + getIndexList().hashCode();
    }
    if (getValueCount() > 0) {
      hash = (37 * hash) + VALUE_FIELD_NUMBER;
      hash = (53 * hash) + getValueList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static org.tensorflow.framework.SparseVector parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.SparseVector parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.SparseVector parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static org.tensorflow.framework.SparseVector parseFrom(
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
  public static Builder newBuilder(org.tensorflow.framework.SparseVector prototype) {
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
   * Protobuf type {@code tensorflow.boosted_trees.SparseVector}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:tensorflow.boosted_trees.SparseVector)
      org.tensorflow.framework.SparseVectorOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_SparseVector_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_SparseVector_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              org.tensorflow.framework.SparseVector.class, org.tensorflow.framework.SparseVector.Builder.class);
    }

    // Construct using org.tensorflow.framework.SparseVector.newBuilder()
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
      index_ = java.util.Collections.emptyList();
      bitField0_ = (bitField0_ & ~0x00000001);
      value_ = java.util.Collections.emptyList();
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return org.tensorflow.framework.BoostedTreesProtos.internal_static_tensorflow_boosted_trees_SparseVector_descriptor;
    }

    public org.tensorflow.framework.SparseVector getDefaultInstanceForType() {
      return org.tensorflow.framework.SparseVector.getDefaultInstance();
    }

    public org.tensorflow.framework.SparseVector build() {
      org.tensorflow.framework.SparseVector result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public org.tensorflow.framework.SparseVector buildPartial() {
      org.tensorflow.framework.SparseVector result = new org.tensorflow.framework.SparseVector(this);
      int from_bitField0_ = bitField0_;
      if (((bitField0_ & 0x00000001) == 0x00000001)) {
        index_ = java.util.Collections.unmodifiableList(index_);
        bitField0_ = (bitField0_ & ~0x00000001);
      }
      result.index_ = index_;
      if (((bitField0_ & 0x00000002) == 0x00000002)) {
        value_ = java.util.Collections.unmodifiableList(value_);
        bitField0_ = (bitField0_ & ~0x00000002);
      }
      result.value_ = value_;
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
      if (other instanceof org.tensorflow.framework.SparseVector) {
        return mergeFrom((org.tensorflow.framework.SparseVector)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(org.tensorflow.framework.SparseVector other) {
      if (other == org.tensorflow.framework.SparseVector.getDefaultInstance()) return this;
      if (!other.index_.isEmpty()) {
        if (index_.isEmpty()) {
          index_ = other.index_;
          bitField0_ = (bitField0_ & ~0x00000001);
        } else {
          ensureIndexIsMutable();
          index_.addAll(other.index_);
        }
        onChanged();
      }
      if (!other.value_.isEmpty()) {
        if (value_.isEmpty()) {
          value_ = other.value_;
          bitField0_ = (bitField0_ & ~0x00000002);
        } else {
          ensureValueIsMutable();
          value_.addAll(other.value_);
        }
        onChanged();
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
      org.tensorflow.framework.SparseVector parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (org.tensorflow.framework.SparseVector) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<java.lang.Integer> index_ = java.util.Collections.emptyList();
    private void ensureIndexIsMutable() {
      if (!((bitField0_ & 0x00000001) == 0x00000001)) {
        index_ = new java.util.ArrayList<java.lang.Integer>(index_);
        bitField0_ |= 0x00000001;
       }
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public java.util.List<java.lang.Integer>
        getIndexList() {
      return java.util.Collections.unmodifiableList(index_);
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public int getIndexCount() {
      return index_.size();
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public int getIndex(int index) {
      return index_.get(index);
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public Builder setIndex(
        int index, int value) {
      ensureIndexIsMutable();
      index_.set(index, value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public Builder addIndex(int value) {
      ensureIndexIsMutable();
      index_.add(value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public Builder addAllIndex(
        java.lang.Iterable<? extends java.lang.Integer> values) {
      ensureIndexIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, index_);
      onChanged();
      return this;
    }
    /**
     * <code>repeated int32 index = 1;</code>
     */
    public Builder clearIndex() {
      index_ = java.util.Collections.emptyList();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }

    private java.util.List<java.lang.Float> value_ = java.util.Collections.emptyList();
    private void ensureValueIsMutable() {
      if (!((bitField0_ & 0x00000002) == 0x00000002)) {
        value_ = new java.util.ArrayList<java.lang.Float>(value_);
        bitField0_ |= 0x00000002;
       }
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public java.util.List<java.lang.Float>
        getValueList() {
      return java.util.Collections.unmodifiableList(value_);
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public int getValueCount() {
      return value_.size();
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public float getValue(int index) {
      return value_.get(index);
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public Builder setValue(
        int index, float value) {
      ensureValueIsMutable();
      value_.set(index, value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public Builder addValue(float value) {
      ensureValueIsMutable();
      value_.add(value);
      onChanged();
      return this;
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public Builder addAllValue(
        java.lang.Iterable<? extends java.lang.Float> values) {
      ensureValueIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, value_);
      onChanged();
      return this;
    }
    /**
     * <code>repeated float value = 2;</code>
     */
    public Builder clearValue() {
      value_ = java.util.Collections.emptyList();
      bitField0_ = (bitField0_ & ~0x00000002);
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


    // @@protoc_insertion_point(builder_scope:tensorflow.boosted_trees.SparseVector)
  }

  // @@protoc_insertion_point(class_scope:tensorflow.boosted_trees.SparseVector)
  private static final org.tensorflow.framework.SparseVector DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new org.tensorflow.framework.SparseVector();
  }

  public static org.tensorflow.framework.SparseVector getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SparseVector>
      PARSER = new com.google.protobuf.AbstractParser<SparseVector>() {
    public SparseVector parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new SparseVector(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<SparseVector> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SparseVector> getParserForType() {
    return PARSER;
  }

  public org.tensorflow.framework.SparseVector getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

