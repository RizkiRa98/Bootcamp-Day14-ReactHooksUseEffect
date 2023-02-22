import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header" style={{ padding: "5px" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
