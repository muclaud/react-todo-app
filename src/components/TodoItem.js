import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";

function TodoItem({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const { completed, task, priority } = todo;

  const [editMode, setEditMode] = useState(false);

  const onHandleUpdateTodo = () => handleUpdateTodo({ completed: !completed });
  const onHandleDeleteTodo = () => handleDeleteTodo();
  const onEditTodo = () => {
    setEditMode(true);
  };
  const onSaveTodo = (text) => {
    handleUpdateTodo({ task: text });
  };
  console.log(priority);

  return (
    <>
      <div className="flex items-center pt-3 text-left overflow-x-auto">
        <div className="flex flex-none justify-center items-center w-1/12">
          <input
            checked={completed}
            type="checkbox"
            className="form-checkbox width-height-24 cursor-pointer"
            onChange={onHandleUpdateTodo}
          ></input>
        </div>
        <div className="flex-grow overflow-hidden">
          <div
            className={
              !completed ? "text-xl" : "text-xl text-gray-300 line-through"
            }
          >
            <div className="flex justify-start items-center">
              {priority !== "high" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : null}{" "}
              {task}
            </div>
          </div>
        </div>
        <div className="flex-none ">
          <div className="md:block flex">
            <div
              className="bg-red-200 hover:bg-red-300 py-1 px-1 mr-1 rounded inline-flex items-center cursor-pointer"
              onClick={onHandleDeleteTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <div
              className="bg-blue-200 hover:bg-blue-300 py-1 px-1 rounded inline-flex items-center cursor-pointer"
              onClick={onEditTodo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <EditTodoForm
        onSaveTodo={onSaveTodo}
        editMode={editMode}
        setEditMode={setEditMode}
        task={task}
      />
    </>
  );
}

export default TodoItem;
