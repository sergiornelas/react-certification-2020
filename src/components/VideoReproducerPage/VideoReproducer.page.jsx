import React, { useState } from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import VideoListElements from './VideoListElements/VideoListElements';
import InfoFavButton from './InfoFavButton';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

function VideoReproducer() {
  // const [currentLink, setCurrentLink] = useState(Object.keys(useParams())[0]);
  const data = JSON.parse(localStorage.getItem('currentVideoObj'));
  const [videoUrl, setVideoUrl] = useState(data.id);

  return (
    <Container>
      <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${videoUrl}`} />
      <InfoFavButton currentVideoObj={localStorage.getItem('currentVideoObj')} />
      <VideoList>
        <VideoListElements setVideoUrl={setVideoUrl} />
      </VideoList>
    </Container>
  );
}

export default VideoReproducer;
