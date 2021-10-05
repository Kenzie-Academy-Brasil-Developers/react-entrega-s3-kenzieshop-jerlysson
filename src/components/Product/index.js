import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeToCartThunk,
} from "../../store/modules/cart/thunks";
import { CardProduct } from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image, discount, desc } = product;

  return (
    <CardProduct>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <div>
        <h3>Valor: {price}</h3>
        <span>Desconto: {discount}</span>
      </div>
      {isRemovable ? (
        <button onClick={() => dispatch(removeToCartThunk(id))}>Delete</button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adcionar!
        </button>
      )}
    </CardProduct>
  );
};
export default Product;
