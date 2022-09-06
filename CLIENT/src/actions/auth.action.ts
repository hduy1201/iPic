import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ idToken: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logOut = createAction('[Auth] Logout');
export const logOutSuccess = createAction('[Auth] Logout Success');
export const logOutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);
