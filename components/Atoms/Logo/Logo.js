import React from "react";
import styled from "styled-components";

function _Logo({ className }) {
  return <span className={className}>IoT</span>;
}

const Logo = styled(_Logo)`
  height: 100%;
  font-size: 3em;
`;

export default Logo;
