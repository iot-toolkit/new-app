import React from "react";
import Avatar from "./Avatar";
import { number, text } from "@storybook/addon-knobs";

export default {
  title: "Design/Atoms/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: text("Full name", "Marcello Bardus")
};
