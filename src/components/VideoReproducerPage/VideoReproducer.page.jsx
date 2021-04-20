import React, { useState } from 'react';
import styled from 'styled-components';
// import useYoutube from '../../utils/hooks/useYoutube';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import VideoListElements from './VideoListElements/VideoListElements';
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

  function updateVideoPlayer(id) {
    localStorage.setItem('videoId', id);
    setVideoUrl(localStorage.getItem('videoId'));
  }

  return (
    <Container>
      <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${videoUrl}`} />
      <VideoList>
        {/* <VideoListElements data={data} updateVideoPlayer={updateVideoPlayer} /> */}
        <VideoListElements updateVideoPlayer={updateVideoPlayer} />
      </VideoList>
    </Container>
  );
}

export default VideoReproducer;
