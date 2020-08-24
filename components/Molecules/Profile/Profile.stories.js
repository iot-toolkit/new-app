import React from "react";
import Profile from "./Profile";

export default {
  title: "Design/Molecules/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
