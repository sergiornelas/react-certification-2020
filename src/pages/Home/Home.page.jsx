import React, { useRef } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useAppState } from '../../providers/AppState/State.provider';
import Videocards from './VideoCards/VideoCards';
import useYoutube from '../../utils/hooks/useYoutube';

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
  const { state } = useAppState();
  const { search } = state;
  const [...videosApiInfo] = useYoutube(search);

  const newMeta = [];
  videosApiInfo.forEach((element) => {
    newMeta.push({
      id: element.id.videoId,
      title: element.snippet.title,
      description: element.snippet.description,
      thumbnail: element.snippet.thumbnails.medium.url,
    });
  });

  const link = '';

  return (
    <section ref={sectionRef}>
      <HomeTitle title="Welcome to the Challenge!" />
      <HomeBody>
        {/* <Link style={{ color: 'black' }} to="/aaa">
          go to secret page
        </Link> */}

        <Videocards videosMetaInfo={newMeta} link={link} />
      </HomeBody>
      <HomeBody />
    </section>
  );
}

export default HomePage;
