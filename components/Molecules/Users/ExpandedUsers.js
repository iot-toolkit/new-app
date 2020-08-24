import React from "react";
import styled, { css } from "styled-components";
import AuthBadge from "../../Atoms/AuthBadge";
import Avatar from "../../Atoms/Avatar";
import { AiOutlineMessage } from "react-icons/ai";

function _ExpandedUsers({ className, width, value, name }) {
  const parts = name.split(" ");
  const surname = parts.pop();
  const names = parts.join(" ");
  return (
    <div className={className}>
      <div>
        <Avatar name={name} size="40px" />
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
        <Avatar name={name} size="40px" />
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
  justify-content: space-between;
  width: ${({ width }) => width}};

  > div {
    > div {
        display: flex;
        flex-direction: column;
    }
  }
`;

const ExpandedUsers = styled(_ExpandedUsers)`
  ${commonStyles}
`;

const ExpandedAdmins = styled(_ExpandedAdmins)`
  ${commonStyles}
`;

ExpandedUsers.defaultProps = {
  width: "400px",
};

ExpandedAdmins.defaultProps = {
  width: "400px",
};

export { ExpandedUsers, ExpandedAdmins };
