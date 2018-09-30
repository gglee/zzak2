import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';

export default combineReducers({
  base,
  pender: penderReducer,
});
