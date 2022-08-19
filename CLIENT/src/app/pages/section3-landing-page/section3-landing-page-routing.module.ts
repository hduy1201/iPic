import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section3LandingPageComponent } from './section3-landing-page.component';

const routes: Routes = [{ path: '', component: Section3LandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section3LandingPageRoutingModule { }
