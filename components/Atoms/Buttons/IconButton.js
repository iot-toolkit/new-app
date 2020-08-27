import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { colors, reverseColor } from "resources";

function _IconButton({ className, icon: Icon, size }) {
  return (
    <div className={className}>
      <Icon size={size} />
    </div>
  );
}

const IconButton = styled(_IconButton)`
  display: flex;
  align-items: center;
  color: ${({ variant }) => colors[variant]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({ variant, color }) => color || reverseColor[variant]};
  }

  &:active {
    color: black;
  }
`;

IconButton.defaultProps = {
  variant: "primary",
  color: undefined,
  icon: FaBell,
  size: 20,
};

export default IconButton;
