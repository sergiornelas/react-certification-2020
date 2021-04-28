import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoCard = styled.div`
  background-color: white;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 0.5px darkgray;
  &:hover {
    background-color: lightgray;
  }
`;

export const VideoCardInfo = styled.div`
  padding: 20px;
  width: 310px;
`;

function VideoCards({ videosMetaInfo, link }) {
  const createCurrentObject = (identifier, text, image, content) => {
    const object = {
      id: identifier,
      title: text,
      thumbnail: image,
      description: content,
    };
    localStorage.setItem('currentVideoObject', JSON.stringify(object));
  };

  return videosMetaInfo.map((element) => {
    return (
      <VideoCard
        key={element.id}
        onClick={() =>
          createCurrentObject(
            element.id,
            element.title,
            element.thumbnail,
            element.description
          )
        }
      >
        <Link
          // to={`/favorites/${element.id}`}  // funciona <3
          to={`${link}/${element.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <img alt={element.title} src={element.thumbnail} style={{ width: '100%' }} />
          <VideoCardInfo>
            <h1>{element.title}</h1>
            {element.description}
          </VideoCardInfo>
        </Link>
      </VideoCard>
    );
  });
}

export default VideoCards;
