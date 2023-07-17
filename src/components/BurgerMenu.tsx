import { ReactNode } from "react";
import styled from "styled-components";
import { Colors } from "enums/colors";

const BurgerButton = styled.div`
  border: none;
  background-color: transparent;
  color: ${Colors.BLUE};
`;

type IProps = {
  children: ReactNode;
  callback: () => void;
};

const BurgerMenu = ({ children, callback }: IProps) => {
  return <BurgerButton data-testid="BurgerButton" onClick={callback}>{children}</BurgerButton>;
};

export default BurgerMenu;
