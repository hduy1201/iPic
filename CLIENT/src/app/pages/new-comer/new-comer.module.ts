import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewComerRoutingModule } from './new-comer-routing.module';
import { NewComerComponent } from './new-comer.component';

@NgModule({
  declarations: [NewComerComponent],
  imports: [CommonModule, NewComerRoutingModule],
})
export class NewComerModule {}
