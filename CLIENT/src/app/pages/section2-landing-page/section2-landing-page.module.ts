import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Section2LandingPageRoutingModule } from './section2-landing-page-routing.module';
import { Section2LandingPageComponent } from './section2-landing-page.component';

@NgModule({
  declarations: [Section2LandingPageComponent],
  imports: [CommonModule, Section2LandingPageRoutingModule],
  exports: [Section2LandingPageComponent],
})
export class Section2LandingPageModule {}
