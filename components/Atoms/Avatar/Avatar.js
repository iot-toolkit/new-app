import React from "react";
import styled from "styled-components";

function _Avatar({ className }) {
  return (
    <div className={className}>
      <div>KW</div>
    </div>
  );
}

const Avatar = styled(_Avatar)`
  > div {
    display: flex;
    height: 100px;
    width: 100px;
    cursor: pointer;

    background-color: white;
    border: 0.03em solid #a9a9a9;
    border-radius: 50%;

    font-size: 2.5rem;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default Avatar;
