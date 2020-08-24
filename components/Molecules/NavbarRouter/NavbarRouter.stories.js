import React from "react";
import NavbarRouter from "./NavbarRouter";

export default {
  title: "Design/Molecules/NavbarRouter",
  component: NavbarRouter,
};

const Template = (args) => <NavbarRouter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
