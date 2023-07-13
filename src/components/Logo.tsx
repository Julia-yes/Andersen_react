import { Link } from "react-router-dom";
import styled from 'styled-components';

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%
`

function Logo() {
  return (
    <Link to={"/"}>
      <LogoImage src='https://yt3.googleusercontent.com/ytc/AGIKgqPyjdgPTD7JRjP3Ah54X1yhCGO5lp74z4DxUCvh=s900-c-k-c0x00ffffff-no-rj' alt="logo" />
    </Link>
  );
}

export default Logo;
