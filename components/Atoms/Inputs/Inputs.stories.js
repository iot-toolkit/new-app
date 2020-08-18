import React from "react";
import Input from "./Input";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Design/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} value={text("Text", "DUPSKO")} />;

export const Primary = Template.bind({});
Primary.args = {};
