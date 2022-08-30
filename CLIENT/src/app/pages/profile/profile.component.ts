import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
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
    private AuthService:AuthService
  ) { }
public user! : User;


  ngOnInit(): void {
    this.AuthService.user$.subscribe (res => {
        console.log(res)
        this.user = res
    });
    }
  }


