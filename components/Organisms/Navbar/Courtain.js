import { colors } from "resources";
import styled from "styled-components";
import React, { useState } from "react";

function _Courtain({ className, visible, setDropdown, children }) {
  const [ready, setReady] = useState(false);
  const handleAnimationEnd = () => {
    if (!visible) setDropdown(false);
    setReady(visible);
  };

  return (
    <div
      className={className}
      style={{
        animation: `${
          visible ? "fadeIn 0.75s linear" : "fadeOut 0.75s linear"
        }`,
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      <div>{ready && children}</div>
    </div>
  );
}

const Courtain = styled(_Courtain)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 97;

  @keyframes fadeIn {
    0% {
      background-position: 0%;
    }
    20% {
      background-position: 20%;
    }
    100% {
      background-position: 100%;
    }
  }

  @keyframes fadeOut {
    100% {
      background-position: 0%;
    }
    80% {
      background-position: 20%;
    }
    0% {
      background-position: 100%;
    }
  }

  > {
    margin: 32px 25vw 16px 25vw;

    @media screen and (max-width: 992px) {
      margin: 32px 15vw 16px 15vw;
    }

    @media screen and (max-width: 600px) {
      margin: 32px 5vw 16px 5vw;
    }
  }

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${colors.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;
`;

export default Courtain;
