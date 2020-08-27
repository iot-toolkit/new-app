import { Logo, Logotype } from "atoms/Logo";
import NavbarRouter from "molecules/NavbarRouter";
import Notifications from "molecules/Notifications";
import Profile from "molecules/Profile";
import Search from "molecules/Search";
import React from "react";
import styled from "styled-components";

function _Navbar({ className }) {
  return (
    <div className={className}>
      <div>
        <Logo />
        <Logotype />
      </div>
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
    align-items: baseline;

    > :nth-child(1) {
      margin-left: 8px;
    }

    > :nth-child(1) > :nth-child(2) {
      display: none;
    }

    > :nth-child(3) {
      position: fixed;
      display: flex;
      flex-flow: column-reverse nowrap;
      align-items: flex-end;
      top: 0;
      right: 0;
      > :nth-child(n) {
        margin: 16px 16px 0 0;
      }
    }

    > :nth-child(2) {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      max-width: 100%;
    }
  }
`;

export default Navbar;
