import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class SuggestKeywordService {

  constructor(private http: HttpClient) { }

  getSuggestKeyword(keyword: string): Observable<Post[]> {
    let suggests = this.http.get<Post[]>(`http://localhost:3000/post/suggest?title=${keyword}&page=1&pagesize=10`)
    return suggests;
  }
}
