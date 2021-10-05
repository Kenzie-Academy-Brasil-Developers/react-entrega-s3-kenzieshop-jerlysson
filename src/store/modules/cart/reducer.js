import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product } = action;

      return [...state, product];

    case REMOVE_TO_CART:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default cartReducer;
