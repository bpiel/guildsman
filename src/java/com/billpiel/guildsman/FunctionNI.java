package com.billpiel.guildsman;

public class FunctionNI {

    static {
        NativeLibrary.load();
    }

    public static native long graphToFunction(long fnBodyGraphHandle,
                                              String fnName,
                                              Boolean appendHashToFnName,
                                              long[] opHandles,
                                              long[] inputOpHandles,
                                              int[] inputOpIndices,
                                              long[] outputOpHandles,
                                              int[] outputOpIndices,
                                              String[] outputNames);

    public static native void delete(long handle);

    public static native void copyToGraph(long graphHandle, long fnHandle, long gradHandle);

    public static native byte[] toFunctionDef(long handle);
    
}
