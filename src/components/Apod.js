import React, { useState, useEffect } from "react";
import axios from "axios";

import Date from "./Date";
import Copyright from "./Copyright";
import PhotoOfTheDay from "./PhotoOfTheDay";
import Title from "./Title";
import Explanation from "./Explanation";

// import Spinner from "./Spinner";

const Apod = () => {
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

  const {
    date,
    title,
    url,
    copyright = "NASA",
    explanation,
    media_type,
  } = result;

  return (
    <div className="App-content">
      <div className="content">
        <Date date={date} />
        <Copyright title={title} copyright={copyright} />
        <PhotoOfTheDay url={url} title={title} mediaType={media_type} />
      </div>
      <div className="ui container apod-container">
        <Title title={title} />
        <Explanation explanation={explanation} />
      </div>
    </div>
  );
};

export default Apod;
