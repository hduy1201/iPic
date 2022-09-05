import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
    private DialogService: DialogService
  ) {
    this.createPost$ = this.store.select((state) => state.createPostReducer);
  }
  createPost$: Observable<createPostState>;

  public posts: Array<Post> = [];

  @ViewChild('dialog') dialog!: TemplateRef<any>;
  files: File[] = [];

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  ngOnInit(): void {
    this.createPost$.subscribe((res) => {
      console.log(res);
      if (res.isSuccess == true) {
        this.DialogService.openDialog(this.dialog, res.message);
        this.files = [];
        this.postForm.reset(this.postForm.value);
      }
      // if(res.error != ""){
      //   this.DialogService.openDialog(this.dialog, res.error)
      // }
    });
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
  }
}
