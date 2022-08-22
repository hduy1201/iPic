import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getAllPostState } from 'src/states/post.state';
import * as PostActions from '../../../../../actions/post.action';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent implements OnInit {

  constructor(private store: Store<{ getAllPostReducer: getAllPostState }>){ 
    this.getAllPost$ = this.store.select((state) => state.getAllPostReducer);
  } 

  public posts: Array<Post> = [];
  public getAllPost$: Observable<getAllPostState>;
  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
    this.getAllPost$.subscribe(
      res=>{
        if(res.isSuccess){
          console.log(this.posts);
          this.posts = res.posts;
        }
      }
    )
  }
}
