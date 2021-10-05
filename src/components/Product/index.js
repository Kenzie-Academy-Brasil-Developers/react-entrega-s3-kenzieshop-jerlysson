import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeToCartThunk,
} from "../../store/modules/cart/thunks";
import { CardProduct } from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, title, price, image, description } = product;

  return (
    <CardProduct>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <p>{description}</p>
      </div>
      <div>
        <h3>Valor: {price} R$</h3>
        <span>Desconto: {0}</span>
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
