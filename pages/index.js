import { AlertProvider } from "atoms/Alerts/Alert";
import Button from "atoms/Buttons";
import React from "react";

export default function index() {
  return (
    <AlertProvider>
      <Button>Show</Button>
    </AlertProvider>
  );
}
