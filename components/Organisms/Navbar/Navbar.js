import { IconButton } from "atoms/Buttons";
import { RawInput } from "atoms/Inputs";
import { Logo, Logotype } from "atoms/Logo";
import NavbarRouter from "molecules/NavbarRouter";
import React, { useState } from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import { RiSearchEyeLine } from "react-icons/ri";
import Courtain from "./Courtain";
import Avatar from "atoms/Avatar";
import SearchEntry from "atoms/SearchEntry";
import { useRouter } from "next/router";

function _Navbar({ className }) {
  const [dropdown, setDropdown] = useState(false);
  const [Value, setValue] = useState("");
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  function handleChange(e) {
    e.preventDefault();

    const value = e.target.value;

    setValue(value);
  }

  const toggleCurtain = (e) => {
    if (!dropdown) {
      setDropdown(e);
      setVisible(true);
    } else if (e === dropdown) setVisible(false);
    else setDropdown(e);
  };

  const values = [
    { value: "readings" },
    { value: "machines", id: "1", detail: "temperature" },
    { value: "machines", id: "2" },
    { value: "charts", id: "1" },
    { value: "dashboard" },
  ];

  const dropdowns = {
    search: (
      <>
        <RawInput
          color="white"
          value={Value}
          width="25vw"
          placeholder="Search"
          onChange={handleChange}
        />
        {Value.length > 1 &&
          values.map((val, idx) => (
            <SearchEntry
              key={idx}
              value={val.value}
              id={val.id}
              detail={val.detail}
              width="25vw"
              color="white"
            />
          ))}
      </>
    ),
    notifications: <h1 style={{ color: "white" }}>***** ***</h1>,
    profile: <h1 style={{ color: "white" }}>ZIOBRO TY KURWO JEBANA</h1>,
  };

  return (
    <div className={className}>
      <div
        style={{ color: dropdown ? "white" : "black" }}
        onClick={() => router.push("/")}
      >
        <Logo />
        <Logotype />
      </div>
      <NavbarRouter color={dropdown ? "white" : undefined} />
      <div>
        <IconButton
          icon={RiSearchEyeLine}
          onClick={() => toggleCurtain("search")}
          color={dropdown ? "white" : undefined}
        />
        <IconButton
          icon={FiBell}
          onClick={() => toggleCurtain("notifications")}
          color={dropdown ? "white" : undefined}
        />
        <Avatar
          size="50px"
          color={dropdown ? "white" : undefined}
          onClick={() => toggleCurtain("profile")}
        />
      </div>
      {dropdown && (
        <Courtain
          {...{
            visible,
            setVisible,
            setDropdown,
            chosen: Object.keys(dropdowns).indexOf(dropdown),
            choices: Object.keys(dropdowns).map((val) => {
              return () => toggleCurtain(val);
            }),
          }}
        >
          <div className="center">{dropdowns[dropdown]}</div>
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

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(25vh);
  }

  > :nth-child(1) {
    margin-left: 32px;
    z-index: 99;
    transition: all 0.2s ease;
    cursor: pointer;
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
