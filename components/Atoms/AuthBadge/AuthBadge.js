import React from "react";
import styled from "styled-components";
import { GrDiamond } from "react-icons/gr";

function _AuthBadge({ className, level }) {
  return (
    <span className={className}>
      <GrDiamond />
      <div>
        {level === "2" ? "master admin" : level === "1" ? "admin" : "user"}
      </div>
    </span>
  );
}

const AuthBadge = styled(_AuthBadge)`
  display: inline-flex;
  align-items: center;

  svg:hover + div {
    transform: translateX(3px);
    opacity: 1;
  }

  > div {
    transform: translateX(-15px);
    opacity: 0;
    top: 0;
    z-index: -20;
    transition: transform 400ms ease-out, opacity 400ms linear;
    font-family: "Baloo 2";
  }
`;

AuthBadge.defaultProps = { level: "0" };

export default AuthBadge;
