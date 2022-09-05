import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = "iPic"
  idToken$ = this.store.select((state) => state.auth.idToken);
  constructor(private store: Store<{ auth: AuthState }>) { }
  ngOnInit(): void {
  }
}
