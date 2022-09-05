import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from "src/app/services/auth.service";
import { URL } from "src/configs/baseURL";
import * as ChooseAction from '../actions/choose.action';
@Injectable()
export class InterestEffect {

    private idToken = '';
    constructor(private action$: Actions, private http: HttpClient, private AuthService: AuthService) {
        this.AuthService.user$.subscribe(async user => {
            if (user.email) {
                this.idToken = await user.getIdToken();
            }
        })
    }

    saveInterests$ = createEffect(() =>
        this.action$.pipe(
            ofType(ChooseAction.saveInterests),
            switchMap((action) => {
                var header = {
                    headers: new HttpHeaders().set('Authorization', `Bearer ${this.idToken}`),
                };
                return this.http.put(URL + 'user/save-interests', { interests: action.interests }, header);
            }),
            map((action) => {
                return ChooseAction.saveInterestsSuccess();
            }),
            catchError((error) => {
                return of(ChooseAction.saveInterestsFailure({ error: error.message }));
            })
        )
    );
}
