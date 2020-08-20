import React from "react";
import styled from "styled-components";
import { GrDiamond } from "react-icons/gr";

function _AuthBadge({ className }) {
  return (
    <span className={className}>
      <GrDiamond />
      <div>User</div>
    </span>
  );
}

const AuthBadge = styled(_AuthBadge)`
  display: inline-flex;

  svg:hover + div {
    animation-name: textRight;
    animation-duration: 500ms;
    transform: translateX(0px);
    opacity: 1;
  }

  svg:not(:hover) + div {
    animation-name: textLeft;
    animation-duration: 500ms;
    transform: translateX(-10px);
    opacity: 0;
  }

  > div {
    top: 0;
    z-index: -20;
  }

  @keyframes textRight {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes textLeft {
    0% {
      transform: translateX(0px);
      opacity: 1;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }
`;

AuthBadge.defaultProps = {};

export default AuthBadge;
