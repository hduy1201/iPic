import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadersRoutingModule } from './headers-routing.module';
import { HeadersComponent } from './headers.component';


@NgModule({
  declarations: [
    HeadersComponent
  ],
  imports: [
    CommonModule,
    HeadersRoutingModule,
  ],
  exports: [
    HeadersComponent
  ]
})
export class HeadersModule { }
