import React from "react";
import Button from "./Button";
import IconButton from "./IconButton";

export default {
  title: "Design/Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Confirm = Template.bind({});
Confirm.args = {
  variant: "confirm",
};

export const Icon = () => <IconButton />;
