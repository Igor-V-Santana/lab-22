import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import { useProducts } from "../../hooks/useProducts";

import Product from "../Product";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

 const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const { products } = useProducts();

  const calculateProducts = () => {
    let total = 0;

    products.forEach((product) => {
      if (product.quantityBuy > 0) {
        total = total + product.quantityBuy * product.price;
      }
    });
    return total.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      {products.map(product => product.quantityBuy > 0 && <Product key={product.id} {...product} />)}
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{calculateProducts()}</Typography>
      </Subtotal>
      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  );
};

export default MenuPayment;