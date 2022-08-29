import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getPostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { DialogService } from '../../services/dialog.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  selectedItem = '';


  isReadMore = true

  showText() {
    this.isReadMore = !this.isReadMore
  }

  constructor(
    private store: Store<{ getPostReducer: getPostState }>,
    private activatedRoute: ActivatedRoute
  ) {
    this.getPost$ = this.store.select((state) => state.getPostReducer);
    this.activatedRoute.params.subscribe((params: any) => {
      this.getPost(params.id)
    });
  }
  getPost$: Observable<getPostState>;


  ngOnInit(): void {
    this.getPost$.subscribe((res) => {
      console.log(res.post)
      this.post = res.post
    });
  }

  public post!: Post;

  getPost(id: string) {
    console.log(id)
    this.store.dispatch(PostAction.getPost({ id }));
  }


}
