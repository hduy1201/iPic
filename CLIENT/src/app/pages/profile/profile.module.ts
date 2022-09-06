import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HomeModule } from '../home/home.module';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HomeModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbButtonModule
  ]
})
export class ProfileModule { }
