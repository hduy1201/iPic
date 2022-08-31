import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable, Subject, of, switchMap } from 'rxjs';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../actions/auth.action';
import { SuggestKeywordService } from './services/suggest-keyword.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  items = [{ title: 'Tạo Ghim ý tưởng' }, { title: 'Tạo Ghim' }];
  recentSearchs = ['Cat', 'Dog', 'Su Tu Ha Dong'];
  title = 'CLIENT';

  suggestBox: any;
  input: any;

  keywordsChange$ = new Subject<string>();
  keywords$ = new Observable<string[]>();
  idToken$ = this.store.select((state) => state.auth.idToken);

  constructor(
    private store: Store<{ auth: AuthState }>,
    private element: ElementRef,
    private suggestKeywords: SuggestKeywordService
  ) {
    this.keywords$ = this.keywordsChange$.pipe(
      switchMap(key => this.suggestKeywords.getSuggestKeyword(key))
    );
  }

  ngAfterViewInit(): void {
    this.suggestBox = this.element.nativeElement.querySelector(
      '.suggestionContainer'
    );
    this.input = this.element.nativeElement.querySelector('#searchInput');
  }

  login() {
    this.store.dispatch(AuthActions.login());
  }

  onFocus() {
    this.suggestBox.classList.add('make-visible');
  }

  onFocusout() {
    if (
      this.input === document.activeElement ||
      this.suggestBox.matches(':hover')
    )
      return;
    this.suggestBox.classList.remove('make-visible');
  }
}
