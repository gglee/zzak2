import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import user from './user';
import auth from './auth';

export default combineReducers({
  base,
  user,
  auth,
  pender: penderReducer,
});
