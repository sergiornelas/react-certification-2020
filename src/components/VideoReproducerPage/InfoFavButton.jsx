import React, { useState, useEffect } from 'react';
// import React from 'react';
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

function InfoFavButton({ currentVideoObj }) {
  const [favList, setFavList] = useState({});

  const saveToFav = () => {
    localStorage.setItem('favVideos', JSON.stringify([JSON.parse(favList)]));
  };

  useEffect(() => {
    setFavList(currentVideoObj);
  }, [currentVideoObj]);

  return (
    <Container>
      <FavButton onClick={saveToFav}>Add to Favorites</FavButton>
    </Container>
  );
}

export default InfoFavButton;
