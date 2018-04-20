import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';
import { combineReducers } from 'redux';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

export default rootReducer;