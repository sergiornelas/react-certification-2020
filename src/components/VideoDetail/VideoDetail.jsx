import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 216px;
  @media (min-width: 510px) {
    height: 316px;
  }
  @media (min-width: 815px) {
    height: 416px;
  }
  @media (min-width: 1340px) {
    height: 516px;
  }
`;

export const VideoList = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const VideoListElement = styled.div`
  padding: 0.2rem;
  background-color: white;
  border-bottom: rgba(216, 198, 207, 0.5) 2px solid;
  &:hover {
    background-color: rgb(241, 217, 217);
  }
`;

export const Thumbnail = styled.img`
  margin-right: 20px;
  width: 150px;
  @media (min-width: 450px) {
    width: 250px;
  }
`;

function VideoDetail({ selectedVideoId, videosMetaInfo }) {
  const VideoListElements = () => {
    return videosMetaInfo.map((elem) => {
      return (
        <VideoListElement key={elem.id.videoId}>
          <Link
            to={`/${elem.id.videoId}`}
            style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
          >
            <Thumbnail
              src={elem.snippet.thumbnails.medium.url}
              alt={elem.snippet.title}
            />
            <p>{elem.snippet.title}</p>
          </Link>
        </VideoListElement>
      );
    });
  };

  return (
    <Container>
      <VideoPlayer
        title={selectedVideoId}
        src={`https://www.youtube.com/embed/${selectedVideoId}`}
      />
      <VideoList>
        <VideoListElements />
      </VideoList>
    </Container>
  );
}

export default VideoDetail;
