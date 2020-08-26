import Logotype from "atoms/Logotype";
import NavbarRouter from "molecules/NavbarRouter";
import Notifications from "molecules/Notifications";
import Profile from "molecules/Profile";
import Search from "molecules/Search";
import React from "react";
import styled from "styled-components";

function _Navbar({ className }) {
  return (
    <div className={className}>
      <Logotype />
      <NavbarRouter />
      <div>
        <Search />
        <Notifications />
        <Profile size="50px" />
      </div>
    </div>
  );
}

const Navbar = styled(_Navbar)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  > :nth-child(1) {
    margin-left: 32px;
  }

  > :nth-child(2) {
    max-width: 40%;
  }

  > :nth-child(3) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    > :nth-child(n) {
      margin-right: 24px;
    }
  }

  @media screen and (max-width: 992px) {
    > :nth-child(2) {
      max-width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    flex-flow: column nowrap;
  }
`;

export default Navbar;
