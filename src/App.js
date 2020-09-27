import React, { useState, useEffect } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import TinyButton from "./components/TinyButton";
import Apod from "./components/Apod";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Logo />
        <Menu />
        <DarkModeToggle />
        <Apod />
        <TinyButton />
      </div>
    </div>
  );
};

export default App;
