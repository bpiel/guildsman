package com.billpiel.guildsman;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

final class NativeLibrary {
  private static final boolean DEBUG =
      System.getProperty("org.tensorflow.NativeLibrary.DEBUG") != null;
  private static final String LIB_TF = "tensorflow";
  private static final String LIB_TF_FW = "tensorflow_framework";
  private static final String LIB_GM_JNI = "guildsman_jni";

  public static void load() throws Exception, UnsatisfiedLinkError{
    if (isLoaded() || tryLoadLibrary()) {
      // Either:
      // (1) The native library has already been statically loaded, OR
      // (2) The required native code has been statically linked (through a custom launcher), OR
      // (3) The native code is part of another library (such as an application-level library)
      // that has already been loaded. For example, tensorflow/examples/android and
      // tensorflow/contrib/android include the required native code in differently named libraries.
      //
      // Doesn't matter how, but it seems the native code is loaded, so nothing else to do.
      return;
    }
    // Native code is not present, perhaps it has been packaged into the .jar file containing this.

    loadLibrary(LIB_TF_FW);
    loadLibrary(LIB_TF);
    loadLibrary(LIB_GM_JNI);
  }

  private static boolean loadLibrary(String libname) throws Exception, UnsatisfiedLinkError{
    final String resourceNameLib = makeResourceName(libname);
    log("resourceName: " + resourceNameLib);
    final InputStream resourceLib =
        NativeLibrary.class.getClassLoader().getResourceAsStream(resourceNameLib);
    if (resourceLib == null) {
      throw new UnsatisfiedLinkError(
          String.format(
              "CANNOT FIND LIBRARY ==> file: %s, OS: %s, architecture: %s" +
              " \n\nPlease contact Bill. ",
              resourceNameLib, os(), architecture()));
    }
    try {
        System.load(extractResource(resourceLib, libname));
    } catch (IOException e) {
      throw new UnsatisfiedLinkError(
          String.format(
              "Unable to extract tensorflow library into a temporary file (%s)", e.toString()));
    }
    return true;
  }

  private static boolean tryLoadLibrary() {
    try {
      System.loadLibrary(LIB_TF);
      System.loadLibrary(LIB_TF_FW);
      System.loadLibrary(LIB_GM_JNI);
      return true;
    } catch (UnsatisfiedLinkError e) {
      log("tryLoadLibraryFailed: " + e.getMessage());
      return false;
    }
  }

  private static boolean isLoaded() {
    try {
      TensorFlowNI.version();
      log("isLoaded: true");
      return true;
    } catch (UnsatisfiedLinkError e) {
      return false;
    }
  }

  private static String mapLibraryName(String libname) throws Exception {
      String os1 = os();
      if (os1.equals("linux")) {
              return "lib" + libname + ".so";
      } else if (os1.equals("darwin")) {
              return "lib" + libname + ".so";              
      } else {
            throw new Exception ("Windows not supported. Please contact Bill.");
      }      
  }
    
    private static String extractResource(InputStream resource, String libname) throws Exception {
    final String sampleFilename = mapLibraryName(libname);
    //final int dot = sampleFilename.indexOf(".");
    //final String prefix = (dot < 0) ? sampleFilename : sampleFilename.substring(0, dot);
    //final String suffix = (dot < 0) ? null : sampleFilename.substring(dot);

    //final File dst = File.createTempFile(prefix, suffix);
    final File dst = new File(System.getProperty("java.io.tmpdir") + "/guildsman", sampleFilename); // TODO make path random
    final File parent = new File(dst.getParent());
    final String dstPath = dst.getAbsolutePath();
    dst.deleteOnExit();
    log("extracting to: " + dstPath);
    parent.mkdir();
    final long nbytes = copy(resource, dst);
    log(String.format("copied %d bytes to %s", nbytes, dstPath));
    return dstPath;
  }

  private static String os() {
    final String p = System.getProperty("os.name").toLowerCase();
    if (p.contains("linux")) {
      return "linux";
    } else if (p.contains("os x") || p.contains("darwin")) {
      return "darwin";
    } else if (p.contains("windows")) {
      return "windows";
    } else {
      return p.replaceAll("\\s", "");
    }
  }

  private static String architecture() {
    final String arch = System.getProperty("os.arch").toLowerCase();
    return (arch.equals("amd64")) ? "x86_64" : arch;
  }

  private static void log(String msg) {
    if (DEBUG) {
      System.err.println("org.tensorflow.NativeLibrary: " + msg);
    }
  }
    
  private static String makeResourceName(String libname) throws Exception{
    return "native/"
        + String.format("%s-%s/", os(), architecture())
        + mapLibraryName(libname);
  }

  private static long copy(InputStream src, File dstFile) throws IOException {
    FileOutputStream dst = new FileOutputStream(dstFile);
    try {
      byte[] buffer = new byte[1 << 20]; // 1MB
      long ret = 0;
      int n = 0;
      while ((n = src.read(buffer)) >= 0) {
        dst.write(buffer, 0, n);
        ret += n;
      }
      return ret;
    } finally {
      dst.close();
      src.close();
    }
  }

  private NativeLibrary() {}
}
