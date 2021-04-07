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
import VideoReproducer from '../VideoReproducer/VideoReproducer';

function App() {
  const [search, setSearch] = useState('wizeline');
  const [videoSelected, setVideoSelected] = useState('');

  const searchResult = (word) => {
    setSearch(word);
  };

  const getVideoSelected = (id) => {
    setVideoSelected(id);
  };

  console.log(' VIDEO SELECTED (APP):', videoSelected);

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyles />
        <NavBar searchResult={searchResult} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage search={search} getVideoSelected={getVideoSelected} />
            </Route>
            <Route path={`/:${localStorage.getItem('videoId')}`}>
              <VideoReproducer />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
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
