import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

return (
    <div className="video-list__item item" onClick={() => onVideoSelect(video)}>
      <img className="video-list__img ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;