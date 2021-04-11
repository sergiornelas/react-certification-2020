import styled from 'styled-components';

const VideoPlayer = styled.iframe`
  width: 98%;
  height: 216px;
  @media (min-width: 510px) {
    height: 310px;
  }
  @media (min-width: 815px) {
    height: 400px;
  }
  @media (min-width: 1340px) {
    height: 454px;
  }
`;

export default VideoPlayer;
