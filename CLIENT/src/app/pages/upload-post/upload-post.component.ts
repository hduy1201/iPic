import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPostState, PostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss'],
})
export class UploadPostComponent implements OnInit {
  // insertFrm: FormGroup;

  constructor(private store: Store<{ createPostReducer: createPostState }>) {
    this.createPost$ = this.store.select(state=> state.createPostReducer);
  }
  createPost$: Observable<createPostState>;


  files: File[] = [];

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  ngOnInit(): void {
    this.createPost$.subscribe(
      res=>{
        console.log(res);
      }
    )
  }

  onSelect(event: { addedFiles: any }) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  addPost() {
    console.log(this.postForm.value);
    console.log(this.files);
    this.store.dispatch(PostAction.createPost({ post: this.postForm.value }));
  }
}
