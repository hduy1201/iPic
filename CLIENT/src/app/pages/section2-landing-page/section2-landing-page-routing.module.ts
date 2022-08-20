import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2LandingPageComponent } from './section2-landing-page.component';

const routes: Routes = [{ path: '', component: Section2LandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section2LandingPageRoutingModule { }
