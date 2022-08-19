import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPostRoutingModule } from './upload-post-routing.module';
import { UploadPostComponent } from './upload-post.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UploadPostComponent
  ],
  imports: [
    CommonModule,
    UploadPostRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ]
})
export class UploadPostModule { }
