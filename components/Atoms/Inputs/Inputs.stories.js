import React from "react";
import Input from "./Input";
import { text } from "@storybook/addon-knobs";
import { GiMassDriver } from "react-icons/gi";

export default {
  title: "Design/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { width: "500px" };

export const Icon = Template.bind({});
Icon.args = {
  icon: GiMassDriver,
};
