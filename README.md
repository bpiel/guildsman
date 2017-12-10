# Guildsman

**NOTE** : This project is in pre-release status. My current goal is to release a *friendly* (docs, examples, tests) alpha sometime in January 2018.

## Resources

I spoke about, and demonstrated, Guildsman at Conj 2017 in Baltimore. You can watch here:

https://www.youtube.com/watch?v=8_HOB62rpvw

If you want to know more, please reach out. Any of these work:
- file an issue
- twitter: @bpiel
- email: on my github profile page
- slack -- https://clojurians.slack.com
  - `#tensorflow`
  - bpiel

During this pre-release phase, I'll try to add to this README as it becomes clear through conversations what others are most interested in or confused by. Once this hits alpha, the project should be able to maintain the README itself, by learning from examples of other good READMEs. This is known as "self-documenting code".

## YOU CAN HELP!

A few people have expressed interest in helping out with Guildsman. The state of the project makes it impractical for anyone to contribute directly (ie no docs, no tests, highly unstable). BUT, **you can contribute** to TensorFlow in a way that has a **VERY** meaningful impact on what Guildsman is capable of -- by implementing gradients in TensorFlow's C++ layer.

**NOTE**: There's been confusion around this, so I want to be very clear. These c++ gradient implementations are going directly to TensorFlow's code base. You submit a PR to TensorFlow. At no point is this code in Guildsman.

The reasons why these gradients are so important are laid out (partially, at least) in the video (linked above, especially starting around the 18min mark). 

## A Guide To Implementing C++ Gradients in TensorFlow

### Prerequisite Knowledge

More Important:
- familiarity with Python
- familiarity with C++ (My c++ is **weak**, but I've gotten by.)

Less Important:

- familiarity with the underlying math

The mathematical logic is already written out in Python. You only need to port it to C++. The difficulty of implementing a gradient varies wildly depending on its complexity. Most are not trivial. But, I don't think a deep understanding of the math makes the porting process easier.

If you *do* want to learn more about the math, this wikipedia article is one place you could start. It describes the context in which the individial gradient implementations are being used, what the higher goal is, and how it is acheived.

https://en.wikipedia.org/wiki/Automatic_differentiation#Reverse_accumulation


### The Process

Besides the actual coding, you'll need to determine which gradient to tackle, call dibs, and get your PR accepted. Each of those steps have their own unique set of challenges. If you have questions -- AFTER reading all of this :) -- please get in touch.

Here are instructions from TF related to contributing, both generally and gradients specifically. I wrote my own notes below, but please read these first.
- https://github.com/tensorflow/tensorflow/blob/master/CONTRIBUTING.md
- https://github.com/tensorflow/tensorflow/tree/master/tensorflow/cc/gradients


- Legal stuff!
  - You **MUST** sign a Contributor License Agreement. If you read the TF instructions that I linked to above, then you already know that.
  - This was a painless process for me, but that's affected by your legal relationship with your employer, or anyone who might own some part of your time/output.

- Find a gradient implementation in the TF Python code that doesn't have a counterpart in c++.
  - See the [gradient TODO list](#gradient-todo-list)
  - This github search should return all the py grads: https://github.com/tensorflow/tensorflow/search?utf8=%E2%9C%93&q=%22ops.RegisterGradient%22&type= 
  - This should return all the c++ grads: https://github.com/tensorflow/tensorflow/search?utf8=%E2%9C%93&q=%22REGISTER_GRADIENT_OP%22&type=
  - Which one should you do???
    - For your first one, just try to find a simple one. Lines of code is a good indicator
    - After that, the optimal choice would maximize `(value to community)/(your time)`
      - Check the prioritized list in the [gradient TODO list](#gradient-todo-list) section.
      - Anything in math_grad.py or nn_grad.py is probably not bad.
      - Any new gradient is better than no gradient. Just do it!
    - You may be able to find github issues that request a specific gradient. Here's one (currently open) that I filed: https://github.com/tensorflow/tensorflow/issues/12686

- Implement the thing.
  - I'm not even going to guess about what would be the most effective words to write here. Instead, there's examples below.
 
- Implement a test.
  - Again, see examples below.
  - The tests are shockingly simple. The good Google TF people have implemented some test helper tooling that takes any operation, calculates the correct gradient values and compares them to the output of a gradient implementation. If the two agree within some margin of error, the test passes! Implementing a test is just a matter of wiring the operation and its gradient (that you wrote) up to this gradient verifier.

- Run the test.

Google has its own build tool, bazel, that TF uses. In addition to compilation (and who knows what else), you also use bazel to run tests. If there's a lot of compilation that needs to occurr before a test can be run (ex: the first time your run a test), you may be waiting for *hours*. Don't worry, subsequent runs will be fast (though, still not as fast as I'd like). Here's an example showing how I run the nn_grad tests:

`sudo tensorflow/tools/ci_build/ci_build.sh CPU bazel test //tensorflow/cc:gradients_nn_grad_test`

That would get called from the root dir of the TF repo.

- Fix code, run test, fix code, run test, fix code, run test....... tests pass! submit PR!
 - Definitely cc me on the PR when you do! (@bpiel)
 

### Example - BiasAdd

The first PR of mine accepted into TensorFlow implemented the gradient for `BiasAdd`. `BiasAdd` is just a special case of matrix addition that is optimized for neural networks, but that's not important for the purposes of this example. What *is* important is that this is a simple case. It's made especially simple by the fact that the gradient for `BiasAdd` is already implemented as its own operation, `BiasAddGrad`. All I had to do was write some glue code and register it so that the auto differentiation logic could find it. This is not usually the case, but there are others like this.

**My PR:**
https://github.com/tensorflow/tensorflow/pull/12448/files

**Python Code (the code to be ported)**
https://github.com/tensorflow/tensorflow/blob/e5306d3dc75ea1b4338dc7b4518824a7698f0f92/tensorflow/python/ops/nn_grad.py#L237

```python
@ops.RegisterGradient("BiasAdd")
def _BiasAddGrad(op, received_grad):
  """Return the gradients for the 2 inputs of bias_op.
  The first input of unused_bias_op is the tensor t, and its gradient is
  just the gradient the unused_bias_op received.
  The second input of unused_bias_op is the bias vector which has one fewer
  dimension than "received_grad" (the batch dimension.)  Its gradient is the
  received gradient Summed on the batch dimension, which is the first dimension.
  Args:
    op: The BiasOp for which we need to generate gradients.
    received_grad: Tensor.  The gradients passed to the BiasOp.
  Returns:
    Two tensors, the first one for the "tensor" input of the BiasOp,
    the second one for the "bias" input of the BiasOp.
  """
  try:
    data_format = op.get_attr("data_format")
  except ValueError:
    data_format = None
  return (received_grad, gen_nn_ops.bias_add_grad(out_backprop=received_grad,
                                                  data_format=data_format))
```

**The C++ code I wrote:**
https://github.com/tensorflow/tensorflow/blob/e5306d3dc75ea1b4338dc7b4518824a7698f0f92/tensorflow/cc/gradients/nn_grad.cc#L106

```c++
Status BiasAddGradHelper(const Scope& scope, const Operation& op,
                         const std::vector<Output>& grad_inputs,
                         std::vector<Output>* grad_outputs) {
  string data_format;
  BiasAddGrad::Attrs input_attrs;
  TF_RETURN_IF_ERROR(
      GetNodeAttr(op.output(0).node()->attrs(), "data_format", &data_format));
  input_attrs.DataFormat(data_format);
  auto dx_1 = BiasAddGrad(scope, grad_inputs[0], input_attrs);
  grad_outputs->push_back(Identity(scope, grad_inputs[0]));
  grad_outputs->push_back(dx_1);
  return scope.status();
}
REGISTER_GRADIENT_OP("BiasAdd", BiasAddGradHelper);
```

**The test I wrote:**
https://github.com/tensorflow/tensorflow/blob/e5306d3dc75ea1b4338dc7b4518824a7698f0f92/tensorflow/cc/gradients/nn_grad_test.cc#L150

```c++
TEST_F(NNGradTest, BiasAddGradHelper) {
  TensorShape shape({4, 5});
  TensorShape bias_shape({5});
  auto x = Placeholder(scope_, DT_FLOAT, Placeholder::Shape(shape));
  auto bias = Placeholder(scope_, DT_FLOAT, Placeholder::Shape(bias_shape));
  auto y = BiasAdd(scope_, x, bias);
  RunTest({x, bias}, {shape, bias_shape}, {y}, {shape});
}
```

**Relevant Docs:**

https://www.tensorflow.org/api_docs/cc/
https://www.tensorflow.org/api_docs/cc/class/tensorflow/ops/bias-add
https://www.tensorflow.org/versions/master/api_docs/cc/class/tensorflow/ops/bias-add-grad
https://www.tensorflow.org/api_docs/cc/struct/tensorflow/ops/bias-add-grad/attrs

https://www.tensorflow.org/api_docs/python/tf/nn/bias_add

https://www.tensorflow.org/api_docs/cc/class/tensorflow/ops/placeholder

### Examples - TODO

I've (currently) had three other grads accepted in the following two PRs. I'll try to get to expanding those into nicer example write-ups like the one above.

https://github.com/tensorflow/tensorflow/pull/12665
https://github.com/tensorflow/tensorflow/pull/12391


### Gradient TODO List

**as of Oct 18, 2017**

#### Prioritized

These seem to be more important. Ordered by priority:

SoftmaxCrossEntropyWithLogits

Floor

Cast

GatherV2

Pow

Sub

Prod

ConcatV2

Slice

Tile

TopKV2


#### All Gradients that are in Python, but not C++

Atan2

AvgPool

AvgPool3D

AvgPool3DGrad

AvgPoolGrad

BadGrad

BatchNormWithGlobalNormalization

Betainc

BiasAddGrad

BiasAddV1

Cast

Ceil

Cholesky

ComplexAbs

Concat

ConcatV2

Conv2DBackpropFilter

Conv2DBackpropInput

Conv3D

Conv3DBackpropFilterV2

Conv3DBackpropInputV2

CopyOp

copy_override

CropAndResize

Cross

CTCLoss

Cumprod

Cumsum

CustomSquare

DebugGradientIdentity

DepthwiseConv2dNative

Digamma

Dilation2D

EluGrad

Enter

Erfc

Exit

ExtractImagePatches

FakeQuantWithMinMaxArgs

FakeQuantWithMinMaxVars

FakeQuantWithMinMaxVarsPerChannel

FFT

FFT2D

FFT3D

Fill

Floor

FloorDiv

FloorMod

FractionalAvgPool

FractionalMaxPool

FusedBatchNorm

FusedBatchNormGrad

FusedBatchNormGradV2

FusedBatchNormV2

Gather

GatherV2

IdentityN

IFFT

IFFT2D

IFFT3D

Igamma

Igammac

InvGrad

IRFFT

IRFFT2D

LoopCond

LRN

MatrixDeterminant

MatrixDiagPart

MatrixInverse

MatrixSetDiag

MatrixSolve

MatrixSolveLs

MatrixTriangularSolve

MaxPool3D

MaxPool3DGrad

MaxPool3DGradGrad

MaxPoolGrad

MaxPoolGradGrad

MaxPoolGradV2

MaxPoolWithArgmax

Merge

NaNGrad

NextIteration

NthElement

PlaceholderWithDefault

Polygamma

Pow

PreventGradient

Print

Prod

ReadVariableOp

ReciprocalGrad

RefEnter

RefExit

RefMerge

RefNextIteration

RefSwitch

ReluGrad

ResizeBicubic

ResizeBilinear

ResizeNearestNeighbor

ResourceGather

Reverse

RFFT

RFFT2D

Rint

Round

RsqrtGrad

SegmentMax

SegmentMean

SegmentMin

SegmentSum

Select

SelfAdjointEigV2

SeluGrad

SigmoidGrad

Slice

SoftmaxCrossEntropyWithLogits

Softplus

SoftplusGrad

Softsign

SparseAdd

SparseDenseCwiseAdd

SparseDenseCwiseDiv

SparseDenseCwiseMul

SparseFillEmptyRows

SparseMatMul

SparseReduceSum

SparseReorder

SparseSegmentMean

SparseSegmentSqrtN

SparseSegmentSum

SparseSoftmax

SparseSoftmaxCrossEntropyWithLogits

SparseSparseMaximum

SparseSparseMinimum

SparseTensorDenseAdd

SparseTensorDenseMatMul

SplitV

SqrtGrad

StridedSlice

StridedSliceGrad

Sub

Svd

Switch

TanhGrad

TensorArrayConcat

TensorArrayConcatV2

TensorArrayConcatV3

TensorArrayGather

TensorArrayGatherV2

TensorArrayGatherV3

TensorArrayRead

TensorArrayReadV2

TensorArrayReadV3

TensorArrayScatter

TensorArrayScatterV2

TensorArrayScatterV3

TensorArraySplit

TensorArraySplitV2

TensorArraySplitV3

TensorArrayWrite

TensorArrayWriteV2

TensorArrayWriteV3

TestStringOutput

Tile

TopK

TopKV2

TruncateDiv

UnsortedSegmentMax

UnsortedSegmentSum

Zeta

