import React, { useEffect, useState } from "react";
import styled from "styled-components";



function _Avatar({ className }) {

  const [initials, setInitials] = useState('')
  const name = "Kacper Wargacki"


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
