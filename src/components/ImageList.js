import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
import Spinner from "./Spinner";

const ImageList = ({ results }) => {
  const imageResults = results.map((result, index) => {
    if (result.links)
      return <ImageCard key={index} image={result.links[0].href} />;
  });

  return (
    <div className="ui list image-list animated fadeIn">{imageResults}</div>
  );
};

export default ImageList;
