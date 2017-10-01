package com.billpiel.guildsman;

public final class OperationNI {
  public static native String name(long handle);

  public static native String type(long handle);

  public static native int numOutputs(long handle);

  public static native int outputListLength(long handle, String name);

  public static native long[] shape(long graphHandle, long opHandle, int output);

  public static native int dtype(long graphHandle, long opHandle, int output);
    
  public static native byte[] toNodeDef(long handle);
}
