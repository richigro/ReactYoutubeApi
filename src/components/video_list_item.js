import React from "react";

const VideoListItem = ({videos}) => {

  const imageUrl = videos.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-ist media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{videos.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
