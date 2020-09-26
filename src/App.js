import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Logo from "./components/Logo";

const App = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
      );
      console.log(data);
      setResult(data);
    };
    response();
  }, []);

  return (
    <div className="App">
      <div className="content">
        <Logo />
        <div>
          <div>{result.date}</div>
          <h4>{result.title}</h4>
          <img src={result.url} alt={result.title} className="apod-image" />
          <div className="">{result.copyright}</div>
        </div>
        <div>
          <h1 className="ui header">Astronomy Picture Of The Day</h1>
          <p>{result.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
