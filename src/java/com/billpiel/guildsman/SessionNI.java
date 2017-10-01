package com.billpiel.guildsman;

import java.util.ArrayList;
import java.util.List;

public final class SessionNI {

  // TODO(ashankar): Remove after TensorFlow 1.2 has been released with allocate2().
  public static native long allocate(long graphHandle);

  public static native long allocate2(long graphHandle, String target, byte[] config);

  public static native void delete(long handle);

  /**
   * Execute a session.
   *
   * <p>The author apologizes for the ugliness of the long argument list of this method. However,
   * take solace in the fact that this is a private method meant to cross the JNI boundary.
   *
   * @param handle to the C API TF_Session object (Session.nativeHandle)
   * @param runOptions serialized representation of a RunOptions protocol buffer, or null
   * @param inputOpHandles (see inputOpIndices)
   * @param inputOpIndices (see inputTensorHandles)
   * @param inputTensorHandles together with inputOpHandles and inputOpIndices specifies the values
   *     that are being "fed" (do not need to be computed) during graph execution.
   *     inputTensorHandles[i] (which correponds to a Tensor.nativeHandle) is considered to be the
   *     inputOpIndices[i]-th output of the Operation inputOpHandles[i]. Thus, it is required that
   *     inputOpHandles.length == inputOpIndices.length == inputTensorHandles.length.
   * @param outputOpHandles (see outputOpIndices)
   * @param outputOpIndices together with outputOpHandles identifies the set of values that should
   *     be computed. The outputOpIndices[i]-th output of the Operation outputOpHandles[i], It is
   *     required that outputOpHandles.length == outputOpIndices.length.
   * @param targetOpHandles is the set of Operations in the graph that are to be executed but whose
   *     output will not be returned
   * @param wantRunMetadata indicates whether metadata about this execution should be returned.
   * @param outputTensorHandles will be filled in with handles to the outputs requested. It is
   *     required that outputTensorHandles.length == outputOpHandles.length.
   * @return if wantRunMetadata is true, serialized representation of the RunMetadata protocol
   *     buffer, false otherwise.
   */
  public static native byte[] run(
      long handle,
      byte[] runOptions,
      long[] inputTensorHandles,
      long[] inputOpHandles,
      int[] inputOpIndices,
      long[] outputOpHandles,
      int[] outputOpIndices,
      long[] targetOpHandles,
      boolean wantRunMetadata,
      long[] outputTensorHandles);
}
