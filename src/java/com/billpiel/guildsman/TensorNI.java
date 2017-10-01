package com.billpiel.guildsman;

import java.lang.reflect.Array;
import java.nio.Buffer;
import java.nio.BufferOverflowException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.DoubleBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.nio.LongBuffer;
import java.util.Arrays;

public final class TensorNI {

    static {
        NativeLibrary.load();
    }
    
    public static native long allocate(int dtype, long[] shape, long byteSize);

    public static native long allocateScalarBytes(byte[] value);

    public static native long allocateNonScalarBytes(long[] shape, Object[] value);
    
    public static native void delete(long handle);

    public static native ByteBuffer buffer(long handle);

    public static native int dtype(long handle);

    public static native long[] shape(long handle);

    public static native void setValue(long handle, Object value);

    public static native float scalarFloat(long handle);

    public static native double scalarDouble(long handle);

    public static native int scalarInt(long handle);

    public static native long scalarLong(long handle);

    public static native boolean scalarBoolean(long handle);

    public static native byte[] scalarBytes(long handle);

    public static native void readNDArray(long handle, Object value);
    
}
