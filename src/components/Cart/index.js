import { useSelector } from "react-redux";
import Product from "../Product";
import { CartBox, CartContainer, PriceBox } from "./style";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const ValueCart = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <CartContainer>
      <h2>Carrinho</h2>
      <PriceBox>
        <span> Valor do Carrinho:</span> <p>{ValueCart} R$</p>
        <span>Total a Pagar: </span>
        <p>{ValueCart.toFixed(2)} R$</p>
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
