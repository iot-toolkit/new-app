import React from "react";
import ProgressGauge from "./ProgressGauge";

export default {
  title: "Design/Atoms/ProgressGauge",
  component: ProgressGauge,
};

const Template = (args) => <ProgressGauge {...args} />;

export const Default = Template.bind({});
Default.args = {
  workingMachines: 9,
  maxMachines: 11,
  name: "working machines",
};
