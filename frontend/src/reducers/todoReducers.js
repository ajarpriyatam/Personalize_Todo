import {
    CLEAR_ERRORS,
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
    MY_TODOS_REQUEST,
    MY_TODOS_SUCCESS,
    MY_TODOS_FAIL,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAIL,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAIL,
  } from "../constant/todoConstant"
  
  export const newTodoReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_TODO_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_TODO_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
        };
  
      case CREATE_TODO_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const myTodosReducer = (state = {todos: []}, action) => {
    switch (action.type) {
      case MY_TODOS_REQUEST:
        return {
          loading: true,
        };
  
      case MY_TODOS_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
        };
  
      case MY_TODOS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const deleteTodoReducer = (state = { }, action) => {
    switch (action.type) {
      case DELETE_TODO_REQUEST:
        return {
          loading: true,
        };
  
      case DELETE_TODO_SUCCESS:
        return {
          loading: false,
          deletetodo:action.payload,
        };
  
      case DELETE_TODO_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  
  export const updateTodoReducer = (state = { }, action) => {
    switch (action.type) {
      case UPDATE_TODO_REQUEST:
        return {
          loading: true,
        };
  
      case UPDATE_TODO_SUCCESS:
        return {
          loading: false,
          deletetodo:action.payload,
        };
  
      case UPDATE_TODO_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };