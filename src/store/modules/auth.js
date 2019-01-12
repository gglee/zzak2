import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { applyPenders } from 'redux-pender';
import * as AuthApi from 'lib/api/auth';

const INITIALIZE = 'auth/INITIALIZE'; // 초기화
const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // 인풋 값 변경
const SET_ERROR = 'auth/SET_ERROR'; // 에러 설정
const REGISTER = 'auth/REGISTER'; // 회원가입
const LOGIN = 'auth/LOGIN';

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT, ({ field, value }) => ({
  field,
  value,
}));
export const setError = createAction(SET_ERROR, error => error);
export const register = createAction(REGISTER, AuthApi.register);
export const login = createAction(LOGIN, AuthApi.login);

const initialState = {
  fields: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  error: null,
};

const reducer = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_INPUT]: (state, { payload: { field, value } }) =>
      produce(state, draft => {
        draft.fields[field] = value;
      }),
    [SET_ERROR]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.error = error;
      }),
  },
  initialState
);

export default applyPenders(reducer, [
  {
    type: REGISTER,
    onError: (state, action) =>
      produce(state, draft => {
        const { response } = action.payload;
        if (!response || !response.data || !response.data.msg) {
          draft.error = '알수 없는 오류 발생';
        }
        draft.error = response.data.msg;
      }),
  },
  {
    type: LOGIN,
    onError: (state, action) =>
      produce(state, draft => {
        const { response } = action.payload;
        if (!response || !response.data || !response.data.msg) {
          draft.error = '알수 없는 오류 발생';
        }
        draft.error = response.data.msg;
      }),
  },
]);
