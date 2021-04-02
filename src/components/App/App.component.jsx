import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { GlobalStyles } from '../../global';

import NavBar from '../NavBar/NavBar.component';
import youtubeApi from '../../api/youtube';
import VideoDetail from '../VideoDetail/VideoDetail';

function App() {
  //  START INDIO
  const [videosMetaInfo, setVideosMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  console.log(selectedVideoId);

  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });

    setVideosMetaInfo(response.data.items);
    // setSelectedVideoId(response.data.items[0].id.videoId);
    console.log(response); // {data: Object, status: 200...}
    //  console.log(this.state); //{videosMetaInfo...}
  };
  //  END INDIO

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <NavBar onSearch={onSearch} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage onVideoSelected={onVideoSelected} data={videosMetaInfo} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="/3CmJ68RU2fs">
              <VideoDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
