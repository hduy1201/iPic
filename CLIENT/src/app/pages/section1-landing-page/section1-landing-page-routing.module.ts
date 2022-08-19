import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1LandingPageComponent } from './section1-landing-page.component';

const routes: Routes = [{ path: '', component: Section1LandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Section1LandingPageRoutingModule { }
