import React from "react";
import Button from "./Button";

export default {
  title: "Design/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
