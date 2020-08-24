import React from "react";
import styled, { css } from "styled-components";
import AuthBadge from "../../Atoms/AuthBadge";
import { AiOutlineMessage } from "react-icons/ai";

function _Users({ className, width, value }) {
  return (
    <div className={className}>
      <span>{value}</span>
      <AuthBadge level="2" variant="static" />
      <AiOutlineMessage />
    </div>
  );
}

function _Admins({ className, width, value }) {
  return (
    <div className={className}>
      <span>{value}</span>
      <AuthBadge level="0" variant="static" />
      <AiOutlineMessage />
    </div>
  );
}

const commonStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ width }) => width}};
`;

const Users = styled(_Users)`
  ${commonStyles}
`;

const Admins = styled(_Admins)`
  ${commonStyles}
`;

Users.defaultProps = {
  width: "250px",
};

Admins.defaultProps = {
  width: "250px",
};

export { Users, Admins };
