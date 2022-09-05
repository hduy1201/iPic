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
      switchMap((action) => {
        console.log(action)
        return this.userService.registerUser(action.email, action.firstName, action.lastName)
      }),
      map((action) => {
        console.log(action)
        return UserAction.registerUserSuccess({
          message: "Registed successfuly"
        })
      }),
      catchError((error) => {
        return of(UserAction.registerUserFail({ error: error}))
      })
    )
  );
}
