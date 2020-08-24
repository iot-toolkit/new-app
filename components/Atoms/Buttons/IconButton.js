import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { colors, reverse } from "../../../resources";

function _IconButton({ className, icon }) {
  return <div className={className}>{icon}</div>;
}

const IconButton = styled(_IconButton)`
  display: flex;
  align-items: center;
  color: ${({ variant }) => colors[variant]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({ variant, color }) => color || reverse[variant]};
  }

  &:active {
    color: black;
  }
`;

IconButton.defaultProps = {
  variant: "primary",
  color: undefined,
  icon: <FaBell />,
};

export default IconButton;
