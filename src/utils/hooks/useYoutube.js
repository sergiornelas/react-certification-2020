import axios from 'axios';
import { useEffect, useState } from 'react';

const KEY = 'AIzaSyCQEOOburB6mldMChkU2Z9_VLTTrmD6pgc'; //  wizelineReact
// const KEY = 'AIzaSyC_kd_Wf8pJ1r6adCkQt3vfWGUsqMGs3Z8'; //  wizelineReact2
// const KEY = 'AIzaSyDHWyxODQmGDD0Y8walA1RcEVgUYCnBqH0'; //  wizelineReact3

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

const useYoutube = (search) => {
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
  }, [setVideosMetaInfo, search]);

  return videosMetaInfo;
};

export default useYoutube;
