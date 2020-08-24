import React from "react";
import Scrollbar, { SlimScrollbar } from "./Scrollbar";
import styled from "styled-components";

const ScrollbarDiv = styled(({ className, slim }) => (
  <div className={className}>
    <div></div>
  </div>
))`
  ${({ slim }) => (slim ? SlimScrollbar : Scrollbar)};
  width: 100%;
  max-height: 400px;
  overflow: auto;
  > div {
    height: 200vh;
    width: 100%;
  }
`;

export default {
  title: "Design/Atoms/Scrollbar",
  component: ScrollbarDiv,
};

const Template = (args) => <ScrollbarDiv {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Slim = Template.bind({});
Slim.args = {
  slim: true,
};
