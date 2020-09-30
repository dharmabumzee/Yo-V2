import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="loading spinner">
      <BeatLoader color={"#1eaedb"} size={15} margin={"2px"} />
    </div>
  );
};

export default Spinner;
