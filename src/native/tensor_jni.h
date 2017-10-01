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

#ifndef TENSORFLOW_JAVA_TENSOR_JNI_H_
#define TENSORFLOW_JAVA_TENSOR_JNI_H_

#include <jni.h>

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    allocate
 * Signature: (I[JJ)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_TensorNI_allocate(JNIEnv *, jclass,
                                                            jint, jlongArray, jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    allocateScalarBytes
 * Signature: ([B)J
 */
JNIEXPORT jlong JNICALL
Java_com_billpiel_guildsman_TensorNI_allocateScalarBytes(JNIEnv *, jclass, jbyteArray);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    allocateNonScalarBytes
 * Signature: ([J[Ljava/lang/Object;)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_TensorNI_allocateNonScalarBytes(
    JNIEnv *, jclass, jlongArray, jobjectArray);
  
/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    delete
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_TensorNI_delete(JNIEnv *, jclass,
                                                         jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    buffer
 * Signature: (J)Ljava/nio/ByteBuffer;
 */
JNIEXPORT jobject JNICALL Java_com_billpiel_guildsman_TensorNI_buffer(JNIEnv *, jclass,
                                                              jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    dtype
 * Signature: (J)I
 */
JNIEXPORT jint JNICALL Java_com_billpiel_guildsman_TensorNI_dtype(JNIEnv *, jclass,
                                                        jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    shape
 * Signature: (J)[J
 */
JNIEXPORT jlongArray JNICALL Java_com_billpiel_guildsman_TensorNI_shape(JNIEnv *, jclass,
                                                              jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    setValue
 * Signature: (JLjava/lang/Object;)V
 *
 * REQUIRES: The jobject's type and shape are compatible the with the DataType
 * and shape of the Tensor referred to by the jlong handle.
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_TensorNI_setValue(JNIEnv *, jclass,
                                                           jlong, jobject);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarFloat
 * Signature: (J)F
 *
 */
JNIEXPORT jfloat JNICALL Java_com_billpiel_guildsman_TensorNI_scalarFloat(JNIEnv *,
                                                                jclass, jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarDouble
 * Signature: (J)D
 */
JNIEXPORT jdouble JNICALL Java_com_billpiel_guildsman_TensorNI_scalarDouble(JNIEnv *,
                                                                  jclass,
                                                                  jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarInt
 * Signature: (J)I
 */
JNIEXPORT jint JNICALL Java_com_billpiel_guildsman_TensorNI_scalarInt(JNIEnv *, jclass,
                                                            jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarLong
 * Signature: (J)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_TensorNI_scalarLong(JNIEnv *, jclass,
                                                              jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarBoolean
 * Signature: (J)Z
 */
JNIEXPORT jboolean JNICALL Java_com_billpiel_guildsman_TensorNI_scalarBoolean(JNIEnv *,
                                                                    jclass,
                                                                    jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    scalarBytes
 * Signature: (J)[B
 */
JNIEXPORT jbyteArray JNICALL Java_com_billpiel_guildsman_TensorNI_scalarBytes(JNIEnv *,
                                                                    jclass,
                                                                    jlong);

/*
 * Class:     com_billpiel_guildsman_TensorNI
 * Method:    readNDArray
 * Signature: (JLjava/lang/Object;)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_TensorNI_readNDArray(JNIEnv *, jclass,
                                                              jlong, jobject);

#ifdef __cplusplus
}  // extern "C"
#endif  // __cplusplus
#endif  // TENSORFLOW_JAVA_TENSOR_JNI_H_
