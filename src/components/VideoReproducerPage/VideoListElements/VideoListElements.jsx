import React from 'react';
import { Link } from 'react-router-dom';
import VideoListElement from './VideoListElement';
import Thumbnail from './Thumbnail';
import { useAppState } from '../../../providers/AppState/State.provider';
import useYoutube from '../../../utils/hooks/useYoutube';

const VideoListElements = ({ setVideoUrl }) => {
  const { search } = useAppState();
  const [...data] = useYoutube(search);

  return data.map((elem) => {
    return (
      <VideoListElement
        key={elem.id.videoId}
        onClick={() => setVideoUrl(elem.id.videoId)}
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
