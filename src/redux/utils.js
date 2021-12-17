import { v4 as uuidv4 } from "uuid";

const getCurrentTime = () => new Date().getTime();

export const createTodoInstance = (task, day, priority) => {
  const now = getCurrentTime();

  return {
    id: uuidv4(),
    completed: false,
    createdAt: now,
    updatedAt: now,
    task,
    day,
    priority,
  };
};

export const filterTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter(({ completed }) => !completed);
    case "complete":
      return todos.filter(({ completed }) => completed);
    default:
      return todos;
  }
};
export const priorityTodos = (todos, priority) => {
  switch (priority) {
    case "all":
      return todos;
    case "normal":
      return todos.filter(({ priority }) => priority === "normal");
    case "low":
      return todos.filter(({ priority }) => priority === "low");
    case "high":
      return todos.filter(({ priority }) => priority === "high");
    default:
      return todos;
  }
};

export const getIncompletedTodoCount = (todos) => {
  return todos.filter(({ completed }) => !completed).length;
};

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const fetchTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
