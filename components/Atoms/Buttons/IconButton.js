import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../../resources";

const { whitegrey, primary, secondary } = colors;

const reverse = { primary: secondary, secondary: primary };

function _IconButton({ className }) {
  return <FaBell className={className}></FaBell>;
}

const IconButton = styled(_IconButton)`
  color: ${({ variant }) => colors[variant]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({ variant }) => reverse[variant]};
  }

  &:active {
    color: black;
  }
`;

IconButton.defaultProps = {
  variant: "primary",
};

export default IconButton;
