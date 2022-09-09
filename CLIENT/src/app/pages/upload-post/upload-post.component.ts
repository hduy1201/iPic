import { Component, OnInit, Optional, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPostState, getAllPostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { DialogService } from '../../services/dialog.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth/firebase';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  template: ``,
  styleUrls: ['./upload-post.component.scss'],
})
export class UploadPostComponent implements OnInit {
  // insertFrm: FormGroup;

  constructor(
    private store: Store<{ createPostReducer: createPostState }>,
    private AuthService: AuthService,
    private toastrService: NbToastrService,
    private Router: Router
  ) {
    this.createPost$ = this.store.select((state) => state.createPostReducer);
  }
  createPost$: Observable<createPostState>;

  public posts: Array<Post> = [];
  public user!: User;

  @ViewChild('dialog') dialog!: TemplateRef<any>;
  files: File[] = [];

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    tags: new FormControl(''),
  });

  ngOnInit(): void {
    this.createPost$.subscribe((res) => {
      if (res.isSuccess == true) {
        this.toastrService.show('Tải thành công', `Thông báo`, {
          status: "success"
        });
        this.store.dispatch(PostAction.resetCreatePost());
        this.Router.navigate(['/profile'])
        this.files = [];
        this.postForm.reset(this.postForm.value);
      }
      if (res.error) {
        this.toastrService.show('Tải thất bại', `Thông báo`, {
          status: "danger"
        });
      }
    });
    this.AuthService.user$.subscribe(user => {
      if (user) {
        this.user = <User>user;
      }
    })
  }

  onSelect(event: { addedFiles: any }) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addPost() {
    let _post = {
      ...this.postForm.value,
    };
    this.store.dispatch(
      PostAction.createPost({ post: _post, files: this.files })
    );
    this.toastrService.show('Đang tải bài viết!', `Thông báo`, {
      status: "primary"
    });
  }
}
