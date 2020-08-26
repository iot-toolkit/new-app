import React from "react";
import styled from "styled-components";
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineRobot, AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineSupport } from "react-icons/hi";

function _NavbarEntry({ className, page, size, id, onClick }) {
  const handleClick = () => onClick(Number(id));
  const icons = [
    <RiHome3Line size={size} />,
    <AiOutlineRobot size={size} />,
    <AiOutlineDashboard size={size} />,
    <HiOutlineSupport size={size} />,
  ];
  return (
    <div className={className} onClick={handleClick}>
      <div>
        {icons[id]}
        <div>{page}</div>
      </div>
    </div>
  );
}

const NavbarEntry = styled(_NavbarEntry)`
  width: 25%;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;

  > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }
  > div > div {
    margin: 8px 0 8px 0;
  }
`;

NavbarEntry.defaultProps = {
  size: "5vh",
};

export default NavbarEntry;
