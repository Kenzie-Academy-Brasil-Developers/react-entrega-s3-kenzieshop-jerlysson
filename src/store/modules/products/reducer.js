// import axios from "axios";
import { Stock } from "../../../assets/Stock";
//  axios
//    .get("https://makeup-api.herokuapp.com/api/v1/products.json")
// .then((res) => {
//     localStorage.setItem("@products", JSON.stringify(res.data));
//   }, [])
//   .catch((_) => console.log());

// const initialState = JSON.parse(localStorage.getItem("@products")) || [];

const productsReducer = (state = Stock, action) => {
  return state;
};

export default productsReducer;
