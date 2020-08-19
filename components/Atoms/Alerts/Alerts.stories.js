import React, { useContext } from "react";
import AlertContext, { AlertProvider } from "./Alert";
import { number, text } from "@storybook/addon-knobs";
import Button from "../Buttons";

export default {
  title: "Design/Atoms/Alerts",
  component: AlertProvider,
};

const ShowButton = () => {
  const { show, hide } = useContext(AlertContext);

  const Button2 = () => (
    <Button
      variant="secondary"
      onClick={() =>
        show({
          customHTML: <Button1 />,
          height: 50,
          duration: 2000,
          callback: () => console.log("button 1 callback"),
        })
      }
    >
      Show 2
    </Button>
  );

  const Button1 = () => (
    <Button
      variant="secondary"
      onClick={() =>
        show({
          customHTML: <Button2 />,
          callback: () => console.log("button 2 callback"),
          duration: 10000,
        })
      }
    >
      Show 1
    </Button>
  );

  return (
    <>
      <Button1 />
      <Button variant="secondary">Just checking</Button>
    </>
  );
};

const Template = (args) => {
  return (
    <AlertProvider>
      <ShowButton />
    </AlertProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
