import React, { useState } from "react";
import styled from "styled-components";
import { LabelInput } from "atoms/Inputs";
import Button from "atoms/Buttons";
import { colors } from "resources";

const width = "25vw";

function _loginRegister({ className }) {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Register, setRegister] = useState(false);

  return (
    <div className={className}>
      <div className="form">
        {Register ? (
          <>
            <h1>Register</h1>
            <LabelInput
              className="input"
              value={FullName}
              type="text"
              label="full name"
              width={width}
              reverseColor
              onChange={(e) => setFullName(e.target.value)}
            />
            <LabelInput
              className="input"
              value={ConfirmPassword}
              type="password"
              label="confirm password"
              width={width}
              reverseColor
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="buttons">
              <div
                className="back"
                onClick={() => {
                  setRegister(false);
                }}
              >
                Back
              </div>
              <Button reverseColor>Register</Button>
            </div>
          </>
        ) : (
          <>
            <h1>Login/Register</h1>
            <LabelInput
              className="input"
              value={Email}
              type="email"
              label="email"
              width={width}
              reverseColor
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabelInput
              className="input"
              value={Password}
              type="password"
              label="password"
              width={width}
              reverseColor
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="buttons">
              <div className="register" onClick={() => setRegister(true)}>
                Register
              </div>
              <Button reverseColor>Login</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const loginRegister = styled(_loginRegister)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};

  .form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    width: ${width};
    height: 80vh;
    padding-top: 5vh;
    box-sizing: border-box;

    h1 {
      color: ${colors.whitegrey};
      margin: 32px;
      font-size: 3em;
    }

    .raw-inputs {
      display: grid;
      grid-template-columns: repeat(2, 50%);
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

    .register {
      cursor: pointer;
      color: #e4e4e4;
      transition: color 250ms ease-in-out;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }

    .back {
      cursor: pointer;
      color: #e4e4e4;
      transition: color 250ms ease-in-out;

      &:hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
`;

export default loginRegister;
