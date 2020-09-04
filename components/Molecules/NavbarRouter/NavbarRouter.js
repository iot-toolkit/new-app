import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import NavbarEntry from "./NavbarEntry";

function NavbarRouter({ color, setVisible }) {
  const router = useRouter();
  const paths = ["/", "/machines", "/readings", "/support"];
  const [Chosen, setChosen] = useState(paths.indexOf(router.pathname));

  useEffect(() => {
    setChosen(paths.indexOf(router.pathname));
  }, [router.pathname]);

  const handleClick = (value) => {
    setVisible(false);
    setChosen(value);
  };
  return (
    <_NavbarRouter chosen={Chosen} color={color}>
      <NavbarEntry id={0} onClick={handleClick} page="dashboard" />
      <NavbarEntry id={1} onClick={handleClick} page="machines" />
      <NavbarEntry id={2} onClick={handleClick} page="readings" />
      <NavbarEntry id={3} onClick={handleClick} page="support" />
    </_NavbarRouter>
  );
}

const _NavbarRouter = styled.div`
  text-align: justify;
  position: relative;
  width: 100%;
  color: ${({ color }) => color};
  transition: all 0.5s ease;

  &:after {
    transition: left 300ms ease;
    content: "";
    background: ${({ color }) => color || "black"};
    position: absolute;
    bottom: 0;
    left: calc(25% * ${({ chosen }) => chosen} + 2.5%);
    width: 20%;
    height: 1px;
  }
`;

export default NavbarRouter;
