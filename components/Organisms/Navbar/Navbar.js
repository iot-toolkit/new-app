import { IconButton } from "atoms/Buttons";
import { Logo, Logotype } from "atoms/Logo";
import NavbarRouter from "molecules/NavbarRouter";
import Search from "molecules/Search";
import React, { useState } from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import Courtain from "./Courtain";
import Avatar from "atoms/Avatar";

function _Navbar({ className }) {
  const [dropdown, setDropdown] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleCurtain = (e) => {
    if (!dropdown) {
      setDropdown(true);
      setVisible(true);
    }
    if (dropdown) setVisible(false);
  };
  return (
    <div className={className}>
      <div style={{ color: dropdown ? "white" : "black" }}>
        <Logo />
        <Logotype />
      </div>
      <NavbarRouter color={dropdown ? "white" : undefined} />
      <div>
        <Search side="left" color={dropdown ? "white" : undefined} />
        <IconButton
          icon={FiBell}
          onClick={toggleCurtain}
          color={dropdown ? "white" : undefined}
        />
        <Avatar size="50px" color={dropdown ? "white" : undefined} />
      </div>
      {dropdown && (
        <Courtain {...{ visible, setVisible, setDropdown }}>
          <h1>ZIOBRO TY KURWO JEBANA</h1>
        </Courtain>
      )}
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
    z-index: 99;
    transition: all 0.2s ease;
  }

  > :nth-child(2) {
    max-width: 40%;
    z-index: 99;
  }

  > :nth-child(3) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    z-index: 99;

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
        margin: 16px 24px 0 0;
      }
      > :nth-child(3) {
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
