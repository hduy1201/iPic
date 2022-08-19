import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import {URL} from '../../configs/baseURL'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private Http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.Http.get<Post[]>( URL + `post/all`);
  }

  addPost(post: Post): Observable<Post[]> {
    return this.Http.post<Post[]>(URL + `post/add`, post);
  }
}
