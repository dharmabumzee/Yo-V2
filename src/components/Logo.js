import React from "react";
import logo from "../images/logo_transparent.png";

const Logo = () => {
  return (
    <div id="logo" className="logo animated fadeInDown">
      <a href="/">
        <img id="icon" src={logo} alt="Logo" className="icon" />
      </a>
    </div>
  );
};

export default Logo;
