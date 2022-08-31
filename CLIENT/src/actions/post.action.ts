import { createAction, props } from '@ngrx/store';
import { Post } from 'src/models/post';

//CREATE POST
export const createPost = createAction(
  '[Post] Post',
  props<{ post: Post; files: Array<File>}>()
);

export const createPostSuccess = createAction(
  '[Post] Post Success',
  props<{ message: string }>()
);

export const createPostFail = createAction(
  '[Post] Post Failure',
  props<{ error: string }>()
);
//LIST POST
export const getPosts = createAction(
  '[Post] Get All Posts',
  props<{ page: number; pageSize: number }>()
);

export const getPostsSuccess = createAction(
  '[Post] Get All Posts Success',
  props<{ posts: Post[] }>()
);

export const getPostsFail = createAction(
  '[Post] Get All Posts Fail',
  props<{ error: string }>()
);

//DETAIL POST
export const getPost = createAction('[Post] Get Post', props<{ id: string }>());
export const getPostSuccess = createAction(
  '[Post] Get Post Success',
  props<{ post: Post }>()
);
export const getPostFail = createAction(
  '[Post] Get Post Fail',
  props<{ error: string }>()
);
