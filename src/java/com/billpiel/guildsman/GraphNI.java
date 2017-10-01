package com.billpiel.guildsman;

public class GraphNI {

    static {
        NativeLibrary.load();
    }

    public static native long allocate();

    public static native void delete(long handle);

    public static native long operation(long handle, String name);

    public static native long nextOperation(long handle, long posIn, long[] posOut);

    public static long[] nextOperation2(long handle, long pos){
        long[] posOut = {0};
        long opHandle = nextOperation(handle, pos, posOut);
        long[] ret = {opHandle, posOut[0]};
        return ret;
    }

    public static native long addGradients(long handle,
                                           long[] yOpHandles, int[] yOpIndices,
                                           long[] xOpHandles, int[] xOpIndices,
                                           long[] dxOpHandles, int[] dxOpIndices,
                                           long[] dyOpHandles, int[] dyOpIndices);

    public static native void importGraphDef(long handle, byte[] graphDef, String prefix)
        throws IllegalArgumentException;

    public static native byte[] toGraphDef(long handle);
}
