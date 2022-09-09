import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';
import { ShareModule } from 'src/app/modules/share.module';

@NgModule({
  declarations: [HomeComponent, ListPostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    ShareModule
  ],
  exports: [HomeComponent, ListPostComponent],
  providers: []
})
export class HomeModule { }
