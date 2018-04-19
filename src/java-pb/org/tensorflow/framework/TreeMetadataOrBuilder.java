// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: tensorflow/core/kernels/boosted_trees/boosted_trees.proto

package org.tensorflow.framework;

public interface TreeMetadataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:tensorflow.boosted_trees.TreeMetadata)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Number of layers grown for this tree.
   * </pre>
   *
   * <code>int32 num_layers_grown = 2;</code>
   */
  int getNumLayersGrown();

  /**
   * <pre>
   * Whether the tree is finalized in that no more layers can be grown.
   * </pre>
   *
   * <code>bool is_finalized = 3;</code>
   */
  boolean getIsFinalized();

  /**
   * <pre>
   * If tree was finalized and post pruning happened, it is possible that cache
   * still refers to some nodes that were deleted or that the node ids changed
   * (e.g. node id 5 became node id 2 due to pruning of the other branch).
   * The mapping below allows us to understand where the old ids now map to and
   * how the values should be adjusted due to post-pruning.
   * The size of the list should be equal to the number of nodes in the tree
   * before post-pruning happened.
   * If the node was pruned, it will have new_node_id equal to the id of a node
   * that this node was collapsed into. For a node that didn't get pruned, it is
   * possible that its id still changed, so new_node_id will have the
   * corresponding id in the pruned tree.
   * If post-pruning didn't happen, or it did and it had no effect (e.g. no
   * nodes got pruned), this list will be empty.
   * </pre>
   *
   * <code>repeated .tensorflow.boosted_trees.TreeMetadata.PostPruneNodeUpdate post_pruned_nodes_meta = 4;</code>
   */
  java.util.List<org.tensorflow.framework.TreeMetadata.PostPruneNodeUpdate> 
      getPostPrunedNodesMetaList();
  /**
   * <pre>
   * If tree was finalized and post pruning happened, it is possible that cache
   * still refers to some nodes that were deleted or that the node ids changed
   * (e.g. node id 5 became node id 2 due to pruning of the other branch).
   * The mapping below allows us to understand where the old ids now map to and
   * how the values should be adjusted due to post-pruning.
   * The size of the list should be equal to the number of nodes in the tree
   * before post-pruning happened.
   * If the node was pruned, it will have new_node_id equal to the id of a node
   * that this node was collapsed into. For a node that didn't get pruned, it is
   * possible that its id still changed, so new_node_id will have the
   * corresponding id in the pruned tree.
   * If post-pruning didn't happen, or it did and it had no effect (e.g. no
   * nodes got pruned), this list will be empty.
   * </pre>
   *
   * <code>repeated .tensorflow.boosted_trees.TreeMetadata.PostPruneNodeUpdate post_pruned_nodes_meta = 4;</code>
   */
  org.tensorflow.framework.TreeMetadata.PostPruneNodeUpdate getPostPrunedNodesMeta(int index);
  /**
   * <pre>
   * If tree was finalized and post pruning happened, it is possible that cache
   * still refers to some nodes that were deleted or that the node ids changed
   * (e.g. node id 5 became node id 2 due to pruning of the other branch).
   * The mapping below allows us to understand where the old ids now map to and
   * how the values should be adjusted due to post-pruning.
   * The size of the list should be equal to the number of nodes in the tree
   * before post-pruning happened.
   * If the node was pruned, it will have new_node_id equal to the id of a node
   * that this node was collapsed into. For a node that didn't get pruned, it is
   * possible that its id still changed, so new_node_id will have the
   * corresponding id in the pruned tree.
   * If post-pruning didn't happen, or it did and it had no effect (e.g. no
   * nodes got pruned), this list will be empty.
   * </pre>
   *
   * <code>repeated .tensorflow.boosted_trees.TreeMetadata.PostPruneNodeUpdate post_pruned_nodes_meta = 4;</code>
   */
  int getPostPrunedNodesMetaCount();
  /**
   * <pre>
   * If tree was finalized and post pruning happened, it is possible that cache
   * still refers to some nodes that were deleted or that the node ids changed
   * (e.g. node id 5 became node id 2 due to pruning of the other branch).
   * The mapping below allows us to understand where the old ids now map to and
   * how the values should be adjusted due to post-pruning.
   * The size of the list should be equal to the number of nodes in the tree
   * before post-pruning happened.
   * If the node was pruned, it will have new_node_id equal to the id of a node
   * that this node was collapsed into. For a node that didn't get pruned, it is
   * possible that its id still changed, so new_node_id will have the
   * corresponding id in the pruned tree.
   * If post-pruning didn't happen, or it did and it had no effect (e.g. no
   * nodes got pruned), this list will be empty.
   * </pre>
   *
   * <code>repeated .tensorflow.boosted_trees.TreeMetadata.PostPruneNodeUpdate post_pruned_nodes_meta = 4;</code>
   */
  java.util.List<? extends org.tensorflow.framework.TreeMetadata.PostPruneNodeUpdateOrBuilder> 
      getPostPrunedNodesMetaOrBuilderList();
  /**
   * <pre>
   * If tree was finalized and post pruning happened, it is possible that cache
   * still refers to some nodes that were deleted or that the node ids changed
   * (e.g. node id 5 became node id 2 due to pruning of the other branch).
   * The mapping below allows us to understand where the old ids now map to and
   * how the values should be adjusted due to post-pruning.
   * The size of the list should be equal to the number of nodes in the tree
   * before post-pruning happened.
   * If the node was pruned, it will have new_node_id equal to the id of a node
   * that this node was collapsed into. For a node that didn't get pruned, it is
   * possible that its id still changed, so new_node_id will have the
   * corresponding id in the pruned tree.
   * If post-pruning didn't happen, or it did and it had no effect (e.g. no
   * nodes got pruned), this list will be empty.
   * </pre>
   *
   * <code>repeated .tensorflow.boosted_trees.TreeMetadata.PostPruneNodeUpdate post_pruned_nodes_meta = 4;</code>
   */
  org.tensorflow.framework.TreeMetadata.PostPruneNodeUpdateOrBuilder getPostPrunedNodesMetaOrBuilder(
      int index);
}
