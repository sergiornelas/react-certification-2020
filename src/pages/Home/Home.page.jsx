import React, { useRef } from 'react';
import styled from 'styled-components';
// import { Link, useHistory } from 'react-router-dom';
// import Videocards from './VideoCards/VideoCards';
// import useYoutube from '../../utils/hooks/useYoutube';
import { useAppState } from '../../providers/AppState/State.provider';
// import { useAuth } from '../../providers/Auth/Auth.provider';

export const HomeTitleLight = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem;
  color: rgb(117, 36, 36);
`;

export const HomeTitleDark = styled(HomeTitleLight)`
  color: white;
`;

const HomeBody = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function HomePage() {
  const sectionRef = useRef(null);
  const { state } = useAppState();
  // const { search, darkTheme } = state;
  const { darkTheme } = state;
  // const [...videosMetaInfo] = useYoutube(search);

  const HomeTitle = () => {
    if (darkTheme) {
      return (
        <HomeTitleDark data-testid="columnheader">
          Welcome to the Challenge!
        </HomeTitleDark>
      );
    }
    return (
      <HomeTitleLight data-testid="columnheader">
        Welcome to the Challenge!
      </HomeTitleLight>
    );
  };

  return (
    <section ref={sectionRef}>
      <HomeTitle data-testid="columnheader">Welcome to the Challenge!</HomeTitle>
      <HomeBody>{/* <Videocards videosMetaInfo={videosMetaInfo} /> */}</HomeBody>
    </section>
  );
}

export default HomePage;
