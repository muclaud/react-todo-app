import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "../components/TodoForm";

function TodoList({
  todos,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCreateTodo,
  day,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [priority, setPriority] = useState("normal");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full xl:w-4/12 md:w-6/12 px-0 md:px-2 lg:px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-green-400 w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <h1 className="text-3xl m-2 text-indigo-800">{day}</h1>
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleUpdateTodo={(attributes) =>
                    handleUpdateTodo(todo.id, attributes)
                  }
                  handleDeleteTodo={() => handleDeleteTodo(todo.id)}
                />
              ))}
            </>
          ) : (
            <span>You have no task for this day</span>
          )}
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="flex">
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                add task
              </button>
            </div>

            <TodoForm
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeModal={closeModal}
              openModal={openModal}
              handleCreateTodo={handleCreateTodo}
              priority={priority}
              setPriority={setPriority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
