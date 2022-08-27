import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ListPostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    InfiniteScrollModule,
  ],
  exports: [ListPostComponent],
})
export class HomeModule {}
