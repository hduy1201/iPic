import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPostRoutingModule } from './upload-post-routing.module';
import { UploadPostComponent } from './upload-post.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [UploadPostComponent],
  imports: [
    CommonModule,
    UploadPostRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbButtonModule,
  ],
})
export class UploadPostModule {}
