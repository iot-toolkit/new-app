import React, { useState, useRef } from "react";
import styled from "styled-components";
import { RiSearchEyeLine } from "react-icons/ri";
import Input from "../../Atoms/Inputs";

function Search({ size }) {
  const [Clicked, setClicked] = useState(false);

  const toggleClick = () => setClicked(!Clicked);

  return (
    <_Search clicked={Clicked}>
      <RiSearchEyeLine size={size} onClick={toggleClick} />
      <Input raw height={size} />
    </_Search>
  );
}

const _Search = styled.div`
  display: inline-flex;
  align-items: center;

  > span {
    transform: scaleX(0);
    transform-origin: left;
    margin-left: 0;
    transition: margin-left 400ms, transform 400ms ease-out;
  }

  ${({ clicked }) =>
    clicked &&
    `
      > span {
        transform: scaleX(1);
        margin-left: 16px;
      }
    `}
`;

Search.defaultProps = { size: "25px" };

export default Search;
