import { createAction, handleActions } from 'redux-actions';
import immer from 'immer';
import { applyPenders } from 'redux-pender';
import * as AuthApi from 'lib/api/auth';

const CHECK_AUTH = 'user/CHECK_AUTH';

export const checkAuth = createAction(CHECK_AUTH, AuthApi.checkAuth);

const initialState = {
  user: null, // 유저정보
  tokenExp: null, // 토큰 만료 시간
};

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: CHECK_AUTH,
    // onSuccess:
  },
]);
