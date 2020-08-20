import React, { useContext } from "react";
import Button from "../Buttons";

import AlertContext, { AlertProvider } from "./Alert";

export default {
  title: "Design/Atoms/Alerts",
  component: AlertProvider,
};

const ShowButton = () => {
  const { show } = useContext(AlertContext);

  const Button2 = () => (
    <Button
      variant="confirm"
      onClick={() =>
        show({
          customHTML: <Button1 />,
          height: "50px",
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
      variant="cancel"
      onClick={() =>
        show({
          title: "Twoja stara",
          body: "nie bo twoja",
          buttons: [<Button1 />, <Button2 />],
          callback: () => console.log("button 2 callback"),
        })
      }
    >
      Show 1
    </Button>
  );

  return (
    <>
      <Button1 />
      <Button2 />
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
