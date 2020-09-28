import React from "react";

const Explanation = ({ explanation }) => {
  return (
    <div className="explanation">
      <p className="text text-explanation animated slideInUp delay-1s">
        {explanation}
      </p>
    </div>
  );
};

export default Explanation;
