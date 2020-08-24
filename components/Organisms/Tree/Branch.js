import React, { useEffect, useState, useContext } from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { colors } from "resources";
import styled from "styled-components";
import { IconButton } from "atoms/Buttons";
import { Input } from "atoms/Inputs";
import { isObject, updateObjectUsingPath } from "utils";
import { DataContext } from "./Tree";

function _Branch({ name, value: _value, className, query, original }) {
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState(_value);

  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    setData(updateObjectUsingPath(data, query, value));
  }, [value]);

  const toggleDropdown = () => setDropdown(!dropdown);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className={className}>
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
          dropdown && value
        ) : (
          <Input
            raw
            value={value}
            number={!isNaN(value)}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
}

const Branch = styled(_Branch)`
  display: flex;
  flex-flow: ${({ value }) => (isObject(value) ? "column" : "row")} nowrap;
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
  }
  ${({ original }) =>
    !original &&
    `
      position: relative;
      :before {
        content: '';
        position: absolute;
        border-left: 1px dashed black;
        position: absolute;
        height: 94%;
        top: 3%;
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
