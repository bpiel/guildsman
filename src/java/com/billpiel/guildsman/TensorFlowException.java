package com.billpiel.guildsman;

/** Unchecked exception thrown when executing TensorFlow Graphs. */
public final class TensorFlowException extends RuntimeException {
  TensorFlowException(String message) {
    super(message);
  }
}
