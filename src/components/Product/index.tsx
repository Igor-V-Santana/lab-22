import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";
import { useProducts } from "../../hooks/useProducts";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
  quantityBuy: number;
};

const Product = ({ id, name, price, picture, quantityBuy }: ProductProps) => {

  const formattedPrice = price.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' });

  const { products, setQuantity } = useProducts();

  const product: any = products.find(product => product.id === id);

  const DecrementProduct = () => {
    if (product.quantityBuy) {
      product.quantityBuy --;
      setQuantity(products);
    }
  };
  
  const IncrementProduct = () => {
    if (product.quantityBuy !== product.quantity) {
      product.quantityBuy ++;
      setQuantity(products);
    }
  };

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />
      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{formattedPrice}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            quantityBuy={quantityBuy}
            DecrementProduct={DecrementProduct}
            IncrementProduct={IncrementProduct}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;