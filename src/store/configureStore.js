import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';
import {loadState} from './localStorage';

const persistState = loadState();
const configureStore = () => {
  if (process.env.NODE_ENV === 'dev') {
    return createStore(
      rootReducer,
      persistState,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
  }

  return createStore(
    rootReducer,
    persistState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
