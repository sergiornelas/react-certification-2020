import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import Videocards from './VideoCards/VideoCards';
import useYoutube from '../../utils/hooks/useYoutube';

export const HomeTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 3rem;
  color: rgb(117, 36, 36);
`;

const HomeBody = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function HomePage({ search, getVideoSelected }) {
  // not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  // not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  const [...data] = useYoutube(search);

  return (
    <section ref={sectionRef}>
      <HomeTitle data-testid="columnheader">Welcome to the Challenge!</HomeTitle>
      <HomeBody>
        <Videocards videosMetaInfo={data} getVideoSelected={getVideoSelected} />

        {/* not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {authenticated ? (
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
        )}
        {/* not my code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      </HomeBody>
    </section>
  );
}

export default HomePage;
