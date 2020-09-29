import React from "react";
import "./App.css";

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import TinyButton from "./components/TinyButton";
import Apod from "./components/Apod";
import DarkModeToggle from "./components/DarkModeToggle";

import ImageSearch from "./components/ImageSearch";
import Route from "./components/Route";

const App = () => {
  return (
    <div className="App ui container">
      <Logo />
      <Menu />
      <DarkModeToggle />
      <Route path="/">
        <Apod />
      </Route>
      <Route path="/images">
        <ImageSearch />
      </Route>
      <TinyButton />
    </div>
  );
};

export default App;
