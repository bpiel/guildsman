/* Copyright 2016 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

#include "graph_jni.h"

#include <memory>
#include <limits>
#include "include/c_api.h"
#include "exception_jni.h"

namespace {
TF_Graph* requireHandle(JNIEnv* env, jlong handle) {
  static_assert(sizeof(jlong) >= sizeof(TF_Graph*),
                "Cannot package C object pointers as a Java long");
  if (handle == 0) {
    throwException(env, kIllegalStateException,
                   "close() has been called on the Graph");
    return nullptr;
  }
  return reinterpret_cast<TF_Graph*>(handle);
}
}  // namespace

// BILL vvvvvvvvvvvvvvvvvvvvvvvvvvv
void resolveOutputs(JNIEnv* env, const char* type, jlongArray src_op,
                    jintArray src_index, TF_Output* dst, jint n) {
  if (env->ExceptionCheck()) return;
  jint len = env->GetArrayLength(src_op);
  if (len != n) {
    throwException(env, kIllegalArgumentException,
                   "expected %d, got %d %s Operations", n, len, type);
    return;
  }
  len = env->GetArrayLength(src_index);
  if (len != n) {
    throwException(env, kIllegalArgumentException,
                   "expected %d, got %d %s Operation output indices", n, len,
                   type);
    return;
  }
  jlong* op_handles = env->GetLongArrayElements(src_op, nullptr);
  jint* indices = env->GetIntArrayElements(src_index, nullptr);
  for (int i = 0; i < n; ++i) {
    if (op_handles[i] == 0) {
      throwException(env, kNullPointerException, "invalid %s (#%d of %d)", type,
                     i, n);
      break;
    }
    dst[i] = TF_Output{reinterpret_cast<TF_Operation*>(op_handles[i]),
                       static_cast<int>(indices[i])};
  }
  env->ReleaseIntArrayElements(src_index, indices, JNI_ABORT);
  env->ReleaseLongArrayElements(src_op, op_handles, JNI_ABORT);
}


// BILL ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_GraphNI_allocate(JNIEnv*, jclass) {
  return reinterpret_cast<jlong>(TF_NewGraph());
}

JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_delete(JNIEnv*, jclass,
                                                        jlong handle) {
  if (handle == 0) return;
  TF_DeleteGraph(reinterpret_cast<TF_Graph*>(handle));
}

JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_GraphNI_operation(JNIEnv* env,
                                                            jclass clazz,
                                                            jlong handle,
                                                            jstring name) {
  TF_Graph* g = requireHandle(env, handle);
  if (g == nullptr) return 0;
  const char* cname = env->GetStringUTFChars(name, nullptr);
  TF_Operation* op = TF_GraphOperationByName(g, cname);
  env->ReleaseStringUTFChars(name, cname);
  return reinterpret_cast<jlong>(op);
}


// BILL vvvvvvvvvvvvvvvvvvvvvvvvvvv

JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_addGradients(
  JNIEnv* env, jclass clazz, jlong handle,
  jlongArray y_op_handles, jintArray y_op_indices,
  jlongArray x_op_handles, jintArray x_op_indices,
  jlongArray dx_op_handles, jintArray dx_op_indices,
  jlongArray dy_op_handles, jintArray dy_op_indices ){

  const jint ny = env->GetArrayLength(y_op_handles);
  const jint nx = env->GetArrayLength(x_op_handles);

  std::unique_ptr<TF_Output[]> x(new TF_Output[nx]);
  std::unique_ptr<TF_Output[]> y(new TF_Output[ny]);
  std::unique_ptr<TF_Output[]> dx(new TF_Output[ny]);
  std::unique_ptr<TF_Output[]> dy(new TF_Output[nx]);

  TF_Graph* g = requireHandle(env, handle);  

  resolveOutputs(env, "y outputs", y_op_handles, y_op_indices, y.get(), ny);
  resolveOutputs(env, "x outputs", x_op_handles, x_op_indices, x.get(), nx);
  resolveOutputs(env, "dx outputs", dx_op_handles, dx_op_indices, dx.get(), ny);
  //resolveOutputs(env, "dy outputs", dy_op_handles, dy_op_indices, dy.get(), nx);

  TF_Status* status = TF_NewStatus();
  
  TF_AddGradients(g,
                  y.get(), static_cast<int>(ny),
                  x.get(), static_cast<int>(nx),
                  dx.get(),
                  status,
                  dy.get());

  if (!throwExceptionIfNotOK(env, status)) {
    TF_DeleteStatus(status);
    return;
  }

  jlong* o = env->GetLongArrayElements(dy_op_handles, nullptr);
  jint* n = env->GetIntArrayElements(dy_op_indices, nullptr);
  for (int i = 0; i < nx; ++i) {
    o[i] = reinterpret_cast<jlong>(dy[i].oper);
    n[i] = reinterpret_cast<jint>(dy[i].index);
  }
  env->ReleaseLongArrayElements(dy_op_handles, o, 0);
  env->ReleaseIntArrayElements(dy_op_indices, n, 0);

  TF_DeleteStatus(status);
  return;
}

// TODO make `pos` stuff less embarrassing
JNIEXPORT jlong  JNICALL Java_com_billpiel_guildsman_GraphNI_nextOperation(
  JNIEnv* env, jclass clazz,
  jlong handle, jlong pos_in,  jlongArray pos_out){

  TF_Graph* g = requireHandle(env, handle);
  size_t pos_st = static_cast<size_t>(pos_in);
  size_t* st_ptr = &pos_st;
  TF_Operation* op = TF_GraphNextOperation(g, st_ptr);

  jlong* pos_ret = env->GetLongArrayElements(pos_out, nullptr);
  pos_ret[0] = static_cast<jlong>(*st_ptr);
  
  env->ReleaseLongArrayElements(pos_out, pos_ret, 0);
  
  return reinterpret_cast<jlong>(op);
}


// BILL ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_importGraphDef(
    JNIEnv* env, jclass clazz, jlong handle, jbyteArray graph_def,
    jstring prefix) {
  TF_Graph* g = requireHandle(env, handle);
  if (g == nullptr) return;

  TF_ImportGraphDefOptions* opts = TF_NewImportGraphDefOptions();

  jboolean is_copy;
  const char* cprefix = env->GetStringUTFChars(prefix, &is_copy);
  TF_ImportGraphDefOptionsSetPrefix(opts, cprefix);
  env->ReleaseStringUTFChars(prefix, cprefix);

  static_assert(sizeof(jbyte) == 1, "unexpected size of the jbyte type");
  jbyte* bytes = env->GetByteArrayElements(graph_def, &is_copy);
  TF_Buffer* buf =
      TF_NewBufferFromString(bytes, env->GetArrayLength(graph_def));
  TF_Status* status = TF_NewStatus();

  TF_GraphImportGraphDef(g, buf, opts, status);
  throwExceptionIfNotOK(env, status);
  // Continue cleaning up resources even if an exception was thrown.

  TF_DeleteStatus(status);
  TF_DeleteBuffer(buf);
  env->ReleaseByteArrayElements(graph_def, bytes, JNI_ABORT);

  TF_DeleteImportGraphDefOptions(opts);
}

JNIEXPORT jbyteArray JNICALL
Java_com_billpiel_guildsman_GraphNI_toGraphDef(JNIEnv* env, jclass clazz, jlong handle) {
  jbyteArray ret = nullptr;
  TF_Graph* g = requireHandle(env, handle);
  if (g == nullptr) return ret;

  TF_Buffer* buf = TF_NewBuffer();
  TF_Status* status = TF_NewStatus();
  TF_GraphToGraphDef(g, buf, status);
  if (throwExceptionIfNotOK(env, status)) {
    // sizeof(jsize) is less than sizeof(size_t) on some platforms.
    if (buf->length > std::numeric_limits<jint>::max()) {
      throwException(env, kIndexOutOfBoundsException,
                     "GraphDef is too large to serialize into a byte[] array");
    } else {
      static_assert(sizeof(jbyte) == 1, "unexpected size of the jbyte type");
      jint ret_len = static_cast<jint>(buf->length);
      ret = env->NewByteArray(ret_len);
      env->SetByteArrayRegion(ret, 0, ret_len,
                              static_cast<const jbyte*>(buf->data));
    }
  }
  TF_DeleteStatus(status);
  TF_DeleteBuffer(buf);
  return ret;
}
