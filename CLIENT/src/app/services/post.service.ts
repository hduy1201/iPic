import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { URL } from '../../configs/baseURL';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private Http: HttpClient, private AuthService: AuthService) {
    this.AuthService.user$.subscribe((user: any) => {
      if (user) {
        this.idToken = user.accessToken;
      }
    });
  }
  private idToken!: string;

  getAllPosts(page: number, pagesize: number): Observable<Post[]> {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.idToken}`),
    };
    return this.Http.get<Post[]>(
      URL + `post?page=${page}&pagesize=${pagesize}`,
      header
    );
  }

  getSearchPosts(
    keyword: string,
    page: number,
    pagesize: number
  ): Observable<Post[]> {
    let result = this.Http.get<Post[]>(
      URL + `post/suggest?title=${keyword}&page=${page}&pagesize=${pagesize}`
    );
    return result;
  }

  getSearch(keyword: string) {
    return this.Http.get(URL + 'post/search?keyword=' + keyword);
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
    formData.append('tags', post.tags);

    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.idToken}`),
    };

    return this.Http.post<{
      data: Post;
      message: string;
    }>(URL + `post/add`, formData, header);
  }

  getPost(id: string): Observable<Post> {
    return this.Http.get<Post>(URL + `post/detail?id=${id}`);
  }

  getAllPost() {
    return this.Http.get(URL + 'post/get-all-post');
  }
}
