import { combineReducers } from 'redux';

// REDUCERS:
import headerReducer from './header-reducer/Header.reducer';

const rootReducer = combineReducers({ header: headerReducer });

export default rootReducer;
