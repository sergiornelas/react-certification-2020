import React from 'react';
import { Link } from 'react-router-dom';
import { HomeTitle, HomeBody } from '../Home/Home.page';
import { VideoCard, VideoCardInfo } from '../Home/VideoCards/VideoCards';

const FavoriteVideos = () => {
  const videosMetaInfo = JSON.parse(localStorage.getItem('favVideos'));

  return videosMetaInfo.map((element) => {
    return (
      <VideoCard key={element.id} onClick={() => console.log(element.id)}>
        <Link
          to={`/favorites/${element.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <img alt={element.title} src={element.thumbnail} style={{ width: '100%' }} />
          <VideoCardInfo>
            <h1>{element.title}</h1>
            {element.description}
          </VideoCardInfo>
        </Link>
      </VideoCard>
    );
  });
};

const FavoriteVideoHome = () => {
  return (
    <>
      <HomeTitle title="Favorites" />
      <HomeBody>
        <FavoriteVideos />
      </HomeBody>
    </>
  );
};

export default FavoriteVideoHome;
