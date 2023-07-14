import styled from "styled-components";
import { Colors } from "enums/colors";

const StyledButton = styled.button`
  color: ${Colors.VIOLET};
  border: 2px solid ${Colors.VIOLET};
  border-radius: 5px;
  background-color: ${Colors.BLUE_LIGHT};
  font-size: 18px;
  cursor: pointer;
  transition: border-color 0.3s;
  width: 100px;

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
