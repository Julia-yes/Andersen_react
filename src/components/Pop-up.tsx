import styled from "styled-components";
import { Colors } from "enums/colors";
import { memo, ReactNode } from "react";

const StyledPopUp = styled.div<{ position: string }>`
  position: absolute;
  top: 50px;
  ${(props) => props.position}: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Colors.BLUE};
  border: 2px solid ${Colors.BLUE};
  border-radius: 10px;
  background-color: ${Colors.GREEN};
  padding: 20px;
`;

type IProps = {
  children: ReactNode;
  position: string;
};

const PopUp = memo(({ children, position }: IProps) => {
  return <StyledPopUp position={position}>{children}</StyledPopUp>;
});

export default PopUp;
