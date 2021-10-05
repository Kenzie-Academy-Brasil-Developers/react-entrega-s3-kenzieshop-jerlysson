import { useSelector } from "react-redux";
import Product from "../Product";
import { CartBox, CartContainer, PriceBox } from "./style";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const Total = cart.reduce((total, item) => total + item.price, 0);
  return (
    <CartContainer>
      <h2>Carrinho</h2>
      <PriceBox>
        <span> Valor do Carrinho:</span> <p>{Total} R$</p>
        <span>Total a Pagar: </span>
        <p>{Total} R$</p>
      </PriceBox>
      <CartBox>
        {cart.map((prod) => (
          <Product key={prod.id} product={prod} isRemovable />
        ))}
      </CartBox>
    </CartContainer>
  );
};
export default Cart;
