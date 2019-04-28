import { combineReducers } from 'redux';
import commentReducer from './Comments';

export default combineReducers({
    comments: commentReducer
}) 