import { Post } from "src/models/post";

export interface PostState {
    isLoading: boolean;
    posts: Post[];
    error: string;
}

export interface createPostState {
    isLoading: boolean;
    post: Post;
    error: string;
}