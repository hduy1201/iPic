import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { WelcomePageComponent } from './welcome-page.component';
import { HomeModule } from '../home/home.module';
import { HomeNotLoggedModule } from '../home-not-logged/home-not-logged.module';

@NgModule({
  declarations: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    HomeModule,
    HomeNotLoggedModule
  ]
})
export class WelcomePageModule { }
