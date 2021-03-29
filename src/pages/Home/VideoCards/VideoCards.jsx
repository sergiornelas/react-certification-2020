import React from 'react';
import styled from 'styled-components';
import mockYoutubeData from '../../../mock/youtube-videos-mock.json';

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

export const youtubeCards = mockYoutubeData.items.map((elem) => {
  //  console.log(elem.id.kind);
  return (
    <VideoCard key={elem.etag}>
      <img
        alt={elem.snippet.title}
        src={elem.snippet.thumbnails.medium.url}
        style={{ borderRadius: '5px', backgroundSize: '50%' }}
      />
      <VideoCardInfo>
        <h1>{elem.snippet.title}</h1>
        {elem.snippet.description}
      </VideoCardInfo>
    </VideoCard>
  );
});

function VideoCards() {
  return youtubeCards;
}

export default VideoCards;
