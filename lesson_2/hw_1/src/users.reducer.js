import { ADD, DELETE } from "./users.actions.js";

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        usersList: state.usersList.concat(action.userData),
      };
    case DELETE:
      return {
        usersList: state.usersList.filter((user) => user.id !== action.userId),
      };
    default:
      return state;
  }
};
