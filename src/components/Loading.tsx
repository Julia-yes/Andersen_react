import ReactLoading, { LoadingType } from 'react-loading';
import { styled } from 'styled-components';

const StyledLoading = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`;

type IProps = {
  type: LoadingType;
  color: string;
};

export const Loading = ({ type, color }: IProps) => (
  <StyledLoading>
    <ReactLoading type={type} color={color} height={50} width={50} />
  </StyledLoading>
);

