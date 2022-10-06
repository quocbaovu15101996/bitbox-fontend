import { combineReducers } from '@reduxjs/toolkit';
import { login } from './login/login.reducer';
import userReducer from './user.store';

const rootReducer = combineReducers({
  user: userReducer,
  login
});

export default rootReducer;
