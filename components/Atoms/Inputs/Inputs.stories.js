import React from "react";
import Input from "./Input";
import { GiMassDriver, GiMilleniumKey } from "react-icons/gi";

export default {
  title: "Design/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Long = Template.bind({});
Long.args = { width: "500px" };

export const Icon = Template.bind({});
Icon.args = {
  icon: GiMassDriver,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "First Name",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Password",
  type: "password",
};

export const PasswordIcon = Template.bind({});
PasswordIcon.args = {
  icon: GiMilleniumKey,
  type: "password",
};
