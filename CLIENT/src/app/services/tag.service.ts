import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/configs/baseURL';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient
  ) { }

  findSuggestion() {
    return this.http.get(URL + 'tag/suggestion');
  }

  findTagName(name: string) {
    return this.http.get(URL + 'tag/get-with-name/' + name);
  }

}
