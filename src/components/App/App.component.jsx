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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import FavoriteVideos from '../../pages/FavoriteVideos/FavoriteVideos';

let id = JSON.parse(localStorage.getItem('currentVideoObject'));
if (id === null) {
  id = { id: 'randomvalue' };
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <GlobalStyles />
          <Layout>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/favorites">
                <FavoriteVideos />
              </Private>
              <Private exact path={`/favorites/:${id.id}`}>
                <VideoReproducer favorites />
              </Private>
              <Route exact path={`/:${id.id}`}>
                <VideoReproducer />
              </Route>
              <ProtectedRoute exact path="/aaa">
                <SecretPage />
              </ProtectedRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
          <Fortune />
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
