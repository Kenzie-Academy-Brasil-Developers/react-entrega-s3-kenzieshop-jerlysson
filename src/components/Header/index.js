import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { BoxHeader, DivMenu, AlertCart } from "./style";

const Header = () => {
  const history = useHistory();
  const NextPage = (path) => {
    history.push(path);
  };

  const cart = useSelector((store) => store.cart);
  return (
    <BoxHeader>
      <h1> Kenzie SuperShop</h1>
      <DivMenu>
        <form>
          <input placeholder="Oque esta Procurando?" />
        </form>
        <ul>
          <li onClick={() => NextPage("/")}>HOME</li>
          <li onClick={() => NextPage("/")}>Adcionar Produto</li>
          <li onClick={() => NextPage("/cart")}>Carrinho</li>
          {cart.length > 0 && <AlertCart>{cart.length}</AlertCart>}
        </ul>
      </DivMenu>
    </BoxHeader>
  );
};
export default Header;
