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
    transform: scaleX(1);
    opacity: 1;
    z-index: 10;
    margin-left: 3px;
  }

  > div {
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    margin-left: 0;
    transition: margin-left 400ms, transform 400ms ease-out,
      opacity 400ms linear;
  }
`;

const Static = css`
  > div {
    transform: translateX(3px);
    opacity: 1;
    z-index: 10;
  }
`;

const AuthBadge = styled(_AuthBadge)`
  display: inline-flex;
  align-items: center;

  > div {
    font-family: "Baloo 2";
    cursor: default;
    display: flex;
    flex-wrap: nowrap;
  }

  ${({ variant }) => (variant === "static" ? Static : Dynamic)}
`;

AuthBadge.defaultProps = { level: "0", variant: "dynamic" };

export default AuthBadge;
