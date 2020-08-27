import React from "react";
import styled from "styled-components";

function _Logotype({ className }) {
  return <span className={className}> Toolkit</span>;
}

const Logotype = styled(_Logotype)`
  height: 100%;
  font-size: 3em;
  margin-left: 8px;
`;

export default Logotype;
