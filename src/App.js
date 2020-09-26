import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Logo from "./components/Logo";
import Copyright from "./components/Copyright";

const App = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      );

      setResult(data);
    };
    response();
  }, []);

  const { date, title, url, copyright, explanation } = result;

  return (
    <div className="App">
      <div className="content">
        <Logo />
        <div>
          <div className="date">{date}</div>
          <Copyright title={title} copyright={copyright} />
          <img src={url} alt={title} className="apod-image" />
        </div>
        <div className="ui container apod-container">
          <h1 className="ui header title">Astronomy Picture Of The Day</h1>
          <p className="explanation">{explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
