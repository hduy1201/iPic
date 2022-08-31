import { createReducer, on } from '@ngrx/store';
import { User } from 'src/models/user';
import { registerUserState } from 'src/states/user.state';
import * as UserAction from '../actions/user.action';

const initCreateUserState: registerUserState = {
  isLoading: false,
  isSuccess: false,
  user: <User>{},
  error: '',
};

export const registerUserReducer = createReducer(
  initCreateUserState,
  on(UserAction.registerUser, (state) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
    };
  }),

  on(UserAction.registerUserSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
    };
  }),

  on(UserAction.registerUserFail, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      error: action.error,
    };
  })
);
