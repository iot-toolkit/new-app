import React from "react";
import { Users, Admins } from "./Users";
import { ExpandedUsers, ExpandedAdmins } from "./ExpandedUsers";

export default {
  title: "Design/Molecules/Users",
  component: Users,
};

const UserTemplate = (args) => <Users {...args} />;

export const UserViev = UserTemplate.bind({});
UserViev.args = { value: "szef@bolid.pl" };

const AdminTemplate = (args) => <Admins {...args} />;

export const AdminView = AdminTemplate.bind({});
AdminView.args = { value: "user@gmail.com" };

const ExpandedUsersTemplate = (args) => <ExpandedUsers {...args} />;

export const ExpandedUsersView = ExpandedUsersTemplate.bind({});
ExpandedUsersView.args = { name: "Najwyższy Szef", value: "szef@bolid.pl" };

const ExpandedAdminsTemplate = (args) => <ExpandedAdmins {...args} />;

export const ExpandedAdminsView = ExpandedAdminsTemplate.bind({});
ExpandedAdminsView.args = { name: "Podżędny Cwel", value: "user@gmail.com" };
