import React, { useState } from "react";
import {
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { colors } from "../../../resources";
import styled from "styled-components";
import { IconButton } from "../../Atoms/Buttons";
import Input from "../../Atoms/Inputs";

const isObject = (data) => {
  return typeof data === "object";
};

const handleExceptions = (data) => {
  const exceptions = {
    "0": 0,
    false: false,
    true: true,
    null: null,
    undefined: undefined,
  };
  if (Object.values(exceptions).includes(data)) return String(data);
  return data;
};

const renderTree = (data) => {
  if (Array.isArray(data)) {
    return data.map((val, idx) => <Tree key={idx} data={val} />);
  } else if (isObject(data)) {
    return Object.keys(data).map((val, idx) => (
      <Tree key={idx} data={handleExceptions(data[val])}>
        {val}
      </Tree>
    ));
  }
};

function _Branch({ name, value, className }) {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);
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
          <Input raw value={value} height="18px" />
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
`;

export default function Tree({ data, children }) {
  if (children && data)
    return (
      <Branch
        name={children}
        value={isObject(data) ? renderTree(data) : data}
      />
    );
  else if (children) return <Branch name={children} />;
  else if (data)
    return isObject(data) ? renderTree(data) : <Branch name={data} />;
}
