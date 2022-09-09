import { Component, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { NbDialogService } from '@nebular/theme';
import { UserService } from 'src/app/services/user.service';
import { Post } from 'src/models/post';
import { AuthService } from '../.././services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private dialogService: NbDialogService,
    private userService: UserService

  ) { }
  public user!: User;

  public posts: Array<Post> = [];

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('he')
  }

  ngOnInit(): void {
    this.AuthService.user$.subscribe(async res => {
      if (res.email) {
        this.user = res
        let tem: any = await this.userService.getProfile(res.email).toPromise();
        setTimeout(() => {
          this.posts = tem.posts;
        }, 500)
      }
    });
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
}


