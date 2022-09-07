import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URL } from 'src/configs/baseURL';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class SuggestKeywordService {

  constructor(private http: HttpClient) { }

  getSuggestKeyword(keyword: string): Observable<Post[]> {
    let suggests = this.http.get<Post[]>(URL + `post/suggest?title=${keyword}&page=1&pagesize=10`)
    return suggests;
  }
}
