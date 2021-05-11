import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import googleReducer from './googleReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	googleReducer: googleReducer,
});
