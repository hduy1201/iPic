import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { Section1LandingPageModule } from '../section1-landing-page/section1-landing-page.module';
import { Section2LandingPageModule } from '../section2-landing-page/section2-landing-page.module';
import { Section3LandingPageModule } from '../section3-landing-page/section3-landing-page.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AngularFullpageModule,
    Section1LandingPageModule,
    Section2LandingPageModule,
    Section3LandingPageModule,
  ],
})
export class LandingPageModule { }
