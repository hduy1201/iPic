import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import * as PostAction from '../actions/post.action';

@Injectable()
export class PostEffectS {
  constructor(private action$: Actions, private postServices: PostService) {}

  createPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostAction.createPost),
      switchMap((action) => this.postServices.addPost(action.post)),
      map(() => PostAction.createPostSuccess()),
      catchError((error) => {
        return of(PostAction.createPostFail({ error: error.message }));
      })
    )
  );

  getAllPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostAction.getPosts),
      switchMap(() => this.postServices.getAllPosts()),
      map((posts) => PostAction.getPostsSuccess({ posts })),
      catchError((error) => {
        return of(PostAction.getPostsFail({ error: error.message }));
      })
    )
  );
}
