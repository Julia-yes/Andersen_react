import styled from "styled-components";
import { Colors } from "enums/colors";
import { DeviceType } from "enums/deviceType";
import { PropsWithChildren, useContext } from "react";
import { DeviceContext } from "context/deviceContext";

const StyledButton = styled.button<{ device: string }>`
  color: ${Colors.VIOLET};
  border: 2px solid ${Colors.VIOLET};
  border-radius: 5px;
  background-color: ${Colors.BLUE_LIGHT};
  font-size: ${(props) => (props.device === DeviceType.PHONE ? "12px" : "18px")};
  cursor: pointer;
  transition: border-color 0.3s;
  width: ${(props) => (props.device === DeviceType.PHONE ? "70px" : "100px")};

  &:hover {
    border-color: ${Colors.YELLOW};
  }
`;

type IProps = {
  content?: string;
  callback: () => void;
};

const Button = (props: PropsWithChildren<IProps>) => {
  const { device } = useContext(DeviceContext);
  return (
    <StyledButton device={device} onClick={props.callback}>
      {props.content ? props.content : props.children}
    </StyledButton>
  );
};

export default Button;
