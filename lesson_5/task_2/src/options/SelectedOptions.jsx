import { connect } from "react-redux";
import { toggleOption } from "./options.actions";

import { selectedOptionsSelector } from "./options.selectors";
import Options from "./Options";

const mapState = (state) => {
  // debugger;
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
