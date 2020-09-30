import React from "react";
import Spinner from "./Spinner";

const ImageOrVideo = ({ mediaType, url, title }) => {
  const renderImage = (
    <img src={url} alt={title} className="apod-image animated fadeIn" />
  );

  const renderVideo = (
    <div className="ui embed video-container">
      <iframe
        src={url}
        display="initial"
        allow="fullscreen"
        title={title}
        className="video"
      />
    </div>
  );

  return mediaType === "image" ? (
    renderImage
  ) : mediaType === "video" ? (
    renderVideo
  ) : (
    <Spinner />
  );
};

export default ImageOrVideo;
