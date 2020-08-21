import styled from "styled-components";
import React, { useState } from "react"



function Dropdown({ className, right }) {
    const [Display, setDisplay] = useState("none")

    function handleDisplay() {
        if (Display === "none") {
            setDisplay("block")
        } else if (Display === "block") {
            setDisplay("none")
        }
    }
    return <_Dropdown display={Display} right={right}
        className={className}>
        <span onClick={handleDisplay}>Naciśnij mn</span>
        <div>
            <p>Hello World!</p>
        </div>
    </_Dropdown>
}

const _Dropdown = styled.div`
  position: relative;
  display: inline-block;

> span {
  cursor: pointer
  }

> div {
  position: absolute;
  background-color: #DCDCDC;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  display: ${({ display }) => display};
  right: ${({ right }) => right}
}
`

Dropdown.defaultProps = {

}
export default Dropdown