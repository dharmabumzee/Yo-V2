import React from "react";

const MediaType = ({ mediaType, url, title }) => {
  if (mediaType === "image") {
    return <img src={url} alt={title} className="apod-image animated fadeIn" />;
  } else if (mediaType === "video") {
    return (
      <div className="ui embed video-container">
        <iframe
          src={url}
          display="initial"
          allow="fullscreen"
          title={title}
          className="video"
        ></iframe>
      </div>
    );
  } else {
    return <div className="video-container">Loading...</div>;
  }
};

export default MediaType;
