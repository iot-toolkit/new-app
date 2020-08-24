import React from "react";
import AuthBadge from "./AuthBadge";

export default {
  title: "Design/Atoms/AuthBadge",
  component: AuthBadge,
};

const Template = (args) => <AuthBadge {...args} />;

export const User = Template.bind({});
User.args = { level: "0" };

export const Admin = Template.bind({});
Admin.args = { level: "1" };

export const MasterAdmin = Template.bind({});
MasterAdmin.args = { level: "2" };

export const Static = Template.bind({});
Static.args = { variant: "static" };
