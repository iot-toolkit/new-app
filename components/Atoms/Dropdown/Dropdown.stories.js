import React from "react";
import Dropdown from "./Dropdown"

export default {
    title: "Design/Atoms/Dropdown",
    component: Dropdown,
};
const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    left: null,
    side: "left",
    otherSide: null
};

export const LeftSide = Template.bind({});
LeftSide.args = {
    right: 0,
    side: "right",
    otherSide: "left"
};


