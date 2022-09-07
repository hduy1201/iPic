import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPostState } from 'src/states/post.state';
import * as PostAction from 'src/actions/post.action';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { DialogService } from '../../services/dialog.service';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { User } from 'src/models/user';

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

  constructor(
    private store: Store<{ getPostReducer: getPostState }>,
    private activatedRoute: ActivatedRoute,
    private dialogService: NbDialogService
  ) {
    this.getPost$ = this.store.select((state) => state.getPostReducer);
    this.activatedRoute.params.subscribe((params: any) => {
      this.getPost(params.id);
    });
  }
  getPost$: Observable<getPostState>;

  ngOnInit(): void {
    this.getPost$.subscribe((res) => {
      this.post = res.post;
      this.tags = res.post.tags.split(',');
      console.log(this.tags);
    });
  }

  public post!: Post;
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
}
