import React, { useState, useRef } from "react";
import styled from "styled-components";
import { LabelInput } from "atoms/Inputs";
import Button from "atoms/Buttons";

function _login({ className }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Code, setCode] = useState("");

  const passwordInput = useRef(null);

  return (
    <div className={className}>
      <div className="login">
        <h1>Login</h1>
        <div className="input">
          <LabelInput
            value={Email}
            type="email"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input" ref={passwordInput}>
          <LabelInput
            value={Password}
            type="password"
            label="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Button>Login</Button>
          <Button>Register</Button>
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
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 45vw;
    height: 80vh;
    border-radius: 8px;

    > h1 {
      margin: 32px;
      font-size: 3em;
    }

    .input {
      margin: 16px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 40vw;
    margin: 16px;
  }
`;

export default login;
