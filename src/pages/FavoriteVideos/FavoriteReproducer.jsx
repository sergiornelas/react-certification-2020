import React, { useState } from 'react';
import { Container } from '../../components/VideoReproducerPage/VideoReproducer.page';
import VideoPlayer from '../../components/VideoReproducerPage/VideoPlayer';
import VideoList from '../../components/VideoReproducerPage/VideoList';
// import VideoListElements from '../../components/VideoReproducerPage/VideoListElements/VideoListElements';

function FavoriteReproducer() {
  // const currentVideo = JSON.parse(localStorage.getItem('currentVideoObj'));
  // const x = localStorage.getItem('videoId');
  const { id } = JSON.parse(localStorage.getItem('currentVideoObject'));
  // const [videoUrl, setVideoUrl] = useState(currentVideo.id);
  // const [videoUrl] = useState(currentVideo.id);
  const [videoUrl] = useState(id);
  console.log('ESTAS EN FAVORITE REPRODUCER');
  return (
    <Container style={{ margin: '2rem' }}>
      FAVORITOS!
      <VideoPlayer title={videoUrl} src={`https://www.youtube.com/embed/${videoUrl}`} />
      FAVORITOS!
      <VideoList>
        {/* <VideoListElements setVideoUrl={setVideoUrl} /> */}
        Lista
      </VideoList>
    </Container>
  );
}

export default FavoriteReproducer;
