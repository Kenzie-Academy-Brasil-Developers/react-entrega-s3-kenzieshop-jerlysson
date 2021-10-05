import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeToCartThunk,
} from "../../store/modules/cart/thunks";
import { CardProduct } from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image_link, description } = product;

  return (
    <CardProduct>
      <h3>{name}</h3>
      <img src={image_link} alt={name} />
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
