import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title: string = 'Location Base Sharing';
  userCard = false;
  userPictureUrl;

  constructor(private authService: AuthService,) {
    setTimeout(() => {
      if(this.authService.isLoggedIn){
        this.userPictureUrl = this.authService.logedInUserProfile.picture;
      }
    }, 2000);
   }
  
  login() {
    this.authService.login();
    console.log("Logged In");
  }

  userShowOn(){
    this.userCard = true;
  }
}