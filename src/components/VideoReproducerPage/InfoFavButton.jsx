import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { Info } from './Info';

const Container = styled.section`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const AddFavButton = styled.button`
  height: 60px;
  background-color: brown;
  /* padding: 2px; */
  color: white;
  font-size: 0.9rem;
  border-radius: 5px;
  font-weight: bold;
  margin: 0.5rem;
  &:hover {
    background-color: #af6666;
    cursor: pointer;
  }
`;

export const DropFavButton = styled(AddFavButton)`
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

  const { authenticated } = useAuth();

  const FavButton = () => {
    let buttonAppears;
    if (authenticated) {
      buttonAppears = toggleFavButton ? (
        <DropFavButton onClick={removeFromFav}>Remove from favorites</DropFavButton>
      ) : (
        <AddFavButton onClick={saveToFav}>Add to Favorites</AddFavButton>
      );
    } else {
      buttonAppears = <></>;
    }
    return buttonAppears;
  };

  return (
    <Container>
      {/* <p style={{ fontSize: '0.5rem' }}>{JSON.parse(actualVideo).title}</p>
      <p>{JSON.parse(actualVideo).description}</p> */}
      <Info
        title={JSON.parse(actualVideo).title}
        description={JSON.parse(actualVideo).description}
      />
      <FavButton />
    </Container>
  );
}

export default InfoFavButton;
