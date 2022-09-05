import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../app/services/auth.service';
import * as AuthActions from '../actions/auth.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) { }

  authEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      switchMap(() => this.authService.login()),
      map((idToken) => AuthActions.loginSuccess({ idToken: idToken })),
      catchError((error) => of(AuthActions.loginFailure({ error: error })))
    )
  );

  logoutEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logOut),
      switchMap(() => from(this.authService.logOut())),
      map(() => AuthActions.logOutSuccess()),
      catchError((error) => of(AuthActions.logOutFailure({ error: error })))
    )
  );
}
