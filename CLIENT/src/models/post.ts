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
  authorId: string;
  likes: string;
  comments: string;
  coverImage: string;
  status: string;
}
