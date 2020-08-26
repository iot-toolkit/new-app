import React, { useEffect, useState, useContext, useRef } from "react";
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

  const collapsible = useRef(null);

  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    setData(updateObjectUsingPath(data, query, value));
  }, [value]);

  const toggleDropdown = () => setDropdown(!dropdown);
  const handleChange = (e) => {
    const _value = e.target.value;
    if (!isNaN(value)) setValue(Number(_value));
    else setValue(_value);
  };

  function collapseSection(element) {
    var sectionHeight = element.scrollHeight;

    var elementTransition = element.style.transition;
    element.style.transition = "";

    requestAnimationFrame(function () {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;

      requestAnimationFrame(function () {
        element.style.height = 0 + "px";
      });
    });

    element.setAttribute("data-collapsed", "true");
  }

  function expandSection(element) {
    var sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + "px";

    element.setAttribute("data-collapsed", "false");
  }

  function handleClick() {
    setDropdown(!dropdown);

    var current = collapsible.current;
    var isNotCollapsed = current.getAttribute("data-collapsed") === "false";

    if (isNotCollapsed) {
      collapseSection(current);
      current.setAttribute("data-collapsed", "true");
    } else {
      expandSection(current);
    }
  }

  return (
    <_Branch value={_value} original={original} dropdown={dropdown}>
      <div>
        {dropdown ? (
          <IconButton
            color={colors.blue}
            icon={<AiOutlineMinusSquare size={"1em"} onClick={handleClick} />}
          />
        ) : isObject(value) ? (
          <IconButton
            color={colors.blue}
            icon={<AiOutlinePlusSquare size={"1em"} onClick={handleClick} />}
          />
        ) : (
          <AiOutlineCloseSquare size={"1em"} color={colors.secondary} />
        )}
        {name}
      </div>
      <div ref={collapsible}>
        {isObject(value) ? (
          value
        ) : (
          <Input
            raw
            value={value}
            height="18px"
            type={!isNaN(value) && "number"}
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
        overflow: hidden;
        transition: height 0.3s ease-out;
        height: 0px;
      `}
  }

  ${({ original }) =>
    !original &&
    `
      position: relative;
      :before {
        content: '';
        position: absolute;
        border-left: 1px dashed ${colors.primary};
        position: absolute;
        height: 170%;
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
