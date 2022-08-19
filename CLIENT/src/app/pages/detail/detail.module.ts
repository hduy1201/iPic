import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { NbCardModule, NbIconModule, NbSelectModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSelectModule,
  ]
})
export class DetailModule { }
