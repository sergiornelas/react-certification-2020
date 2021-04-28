import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeText = styled.button`
  background-color: white;
  font-size: inherit;
  border-radius: 7px;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
  &:hover {
    background-color: lightgray;
  }
`;

function Home() {
  return (
    <div>
      <Link to="/">
        <HomeText>Home</HomeText>
      </Link>
    </div>
  );
}

export default Home;
