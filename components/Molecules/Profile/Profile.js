import React from "react";
import Avatar from "atoms/Avatar";

export default function Profile({ name, size }) {
  return <Avatar name={name} size={size} />;
}
