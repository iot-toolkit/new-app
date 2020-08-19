import React from "react";
import Skeleton from "./Skeleton";
import { number } from "@storybook/addon-knobs";

export default {
  title: "Design/Atoms/Skeleton",
  component: Skeleton,
};

const Template = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Editable = Template.bind({});
Editable.args = {
  count: number("count", 1),
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
  baseColor: "#eee",
  highlightColor: "#f5f5f5",
};

export const Circle = Template.bind({});
Circle.args = {
  count: 1,
  duration: 1.2,
  width: "50px",
  wrapper: null,
  height: "50px",
  circle: true,
  baseColor: "#eee",
  highlightColor: "#f5f5f5",
};

export const Multiple = Template.bind({});
Multiple.args = {
  count: 5,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
  baseColor: "#eee",
  highlightColor: "#f5f5f5",
};

export const WithWrapper = Template.bind({});
WithWrapper.args = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: "h1",
  height: null,
  circle: false,
  baseColor: "#eee",
  highlightColor: "#f5f5f5",
};
