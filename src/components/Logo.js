import React from "react";
import logo from "../images/logo_transparent.png";

const Logo = () => {
  return (
    <div id="logo">
      <a href="/">
        <img id="icon" src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;