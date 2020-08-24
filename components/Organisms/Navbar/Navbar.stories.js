import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Design/Organisms/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
