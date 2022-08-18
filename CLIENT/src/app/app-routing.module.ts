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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }