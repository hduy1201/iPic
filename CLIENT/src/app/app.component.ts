import { Component } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [{ title: 'Tạo Ghim ý tưởng' }, { title: 'Tạo Ghim' }];

  title = 'CLIENT';

  idToken$ = this.store.select((state) => state.auth.idToken);

  constructor(private store: Store<{ auth: AuthState }>) { }

  login() {
    this.store.dispatch(AuthActions.login());
  }
}
