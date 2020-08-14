import dynamic from "next/dynamic";
import React from "react";
import { useRouter } from "next/router";

function realtime() {
  const router = useRouter();
  const { machineId } = router.query;

  return <div>{machineId}</div>;
}

export default dynamic(() => Promise.resolve(realtime), {
  ssr: false,
});
