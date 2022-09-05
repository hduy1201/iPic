import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  idToken$ = this.store.select((state) => state.auth.idToken);
  constructor(private store: Store<{ auth: AuthState }>) { }
  ngOnInit(): void {
  }
}
