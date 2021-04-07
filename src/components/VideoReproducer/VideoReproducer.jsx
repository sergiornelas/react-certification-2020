import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

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

function VideoReproducer() {
  const x = useParams();
  console.log('x:', Object.keys(x)[0]);
  const xx = Object.keys(x)[0];

  // console.log('VIDEOSELECTED (VR)', videoSelected);
  // useEffect(() => {
  //   const response = youtubeApi.get('/search', {
  //     params: {
  //       q: xx,
  //     },
  //   });
  //   console.log('YOUTUBE API QUERY DATA CONSUMED (VIDEO REPRODUCER)');
  //   response.then((youtubeData) => console.log(youtubeData.data.items[0].id.videoId));
  // }, [xx]);

  // const VideoListElements = () => {
  //   return videosMetaInfo.map((elem) => {
  //     return (
  //       <VideoListElement key={elem.id.videoId}>
  //         <Link
  //           to={`/${elem.id.videoId}`}
  //           style={{ textDecoration: 'none', color: 'black', display: 'flex' }}
  //         >
  //           <Thumbnail
  //             src={elem.snippet.thumbnails.medium.url}
  //             alt={elem.snippet.title}
  //           />
  //           <p>{elem.snippet.title}</p>
  //         </Link>
  //       </VideoListElement>
  //     );
  //   });
  // };

  return (
    <Container>
      <VideoPlayer title={xx} src={`https://www.youtube.com/embed/${xx}`} />
      {/* <VideoList>
        <VideoListElements />
      </VideoList> */}
    </Container>
  );
}

export default VideoReproducer;
