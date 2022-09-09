import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Post } from 'src/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute
  ) { }

  public posts: Array<Post> = [];

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.posts = [];
      this.tagService.findTagName(res['tag']).subscribe(
        (res: any) => {
          setTimeout(() => {
            this.posts = <Post[]>res.posts;

          }, 500);
        }
      )
    })
  }

}
