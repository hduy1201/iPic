import { Post } from "src/models/post";

export interface getAllPostState {
  isLoading: boolean;
  posts: Post[];
  error: string;
  isSuccess: boolean;
}

export interface getSearchPostState {
  isLoading: boolean;
  posts: Post[];
  error: string;
  isSuccess: boolean;
}

export interface createPostState {
  isLoading: boolean;
  post: Post;
  error: string;
  isSuccess: boolean;
  message: string;
}

export interface getPostState {
  isLoading: boolean;
  post: Post;
  error: string;
  isSuccess: boolean;
}
