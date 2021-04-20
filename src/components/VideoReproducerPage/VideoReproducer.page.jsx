import React, { useState } from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import VideoListElements from './VideoListElements/VideoListElements';
// import useYoutube from '../../utils/hooks/useYoutube';
// import { useAppState } from '../../providers/AppState/State.provider';

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
  const [videoUrl, setVideoUrl] = useState(localStorage.getItem('videoId'));
  // const { search } = useAppState();
  // const [...data] = useYoutube(search);

  return (
    <Container>
      <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${videoUrl}`} />
      <VideoList>
        <VideoListElements setVideoUrl={setVideoUrl} />
      </VideoList>
    </Container>
  );
}

export default VideoReproducer;
