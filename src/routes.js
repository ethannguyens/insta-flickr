import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import ImageSection from './components/ImageSection/ImageSection';
import ImageSaveSection from './components/ImageSaveSection/ImageSaveSection';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ImageSection} />
    <Route path="save" component={ImageSaveSection} />
  </Route>
);
