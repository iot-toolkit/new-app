import React from "react";
import { FaBell } from "react-icons/fa";
import styled from "styled-components";
import { colors, reverseColor } from "resources";

function _IconButton({ className, icon: Icon, size, onClick, color, hover }) {
  return (
    <div className={className} onClick={onClick}>
      <Icon size={size} />
    </div>
  );
}

const IconButton = styled(_IconButton)`
  display: flex;
  align-items: center;
  color: ${({ variant, color }) => color || colors[variant]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({ variant, hover }) => hover || reverseColor[variant]};
  }

  &:active {
    color: black;
  }
`;

IconButton.defaultProps = {
  variant: "primary",
  color: undefined,
  hover: undefined,
  icon: FaBell,
  size: 25,
  onClick: () => {},
};

export default IconButton;
