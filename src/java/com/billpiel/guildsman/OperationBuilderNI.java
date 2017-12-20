package com.billpiel.guildsman;

import java.nio.charset.Charset;

public final class OperationBuilderNI {

    static {
        NativeLibrary.load();
    }
    
    public static void setAttr(long handle, String name, String value) {
        setAttr(handle, name, value.getBytes(Charset.forName("UTF-8")));
    }

    public static void setAttr(long handle, String name, byte[] value) {
        setAttrString(handle, name, value);
    }

    public static void setAttr(long handle, String name, long value) {
         setAttrInt(handle, name, value);
    }

    public static void setAttr(long handle, String name, long[] value) {
        setAttrIntList(handle, name, value);
    }

    public static void setAttr(long handle, String name, float value) {
        setAttrFloat(handle, name, value);
    }

    public static void setAttr(long handle, String name, float[] value) {
        setAttrFloatList(handle, name, value);
    }

    public static void setAttr(long handle, String name, boolean value) {
        setAttrBool(handle, name, value);
    }

    public static void setAttr(long handle, String name, boolean[] value) {
        setAttrBoolList(handle, name, value);
    }

    // public static void setAttr(long handle, String name, DataType value) {
    //     setAttrType(handle, name, value.c());
    // }

    // public static void setAttr(long handle, String name, DataType[] value) {
    //     int[] ctypes = new int[value.length];
    //     for (int i = 0; i < value.length; ++i) {
    //         ctypes[i] = value[i].c();
    //     }
    //     setAttrTypeList(handle, name, ctypes);
    // }

    // public static void setAttr(long handle, String name, Tensor value) {
    //     setAttrTensor(handle, name, value.getNativeHandle());
    // }

    // public static void setAttr(long handle, String name, Tensor[] value) {
    //     long[] handles = new long[value.length];
    //     int idx = 0;
    //     for (Tensor t : value) {
    //         handles[idx++] = t.getNativeHandle();
    //     }
    //     setAttrTensorList(handle, name, handles);
    // }

    // public static void setAttr(long handle, String name, Shape value) {
    //     setAttrShape(handle, name, value.asArray(), value.numDimensions());
    // }

    public static native long allocate(long graphHandle, String type, String name);

    public static native long finish(long handle);

    public static native void addInput(long handle, long opHandle, int index);

    public static native void addInputList(long handle, long[] opHandles, int[] indices);

    public static native void addControlInput(long handle, long opHandle);

    public static native void setDevice(long handle, String device);

    // The names of all the setAttr* family functions below correspond to the C library types, not the
    // Java library types. Roughly, setAttrFoo calls the TensorFlow C library function: TF_SetAttrFoo.
    //
    // TODO(ashankar):
    // - setAttrStringList: Which would take in an array of byte[] (java Strings will need to be UTF-8
    //   encoded?)
    // - setAttrShapeList: Which would take in a long[][]

    public static native void setAttrString(long handle, String name, byte[] value);

    public static native void setAttrInt(long handle, String name, long value);

    public static native void setAttrIntList(long handle, String name, long[] value);

    public static native void setAttrFloat(long handle, String name, float value);

    public static native void setAttrFloatList(long handle, String name, float[] value);

    public static native void setAttrBool(long handle, String name, boolean value);

    public static native void setAttrBoolList(long handle, String name, boolean[] value);

    public static native void setAttrType(long handle, String name, int type);

    public static native void setAttrTypeList(long handle, String name, int[] type);

    public static native void setAttrTensor(long handle, String name, long tensorHandle);

    public static native void setAttrTensorList(long handle, String name, long[] tensorHandle);

    public static native void setAttrShape(long handle, String name, long[] shape, int numDims);

    public static native void setAttrShapeList(long handle, String name, long[][] shapes, int[] numDims, int numShapes);

    public static native void setAttrProto(long handle, String name, byte[] value);
}
