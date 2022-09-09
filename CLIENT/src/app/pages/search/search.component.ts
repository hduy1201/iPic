import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { getSearchPostState } from 'src/states/post.state';
import * as PostActions from '../../../actions/post.action';
import { PostService } from 'src/app/services/post.service';
import { TagService } from 'src/app/services/tag.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  //set mac dinh keyword
  keyword = 'rick asley';

  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 2;
  modalOpen = false;
  public page = 1;
  //public isLoading: boolean = true;

  public posts: Array<Post> = [];
  public getSearchPost$: Observable<getSearchPostState>;


  constructor(
    private store: Store<{ getSearchPostReducer: getSearchPostState }>,
    private route: ActivatedRoute,
    private router: Router,
    private PostService: PostService,
    private TagService: TagService
  ) {
    this.getSearchPost$ = this.store.select((state) => state.getSearchPostReducer);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload'
  }

  onScrollDown(ev: any) {
    this.page += 1;
    this.store.dispatch(
      PostActions.getSearchPosts({ keyword: this.keyword, page: this.page, pageSize: 20 })
    );
  }

  ngOnInit(): void {
    let tempKeyword = this.route.snapshot.queryParamMap.get('keyword');
    this.keyword = tempKeyword === null ? this.keyword : tempKeyword;
    this.PostService.getSearch(this.keyword).subscribe(res => {
      setTimeout(() => {
        this.posts = <Post[]>res;
      }, 500)
    })
  }

  //Ahihi em copy code
}
