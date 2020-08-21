import React from "react";
import Dropdown from "./Dropdown"

export default {
    title: "Design/Atoms/Dropdown",
    component: Dropdown,
};
const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    left: "100px"
};

export const LeftSide = Template.bind({});
LeftSide.args = {
    right: 0
};


