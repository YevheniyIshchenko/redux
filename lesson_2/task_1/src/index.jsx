import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREVENT = "COUNTER/DECREVENT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREVENT,
  };
};

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREVENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
