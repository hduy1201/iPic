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
} from 'src/reducers/post.reducer';
import { authReducer } from 'src/reducers/auth.reducer';
import { PostEffectS } from 'src/effects/post.effect';
import { HttpClientModule } from '@angular/common/http';
import { chooseReducer } from 'src/reducers/choose.reducer';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { DialogService } from './services/dialog.service';
import { UserEffects } from 'src/effects/user.effect';
import { registerUserReducer } from 'src/reducers/user.reducer';

@NgModule({
  declarations: [AppComponent, LoadingPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
        registerUserReducer: registerUserReducer,
      },
      {}
    ),
    EffectsModule.forRoot([AuthEffects, PostEffectS, UserEffects]),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
