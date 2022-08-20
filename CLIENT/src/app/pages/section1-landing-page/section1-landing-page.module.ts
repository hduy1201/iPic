import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section1LandingPageRoutingModule } from './section1-landing-page-routing.module';
import { Section1LandingPageComponent } from './section1-landing-page.component';


@NgModule({
  declarations: [
    Section1LandingPageComponent
  ],
  imports: [
    CommonModule,
    Section1LandingPageRoutingModule
  ],
  exports: [
    Section1LandingPageComponent
  ]
})
export class Section1LandingPageModule { }
