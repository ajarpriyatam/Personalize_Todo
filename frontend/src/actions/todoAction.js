import {
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
    MY_TODOS_REQUEST,
    MY_TODOS_SUCCESS,
    MY_TODOS_FAIL,
    DELETE_TODO_REQUEST,
    DELETE_TODO_FAIL,
    DELETE_TODO_SUCCESS,
    UPDATE_TODO_FAIL,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_REQUEST,
    CLEAR_ERRORS,
    DONE_TODO_REQUEST,
    DONE_TODO_SUCCESS,
    DONE_TODO_FAIL,
  } from "../constant/todoConstant";
  
  import axios from "axios";
  
  export const createTodo = (todo) => async (dispatch) => {
    try {
      console.log(todo)
      dispatch({ type: CREATE_TODO_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/todo/new", todo, config);
      dispatch({ type: CREATE_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_TODO_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  export const myTodos = () => async (dispatch) => {
    try {
      dispatch({ type: MY_TODOS_REQUEST });
      const { data } = await axios.get("/api/v1/todos/me");
      console.log(data,"prince")
      dispatch({ type: MY_TODOS_SUCCESS, payload: data.todos});
    } catch (error) {
      dispatch({
        type: MY_TODOS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  export const deleteData= (id) => async (dispatch) => {
    try {
      console.log(id,"prince")
      dispatch({ type: DELETE_TODO_REQUEST });
      const { data } = await axios.delete(`api/v1/todo/delete/${id}`);
      dispatch({ type: DELETE_TODO_SUCCESS, payload: data});
    } catch (error) {
      dispatch({
        type: DELETE_TODO_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
//  
  export const workDone = (id) => async (dispatch) => {
    try {
      dispatch({ type: DONE_TODO_REQUEST });
      const { data } = await axios.put(`api/v1/todo/done/${id}`);
      console.log(data)
      dispatch({ type: DONE_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DONE_TODO_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const updateTodo = (id,tododesc) => async (dispatch) => {
    try {
      console.log(id,"qazxsw")
      dispatch({ type: UPDATE_TODO_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `api/v1/todo/update/${id}`,
        tododesc,
        config
      );
      console.log(data,"qwertyuiop")
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_TODO_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };