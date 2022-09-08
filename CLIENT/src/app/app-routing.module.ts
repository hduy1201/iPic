import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/welcome-page/welcome-page.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'headers',
    loadChildren: () =>
      import('./pages/headers/headers.module').then((m) => m.HeadersModule),
  },
  {
    path: 'ipic/:id',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'upload-post',
    loadChildren: () =>
      import('./pages/upload-post/upload-post.module').then(
        (m) => m.UploadPostModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./pages/edit-profile/edit-profile.module').then(
        (m) => m.EditProfileModule
      ),
  },
  {
    path: 'new-comer',
    loadChildren: () =>
      import('./pages/new-comer/new-comer.module').then(
        (m) => m.NewComerModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'welcome-page',
    loadChildren: () =>
      import('./pages/welcome-page/welcome-page.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'home-not-logged',
    loadChildren: () =>
      import('./pages/home-not-logged/home-not-logged.module').then(
        (m) => m.HomeNotLoggedModule
      ),
  },
  {
    path: 'tag/:tag',
    loadChildren: () =>
      import('./pages/tag/tag.module').then((m) => m.TagModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
