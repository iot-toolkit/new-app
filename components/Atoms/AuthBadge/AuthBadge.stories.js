import React from "react";
import AuthBadge from "./AuthBadge";

export default {
  title: "Design/Atoms/AuthBadge",
  component: AuthBadge,
};

const Template = (args) => <AuthBadge {...args} />;

export const User = Template.bind({});
User.args = {};

export const Admin = Template.bind({});
Admin.args = {};

export const MasterAdmin = Template.bind({});
MasterAdmin.args = {};
