import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mockYoutubeData from '../../mock/youtube-videos-mock.json';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const VideoCard = styled.div`
    /* height: 345px;
    width: 345px; */
    background-color: white;
    width: auto;
    margin: 1rem;

    display: flex;
    /* flex-direction: column; */
  `;

  const youtubeData = mockYoutubeData.items.map((elem) => {
    return (
      // <card key={elem.etag}>
      //   <img alt="img" src={elem.snippet.thumbnails.default.url} />
      //   {elem.snippet.title}
      // </card>
      <VideoCard>
        <img alt="img" src={elem.snippet.thumbnails.medium.url} />
        {elem.snippet.title}
      </VideoCard>
    );
  });

  return (
    <section className="homepage" ref={sectionRef}>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Challenge!</h1>
      {youtubeData}
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
    </section>
  );
}

export default HomePage;
