import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/models/post';
import { createPostState, getAllPostState } from 'src/states/post.state';
import * as PostAction from '../actions/post.action';

const initCreatePostState: createPostState = {
  isLoading: false,
  post: <Post>{},
  error: '',
};

export const createPostReducer = createReducer(
  initCreatePostState,
  on(PostAction.createPost, (state, action) => {
    return {
      ...state,
      isLoading: true,
      post: action.post,
    };
  }),

  on(PostAction.createPostSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
      post: <Post>{},
    };
  }),

  on(PostAction.createPostFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
      post: <Post>{},
    };
  })
);

const initGetAllPostState: getAllPostState = {
  isLoading: false,
  posts: <Post[]>[],
  error: '',
  isSuccess: false,
};

export const getAllPostReducer = createReducer(
  initGetAllPostState,
  on(PostAction.getPosts, (state) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
    };
  }),

  on(PostAction.getPostsSuccess, (state, { posts }) => {
    return {
      ...state,
      isLoading: false,
      posts: posts,
      isSuccess: true,
    };
  }),

  on(PostAction.getPostsFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
      isSuccess: false,
    };
  })
);
