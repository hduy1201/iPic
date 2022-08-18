import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPostRoutingModule } from './upload-post-routing.module';
import { UploadPostComponent } from './upload-post.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    UploadPostComponent
  ],
  imports: [
    CommonModule,
    UploadPostRoutingModule,
    NgxDropzoneModule
  ]
})
export class UploadPostModule { }
