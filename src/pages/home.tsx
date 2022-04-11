import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product from "../components/Product";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products.map(product => <Product {...product} />)}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
