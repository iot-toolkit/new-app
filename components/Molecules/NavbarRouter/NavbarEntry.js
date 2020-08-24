import React from "react";
import styled from "styled-components";
import { RiHome3Line } from "react-icons/ri";

function _NavbarEntry({ className, page, size, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <RiHome3Line size={size} />
      <div>{page}</div>
    </div>
  );
}

const NavbarEntry = styled(_NavbarEntry)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

NavbarEntry.defaultProps = {
  size: "5vh",
};

export default NavbarEntry;
