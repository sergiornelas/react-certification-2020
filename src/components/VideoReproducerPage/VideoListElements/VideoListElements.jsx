import React from 'react';
import { Link } from 'react-router-dom';
import VideoListElement from './VideoListElement';
import Thumbnail from './Thumbnail';
import { useAppState } from '../../../providers/AppState/State.provider';
import useYoutube from '../../../utils/hooks/useYoutube';

const VideoListElements = ({ setVideoUrl }) => {
  const { state } = useAppState();
  const { search } = state;
  const [...data] = useYoutube(search);

  const updatePage = (identifier, text, image, content) => {
    setVideoUrl(identifier);
    const object = {
      id: identifier,
      title: text,
      thumbnail: image,
      description: content,
    };
    localStorage.setItem('currentVideoObj', JSON.stringify(object));
  };

  return data.map((elem) => {
    return (
      <VideoListElement
        key={elem.id.videoId}
        onClick={() =>
          updatePage(
            elem.id.videoId,
            elem.snippet.title,
            elem.snippet.thumbnails.medium.url,
            elem.snippet.description
          )
        }
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
