import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';

const propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

function VideoList(props) {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />);
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

VideoList.propTypes = propTypes;

export default VideoList;
