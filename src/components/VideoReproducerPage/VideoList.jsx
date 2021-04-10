import styled from 'styled-components';

const VideoList = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: scroll;
  overflow-x: hidden;
  height: 60vh;
  @media (min-width: 815px) {
    height: 50vh;
  }
  @media (min-width: 1340px) {
    height: 45vh;
  }
`;

export default VideoList;
