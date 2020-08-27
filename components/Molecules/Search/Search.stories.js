import React from "react";
import Search from "./Search";

export default {
  title: "Design/Molecules/Search",
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Right = Template.bind({});
Right.args = { side: "right" };

export const Left = Template.bind({});
Left.args = { side: "left" };
