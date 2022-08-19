import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'landing-page',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  { path: 'headers', loadChildren: () => import('./pages/headers/headers.module').then(m => m.HeadersModule) },
  { path: 'section2_landing_page', loadChildren: () => import('./pages/section2-landing-page/section2-landing-page.module').then(m => m.Section2LandingPageModule) },
  { path: 'section3_landing_page', loadChildren: () => import('./pages/section3-landing-page/section3-landing-page.module').then(m => m.Section3LandingPageModule) },
  { path: 'section1-landing-page', loadChildren: () => import('./pages/section1-landing-page/section1-landing-page.module').then(m => m.Section1LandingPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }