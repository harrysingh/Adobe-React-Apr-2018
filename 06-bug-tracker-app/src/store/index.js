import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'

let appStore = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default appStore;