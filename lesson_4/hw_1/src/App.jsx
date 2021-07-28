import React from "react";
import { Provider } from "react-redux";
import UsersList from "./users/usersList";
import store from "./store.js";
const App = () => {
  return (
    <Provider store={store}>
      <UsersList />;
    </Provider>
  );
};

export default App;
