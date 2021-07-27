import { ADD_PRODUCT } from "./cart.actions";
import { REMOVE_PRODUCT } from "./cart.actions";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };

    case REMOVE_PRODUCT:
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: newProducts,
      };

    default:
      return state;
  }
};

export default cartReducer;
