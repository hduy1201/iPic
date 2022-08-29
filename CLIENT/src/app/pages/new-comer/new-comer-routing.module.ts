import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComerComponent } from './new-comer.component';

const routes: Routes = [{ path: '', component: NewComerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewComerRoutingModule { }
