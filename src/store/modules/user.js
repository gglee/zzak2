import { createAction, handleActions } from 'redux-actions';

const initialState = {
  user: null, // 유저정보
  tokenExp: null, // 토큰 만료 시간
};

const reducer = handleActions({}, initialState);

export default reducer;
