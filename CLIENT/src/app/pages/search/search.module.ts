import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShareModule } from 'src/app/modules/share.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    InfiniteScrollModule,
    ShareModule
  ]
})
export class SearchModule { }
