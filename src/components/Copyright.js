import React from "react";

const Copyright = ({ title, copyright }) => {
  return (
    <div id="desc" className="desc">
      {title} ➜ Copyright© {copyright}
    </div>
  );
};

export default Copyright;
