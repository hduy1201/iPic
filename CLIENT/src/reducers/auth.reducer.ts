import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../actions/auth.action';

const initialState: AuthState = {
  isAuthenticated: false,
  idToken: '',
  error: '',
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => state),

  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
    idToken: action.idToken,
  })),

  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    isAuthenticated: false,
    error: action.error,
  })),

  on(AuthActions.logOut, (state) => {
    return {
      ...state,
      isAuthenticated: false,
      idToken: '',
      error: ''
    };
  }),

  on(AuthActions.logOutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    idToken: '',
    error: ''
  })),

  on(AuthActions.logOutFailure, (state, action) => ({
    ...state,
    error: action.error,
    idToken: '',
    isAuthenticated: false,
  }))

);

