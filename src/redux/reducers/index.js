import { combineReducers } from 'redux';
import availability from './availability';

const rootReducer = combineReducers({
	availability,
});

export default rootReducer;
