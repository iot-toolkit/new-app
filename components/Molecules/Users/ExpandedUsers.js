import React from "react";
import styled, { css } from "styled-components";
import AuthBadge from "atoms/AuthBadge";
import Avatar from "atoms/Avatar";
import { AiOutlineMessage } from "react-icons/ai";

function _ExpandedUsers({ className, width, value, name }) {
  const parts = name.split(" ");
  const surname = parts.pop();
  const names = parts.join(" ");
  return (
    <div className={className}>
      <div>
        <Avatar name={name} size="25px" />
        <div>
          <span>{names}</span>
          <span>{surname}</span>
        </div>
      </div>
      <span>{value}</span>
      <AuthBadge level="2" variant="static" />
      <AiOutlineMessage />
    </div>
  );
}

function _ExpandedAdmins({ className, width, value, name }) {
  const parts = name.split(" ");
  const surname = parts.pop();
  const names = parts.join(" ");
  return (
    <div className={className}>
      <div>
        <Avatar name={name} size="25px" />
        <div>
          <span>{names}</span>
          <span>{surname}</span>
        </div>
      </div>
      <span>{value}</span>
      <AuthBadge level="0" variant="static" />
      <AiOutlineMessage />
    </div>
  );
}

const commonStyles = css`
  display: flex;
  align-items: center;
  width: ${({ width }) => width}};

  > div {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    > div {
      display: flex;
      flex-flow: column wrap;
      padding: 8px;
    }
  }

  > span {
    padding: 8px;
  }

  > svg {
    padding: 8px;
  }

`;

const ExpandedUsers = styled(_ExpandedUsers)`
  ${commonStyles}
`;

const ExpandedAdmins = styled(_ExpandedAdmins)`
  ${commonStyles}
`;

ExpandedUsers.defaultProps = {
  width: "450px",
};

ExpandedAdmins.defaultProps = {
  width: "400px",
};

export { ExpandedUsers, ExpandedAdmins };
