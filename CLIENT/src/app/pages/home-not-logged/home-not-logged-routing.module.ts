import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNotLoggedComponent } from './home-not-logged.component';

const routes: Routes = [{ path: '', component: HomeNotLoggedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeNotLoggedRoutingModule { }
