import React, { useState } from "react";
import styled from "styled-components";
import NavbarEntry from "./NavbarEntry";

function NavbarRouter() {
  const [Chosen, setChosen] = useState(0);
  return (
    <_NavbarRouter chosen={Chosen}>
      <NavbarEntry id={0} onClick={setChosen} page="dashboard" />
      <NavbarEntry id={1} onClick={setChosen} page="machines" />
      <NavbarEntry id={2} onClick={setChosen} page="readings" />
      <NavbarEntry id={3} onClick={setChosen} page="support" />
    </_NavbarRouter>
  );
}

const _NavbarRouter = styled.div`
  text-align: justify;
  position: relative;
  width: 100%;

  &:after {
    transition: left 300ms ease;
    content: "";
    background: black;
    position: absolute;
    bottom: 0;
    left: calc(25% * ${({ chosen }) => chosen} + 2.5%);
    width: 20%;
    height: 1px;
  }
`;

export default NavbarRouter;
