import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import StateProvider from '../../providers/AppState';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { GlobalStyles } from '../../global';
import NavBar from '../NavBar/NavBar.component';
import VideoReproducer from '../VideoReproducerPage/VideoReproducer.page';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <GlobalStyles />
          <NavBar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
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
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
