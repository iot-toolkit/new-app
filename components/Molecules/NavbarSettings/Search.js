import React, { useState } from "react";
import SearchEntry from "atoms/SearchEntry";
import { RawInput } from "atoms/Inputs";
import styled from "styled-components";

function _Search({ className }) {
  const [Value, setValue] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  const values = [
    { value: "readings" },
    { value: "machines", id: "1", detail: "temperature" },
    { value: "machines", id: "2" },
    { value: "charts", id: "1" },
    { value: "dashboard" },
  ];

  return (
    <div className={className}>
      <RawInput
        color="white"
        value={Value}
        width="25vw"
        placeholder="Search"
        onChange={handleChange}
      />
      {Value.length > 1 &&
        values.map((val, idx) => (
          <SearchEntry
            key={idx}
            value={val.value}
            id={val.id}
            detail={val.detail}
            width="25vw"
            color="white"
          />
        ))}
    </div>
  );
}

const Search = styled(_Search)`
  top: 0;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10vh;
`;

export default Search;
