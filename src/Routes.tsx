import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PhotoPage from './pages/PhotoPage';
import PhotosPage from './pages/PhotosPage';
import PostsPage from './pages/PostsPage';
import { RoutePath } from './utils/enums';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={RoutePath.Posts} exact>
          <PostsPage />
        </Route>
        <Route path={RoutePath.Photos} exact>
          <PhotosPage />
        </Route>
        <Route path={`${RoutePath.Photos}/:id`}>
          <PhotoPage />
        </Route>
        <Redirect to={RoutePath.Posts} />
      </Switch>
    </Router>
  );
}
