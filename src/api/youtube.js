import axios from 'axios';

// const KEY = 'AIzaSyBJxCrrJue-JrD3up_cp-E7PN1nCB7jN1I';
const KEY = `${process.env.REACT_APP_NOT_SECRET_CODE}`;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY,
  },
  headers: {},
});
