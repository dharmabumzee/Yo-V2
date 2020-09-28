import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ results }) => {
  const imageResults = results.map((result, index) => {
    if (result.links)
      return <ImageCard key={index} image={result.links[0].href} />;
  });

  return <div className="image-list">{imageResults}</div>;
};

export default ImageList;
