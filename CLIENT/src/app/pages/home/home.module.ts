import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListPostComponent } from './components/list-post/list-post.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListPostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    ListPostComponent
  ]
})
export class HomeModule { }
