import React from "react";
import { Provider } from "react-redux";
import Todolist from "./tasks/components/TodoList";
import store from "./store.js";

const App = () => {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
};

export default App;
