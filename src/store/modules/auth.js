import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INITIALIZE = 'auth/INITIALIZE'; // 초기화
const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // 인풋 값 변경
const SET_ERROR = 'auth/SET_ERROR'; // error 설정

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT, ({ field, value }) => ({
  field,
  value,
}));
export const setError = createAction(SET_ERROR, error => error);

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

export default reducer;
