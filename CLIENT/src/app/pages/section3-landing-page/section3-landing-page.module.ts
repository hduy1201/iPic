import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section3LandingPageRoutingModule } from './section3-landing-page-routing.module';
import { Section3LandingPageComponent } from './section3-landing-page.component';

@NgModule({
  declarations: [Section3LandingPageComponent],
  imports: [CommonModule, Section3LandingPageRoutingModule],
  exports: [Section3LandingPageComponent],
})
export class Section3LandingPageModule {}
