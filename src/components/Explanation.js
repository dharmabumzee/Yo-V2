import React from "react";
import Fade from "react-reveal/Fade";

const Explanation = ({ explanation }) => {
  return (
    <div className="explanation">
      <Fade bottom>
        <p className="text text-explanation animated slideInUp delay-2s">
          {explanation}
        </p>
      </Fade>
    </div>
  );
};

export default Explanation;
