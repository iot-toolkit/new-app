import React from "react";
import Tree from "./Tree";
import styled from "styled-components";

export default {
  title: "Design/Organisms/Tree",
  component: Tree,
};

var data = {
  runtime: {},
  flowMeasurementTime: 1,
  temperatureMeasurementTime: 0.5,
  pressureMeasurementTime: 0.1,
  dataPostTime: 7.5,
  refreshTime: 7.5,
  alarm: {
    pin: 24,
    temperatureVariation: 5,
    lowPressureVariation: 1,
    highPressureVariation: 1,
    interval: 0.7,
  },
  temperatureSetpoint: { set: 20, deviation: 2, min: true, max: 30 },
  highPressureSetpoint: { set: 29, deviation: 2, min: 0, max: 30 },
  lowPressureSetpoint: { set: 3, deviation: 2, min: 0, max: 30 },
  fanSetpoint: { set: 18, deviation: 2, min: 0, max: 30 },
  relays: [
    { id: 0, description: "sprÄ™Å¼arka", pin: 25 },
    { id: 1, description: "wentylator", pin: 22 },
    { id: 2, description: "pompa", pin: 23 },
    { id: 3, description: "nothing", pin: 24 },
  ],
  temperatures: [
    { description: "zbiornik", sensorId: "031997791d10", id: 0 },
    { description: "otoczenie", sensorId: "03179779c128", id: 1 },
    { description: "wlot wody", sensorId: "01186e757fff", id: 2 },
    { description: "wylot wody", sensorId: "03179779aa44", id: 3 },
  ],
  flows: [
    {
      id: 0,
      description: "przep\u0142yw",
      pin: 27,
      correctionRatio: 5.5,
    },
  ],
  pressures: [
    {
      description: "niskie",
      id: 0,
      measurementRange: 25,
      calibrationValue: 0,
    },
    {
      description: "wysokie",
      id: 1,
      measurementRange: 40,
      calibrationValue: 1.6,
    },
  ],
  actions: { off: 0, on: 1 },
  events: [
    "Alarm - too low temperature",
    "Alarm - too high temperature",
    "Alarm - too low pressure",
    "Alarm - too high pressure",
  ],
};

const setData = (_data) => {
  console.log(_data);
  data = _data;
};

const Temp = styled.div`
  margin: 32px 25vw 16px 25vw;

  @media screen and (max-width: 992px) {
    margin: 32px 15vw 16px 15vw;
  }

  @media screen and (max-width: 600px) {
    margin: 32px 5vw 16px 5vw;
  }
`;

const Template = (args) => (
  <Temp>
    <Tree {...args} />
  </Temp>
);

export const Primary = Template.bind({});
Primary.args = {
  data,
  setData,
};
