import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import InstaFlickr from './components/InstaFlickr/InstaFlickr';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={InstaFlickr} />
  </Route>
);
