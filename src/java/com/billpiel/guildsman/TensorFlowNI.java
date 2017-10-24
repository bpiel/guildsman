package com.billpiel.guildsman;

public final class TensorFlowNI {
    public static native String version();
    public static native byte[] registeredOpList();

    static {
        NativeLibrary.load();
    }

    public static int mask(int crc) {
        return ((crc >>> 15) | (crc << 17)) + 0xa282ead8;
    }
}
