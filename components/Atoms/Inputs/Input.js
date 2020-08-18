import React from "react";
import styled from "styled-components";

function _Input({ value, className }) {
  return (
    <span className={className}>
      <input value={value} />
      <span className="underline" />
    </span>
  );
}

const darkgrey = "#333";
const whitegrey = "#ececec";

const Input = styled(_Input)`
  position: relative;
  > input {
    width: 200px;

    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${whitegrey};

    border: 0.1em solid ${darkgrey};
    border-radius: 8px;

    padding: 0.8em 1em;
    cursor: text;

    transition: background 600ms ease-in-out, color 600ms ease-in-out;

    background: none;
    background-image: linear-gradient(45deg, transparent 50%, ${darkgrey} 50%);
    background-position: 100%;
    background-size: 400%;

    &:focus {
      outline: none;
      color: ${darkgrey};
      background-position: 25%;
    }
  }

  .underline {
    position: absolute;
    bottom: -2px;
    left: 0.8em;
    width: calc(100% - 1.6em);
    height: 1px;
    transition: background 600ms ease-in-out;
    background: ${darkgrey};
    background-image: linear-gradient(45deg, transparent 50%, ${whitegrey} 50%);
    background-size: 400%;
    background-position: 100%;
  }

  input:focus + .underline {
    background-position: 25%;
  }
`;

export default Input;
