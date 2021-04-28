import React from 'react';
import { HomeTitle, HomeBody } from '../Home/Home.page';
import VideoCards from '../Home/VideoCards/VideoCards';

const FavoriteVideos = () => {
  const videosMetaInfo = JSON.parse(localStorage.getItem('favVideos'));
  const link = 'favorites';

  return (
    <>
      <HomeTitle title="Favorites ✯" />
      <HomeBody>
        <VideoCards videosMetaInfo={videosMetaInfo} link={link} />
      </HomeBody>
    </>
  );
};

export default FavoriteVideos;
