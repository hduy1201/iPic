import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private Http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.Http.post<User>(URL + `user/register`, user)
  }
}
