import { DeviceContext } from "context/deviceContext";
import { DeviceType } from "enums/deviceType";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoImage = styled.img<{ device: string }>`
  height: ${(props) => (props.device === DeviceType.PHONE ? "30px" : "50px")};
  width: ${(props) => (props.device === DeviceType.PHONE ? "30px" : "50px")};
  border-radius: 50%;
  ${(props) => props.device === DeviceType.PHONE && "order: 2"};
`;

function Logo() {
  const { device } = useContext(DeviceContext);
  return (
    <Link to={"/"}>
      <LogoImage
        device={device}
        src="https://yt3.googleusercontent.com/ytc/AGIKgqPyjdgPTD7JRjP3Ah54X1yhCGO5lp74z4DxUCvh=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
