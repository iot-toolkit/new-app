import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Input from "../../Atoms/Inputs";

function _Search({ className }) {
  return (
    <div className={className}>
      <FaSearch color="white" />
      <Input transparent={true} />
    </div>
  );
}

const Search = styled(_Search)`
  display: flex;
  align-items: center;
  background: black;
`;

export default Search;
