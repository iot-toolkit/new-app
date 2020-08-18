import React from "react";
import styled from "styled-components";

function _Avatar({ className }) {
  return <div className={className}>
    <div>KW</div>
  </div>
}

const darkgrey = "#333";
const whitegrey = "#ececec";

const Avatar = styled(_Avatar)`
 >div { 
  font-size: 2.5rem;
  font-family:"Fira Sans", sans-serif;
  background-color: white;
  border:0.03em solid #A9A9A9;    
  height:100px;
  border-radius:8px;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  width:100px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  cursor: pointer
  }
`

export default Avatar
