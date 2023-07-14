import styled from "styled-components";

import Logo from "./Logo";
import { Colors } from "enums/colors";
import Button from "./Button";
import { useState } from "react";
import NavItem from "./NavItem";
import PopUp from "./Pop-up";
import PopUpArea from "./Pop-upArea";

const StyledNav = styled.nav`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.GREEN};
`;

const NavUnlisted = styled.ul`
  display: flex;
  gap: 10px;

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
`;

const StyledButton = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

function Header() {
  const [isOpenModal, setIsOpen] = useState<boolean>(false);
  const [isAuth, setAuth] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const logIn = () => {
    setAuth(true);
    closeModal();
  };
  const logOut = () => {
    setAuth(false);
    closeModal();
  };

  return (
    <StyledNav>
      <Logo />
      <NavUnlisted>
        <NavItem path={"/"} title="Home" />
        <NavItem path={"/contacts"} title="Contacts" />
        <NavItem path={"/users"} title="Users" />
      </NavUnlisted>
      <PopUpArea>
        <StyledButton>
          <Button
            callback={isOpenModal ? closeModal : openModal}
            content={isAuth ? "Login" : "Sign"}
          />
        </StyledButton>
        {isOpenModal && (
          <PopUp>
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
