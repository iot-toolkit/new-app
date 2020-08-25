import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { colors } from "resources";

function _Input({
  value,
  className,
  icon: Icon,
  placeholder: Placeholder,
  type,
  width,
  height,
  raw,
  transparent,
  onChange,
  number,
}) {
  const [Size, setSize] = useState(1);
  const resizable = useRef(null);

  useEffect(() => {
    const current = resizable.current;
    if (current) {
      const size = current.value.length;
      if (size === 0) {
        setSize(1);
      } else {
        setSize(size);
      }
    }
  }, []);

  function handleChange(e) {
    e.preventDefault();

    const _value = e.target.value;
    const size = _value.length;

    if (number) {
      onChange({ target: { value: Number(_value) } });
    } else {
      onChange(e);
    }

    if (size === 0) {
      setSize(1);
    } else {
      setSize(size);
    }
  }

  return raw ? (
    <span className={className}>
      <input
        size={Size}
        ref={resizable}
        className="raw"
        value={value}
        type={type}
        onChange={handleChange}
      />
      <div className="border" />
    </span>
  ) : Icon ? (
    <span className={className}>
      <input
        className="new"
        value={value}
        type={type}
        onChange={handleChange}
      />
      <span className="underline" />
      <div className="blur" />
      <Icon color="white" />
    </span>
  ) : Placeholder ? (
    <span className={className}>
      <input
        className="new"
        value={value}
        type={type}
        onChange={handleChange}
      />
      <span className="underline" />
      <div className="blur" />
      <span className="placeholder">{Placeholder}</span>
    </span>
  ) : (
    <span className={className}>
      <input
        className="new"
        value={value}
        type={type}
        onChange={handleChange}
      />
      <span className="underline" />
    </span>
  );
}

const Input = styled(_Input)`
  position: relative;
  display: inline-block;
  height: ${({ height }) => height};

  .new {
    font-family: "Asap";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${colors.whitegrey};

    border: 0.1em solid ${colors.primary};
    border-radius: 8px;

    padding: 0.8em 1em;
    width: ${({ width }) => width};
    height: calc(100% - 1.8em);
    cursor: text;

    transition: background 600ms ease-in-out, color 600ms ease-in-out;

    background: none;
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${colors.primary} 50%
    );
    background-position: 100%;
    background-size: 400%;

    &:focus {
      outline: none;
      color: ${colors.primary};
      background-position: 25%;
    }
  }

  > svg {
    height: inherit;
    position: absolute;
    right: 8px;
    z-index: 2;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms, opacity 600ms ease-in-out;
    pointer-events: none;
    transition-delay: 300ms;
  }

  .raw {
    height: inherit;
    font-family: "Baloo 2";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  .border {
    height: inherit;
    width: inherit;
    border-bottom: 0.1em solid ${colors.whitegrey};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -20;
    transition: border-bottom 500ms linear;
  }

  .raw:focus + .border {
    border-bottom: 0.1em solid ${colors.darkgrey};
  }

  .placeholder {
    height: inherit;
    position: absolute;
    top: 0;
    right: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: white;
    font-family: "Baloo 2";
    text-transform: lowercase;
    pointer-events: none;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms linear, opacity 600ms ease-in-out;
    transition-delay: 300ms;
  }

  .blur {
    height: calc(100% - 16px);
    width: ${({ width }) => width};
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0) ${({ icon }) => (icon ? "60%" : "30%")},
      rgba(51, 51, 51, 1) ${({ icon }) => (icon ? "85%" : "55%")},
      rgba(51, 51, 51, 1) 100%
    );
    right: 0;
    top: 8px;
    border-radius: 8px;
    pointer-events: none;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms linear, width 400ms ease-in-out;
    transition-delay: 100ms;
  }

  input:focus ~ .blur {
    visibility: hidden;
    width: 0;
    transition: visibility 300ms linear, width 900ms ease-in-out;
  }

  input:focus ~ svg,
  input:focus ~ .placeholder {
    visibility: hidden;
    opacity: 0;
    transition: visibility 900ms linear, opacity 250ms ease-in-out;
  }

  .underline {
    position: absolute;
    height: 1px;
    width: ${({ icon, placeholder }) =>
      icon
        ? "calc(90% - 1.6em)"
        : placeholder
        ? "calc(65% - 1.6em)"
        : "calc(100% - 1.6em)"};
    bottom: 8px;
    left: 0.8em;
    z-index: 1;

    transition: background 600ms ease-in-out, width 600ms ease-in-out;

    background: ${colors.primary};
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${colors.whitegrey} 50%
    );
    background-position: 100%;
    background-size: 400%;
  }

  input:focus + .underline {
    background-position: 25%;
    width: calc(100% - 1.6em);
  }
`;

Input.defaultProps = {
  value: "",
  type: "text",
  raw: false,
  icon: null,
  placeholder: null,
  width: "200px",
  height: "40px",
  number: false,
};

export default Input;
