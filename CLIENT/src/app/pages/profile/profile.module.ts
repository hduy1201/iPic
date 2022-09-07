import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HomeModule } from '../home/home.module';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';
import { ShareModule } from 'src/app/modules/share.module';



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
    NbButtonModule,
    ShareModule
  ]
})
export class ProfileModule { }
