import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";

function periodic() {
  const router = useRouter();
  const { machineId } = router.query;

  return <div>{machineId}</div>;
}

export default dynamic(() => Promise.resolve(periodic), {
  ssr: false,
});
