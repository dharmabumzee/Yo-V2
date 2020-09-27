import React, { useState, useEffect } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import TinyButton from "./components/TinyButton";
import Apod from "./components/Apod";
import ImageSearch from "./components/ImageSearch";
import Spinner from "./components/Spinner";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Logo />
        <Menu />
        <DarkModeToggle />
        <Apod />
        {/* <ImageSearch /> */}
        {/* <Spinner /> */}
        <TinyButton />
      </div>
    </div>
  );
};

export default App;
