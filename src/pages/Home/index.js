import { Route, Switch } from "react-router";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Products from "../../components/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
