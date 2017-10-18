import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';

const configureStore = () => {
  if (process.env.NODE_ENV === 'dev') {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
