import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as UserAction from '../actions/user.action';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {}

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserAction.registerUser),
      switchMap(( ) => this.userService.registerUser()),
      map(() => {
        return UserAction.registerUserSuccess()
      }),
      catchError((error) => {
        return of(UserAction.registerUserFail({ error: error}))
      })
    )
  );
}
