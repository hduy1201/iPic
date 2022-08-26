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
      switchMap((action) => this.postServices.addPost(action.post, action.files)),
      map((res) => {
        console.log(res);
        return PostAction.createPostSuccess({message: res.message});
      }),
      catchError((error) => {
        console.log(error)
        return of(PostAction.createPostFail({ error: error.error.message }));
      })
    )
  );

  getAllPost$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostAction.getPosts),
      switchMap(() => this.postServices.getAllPosts()),
      map((posts) => {
        return  PostAction.getPostsSuccess({ posts })
      }),
      catchError((error) => {
        return of(PostAction.getPostsFail({ error: error.message }));
      })
    )
  );

  getPost$ = createEffect(() =>
  this.action$.pipe(
    ofType(PostAction.getPost),
    switchMap((action) => this.postServices.getPost(action.id)),
    map((post) => {
      return  PostAction.getPostSuccess({ post })
    }),
    catchError((error) => {
      return of(PostAction.getPostFail({ error: error.message }));
    })
  )
  )
}
