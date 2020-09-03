import React, { useState, useRef } from "react";
import styled from "styled-components";
import { LabelInput } from "atoms/Inputs";
import Button from "atoms/Buttons";
import Link from "next/link";

const width = "25vw";

function _register({ className }) {
  return (
    <div className={className}>
      <div className="register"></div>
    </div>
  );
}

const register = styled(_register)`
  display: flex;
  justify-content: center;
  align-items: center;

  .register {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    width: ${width};
    height: 80vh;
    padding-top: 5vh;
    box-sizing: border-box;

    h1 {
      margin: 32px;
      font-size: 3em;
    }

    .input {
      margin: 16px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: inherit;
    margin: 16px;
  }
`;

export default register;
