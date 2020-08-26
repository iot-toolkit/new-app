import React from "react";
import styled from "styled-components";

function _Logotype({ className }) {
  return <div className={className}>IoT Toolkit</div>;
}

const Logotype = styled(_Logotype)`
  height: 100%;
  font-size: 3em;
`;

export default Logotype;
