import React from "react";
import styled from "styled-components";
import { colors } from "resources";
import { LabelInput } from "atoms/Inputs";
import { useState } from "react";

function _login({ className }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className={className}>
      <div className="form">
        <h1>Login</h1>
        <div className="input">
          <LabelInput
            value={Email}
            type="email"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <LabelInput
            value={Password}
            type="password"
            label="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

const login = styled(_login)`
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 45vw;
    height: 80vh;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

    > h1 {
      margin: 32px;
      font-size: 3em;
    }

    .input {
      margin: 16px;
    }
  }
`;

export default login;
