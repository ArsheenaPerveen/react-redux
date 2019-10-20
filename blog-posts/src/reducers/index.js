import { combineReducers } from 'redux';
import PostReducer from './postReducers';
import UserReducer from './userReducer';
export default combineReducers({
    posts: PostReducer,
    user: UserReducer
});