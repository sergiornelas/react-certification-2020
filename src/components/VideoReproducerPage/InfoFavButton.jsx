import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: white;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const FavButton = styled.button`
  height: 50px;
  padding: 10px;
  background-color: brown;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  font-weight: bold;
  margin: 0.5rem;
  &:hover {
    background-color: #af6666;
    cursor: pointer;
  }
`;

function InfoFavButton({ actualVideo }) {
  const [fav, setFav] = useState();

  const saveToFav = () => {
    // if there is stored favVideos already
    if (localStorage.getItem('favVideos')) {
      localStorage.setItem(
        'favVideos',
        JSON.stringify([...JSON.parse(localStorage.getItem('favVideos')), fav])
      );
    } else {
      localStorage.setItem('favVideos', JSON.stringify([fav]));
    }
  };

  useEffect(() => {
    setFav(JSON.parse(actualVideo));
  }, [actualVideo]);

  return (
    <Container>
      <p>{JSON.parse(actualVideo).title}</p>
      <p>{JSON.parse(actualVideo).description}</p>
      <FavButton onClick={saveToFav}>Add to Favorites</FavButton>
    </Container>
  );
}

export default InfoFavButton;
