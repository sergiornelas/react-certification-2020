import React from 'react';
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

function VideoReproducer() {
  return (
    <Container>
      <br />
      FAVORITE VIDEOS!
    </Container>
  );
}

export default VideoReproducer;
