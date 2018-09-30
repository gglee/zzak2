import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';
import user from './user';

export default combineReducers({
  base,
  user,
  pender: penderReducer,
});
