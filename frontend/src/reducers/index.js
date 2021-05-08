import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import socialReducer from './socialReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	socialReducer: socialReducer,
});
