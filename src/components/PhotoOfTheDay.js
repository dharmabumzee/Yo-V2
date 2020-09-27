import React from "react";

const PhotoOfTheDay = ({ url, title }) => {
  return <img src={url} alt={title} className="apod-image animated fadeIn" />;
};

export default PhotoOfTheDay;
