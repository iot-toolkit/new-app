import React, { useEffect, useState } from "react";
import styled from "styled-components";



function _Avatar({ className, name }) {

  const [initials, setInitials] = useState('')


  function getInitials() {
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
      }
    }
    setInitials(initials)
  }
  useEffect(() => {
    getInitials()
  }, [])
  return <div className={className}>
    <div>{initials}</div>
  </div>
}


const Avatar = styled(_Avatar)`
  > div {
    display: flex;
    height: 100px;
    width: 100px;
    cursor: pointer;

    background-color: white;
    border: 0.03em solid #a9a9a9;
    border-radius: 50%;

    font-size: 2.5rem;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;

    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

Avatar.defaultProps = {
  name: "",
}

export default Avatar;
