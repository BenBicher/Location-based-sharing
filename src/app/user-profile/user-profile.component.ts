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
    this.userPictureUrl = this.authService.logedInUserProfile.picture;
    this.userName = this.authService.logedInUserProfile.name;
    this.userGender = this.authService.logedInUserProfile.gender;
    this.userMail = this.authService.logedInUserProfile.email;
  }
}
