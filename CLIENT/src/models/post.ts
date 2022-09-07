import { User } from "./user";

export interface Post {
  _id: string;
  title: string;
  content: string;
  images: [
    {
      url: string;
      hashTag: string;
    }
  ];
  tags: string;
  links: Array<string>;
  authorId: {
    email: string,
    firstName: string
  };
  likes: string;
  comments: Comment[];
  coverImage: string;
  status: string;
}

export interface Comment {
  content: string,
  comments: [],
  createdAt: string,
  image: string,
  postId: Post,
  updatedAt: string,
  userId: User,

}