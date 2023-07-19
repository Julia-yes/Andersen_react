import styled from "styled-components";
import { Colors } from "enums/colors";
import { memo, PropsWithChildren } from "react";

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Colors.BLUE};
  border: 2px solid ${Colors.BLUE};
  border-radius: 10px;
  background-color: ${Colors.YELLOW_LIGHT};
  padding: 20px;
`;

const Modal = memo(({ children }: PropsWithChildren) => {
  return <StyledModal>{children}</StyledModal>;
});

export default Modal;
