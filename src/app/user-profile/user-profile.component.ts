import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

@Injectable()
export class UserProfileComponent implements OnInit {
  userPictureUrl;
  userName;
  userGender;
  userMail;

  constructor(private authService: AuthService) {  }
  
  
  ngOnInit() {
    this.userPictureUrl = JSON.parse(localStorage.getItem('currentprofile')).picture;
    this.userName = JSON.parse(localStorage.getItem('currentprofile')).name;
    this.userGender = JSON.parse(localStorage.getItem('currentprofile')).gender;
    this.userMail = JSON.parse(localStorage.getItem('currentprofile')).email;
  }
}
