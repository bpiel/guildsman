# Guildsman

**NOTE** : This project is pre-pre-alpha, at best. My current goal is to release a *friendly* (docs, examples, tests) alpha before 2018 arrives.

## Resources

I spoke about, and demonstrated, Guildsman at Conj 2017 in Baltimore. You can watch here:

https://www.youtube.com/watch?v=8_HOB62rpvw

If you want to know more, please reach out. Any of these work:
- file an issue
- twitter: @bpiel
- email: on my github profile page
- slack: bpiel @ https://clojurians.slack.com


## YOU CAN HELP!

A few people have expressed interest in helping out with Guildsman. The state of the project makes it impractical for anyone to contribute directly (ie no docs, no tests, highly unstable). BUT, **you can contribute** to TensorFlow in a way that has a **VERY** meaningful impact on what Guildsman is capable of -- by implementing gradients in TensorFlow's C++ layer. The reasons why this is so important are laid out in the video (linked above, especially starting around the 18min mark).

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

- implementation code
- test code
- running the test
- repeat

### Example - BiasAdd

The first PR of mine accepted into TensorFlow implemented the gradient for `BiasAdd`. `BiasAdd` is just a special case of matrix addition that is optimized for neural networks, but that's not important for the purposes of this example. What *is* important is that this is a simple case.

PR: 
https://github.com/tensorflow/tensorflow/pull/12448/files

Python Code (used for reference)
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

C++ Code:
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

Test:
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

Docs referenced:
