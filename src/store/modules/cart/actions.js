import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes";

export const AddToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeToCart = (list) => ({ type: REMOVE_TO_CART, list });
