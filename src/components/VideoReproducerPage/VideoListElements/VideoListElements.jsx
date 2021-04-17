import React from 'react';
import { Link } from 'react-router-dom';
import VideoListElement from './VideoListElement';
import Thumbnail from './Thumbnail';

const VideoListElements = ({ data, updateVideoPlayer }) => {
  return data.map((elem) => {
    return (
      <VideoListElement
        key={elem.id.videoId}
        onClick={() => updateVideoPlayer(elem.id.videoId)}
      >
        <Link
          to={`/${elem.id.videoId}`}
          style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
        >
          <Thumbnail src={elem.snippet.thumbnails.medium.url} alt={elem.snippet.title} />
          <p>{elem.snippet.title}</p>
        </Link>
      </VideoListElement>
    );
  });
};

export default VideoListElements;
