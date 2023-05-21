const express = require("express");
const {
  updateTodo,
  deleteTodo,
  doneTodo,
  myTodos,
  newTodo
} = require("../controller/TodoCont");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.route("/todo/new").post(isAuthenticatedUser,newTodo);
router.route("/todos/me").get(isAuthenticatedUser, myTodos);
router.route("/todo/update/:id").put(isAuthenticatedUser, updateTodo);
router.route("/todo/delete/:id").delete(isAuthenticatedUser, deleteTodo);
router.route("/todo/done/:id").put(isAuthenticatedUser, doneTodo);


module.exports = router;