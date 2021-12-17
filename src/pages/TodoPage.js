import React from "react";

import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  changeTodoFilter,
  clearCompletedTodo,
} from "../redux/todo.actions";
import { filterTodos, getIncompletedTodoCount } from "../redux/utils";
import ActionPanel from "../components/ActionPanel";

function TodoPage({
  createTodo,
  updateTodo,
  deleteTodo,
  changeTodoFilter,
  clearCompletedTodo,
  todos,
  filter,
  incompletedCount,
}) {
  const handleCreateTodo = (task, day, priority) =>
    createTodo(task, day, priority);
  const handleUpdateTodo = (id, attributes) => updateTodo(id, attributes);
  const handleDeleteTodo = (id) => deleteTodo(id);
  const handleChangeFilter = (filter) => changeTodoFilter(filter);
  const handleClearComplete = () => clearCompletedTodo();

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <>
      <section className="bg-green-600 min-h-screen-100">
        <div className="justify-center text-center flex flex-wrap">
          <div className="w-full xl:px-12 md:px-4 px-0">
            <div className="mx-auto px-4">
              <h1 className="my-12 text-6xl font-bold text-indigo-800">
                Weekly todo app
              </h1>
              <ActionPanel
                handleChangeFilter={handleChangeFilter}
                handleClearComplete={handleClearComplete}
                filter={filter}
                incompletedCount={incompletedCount}
              />
              <div className="flex flex-wrap">
                {days.map((day, i) => (
                  <TodoList
                    key={i}
                    todos={todos.filter((todo) => todo.day === day)}
                    handleCreateTodo={(task, priority) =>
                      handleCreateTodo(task, day, priority)
                    }
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    day={day}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = ({ todo }) => {
  const { filter, items } = todo;
  const todos = filterTodos(items, filter);
  const incompletedCount = getIncompletedTodoCount(todo.items);

  return {
    todos,
    filter,
    incompletedCount,
  };
};

const mapDispatchToProps = {
  createTodo,
  updateTodo,
  deleteTodo,
  changeTodoFilter,
  clearCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
