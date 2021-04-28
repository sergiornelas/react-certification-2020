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

export const DropFavButton = styled(FavButton)`
  background-color: grey;
`;

function InfoFavButton({ actualVideo }) {
  const [fav, setFav] = useState();
  const [toggleFavButton, setToggleFavButton] = useState(true);

  const currentFavList = localStorage.getItem('favVideos');
  const currentVideo = JSON.parse(actualVideo).id;

  const swap = () => {
    let favVideoList = localStorage.getItem('favVideos');
    if (!favVideoList) {
      favVideoList = '';
    }
    setToggleFavButton(favVideoList.includes(currentVideo));
  };

  const saveToFav = () => {
    // if there is stored favVideos already
    if (currentFavList) {
      localStorage.setItem(
        'favVideos',
        JSON.stringify([...JSON.parse(currentFavList), fav])
      );
    } else {
      localStorage.setItem('favVideos', JSON.stringify([fav]));
    }
    swap();
  };

  const removeFromFav = () => {
    const favVideoList = JSON.parse(currentFavList);
    favVideoList.splice(
      favVideoList.findIndex((item) => item.id === currentVideo),
      1
    );
    localStorage.setItem('favVideos', JSON.stringify(favVideoList));
    swap();
  };

  useEffect(() => {
    swap();
  });

  useEffect(() => {
    setFav(JSON.parse(actualVideo));
  }, [actualVideo]);

  return (
    <Container>
      <p>{JSON.parse(actualVideo).title}</p>
      <p>{JSON.parse(actualVideo).description}</p>
      {toggleFavButton ? (
        <DropFavButton onClick={removeFromFav}>Remove from favorites</DropFavButton>
      ) : (
        <FavButton onClick={saveToFav}>Add to Favorites</FavButton>
      )}
    </Container>
  );
}

export default InfoFavButton;
