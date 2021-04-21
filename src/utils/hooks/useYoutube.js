import axios from 'axios';
import { useEffect, useState } from 'react';

const KEY = 'AIzaSyDHWyxODQmGDD0Y8walA1RcEVgUYCnBqH0'; // hosting
// const KEY = `${process.env.REACT_APP_NOT_SECRET_CODE}`;

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 24,
    key: KEY,
  },
  headers: {},
});

export default function useYoutube(search) {
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);

  useEffect(() => {
    const response = youtubeApi.get('/search', {
      params: {
        q: search,
      },
    });
    response.then((youtubeData) => {
      setVideosMetaInfo(youtubeData.data.items);
    });
    response.catch((e) => console.log('error youtube api: ', e));
  }, [setVideosMetaInfo, search]);

  return videosMetaInfo;
}
