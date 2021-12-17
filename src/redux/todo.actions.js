import {
  ADD_NEW_TODO,
  UPDATE_TODO,
  DELETE_COMPLETE,
  DELETE_TODO,
  CHANGE_FILTER,
} from "./todo.types";
import { createTodoInstance } from "./utils";

export const createTodoDispatchRequest = (todo) => ({
  type: ADD_NEW_TODO,
  payload: { todo },
});

export const updateTodoDispatchRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes },
});

export const deleteTodoDispatchRequest = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const clearCompletedTodoDispatchRequest = () => ({
  type: DELETE_COMPLETE,
});

export const changeTodoFilterDispatchRequest = (filter) => ({
  type: CHANGE_FILTER,
  payload: { filter },
});

export const createTodo = (task, day, priority) => (dispatch) => {
  const todo = createTodoInstance(task, day, priority);
  dispatch(createTodoDispatchRequest(todo));
};

export const updateTodo = (id, attributes) => (dispatch) => {
  dispatch(updateTodoDispatchRequest(id, attributes));
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch(deleteTodoDispatchRequest(id));
};

export const changeTodoFilter = (filter) => (dispatch) => {
  dispatch(changeTodoFilterDispatchRequest(filter));
};

export const clearCompletedTodo = () => (dispatch) => {
  dispatch(clearCompletedTodoDispatchRequest());
};
