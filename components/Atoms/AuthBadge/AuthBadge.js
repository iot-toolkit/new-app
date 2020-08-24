import React from "react";
import styled, { css } from "styled-components";
import { GrDiamond } from "react-icons/gr";

function _AuthBadge({ className, level, variant }) {
  return (
    <span className={className}>
      <GrDiamond />
      <div>
        {level === "2" ? "master admin" : level === "1" ? "admin" : "user"}
      </div>
    </span>
  );
}

const Dynamic = css`
  svg:hover + div {
    transform: translateX(3px);
    opacity: 1;
    z-index: 10;
  }

  > div {
    transform: translateX(-15px);
    opacity: 0;
    top: 0;
    z-index: -20;
    transition: transform 400ms ease-out, opacity 400ms linear,
      z-index 500ms linear;
  }
`;

const Static = css`
  > div {
    transform: translateX(3px);
    opacity: 1;
    z-index: 10;
    top: 0;
  }
`;

const AuthBadge = styled(_AuthBadge)`
  display: inline-flex;
  align-items: center;

  > div {
    font-family: "Baloo 2";
    cursor: default;
  }

  ${({ variant }) => (variant === "static" ? Static : Dynamic)}
`;

AuthBadge.defaultProps = { level: "0", variant: "dynamic" };

export default AuthBadge;
