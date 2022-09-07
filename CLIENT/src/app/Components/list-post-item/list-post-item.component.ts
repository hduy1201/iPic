import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getAllPostState } from 'src/states/post.state';
import * as PostActions from '../../../actions/post.action';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.scss']
})
export class ListPostItemComponent implements OnInit {

  // throttle = 500;
  // scrollDistance = 1;
  // scrollUpDistance = 2;
  // modalOpen = false;
  // public page = 1;
  // public isLoading: boolean = true;

  @Input() posts: Array<Post> = [];
  // public getAllPost$: Observable<getAllPostState>;


  constructor(private store: Store<{ getAllPostReducer: getAllPostState }>) {
    // this.getAllPost$ = this.store.select((state) => state.getAllPostReducer);
  }

  // onScrollDown(ev: any) {
  //   this.page += 1;
  //   this.store.dispatch(
  //     PostActions.getPosts({ page: this.page, pageSize: 20 })
  //   );
  // }

  ngOnInit(): void {
    // this.store.dispatch(
    //   PostActions.getPosts({ page: this.page, pageSize: 30 })
    // );
    // this.getAllPost$.subscribe((res) => {
    //   console.log(res)
    //   if (res.isSuccess) {
    //     res.posts.map((post) => {
    //       this.posts.push(post);
    //     });
    //   }
    // });
  }

}
