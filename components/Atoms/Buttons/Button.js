import styled from "styled-components";
import { colors } from "../../../resources";

const { whitegrey } = colors;

const Button = styled.button`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ variant }) => colors[variant]};

  border: 0.1em solid ${({ variant }) => colors[variant]};
  border-radius: 24px;

  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({ variant }) => colors[variant]} 50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${whitegrey};
    background-position: 100%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 250ms ease-in-out;
    background-position: 25%%;
  }
`;

Button.defaultProps = {
  variant: "primary",
};

export default Button;
