import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppState } from '../../providers/AppState/State.provider';
// import Videocards from './VideoCards/VideoCards';
// import useYoutube from '../../utils/hooks/useYoutube';

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

function HomePage() {
  const sectionRef = useRef(null);
  // const { state } = useAppState();
  // const { search } = state;
  // const [...videosMetaInfo] = useYoutube(search);

  return (
    <section ref={sectionRef}>
      <HomeTitle title="Welcome to the Challenge!" />
      <HomeBody>
        hola
        {/* <Videocards videosMetaInfo={videosMetaInfo} /> */}
      </HomeBody>
      <HomeBody />
    </section>
  );
}

export default HomePage;
