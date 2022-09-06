import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuggestKeywordService {

  constructor(private http: HttpClient) { }

  getSuggestKeyword(keyword: string): Observable<string[]> {
    let suggests = this.http.get<string[]>(`http://localhost:3000/post/suggest?title=${keyword}`)
    return suggests;
  }
}
