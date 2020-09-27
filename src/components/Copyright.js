import React from "react";

const Copyright = ({ title, copyright }) => {
  return (
    <div id="desc" className="desc animated fadeIn delay-1s">
      {title} ➜ Copyright© {copyright}
    </div>
  );
};

export default Copyright;
