import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  quantityBuy: number;
  DecrementProduct: () => void;
  IncrementProduct: () => void;
};

const Incrementor = ({
  quantityBuy,
  DecrementProduct,
  IncrementProduct,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon
      aria-label="Subtract item"
      onClick={() => DecrementProduct()}
    />
    </IconWrapper>

    <Quantity>{quantityBuy}</Quantity>

    <IconWrapper>
      <PlusIcon 
      aria-label="Add item"
      onClick={() => IncrementProduct()} 
    />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;