import { connect } from "react-redux";
import { toggleOption } from "./options.actions";

import { availableOptionsSelector } from "./options.selectors";
import Options from "./Options";

const mapState = (state) => {
  debugger;
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
