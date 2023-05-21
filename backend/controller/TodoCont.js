const Todo = require("../models/TodoModel")
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newTodo = catchAsyncErrors(async (req, res, next) => {
  const { desc } = req.body;
  const todo = await Todo.create({
    desc:desc,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    todo
  });
});
exports.myTodos = catchAsyncErrors(async (req, res, next) => {
  const todos = await Todo.find({ user: req.user._id });
  console.log(todos)
  res.status(200).json({
    success: true,
    todos,
  });
});

exports.updateTodo = catchAsyncErrors(async (req, res, next) => {
  const newTodo ={
    desc: req.body.desc,
  };
  const todo = await Todo.findByIdAndUpdate(req.params.id, newTodo, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
   res.status(200).json({
   success: true,
   isupdated:true
  });
});

exports.doneTodo = catchAsyncErrors(async (req, res, next) => {
  const newTodo ={
    done: 1,
  };
  const user = await Todo.findByIdAndUpdate(req.params.id, newTodo, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
   res.status(200).json({
   success: true,
   isDone:true
  });
});

exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return next(new ErrorHander("Todo not found with this Id", 404));
  }
  await todo.remove();
  res.status(200).json({
    success: true,
    message:"Todo Deleted",
    isdeleted:true
  });
});



