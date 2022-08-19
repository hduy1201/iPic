import { createAction, props } from '@ngrx/store';
import { Post } from 'src/models/post';

export const createPost = createAction('[Post] Post', props<{ post: Post }>());

export const createPostSuccess = createAction('[Post] Post Success');

export const createPostFail = createAction(
  '[Post] Post Failure',
  props<{ error: string }>()
);

export const getPosts = createAction('[Post] Get All Posts');

export const getPostsSuccess = createAction(
  '[Post] Get All Posts Success',
  props<{ posts: Post[] }>()
);

export const getPostsFail = createAction(
  '[Post] Get All Posts Fail',
  props<{ error: string }>()
);
