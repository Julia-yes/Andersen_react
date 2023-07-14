import styled from "styled-components";
import { Colors } from "enums/colors";
import { memo, PropsWithChildren } from "react";

const StyledPopUp = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Colors.BLUE};
  border: 2px solid ${Colors.BLUE};
  border-radius: 10px;
  background-color: ${Colors.GREEN};
  padding: 20px;
`;

const PopUp = memo(({ children }: PropsWithChildren) => {
  return <StyledPopUp>{children}</StyledPopUp>;
});

export default PopUp;
