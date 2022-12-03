import React from "react";
import { RingLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-center items-center h-screen">
      <RingLoader
        speedMultiplier={.5}
        color="#0096f5"
        size={90}
      />
    </div>
  );
};
