import styled from 'styled-components';

const VideoPlayer = styled.iframe`
  width: 99%;
  height: 216px;
  @media (min-width: 510px) {
    height: 316px;
  }
  @media (min-width: 815px) {
    height: 416px;
  }
  @media (min-width: 1340px) {
    height: 460px;
  }
`;

export default VideoPlayer;
