import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';

const propTypes = {
  videos: PropTypes.array.isRequired,
};

function VideoList(props) {
  const videoItems = props.videos.map(video => <VideoListItem key={video.etag} video={video} />);
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

VideoList.propTypes = propTypes;

export default VideoList;
