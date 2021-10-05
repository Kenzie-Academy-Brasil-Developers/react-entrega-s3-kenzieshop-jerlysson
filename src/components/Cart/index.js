import { useSelector } from "react-redux";
import Product from "../Product";
import { CartBox, CartContainer } from "./style";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const ValueCart = cart.reduce((total, item) => total + item.price, 0);
  const Discount = cart.reduce((total, item) => total + item.discount, 0);

  return (
    <CartContainer>
      <h2>Carrinho</h2>
      <CartBox>
        {cart.map((prod) => (
          <Product key={prod.id} product={prod} isRemovable />
        ))}
      </CartBox>
      <span> Valor do Carrinho:</span> {ValueCart}
      <span>Valor de Desconto:</span> {Discount}
      <span>Total a Pagar: </span>
      {ValueCart - Discount}
    </CartContainer>
  );
};
export default Cart;
