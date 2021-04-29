import styled from 'styled-components';

const VideoList = styled.div`
  width: 100%;
  cursor: pointer;
  overflow: scroll;
  overflow-x: hidden;
  height: 46vh;
  @media (min-width: 815px) {
    height: 35vh;
  }
  @media (min-width: 1340px) {
    height: 37vh;
  }
`;

export default VideoList;
