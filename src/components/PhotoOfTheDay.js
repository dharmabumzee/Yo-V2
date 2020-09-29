import React from "react";
import MediaType from "./MediaType";

const PhotoOfTheDay = ({ url, title, mediaType }) => {
  return <MediaType url={url} title={title} mediaType={mediaType} />;
};

export default PhotoOfTheDay;
