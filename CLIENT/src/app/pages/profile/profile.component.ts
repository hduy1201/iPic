import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from '../.././services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  getName() {
    console.log("Khang")
  }

  constructor(
    private AuthService: AuthService,
    private dialogService: NbDialogService
  ) { }
  public user!: User;

  ngOnInit(): void {
    this.AuthService.user$.subscribe(res => {
      // console.log(res)
      this.user = res
    });
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
}


