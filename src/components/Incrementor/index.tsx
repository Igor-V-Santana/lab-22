import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  quantityBuy: number;
  Increment: () => void;
  Decrement: () => void;
};

const Incrementor = ({
  quantityBuy,
  Increment,
  Decrement,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon
      aria-label="Subtract item"
      onClick={() => Decrement()}
    />
    </IconWrapper>

    <Quantity>{quantityBuy}</Quantity>

    <IconWrapper>
      <PlusIcon 
      aria-label="Add item"
      onClick={() => Increment()} 
    />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;