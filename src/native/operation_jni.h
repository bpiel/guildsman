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

#ifndef TENSORFLOW_JAVA_OPERATION_JNI_H_
#define TENSORFLOW_JAVA_OPERATION_JNI_H_

#include <jni.h>

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    name
 * Signature: (J)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_com_billpiel_guildsman_OperationNI_name(JNIEnv *, jclass,
                                                             jlong);

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    type
 * Signature: (J)Ljava/lang/String;
 */
JNIEXPORT jstring JNICALL Java_com_billpiel_guildsman_OperationNI_type(JNIEnv *, jclass,
                                                             jlong);

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    numOutputs
 * Signature: (J)I
 */
JNIEXPORT jint JNICALL Java_com_billpiel_guildsman_OperationNI_numOutputs(JNIEnv *,
                                                                jclass, jlong);

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    outputListLength
 * Signature: (JLjava/lang/String;)I
 */
JNIEXPORT jint JNICALL Java_com_billpiel_guildsman_OperationNI_outputListLength(JNIEnv *,
                                                                      jclass,
                                                                      jlong,
                                                                      jstring);

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    shape
 * Signature: (JJI)[J
 */
JNIEXPORT jlongArray JNICALL Java_com_billpiel_guildsman_OperationNI_shape(JNIEnv *,
                                                                 jclass, jlong,
                                                                 jlong, jint);

/*
 * Class:     com_billpiel_guildsman_OperationNI
 * Method:    dtype
 * Signature: (JJI)I
 */
JNIEXPORT jint JNICALL Java_com_billpiel_guildsman_OperationNI_dtype(JNIEnv *, jclass,
                                                           jlong, jlong, jint);

JNIEXPORT jbyteArray JNICALL Java_com_billpiel_guildsman_OperationNI_toNodeDef(JNIEnv*,
                                                               jclass,
                                                               jlong);

  
#ifdef __cplusplus
}  // extern "C"
#endif  // __cplusplus
#endif  // TENSORFLOW_JAVA_OPERATION_JNI_H_
