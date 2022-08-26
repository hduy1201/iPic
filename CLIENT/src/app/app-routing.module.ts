import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'headers',
    loadChildren: () =>
      import('./pages/headers/headers.module').then((m) => m.HeadersModule),
  },
  {
    path: 'section2_landing_page',
    loadChildren: () =>
      import('./pages/section2-landing-page/section2-landing-page.module').then(
        (m) => m.Section2LandingPageModule
      ),
  },
  {
    path: 'section3_landing_page',
    loadChildren: () =>
      import('./pages/section3-landing-page/section3-landing-page.module').then(
        (m) => m.Section3LandingPageModule
      ),
  },
  {
    path: 'section1-landing-page',
    loadChildren: () =>
      import('./pages/section1-landing-page/section1-landing-page.module').then(
        (m) => m.Section1LandingPageModule
      ),
  },
  {
    path: 'detail',
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
      import('./pages/new-comer/new-comer.module').then(m => m.NewComerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
