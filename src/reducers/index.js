import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import instaFlickr from './instaFlickrReducer';


const rootReducer = combineReducers({
  ajaxCallsInProgress,
  instaFlickr
});

export default rootReducer;
