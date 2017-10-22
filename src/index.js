/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadFeeds} from './actions/instaFlickrActions';
import {saveState} from './store/localStorage';

const store = configureStore();

store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(loadFeeds('nature'));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
