import React, { useRef } from 'react';
import styled from 'styled-components';
import Videocards from './VideoCards/VideoCards';
import useYoutube from '../../utils/hooks/useYoutube';
import { useAppState } from '../../providers/AppState/State.provider';

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
  // not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }
  // not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  const { state } = useAppState();
  const { search, darkTheme } = state;
  const [...videosMetaInfo] = useYoutube(search);

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
      <HomeBody>
        <Videocards videosMetaInfo={videosMetaInfo} />
        {/* not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {/* {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">let me in →</Link>
        )} */}
        {/* not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      </HomeBody>
    </section>
  );
}

export default HomePage;
