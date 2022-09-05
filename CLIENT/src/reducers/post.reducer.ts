import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/models/post';
import { createPostState, getAllPostState, getPostState, getSearchPostState } from 'src/states/post.state';
import * as PostAction from '../actions/post.action';

const initCreatePostState: createPostState = {
  isLoading: false,
  post: <Post>{},
  error: '',
  isSuccess: false,
  message: ''
};

export const createPostReducer = createReducer(
  initCreatePostState,
  on(PostAction.createPost, (state, action) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
      post: action.post,
    };
  }),

  on(PostAction.createPostSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      post: <Post>{},
      message: action.message
    };
  }),

  on(PostAction.createPostFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
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

const initGetSearchPostState: getSearchPostState = {
  isLoading: false,
  posts: <Post[]>[],
  error: '',
  isSuccess: false,
};

export const getSearchPostReducer = createReducer(
  initGetSearchPostState,
  on(PostAction.getSearchPosts, (state) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
    };
  }),

  on(PostAction.getSearchPostsSuccess, (state, { posts }) => {
    return {
      ...state,
      isLoading: false,
      posts: posts,
      isSuccess: true,
    };
  }),

  on(PostAction.getSearchPostsFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
      isSuccess: false,
    };
  })
);


const initGetPostState: getPostState = {
  isLoading: false,
  post: <Post>{},
  error: '',
  isSuccess: false,
};


export const getPostReducer = createReducer(
  initGetPostState,
  on(PostAction.getPost, (state) => {
    return {
      ...state,
      isLoading: true,
      isSuccess: false,
    };
  }),

  on(PostAction.getPostSuccess, (state, { post }) => {
    return {
      ...state,
      isLoading: false,
      post: post,
      isSuccess: true,
    };
  }),

  on(PostAction.getPostFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
      isSuccess: false,
    };
  })
);
