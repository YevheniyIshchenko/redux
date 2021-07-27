import { LANGUAGE } from "./language.actions";

const lenguageReducer = (state = "en", action) => {
  switch (action.type) {
    case LANGUAGE:
      return action.payload.language;

    default:
      return state;
  }
};

export default lenguageReducer;
