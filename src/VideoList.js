import React from "react";
import VideoItem from "./VideoItem";
import "semantic-ui-css/semantic.min.css";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return (
    <div className="ui relaxed devided list" style={{ fontSize: "14px" }}>
      {renderedVideos}
    </div>
  );
};
export default VideoList;
