import React, { useEffect, useState, useContext } from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { colors } from "resources";
import styled from "styled-components";
import { IconButton } from "atoms/Buttons";
import Input from "atoms/Inputs";
import { isObject, updateObjectUsingPath } from "utils";
import { DataContext } from "./Tree";

function Branch({ name, value: _value, query, original }) {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState(_value);

  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    setData(updateObjectUsingPath(data, query, value));
  }, [value]);

  const toggleDropdown = () => setDropdown(!dropdown);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <_Branch value={_value} original={original} dropdown={dropdown}>
      <div>
        {dropdown ? (
          <IconButton
            color={colors.blue}
            icon={
              <AiOutlineMinusSquare size={"1em"} onClick={toggleDropdown} />
            }
          />
        ) : isObject(value) ? (
          <IconButton
            color={colors.blue}
            icon={<AiOutlinePlusSquare size={"1em"} onClick={toggleDropdown} />}
          />
        ) : (
          <AiOutlineCloseSquare size={"1em"} color={colors.secondary} />
        )}
        {name}
      </div>
      <div>
        {isObject(value) ? (
          value
        ) : (
          <Input
            raw
            value={value}
            height="18px"
            number={!isNaN(value)}
            onChange={handleChange}
          />
        )}
      </div>
    </_Branch>
  );
}

const _Branch = styled.div`
  display: flex;
  flex-flow: ${({ value }) => (isObject(value) ? "column" : "row")} nowrap;
  margin: 8px 0 8px 0;
  position: relative;
  background: white;
  z-index: 10;

  svg {
    margin-right: 8px;
  }

  > :nth-child(1) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  > :nth-child(2) {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 32px;
    ${({ value }) =>
      isObject(value) &&
      `
        z-index: -20;
        visibility: hidden; 
        position: fixed; 
        height: 0px;
        transition: height 600ms linear;
      `};
  }

  ${({ dropdown }) =>
    dropdown &&
    `
      > :nth-child(2) {
        visibility: visible;
        position: relative;
        height: 200px;
      }
    `};

  ${({ original }) =>
    !original &&
    `
      position: relative;
      :before {
        content: '';
        position: absolute;
        border-left: 1px dashed ${colors.primary};
        position: absolute;
        height: 130%;
        left: -8px;
      }
    `};
`;

Branch.defaultProps = {
  name: undefined,
  value: undefined,
  query: [],
  original: false,
};

export default Branch;
