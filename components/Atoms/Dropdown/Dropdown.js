import styled from "styled-components";
import React, { useState } from "react"



function Dropdown({ className, right, side, otherSide }) {
    const [Display, setDisplay] = useState("none")

    function handleDisplay() {
        if (Display === "none") {
            setDisplay("block")
        } else if (Display === "block") {
            setDisplay("none")
        }
    }
    return <_Dropdown display={Display} right={right} side={side} otherSide={otherSide}
        className={className}>
        <span onClick={handleDisplay}>Naciśnij mn</span>
        <div>
            <p>Hello World!</p>
            <hr />
            <p>Hello World!</p>
            <p>Hello World!</p>

        </div>
    </_Dropdown>
}

const _Dropdown = styled.div`
  position: relative;
  display: inline-block;
    ${({ otherSide }) => otherSide}: 200px;
> span {
  cursor: pointer;
  }

> div {
  position: absolute;
  min-width: 160px;
  background-color: #fefefe;
  padding: 16px;

  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${({ display }) => display};
  right: ${({ right }) => right}
}

> div: before {
    	bottom: 100%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
    pointer-events: none;
	border-color: rgba(184, 184, 184, 0);
	border-bottom-color: #fefefe;
	border-width: 6px;
  ${({ side }) => side}: 15px;
  background-clip: padding-box;
}
>div: after {
  bottom: 100%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
	border-bottom-color: white;
    border-width: 5px;
      ${({ side }) => side}: 16px;
  background-clip: padding-box;
}

`

Dropdown.defaultProps = {
    left: null,
    side: "left",
    otherSide: null
}
export default Dropdown