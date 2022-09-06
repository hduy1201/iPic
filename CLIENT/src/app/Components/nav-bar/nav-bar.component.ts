import { AfterViewInit, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { idToken } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable, Subject, of, switchMap, take } from 'rxjs';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from '../../../actions/auth.action';
import { SuggestKeywordService } from '../../services/suggest-keyword.service';
import { AuthService } from '../../../app/services/auth.service'
import { User } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';
import { ToastService } from './../../services/toast.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items = [{ title: 'Tạo Ghim ý tưởng' }, { title: 'Tạo Ghim' }];
  recentSearchs = ['Cat', 'Dog', 'Su Tu Ha Dong'];
  title = 'CLIENT';

  bellList: any;
  messList: any;
  suggestBox: any;
  input: any;

  keywordsPost$: any;
  keywordsChange$ = new Subject<string>();
  idToken$ = this.store.select((state) => state.auth.idToken);
  authState$: Observable<AuthState>;

  constructor(
    private store: Store<{ auth: AuthState }>,
    private element: ElementRef,
    private suggestKeywords: SuggestKeywordService,
    private AuthService: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private ToastService: ToastService
  ) {
    this.authState$ = this.store.select((state) => state.auth);
    this.authState$.subscribe((res) => {
    });
  }

  ngOnInit(): void {
    this.keywordsChange$.subscribe((key) => {
      this.keywordsPost$ = this.suggestKeywords.getSuggestKeyword(key)
    })
    this.biding();
  }

  ngAfterViewInit(): void {
    this.bellList = this.element.nativeElement.querySelector(
      '.bell-list-container'
    );
    this.messList = this.element.nativeElement.querySelector(
      '.mess-list-container'
    );
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

  changeInput(input: string) {
    this.input.value = input;
  }

  onFocusoutForce() {
    this.input.blur();
    this.suggestBox.classList.remove('make-visible');
  }

  onNofiClick() {
    this.bellList.style.visibility = this.bellList.style.visibility == 'visible' ? 'hidden' : 'visible';
    if (this.messList.style.visibility == 'visible')
      this.messList.style.visibility = 'hidden';
    this.onBlockScrollBody();
  }

  onMessClick() {
    this.messList.style.visibility = this.messList.style.visibility == 'visible' ? 'hidden' : 'visible';
    if (this.bellList.style.visibility == 'visible')
      this.bellList.style.visibility = 'hidden';
    this.onBlockScrollBody();
  }

  onBlockScrollBody() {
    if (this.bellList.style.visibility == 'visible' || this.messList.style.visibility == 'visible')
      this.document.body.style.overflow = 'hidden'
    else
      this.document.body.style.overflow = 'visible'
  }

  search(ev: any) {
    this.router.navigate(['/search'], { queryParams: { keyword: (ev.target as HTMLInputElement).value } });
  }

  public user!: User;

  biding() {
    this.AuthService.user$.subscribe(res => {
      this.user = res
    });
  }

  sigOut() {
    this.store.dispatch(AuthActions.logOut());
    this.AuthService.user$.next(<User>{});
    this.user = <User>{};
    this.ToastService.showToast('primary', "Đăng xuất thành công!");
  }

  signIn() {
    this.store.dispatch(AuthActions.login());
  }
}
