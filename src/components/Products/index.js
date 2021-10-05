import { useSelector } from "react-redux";
import Product from "../Product";
import { Container, MainContainer } from "./style";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <MainContainer>
      <h2>Todos Produtos</h2>
      <Container>
        {products.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </Container>
    </MainContainer>
  );
};
export default Products;
