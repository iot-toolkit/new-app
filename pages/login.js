import React, { useState, useRef } from "react";
import styled from "styled-components";
import { LabelInput } from "atoms/Inputs";
import Button from "atoms/Buttons";
import Link from "next/link";

function _login({ className }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const passwordInput = useRef(null);

  return (
    <div className={className}>
      <div className="login">
        <h1>Login</h1>
        <LabelInput
          className="input"
          value={Email}
          type="email"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabelInput
          className="input"
          ref={passwordInput}
          value={Password}
          type="password"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <Link href={"/register"}>Register</Link>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

const login = styled(_login)`
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    width: 45vw;
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

export default login;
