#include <jni.h>

#ifndef TENSORFLOW_JAVA_FUNCTION_JNI_H_
#define TENSORFLOW_JAVA_FUNCTION_JNI_H_
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     com_billpiel_guildsman_FunctionNI
 * Method:    graphToFunction
 * Signature: (JLjava/lang/String;Z[J[J[I[J[I[Ljava/lang/String;)J
 */
JNIEXPORT jlong JNICALL Java_com_billpiel_guildsman_FunctionNI_graphToFunction
  (JNIEnv *, jobject, jlong, jstring, jboolean, jlongArray, jlongArray, jintArray, jlongArray, jintArray, jobjectArray);

/*
 * Class:     com_billpiel_guildsman_FunctionNI
 * Method:    copyToGraph
 * Signature: (JJJ)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_FunctionNI_copyToGraph
  (JNIEnv *, jobject, jlong, jlong, jlong);

/*
 * Class:     com_billpiel_guildsman_FunctionNI
 * Method:    toFunctionDef
 * Signature: (J)[B
 */
JNIEXPORT jbyteArray JNICALL Java_com_billpiel_guildsman_FunctionNI_toFunctionDef
  (JNIEnv *, jobject, jlong);

/*
 * Class:     com_billpiel_guildsman_FunctionNI
 * Method:    delete
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_com_billpiel_guildsman_FunctionNI_delete
  (JNIEnv *, jobject, jlong);

#ifdef __cplusplus
}
#endif
#endif
