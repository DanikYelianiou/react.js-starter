import { combineReducers } from 'redux';

export const appReducers = {
//   user: userReducer,
};

const rootReducer = combineReducers({ ...appReducers });

export default rootReducer;
