import React, { useState, useRef } from "react";
import styled from "styled-components";
import { RiSearchEyeLine } from "react-icons/ri";
import Input from "atoms/Inputs";
import { reverseSide } from "resources";

function Search({ side, size, color }) {
  const [Clicked, setClicked] = useState(false);

  const toggleClick = () => setClicked(!Clicked);

  return side !== "right" ? (
    <_Search clicked={Clicked} side={side}>
      <Input raw height={size} />
      <RiSearchEyeLine size={size} onClick={toggleClick} color={color} />
    </_Search>
  ) : (
    <_Search clicked={Clicked} side={side}>
      <RiSearchEyeLine size={size} onClick={toggleClick} color={color} />
      <Input raw height={size} />
    </_Search>
  );
}

const _Search = styled.div`
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;

  > span {
    margin-${({ side }) => reverseSide[side]}: 16px;
    transform: scaleX(0);
    transform-origin: ${({ side }) => reverseSide[side]};
    transition: transform 400ms ease-out;
  }

  ${({ clicked }) =>
    clicked &&
    `
      > span {
        transform: scaleX(1);
      }
    `}
`;

Search.defaultProps = { side: "right", size: "25px" };

export default Search;
