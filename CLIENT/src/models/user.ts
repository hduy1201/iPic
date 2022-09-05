import { Post } from "./post";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  photoURL: string;
  gender: string;
  description: string;
  uid: string
  website: string;
  posts: Post[];
}