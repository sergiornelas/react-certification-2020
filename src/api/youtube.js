import axios from 'axios';

// const KEY = 'AIzaSyDMFcPK8HSf8kOFrkPnAJH83DTJBYJGC74'; //  vieja
const KEY = 'AIzaSyCb-N5KqXz6aIZ-A6v5AAv5H6YMZsY6P18'; //  nueva
// const KEY = `${process.env.REACT_APP_NOT_SECRET_CODE}`;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 3,
    key: KEY,
  },
  headers: {},
});
