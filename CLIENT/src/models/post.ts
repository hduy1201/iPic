export interface Post {
    _id: string;
    title: string;
    content: string;
    images: string;
    tags: string;
    links: Array<string>;
    authorId: string;
    likes: string;
    comments: string;
    coverImage: string;
    status: string;
}