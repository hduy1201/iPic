import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'upload-post',
    loadChildren: () =>
      import('./pages/upload-post/upload-post.module').then(
        (m) => m.UploadPostModule
      ),
  },

  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
