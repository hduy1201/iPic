import { Component, OnInit } from '@angular/core';
import { AuthState } from 'src/states/auth.state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../actions/auth.action';

@Component({
  selector: 'app-nav-bar-not-logged',
  templateUrl: './nav-bar-not-logged.component.html',
  styleUrls: ['./nav-bar-not-logged.component.scss']
})
export class NavBarNotLoggedComponent implements OnInit {

  constructor(private store: Store<{ auth: AuthState }>) { }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(AuthActions.login());
  }

}
