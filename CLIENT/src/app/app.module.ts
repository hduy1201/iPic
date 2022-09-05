import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbCardModule,
  NbButtonModule,
  NbSearchModule,
  NbOptionModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbIconComponent,
  NbSidebarModule,
  NbContextMenuModule,
  NbDialogModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthEffects } from 'src/effects/auth.effect';
import {
  createPostReducer,
  getAllPostReducer,
  getPostReducer,
  getSearchPostReducer
} from 'src/reducers/post.reducer';
import { authReducer } from 'src/reducers/auth.reducer';
import { PostEffectS } from 'src/effects/post.effect';
import { HttpClientModule } from '@angular/common/http';
import { chooseReducer } from 'src/reducers/choose.reducer';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { DialogService } from './services/dialog.service';
import { SuggestKeywordService } from './services/suggest-keyword.service';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NavBarNotLoggedComponent } from './Components/nav-bar-not-logged/nav-bar-not-logged.component';
@NgModule({
  declarations: [AppComponent, LoadingPageComponent, NavBarComponent, NavBarNotLoggedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    StoreModule.forRoot({
      auth: authReducer,
      createPostReducer: createPostReducer,
      getAllPostReducer: getAllPostReducer,
      getSearchPostReducer: getSearchPostReducer,
      getPostReducer: getPostReducer,
      choose: chooseReducer,
    }, {}),
    EffectsModule.forRoot([
      AuthEffects,
      PostEffectS
    ]),
    EffectsModule.forRoot([AuthEffects, PostEffectS]),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
  ],
  providers: [DialogService, SuggestKeywordService],
  bootstrap: [AppComponent],
})
export class AppModule { }
