// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/contrib/lite/toco/types.proto

package toco;

public final class Types {
  private Types() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * <pre>
   * IODataType describes the numeric data types of input and output arrays
   * of a model.
   * </pre>
   *
   * Protobuf enum {@code toco.IODataType}
   */
  public enum IODataType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>IO_DATA_TYPE_UNKNOWN = 0;</code>
     */
    IO_DATA_TYPE_UNKNOWN(0),
    /**
     * <pre>
     * Float32, not quantized
     * </pre>
     *
     * <code>FLOAT = 1;</code>
     */
    FLOAT(1),
    /**
     * <pre>
     * Uint8, quantized
     * </pre>
     *
     * <code>QUANTIZED_UINT8 = 2;</code>
     */
    QUANTIZED_UINT8(2),
    /**
     * <pre>
     * Int32, not quantized
     * </pre>
     *
     * <code>INT32 = 3;</code>
     */
    INT32(3),
    /**
     * <pre>
     * Int64, not quantized
     * </pre>
     *
     * <code>INT64 = 4;</code>
     */
    INT64(4),
    /**
     * <pre>
     * String, not quantized
     * </pre>
     *
     * <code>STRING = 5;</code>
     */
    STRING(5),
    /**
     * <pre>
     * Int16, quantized
     * </pre>
     *
     * <code>QUANTIZED_INT16 = 6;</code>
     */
    QUANTIZED_INT16(6),
    ;

    /**
     * <code>IO_DATA_TYPE_UNKNOWN = 0;</code>
     */
    public static final int IO_DATA_TYPE_UNKNOWN_VALUE = 0;
    /**
     * <pre>
     * Float32, not quantized
     * </pre>
     *
     * <code>FLOAT = 1;</code>
     */
    public static final int FLOAT_VALUE = 1;
    /**
     * <pre>
     * Uint8, quantized
     * </pre>
     *
     * <code>QUANTIZED_UINT8 = 2;</code>
     */
    public static final int QUANTIZED_UINT8_VALUE = 2;
    /**
     * <pre>
     * Int32, not quantized
     * </pre>
     *
     * <code>INT32 = 3;</code>
     */
    public static final int INT32_VALUE = 3;
    /**
     * <pre>
     * Int64, not quantized
     * </pre>
     *
     * <code>INT64 = 4;</code>
     */
    public static final int INT64_VALUE = 4;
    /**
     * <pre>
     * String, not quantized
     * </pre>
     *
     * <code>STRING = 5;</code>
     */
    public static final int STRING_VALUE = 5;
    /**
     * <pre>
     * Int16, quantized
     * </pre>
     *
     * <code>QUANTIZED_INT16 = 6;</code>
     */
    public static final int QUANTIZED_INT16_VALUE = 6;


    public final int getNumber() {
      return value;
    }

    /**
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static IODataType valueOf(int value) {
      return forNumber(value);
    }

    public static IODataType forNumber(int value) {
      switch (value) {
        case 0: return IO_DATA_TYPE_UNKNOWN;
        case 1: return FLOAT;
        case 2: return QUANTIZED_UINT8;
        case 3: return INT32;
        case 4: return INT64;
        case 5: return STRING;
        case 6: return QUANTIZED_INT16;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<IODataType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        IODataType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<IODataType>() {
            public IODataType findValueByNumber(int number) {
              return IODataType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return toco.Types.getDescriptor().getEnumTypes().get(0);
    }

    private static final IODataType[] VALUES = values();

    public static IODataType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private IODataType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:toco.IODataType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(tensorflow/contrib/lite/toco/types.pro" +
      "to\022\004toco*}\n\nIODataType\022\030\n\024IO_DATA_TYPE_U" +
      "NKNOWN\020\000\022\t\n\005FLOAT\020\001\022\023\n\017QUANTIZED_UINT8\020\002" +
      "\022\t\n\005INT32\020\003\022\t\n\005INT64\020\004\022\n\n\006STRING\020\005\022\023\n\017QU" +
      "ANTIZED_INT16\020\006"
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
  }

  // @@protoc_insertion_point(outer_class_scope)
}