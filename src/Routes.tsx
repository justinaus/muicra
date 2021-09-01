import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PhotosPage from './pages/PhotosPage';
import PostsPage from './pages/PostsPage';
import { RoutePath } from './utils/enums';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={RoutePath.Posts}>
          <PostsPage />
        </Route>
        <Route path={RoutePath.Photos}>
          <PhotosPage />
        </Route>
        <Redirect to={RoutePath.Posts} />
      </Switch>
    </Router>
  );
}
