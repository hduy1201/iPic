import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeNotLoggedRoutingModule } from './home-not-logged-routing.module';
import { HomeNotLoggedComponent } from './home-not-logged.component';
import { Session1Component } from './session1/session1.component';
import { Session2Component } from './session2/session2.component';
import { Session3Component } from './session3/session3.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  declarations: [
    HomeNotLoggedComponent,
    Session1Component,
    Session2Component,
    Session3Component
  ],
  imports: [
    CommonModule,
    HomeNotLoggedRoutingModule,
    AngularFullpageModule
  ],
  exports: [
    HomeNotLoggedComponent
  ]
})
export class HomeNotLoggedModule { }
