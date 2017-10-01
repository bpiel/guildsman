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

#ifndef TENSORFLOW_JAVA_GRAPH_JNI_H_
#define TENSORFLOW_JAVA_GRAPH_JNI_H_

#include <jni.h>

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Class:     com_billpiel_guildsman_GraphNI
 * Method:    allocate
 * Signature: ()J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_GraphNI_allocate(JNIEnv *, jclass);

/*
 * Class:     com_billpiel_guildsman_GraphNI
 * Method:    delete
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_delete(JNIEnv *, jclass,
                                                        jlong);

/*
 * Class:     com_billpiel_guildsman_GraphNI
 * Method:    operation
 * Signature: (JLjava/lang/String;)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_GraphNI_operation(JNIEnv *, jclass,
                                                            jlong, jstring);


JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_addGradients(
                                                        JNIEnv *, jclass, jlong,
  jlongArray , jintArray ,
  jlongArray , jintArray ,
  jlongArray , jintArray ,
  jlongArray , jintArray  );

JNIEXPORT jlong  JNICALL Java_com_billpiel_guildsman_GraphNI_nextOperation(
                                                           JNIEnv *, jclass,
                                                           jlong, jlong,  jlongArray);

  
/*
 * Class:     com_billpiel_guildsman_GraphNI
 * Method:    importGraphDef
 * Signature: (J[BLjava/lang/String;)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_GraphNI_importGraphDef(JNIEnv *,
                                                                jclass, jlong,
                                                                jbyteArray,
                                                                jstring);

/*
 * Class:     com_billpiel_guildsman_GraphNI
 * Method:    toGraphDef
 * Signature: (J)[B
 */
JNIEXPORT jbyteArray JNICALL Java_com_billpiel_guildsman_GraphNI_toGraphDef(JNIEnv *,
                                                                  jclass,
                                                                  jlong);

#ifdef __cplusplus
}  // extern "C"
#endif  // __cplusplus
#endif  // TENSORFLOW_JAVA_GRAPH_JNI_H_
