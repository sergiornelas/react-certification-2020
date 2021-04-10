import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function selectVideo(videoIdObj, onVideoSelected) {
  localStorage.setItem('videoId', videoIdObj.videoId);
  onVideoSelected(videoIdObj.videoId);
}

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

function youtubeCards(videosMetaInfo, getVideoSelected) {
  return videosMetaInfo.map(({ snippet, id }) => {
    return (
      <VideoCard key={id.videoId} onClick={() => selectVideo(id, getVideoSelected)}>
        <Link to={`/${id.videoId}`} style={{ textDecoration: 'none', color: 'black' }}>
          <img
            alt={snippet.title}
            src={snippet.thumbnails.medium.url}
            style={{ width: '100%' }}
          />
          <VideoCardInfo>
            <h1>{snippet.title}</h1>
            {snippet.description}
          </VideoCardInfo>
        </Link>
      </VideoCard>
    );
  });
}

function VideoCards({ videosMetaInfo, getVideoSelected }) {
  return <>{youtubeCards(videosMetaInfo, getVideoSelected)}</>;
}

export default VideoCards;
