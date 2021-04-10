import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useYoutube from '../../utils/hooks/useYoutube';

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
  width: 99%;
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

function VideoReproducer({ search }) {
  // const [currentLink, setCurrentLink] = useState(Object.keys(useParams())[0]);
  const [...data] = useYoutube(search);
  const [videoUrl, setVideoUrl] = useState(localStorage.getItem('videoId'));

  function updateVideoPlayer(id) {
    localStorage.setItem('videoId', id);
    setVideoUrl(localStorage.getItem('videoId'));
  }

  const VideoListElements = () => {
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
        title={localStorage.getItem('videoId')}
        src={`https://www.youtube.com/embed/${videoUrl}`}
      />
      <VideoList>
        <VideoListElements />
      </VideoList>
    </Container>
  );
}

export default VideoReproducer;
