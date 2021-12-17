import React from "react";
import { Provider } from "react-redux";
import TodoPage from "./pages/TodoPage";
import configureStore from "./redux/store";
import { saveTodosToLocalStorage } from "./redux/utils";

const store = configureStore();

store.subscribe(() => {
  const { todo } = store.getState();

  saveTodosToLocalStorage(todo.items);
});

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen-100">
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;
