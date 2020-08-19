import React from "react";
import styled from "styled-components";

function _Input({ value, className, icon: Icon, width, height }) {
  return Icon ? (
    <span className={className}>
      <input value={value} />
      <span className="underline" />
      <div className="blur" />
      <Icon color="white" />
    </span>
  ) : (
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
  display: inline-block;
  height: ${({ height }) => height};

  > input {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${whitegrey};

    border: 0.1em solid ${darkgrey};
    border-radius: 8px;

    padding: 0.8em 1em;
    width: ${({ width }) => width};
    height: calc(100% - 1.8em);
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

  > svg {
    height: ${({ height }) => height};
    position: absolute;
    right: 8px;
    z-index: 2;
    visibility: visible;
    opacity: 1;
    transition: visibility 600s, opacity 600ms ease-in-out;
  }

  .blur {
    height: inherit;
    width: ${({ width }) => width};
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0) 60%,
      rgba(51, 51, 51, 1) 85%,
      rgba(51, 51, 51, 1) 100%
    );
    right: 0;
    top: 0;
    border-radius: 8px;
    pointer-events: none;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms, opacity 300ms ease-in-out;
  }

  input:focus ~ .blur,
  input:focus ~ svg {
    visibility: hidden;
    opacity: 0;
    transition: visibility 900ms, opacity 600ms ease-in-out;
  }

  .underline {
    position: absolute;

    height: 1px;
    width: calc(90% - 1.6em);
    bottom: 8px;
    left: 0.8em;
    z-index: 1;

    transition: background 600ms ease-in-out, width 600ms ease-in-out;

    background: ${darkgrey};
    background-image: linear-gradient(45deg, transparent 50%, ${whitegrey} 50%);
    background-position: 100%;
    background-size: 400%;
  }

  input:focus + .underline {
    background-position: 25%;
    width: calc(100% - 1.6em);
  }
`;

Input.defaultProps = {
  value: "Kurwa, w kurwe długi tekst. drtfgyhuijkoplkojihugyftdrsftgyhuji",
  icon: null,
  width: "200px",
  height: "40px",
};

export default Input;
