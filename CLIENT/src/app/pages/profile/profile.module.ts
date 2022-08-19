import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HomeModule } from '../home/home.module';
import { PpfModule } from '../publicprofile/ppf/ppf.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HomeModule,
    PpfModule
  ]
})
export class ProfileModule { }
