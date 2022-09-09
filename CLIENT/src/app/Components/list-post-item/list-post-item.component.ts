import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getAllPostState } from 'src/states/post.state';
import * as PostActions from '../../../actions/post.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.scss']
})
export class ListPostItemComponent implements OnInit, OnChanges {

  @Input() posts: Array<Post> = [];

  constructor(private store: Store<{ getAllPostReducer: getAllPostState }>,
    private Router: Router) {
  }
  ngOnChanges(changes: any): void {
    this.posts = changes.posts.currentValue;
  }

  ngOnInit(): void {

  }

  navigate(id: string) {
    this.Router.navigate(['/ipic/' + id]);
  }

}
