import { createReducer, on } from '@ngrx/store';
import { User } from 'src/models/user';
import { registerUserState } from 'src/states/user.state';
import * as UserAction from '../actions/user.action';

const initCreateUserState: registerUserState = {
  isSuccess: false,
  error: '',
  message: ''
};

export const registerUserReducer = createReducer(
  initCreateUserState,
  on(UserAction.registerUser, (state,action) => {
    return {
      ...state,
      isSuccess: false,
      error: '',
      message: ''
    };
  }),

  on(UserAction.registerUserSuccess, (state, action) => {
    return {
      ...state,
      isSuccess: true,
      message: action.message,
      error: ''
    };
  }),

  on(UserAction.registerUserFail, (state, action) => {
    return {
      ...state,
      isSuccess: false,
      error: action.error,
      message: action.error
    };
  })
);
