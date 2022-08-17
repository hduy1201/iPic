import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
  ]
})
export class DetailModule { }
