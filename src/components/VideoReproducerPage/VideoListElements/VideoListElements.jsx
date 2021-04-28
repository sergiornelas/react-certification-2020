import React from 'react';
import { Link } from 'react-router-dom';
import VideoListElement from './VideoListElement';
import Thumbnail from './Thumbnail';
import useYoutubeData from '../../../utils/hooks/useYoutubeData';

const VideoListElements = ({ setVideoUrl, favorites }) => {
  const x = useYoutubeData();
  let data = '';
  if (favorites) {
    data = JSON.parse(localStorage.getItem('favVideos'));
  } else {
    data = x;
  }

  const updatePage = (identifier, text, image, content) => {
    setVideoUrl(identifier);
    const object = {
      id: identifier,
      title: text,
      thumbnail: image,
      description: content,
    };
    localStorage.setItem('currentVideoObject', JSON.stringify(object));
  };

  return data.map((elem) => {
    return (
      <VideoListElement
        key={elem.id}
        onClick={() => updatePage(elem.id, elem.title, elem.thumbnail, elem.description)}
      >
        {favorites ? (
          <Link
            to={`/favorites/${elem.id}`}
            style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
          >
            <Thumbnail src={elem.thumbnail} alt={elem.title} />
            <p>{elem.title}</p>
          </Link>
        ) : (
          <Link
            to={`/${elem.id}`}
            style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
          >
            <Thumbnail src={elem.thumbnail} alt={elem.title} />
            <p>{elem.title}</p>
          </Link>
        )}
      </VideoListElement>
    );
  });
};

export default VideoListElements;
