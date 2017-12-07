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

#ifndef TENSORFLOW_JAVA_OPERATION_BUILDER_JNI_H_
#define TENSORFLOW_JAVA_OPERATION_BUILDER_JNI_H_

#include <jni.h>

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    allocate
 * Signature: (JLjava/lang/String;Ljava/lang/String;)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_allocate(
    JNIEnv *, jclass, jlong, jstring, jstring);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    finish
 * Signature: (J)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_finish(JNIEnv *,
                                                                    jclass,
                                                                    jlong);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    addInput
 * Signature: (JJI)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_addInput(
    JNIEnv *, jclass, jlong, jlong, jint);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    addInputList
 * Signature: (J[J[I)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_addInputList(
    JNIEnv *, jclass, jlong, jlongArray, jintArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    addControlInput
 * Signature: (JJ)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_addControlInput(
    JNIEnv *, jclass, jlong, jlong);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setDevice
 * Signature: (JLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setDevice(JNIEnv *,
                                                                      jclass,
                                                                      jlong,
                                                                      jstring);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrString
 * Signature: (JLjava/lang/String;[B)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrString(
    JNIEnv *, jclass, jlong, jstring, jbyteArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrInt
 * Signature: (JLjava/lang/String;J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrInt(
    JNIEnv *, jclass, jlong, jstring, jlong);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrIntList
 * Signature: (JLjava/lang/String;[J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrIntList(
    JNIEnv *, jclass, jlong, jstring, jlongArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrFloat
 * Signature: (JLjava/lang/String;F)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrFloat(
    JNIEnv *, jclass, jlong, jstring, jfloat);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrFloatList
 * Signature: (JLjava/lang/String;[F)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrFloatList(
    JNIEnv *, jclass, jlong, jstring, jfloatArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrBool
 * Signature: (JLjava/lang/String;Z)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrBool(
    JNIEnv *, jclass, jlong, jstring, jboolean);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrBoolList
 * Signature: (JLjava/lang/String;[Z)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrBoolList(
    JNIEnv *, jclass, jlong, jstring, jbooleanArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrType
 * Signature: (JLjava/lang/String;I)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrType(
    JNIEnv *, jclass, jlong, jstring, jint);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrTypeList
 * Signature: (JLjava/lang/String;[I)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrTypeList(
    JNIEnv *, jclass, jlong, jstring, jintArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrTensor
 * Signature: (JLjava/lang/String;J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrTensor(
    JNIEnv *, jclass, jlong, jstring, jlong);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrTensorList
 * Signature: (JLjava/lang/String;[J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrTensorList(
    JNIEnv *, jclass, jlong, jstring, jlongArray);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrShape
 * Signature: (JLjava/lang/String;[JI)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrShape(
    JNIEnv *, jclass, jlong, jstring, jlongArray, jint);


/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrShapeList
 * Signature: (JLjava/lang/String;[J[II)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrShapeList
(JNIEnv *, jobject, jlong, jstring, jobjectArray, jintArray, jint);

/*
 * Class:     com_billpiel_guildsman_OperationBuilderNI
 * Method:    setAttrProto
 * Signature: (JLjava/lang/String;[B)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_OperationBuilderNI_setAttrProto(
    JNIEnv *, jclass, jlong, jstring, jbyteArray);

  
#ifdef __cplusplus
}  // extern "C"
#endif  // __cplusplus
#endif  // TENSORFLOW_JAVA_OPERATION_BUILDER_JNI_H_
