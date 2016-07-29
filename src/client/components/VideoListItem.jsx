import React, { PropTypes } from 'react';

const propTypes = {
  video: PropTypes.object,
};

function VideoListItem({ video }) {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} alt="Video thumbnail" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

VideoListItem.propTypes = propTypes;

export default VideoListItem;
