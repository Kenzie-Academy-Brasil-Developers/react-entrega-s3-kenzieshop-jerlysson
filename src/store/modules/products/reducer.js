import axios from "axios";

axios
  .get("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((res) => {
    localStorage.setItem("@products", JSON.stringify(res.data));
  })
  .catch((err) => console.log(err));
const initialState = JSON.parse(localStorage.getItem("@products")) || [];

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
