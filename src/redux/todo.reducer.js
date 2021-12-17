import {
  ADD_NEW_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_COMPLETE,
  CHANGE_FILTER,
} from "./todo.types";
import { fetchTodosFromLocalStorage } from "./utils";

const initialState = {
  items: fetchTodosFromLocalStorage(),
  filter: "all",
};

export function todoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        items: [...state.items, payload.todo],
      };
    case UPDATE_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.id ? { ...item, ...payload.attributes } : item
        ),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.filter,
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case DELETE_COMPLETE:
      return {
        ...state,
        items: state.items.filter(({ completed }) => !completed),
      };
    default:
      return state;
  }
}
