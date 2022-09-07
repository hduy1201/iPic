import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from "src/app/services/auth.service";
import { URL } from "src/configs/baseURL";
import * as CommentAction from '../actions/comment.action';
@Injectable()
export class CommentEffect {

    private idToken = '';
    constructor(private action$: Actions, private http: HttpClient, private AuthService: AuthService) {
        this.AuthService.user$.subscribe(async user => {
            if (user.email) {
                this.idToken = await user.getIdToken();
            }
        })
    }

    createCommen$ = createEffect(() =>
        this.action$.pipe(
            ofType(CommentAction.comment),
            switchMap((action) => {
                var header = {
                    headers: new HttpHeaders().set('Authorization', `Bearer ${this.idToken}`),
                };
                return this.http.post(URL + 'comment/create-comment', {
                    postId: action.postId,
                    content: action.comment
                }, header);
            }),
            map((action) => {
                return CommentAction.commentSuccess();
            }),
            catchError((error) => {
                return of(CommentAction.commentFailure({ error: error.message }));
            })
        )
    );
}
