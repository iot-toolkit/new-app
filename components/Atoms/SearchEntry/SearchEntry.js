import React from "react";
import { AiOutlineEnter } from "react-icons/ai";
import styled from "styled-components";

function _SearchEntry({ className, value, id, detail, width, color }) {
  return (
    <div className={className}>
      <span>{value}</span>
      {detail ? (
        <>
          <span>id: {id}</span>
          <span>{detail}</span>
        </>
      ) : (
        id && <span>id: {id}</span>
      )}

      <AiOutlineEnter color={color} />
    </div>
  );
}

const SearchEntry = styled(_SearchEntry)`
  --color: ${({ color }) => color};

  display: inline-flex;
  justify-content: space-between;
  width: ${({ width }) => width};
  cursor: pointer;
  margin-top: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid
    ${({ detail, id }) => (detail ? "blue" : id ? "green" : "var(--color)")};

  span:nth-child(1) {
    color: var(--color);
  }

  span:nth-child(2) {
    color: green;
  }

  span:nth-child(3) {
    color: blue;
  }
`;

SearchEntry.defaultProps = {
  width: "30vw",
  value: "value",
  id: null,
  detail: null,
};

export default SearchEntry;
