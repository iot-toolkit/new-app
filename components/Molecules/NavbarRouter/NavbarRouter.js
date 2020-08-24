import React, { useState } from "react";
import styled from "styled-components";
import NavbarEntry from "./NavbarEntry";

function NavbarRouter() {
  const [Chosen, setChosen] = useState(0);
  const handleClick = (chosen) => {
    setChosen(chosen);
  };
  return (
    <_NavbarRouter chosen={Chosen}>
      <NavbarEntry onClick={() => handleClick(0)} page="dashboard" />
      <NavbarEntry onClick={() => handleClick(1)} page="machines" />
      <NavbarEntry onClick={() => handleClick(2)} page="readings" />
      <NavbarEntry onClick={() => handleClick(3)} page="support" />
    </_NavbarRouter>
  );
}

const _NavbarRouter = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-content: stretch;
  font-family: "Baloo 2";

  position: relative;

  &:after {
    content: "";
    background: black;
    position: absolute;
    bottom: 0;
    left: calc(25% * ${({ chosen }) => chosen});
    width: 25%;
    height: 1px;
  }
`;

export default NavbarRouter;
