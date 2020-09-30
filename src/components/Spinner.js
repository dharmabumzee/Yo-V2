import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="loading spinner">
      <BeatLoader color={"#1eaedb"} />
    </div>
  );
};

export default Spinner;
