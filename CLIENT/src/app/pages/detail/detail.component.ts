import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { User } from 'src/models/user';
import { PostService } from 'src/app/services/post.service';
import { createCommentState } from 'src/states/comment.state';
import * as CommentAction from 'src/actions/comment.action';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  selectedItem = '';

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  public tags: string[] = [];
  public posts: any;

  public createComment$: Observable<createCommentState>;

  constructor(
    private store: Store<{ getPostReducer: getPostState, createCommentReducer: createCommentState }>,
    private activatedRoute: ActivatedRoute,
    private dialogService: NbDialogService,
    private PostService: PostService
  ) {
    this.getPost$ = this.store.select((state) => state.getPostReducer);
    this.createComment$ = this.store.select((state) => state.createCommentReducer);
    this.activatedRoute.params.subscribe((params: any) => {
      this.post = undefined;
      this.getPost(params.id);
      this.postId = params.id;
    });
  }
  getPost$: Observable<getPostState>;
  postId: string = "";
  ngOnInit(): void {
    this.getPost$.subscribe((res) => {
      this.post = res.post;
      if (res.post.tags === undefined) return;
      this.tags = res.post.tags.split(',');
    });
    this.PostService.getAllPost().subscribe(res => {
      this.posts = <Post[]>res;
    });
    this.createComment$.subscribe(res => {
      if (res.isSuccess) {
        this.getPost(this.postId);
      }
    })
  }

  public post!: Post | undefined;
  public user!: User;

  getPost(id: string) {
    this.store.dispatch(PostAction.getPost({ id }));
  }

  popUp(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  chooseTag(tag: string) {
    console.log(tag);
  }

  public comment = "";
  enterComment(e: any) {
    if (e.keyCode == 13) {
      if (this.comment === "") return;
      this.store.dispatch(CommentAction.comment({ comment: this.comment, postId: this.postId }));
      this.comment = "";
    }
  }
}
