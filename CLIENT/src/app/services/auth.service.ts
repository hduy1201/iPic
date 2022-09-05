import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { registerUserState } from 'src/states/user.state';
import * as userActions from '../../actions/user.action';
import { registerUserReducer } from '../../reducers/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public registerUser$: Observable<registerUserState>;

  constructor(
    private auth: Auth,
    private store: Store<{
      registerUserReducer: registerUserState;
    }>
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user$.next(user);
        //goi api register
        if (user.email == '') return;
        this.store.dispatch(
          userActions.registerUser({
            email: user.email || '',
            firstName: user.displayName || 'user',
            lastName: user.displayName || 'user',
          })
        );
      }
    });
    this.registerUser$ = this.store.select(
      (state) => state.registerUserReducer
    );
    // this.registerUser$.subscribe((res) => {
    //   console.log(res);
    // });
  }

  public user$ = new BehaviorSubject<User>(<User>{});

  login() {
    return from(
      new Promise<string>(async (resolve, reject) => {
        try {
          let creadential = await signInWithPopup(
            this.auth,
            new GoogleAuthProvider()
          );
          let idToken = await creadential.user.getIdToken();
          resolve(idToken);
        } catch {
          reject('Cannot login with Google');
        }
      })
    );
  }
}
