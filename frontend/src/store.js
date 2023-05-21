import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userReducer,
} from "./reducers/userReducres";

import {
  
  deleteTodoReducer,
  myTodosReducer,
  newTodoReducer,
  updateTodoReducer,
} from "./reducers/todoReducers";

const reducer = combineReducers({
  newTodo:newTodoReducer,
  user: userReducer,
  myTodos: myTodosReducer,
  deleteTodo: deleteTodoReducer,
  updatetodo:updateTodoReducer
});



const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;