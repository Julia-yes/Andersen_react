import styled from "styled-components";
import { memo, PropsWithChildren } from "react";

export const StyledPopUpArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const PopUpArea = memo(({ children }: PropsWithChildren) => {
  return <StyledPopUpArea>{children}</StyledPopUpArea>;
});

export default PopUpArea;
