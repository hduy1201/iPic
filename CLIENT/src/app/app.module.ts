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
  NbToastrModule,
  NbTooltipModule,
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
import { chooseReducer, saveInterestsReducer } from 'src/reducers/choose.reducer';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { DialogService } from './services/dialog.service';
import { UserEffects } from 'src/effects/user.effect';
import { registerUserReducer } from 'src/reducers/user.reducer';
import { SuggestKeywordService } from './services/suggest-keyword.service';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NavBarNotLoggedComponent } from './Components/nav-bar-not-logged/nav-bar-not-logged.component';
import { ToastService } from './services/toast.service';
import { InterestEffect } from 'src/effects/interest.effect';
import { ListPostItemComponent } from './Components/list-post-item/list-post-item.component';
import { ShareModule } from './modules/share.module';
@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    NavBarComponent,
    NavBarNotLoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    StoreModule.forRoot(
      {
        auth: authReducer,
        createPostReducer: createPostReducer,
        getAllPostReducer: getAllPostReducer,
        getPostReducer: getPostReducer,
        choose: chooseReducer,
        getSearchPostReducer: getSearchPostReducer,
        registerUserReducer: registerUserReducer,
        saveInterestsReducer: saveInterestsReducer
      },
      {}
    ),
    EffectsModule.forRoot([AuthEffects, PostEffectS, UserEffects, InterestEffect]),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTooltipModule
  ],
  providers: [DialogService, SuggestKeywordService, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule { }
