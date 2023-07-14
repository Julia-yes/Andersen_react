import styled from "styled-components";
import { Colors } from "enums/colors";
import { ScreenType } from "utils/defineScreenSize";
import { DeviceType } from "enums/deviceType";

const StyledButton = styled.button`
  color: ${Colors.VIOLET};
  border: 2px solid ${Colors.VIOLET};
  border-radius: 5px;
  background-color: ${Colors.BLUE_LIGHT};
  font-size: ${ScreenType === DeviceType.PHONE ? "12px" : "18px"};
  cursor: pointer;
  transition: border-color 0.3s;
  width: ${ScreenType === DeviceType.PHONE ? "70px" : "100px"};

  &:hover {
    border-color: ${Colors.YELLOW};
  }
`;

type IProps = {
  content: string;
  callback: () => void;
};

const Button = ({ content, callback }: IProps) => {
  return <StyledButton onClick={callback}>{content}</StyledButton>;
};

export default Button;
