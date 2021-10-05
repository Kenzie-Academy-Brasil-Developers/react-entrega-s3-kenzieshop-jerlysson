import { AddToCart, removeToCart } from "./actions";

export const addToCartThunk = (product) => (dispatch, getStore) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  let prod = list.filter((item) => item.id === product.id);
  list.push(product);
  if (prod.length < 1) {
    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(AddToCart(product));
  }
};

export const removeToCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((prod) => prod.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeToCart(list));
};
