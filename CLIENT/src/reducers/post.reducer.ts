import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/models/post';
import { createPostState, PostState } from 'src/states/post.state';
import * as PostAction from '../actions/post.action';

const initcreatePostState: createPostState = {
  isLoading: false,
  post: <Post>{},
  error: '',
};

export const createPostReducer = createReducer(
  initcreatePostState,
  on(PostAction.createPost, (state, action) => {
    return {
      ...state,
      isLoading: true,
      post: action.post
    };
  }),

  on(PostAction.createPostSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
      post: <Post>{}
    };
  }),

  on(PostAction.createPostFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
      post: <Post>{}
    };
  })
);

// on(PostAction.getPosts, (state) => {
//     return {
//       ...state,
//       isLoading: true,
//     };
//   }),

//   on(PostAction.getPostsSuccess, (state, { posts }) => {
//     return {
//       ...state,
//       isLoading: false,
//       post: posts,
//     };
//   }),

//   on(PostAction.getPostsFail, (state, { error }) => {
//     return {
//       ...state,
//       isLoading: false,
//       error: error,
//     };
//   })
