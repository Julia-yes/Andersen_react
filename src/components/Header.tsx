import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Logo from "./Logo";
import { Colors } from "enums/colors";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

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
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/contacts"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to={"/users"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Users
        </NavLink>
      </NavUnlisted>
      <Button callback={isOpenModal ? closeModal : openModal} content="Sign" />
      {isOpenModal && (
        <Modal>
          {!isAuth ? (
            <>
              <Button content="Sign in" callback={logIn} />
              <Button content="Sign up" callback={logIn} />
            </>
          ) : (
            <Button callback={logOut} content="Log out" />
          )}
        </Modal>
      )}
    </StyledNav>
  );
}

export default Header;
