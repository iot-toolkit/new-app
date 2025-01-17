import React, { useState } from "react";
import styled from "styled-components";

function _Avatar({ className, name, size, color, onClick }) {
  const [initials, setInitials] = useState(getInitials());

  function getInitials() {
    var parts = name.split(" ");
    if (parts[0].length < 1) return "--";
    if (parts.length < 2) return parts[0][0];
    var initials = parts[0][0] + parts[parts.length - 1][0];
    return initials;
  }

  return (
    <div onClick={onClick} className={className}>
      {initials}
    </div>
  );
}

const Avatar = styled(_Avatar)`
  display: flex;
  min-height: ${({ size }) => size};
  min-width: ${({ size }) => size};
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  cursor: default;

  font-size: calc(${({ size }) => size} * 0.65);
  font-family: "Asap";
  text-transform: uppercase;
  color: ${({ color }) => color || "black"};
  transition: all 0.2s ease;

  justify-content: center;
  align-items: center;
  text-align: center;

  --borderWidth: 3px;
  background: rgba(
    ${({ color }) => (color === "white" ? "0,0,0" : "255, 255, 255")},
    0.8
  );
  position: relative;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    top: calc(-1.1 * var(--borderWidth));
    left: calc(-1.1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2.2);
    width: calc(100% + var(--borderWidth) * 2.2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: 50%;
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

Avatar.defaultProps = {
  name: "Janush Kovalsky",
  size: "5em",
};

export default Avatar;
