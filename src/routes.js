import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import WordsPage from './components/Word/WordsPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WordsPage} />
    <Route path="words" component={WordsPage} />
  </Route>
);
