import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppState } from '../../providers/AppState/State.provider';
import { useAuth } from '../../providers/Auth/Auth.provider';
import Videocards from './VideoCards/VideoCards';
import useYoutubeData from '../../utils/hooks/useYoutubeData';

export const HomeTitleLight = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem;
  color: rgb(117, 36, 36);
`;

export const HomeTitleDark = styled(HomeTitleLight)`
  color: white;
`;

export const HomeBody = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const HomeTitle = ({ title }) => {
  const { state } = useAppState();
  const { darkTheme } = state;

  if (darkTheme) {
    return <HomeTitleDark data-testid="columnheader">{title}</HomeTitleDark>;
  }
  return <HomeTitleLight data-testid="columnheader">{title}</HomeTitleLight>;
};

export function HomePage() {
  const { authenticated } = useAuth();
  const sectionRef = useRef(null);
  // const videosMetaInfo = JSON.parse(localStorage.getItem('favVideos'));
  const videosMetaInfo = useYoutubeData();
  const link = '';

  return (
    <section ref={sectionRef}>
      {authenticated ? (
        <HomeTitle title="Welcome Dear User!" />
      ) : (
        <HomeTitle title="Welcome to the Challenge!" />
      )}
      <HomeBody>
        <Videocards videosMetaInfo={videosMetaInfo} link={link} />
      </HomeBody>
      <HomeBody />
    </section>
  );
}

export default HomePage;
