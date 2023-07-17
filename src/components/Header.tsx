import styled from "styled-components";

import Logo from "./Logo";
import { Colors } from "enums/colors";
import Button from "./Button";
import { useContext, useState } from "react";
import NavItem from "./NavItem";
import PopUp from "./Pop-up";
import PopUpArea, { StyledPopUpArea } from "./Pop-upArea";
import { DeviceType } from "enums/deviceType";
import BurgerMenu from "./BurgerMenu";
import { DeviceContext } from "context/deviceContext";

const StyledNav = styled.nav`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.GREEN};
`;

const StyledNavList = styled.ul<{ device: string }>`
  display: ${(props) => (props.device === DeviceType.PHONE ? "none" : "flex")};
  gap: 10px;
  padding: 0;

  a {
    text-decoration: none;
    color: ${Colors.BLUE};
    transition: color 0.3s;

    &:hover {
      color: ${Colors.YELLOW};
    }
  }

  .active {
    color: ${Colors.VIOLET};
  }

  .open {
    background-color: red;
  }
`;

const StyledNavListVertical = styled(StyledNavList)`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledPopUpAreaWithOrder = styled(StyledPopUpArea)`
  order: -1;
`;

function Header() {
  const { device } = useContext(DeviceContext);
  const [isOpenPopUp, setIsOpen] = useState<boolean>(false);
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isShownMenu, setShowMenu] = useState<boolean>(false);

  const openPopUp = () => {
    setIsOpen(true);
  };
  const closePopUp = () => {
    setIsOpen(false);
  };

  const logIn = () => {
    setAuth(true);
    closePopUp();
  };
  const logOut = () => {
    setAuth(false);
    closePopUp();
  };

  const showMenu = () => {
    setShowMenu(!isShownMenu);
  };

  return (
    <StyledNav>
      <Logo />
      {device === DeviceType.PHONE && (
        <StyledPopUpAreaWithOrder>
          <StyledButton>
            <BurgerMenu callback={showMenu}>
              <span className="material-icons">menu</span>
            </BurgerMenu>
          </StyledButton>
          {isShownMenu && (
            <PopUp position="left">
              <StyledNavListVertical device={device}>
                <NavItem path={"/"} title="Home" />
                <NavItem path={"/contacts"} title="Contacts" />
                <NavItem path={"/users"} title="Users" />
              </StyledNavListVertical>
            </PopUp>
          )}
        </StyledPopUpAreaWithOrder>
      )}
      <StyledNavList device={device}>
        <NavItem path={"/"} title="Home" />
        <NavItem path={"/contacts"} title="Contacts" />
        <NavItem path={"/users"} title="Users" />
      </StyledNavList>
      <PopUpArea>
        <StyledButton>
          <Button
            callback={isOpenPopUp ? closePopUp : openPopUp}
            content={isAuth ? "Login" : "Sign"}
          />
        </StyledButton>
        {isOpenPopUp && (
          <PopUp position="right">
            {!isAuth ? (
              <>
                <Button content="Sign in" callback={logIn} />
                <Button content="Sign up" callback={logIn} />
              </>
            ) : (
              <Button callback={logOut} content="Log out" />
            )}
          </PopUp>
        )}
      </PopUpArea>
    </StyledNav>
  );
}

export default Header;
