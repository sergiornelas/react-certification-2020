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
        {videosMetaInfo ? (
          <VideoCards videosMetaInfo={videosMetaInfo} link={link} />
        ) : (
          <h2>You don&apos;t have favorites!</h2>
        )}
      </HomeBody>
    </>
  );
};

export default FavoriteVideos;
