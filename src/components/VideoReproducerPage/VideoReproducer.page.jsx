import React, { useState } from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
// import VideoListElements from './VideoListElements/VideoListElements';
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
  // const currentVideo = JSON.parse(localStorage.getItem('currentVideoObj'));
  // const x = localStorage.getItem('videoId');

  // const [videoUrl, setVideoUrl] = useState(currentVideo.id);

  //-----
  const { id } = JSON.parse(localStorage.getItem('currentVideoObject'));
  // const [videoUrl, setVideoUrl] = useState(id);
  const [videoUrl] = useState(id);

  return (
    <Container>
      {/* <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${x}`} /> */}
      <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${videoUrl}`} />
      {/* <InfoFavButton actualVideo={localStorage.getItem('currentVideoObj')} /> */}
      <InfoFavButton actualVideo={localStorage.getItem('currentVideoObject')} />
      <VideoList>
        {/* <VideoListElements setVideoUrl={setVideoUrl} /> */}
        hola
      </VideoList>
    </Container>
  );
}

export default VideoReproducer;
