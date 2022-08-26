import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { URL } from '../../configs/baseURL';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private Http: HttpClient) {}

  getAllPosts(page: number, pagesize: number): Observable<Post[]> {
    return this.Http.get<Post[]>(
      URL + `post?page=${page}&pagesize=${pagesize}`
    );
  }

  addPost(
    post: Post,
    files: Array<File>
  ): Observable<{
    data: Post;
    message: string;
  }> {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('authorId', post.authorId);
    return this.Http.post<{
      data: Post;
      message: string;
    }>(URL + `post/add`, formData);
  }
}
