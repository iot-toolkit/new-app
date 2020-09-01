import React from "react";
import { Input, IconInput, LabelInput, RawInput } from "./Inputs";
import { GiMassDriver, GiMilleniumKey } from "react-icons/gi";

export default {
  title: "Design/Atoms/Inputs",
  component: Input,
};

const DefaultTemplate = (args) => <Input {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Long = DefaultTemplate.bind({});
Long.args = { width: "500px" };

const IconTemplate = (args) => <IconInput {...args} />;

export const Icon = IconTemplate.bind({});
Icon.args = {
  icon: GiMassDriver,
};

export const PasswordIcon = IconTemplate.bind({});
PasswordIcon.args = {
  icon: GiMilleniumKey,
  type: "password",
};

const LabelTemplate = (args) => <LabelInput {...args} />;

export const Label = LabelTemplate.bind({});
Label.args = {
  label: "First Name",
};

export const Password = LabelTemplate.bind({});
Password.args = {
  label: "Password",
  type: "password",
};

const RawTemplate = (args) => <RawInput {...args} />;

export const Raw = RawTemplate.bind({});
Raw.args = { value: "temperature" };
