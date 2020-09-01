import React from "react";
import SearchEntry from "./SearchEntry";

export default {
  title: "Design/Atoms/SearchEntry",
  component: SearchEntry,
};

const Template = (args) => <SearchEntry {...args} />;

export const Default = Template.bind({});
Default.args = { value: "machines" };

export const Id = Template.bind({});
Id.args = { value: "machines", id: 1 };

export const Detail = Template.bind({});
Detail.args = { value: "machines", id: 1, detail: "temperature" };
