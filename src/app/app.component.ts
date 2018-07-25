import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  title: string = 'Location Base Sharing';
  userCard = false;
  userPictureUrl;

  constructor(private authService: AuthService,) {
    setTimeout(() => {
      if(this.authService.isLoggedIn){
        this.userPictureUrl = JSON.parse(localStorage.getItem('currentprofile')).picture;
      }
    }, 2000);
   }
  
  login() {
    this.authService.login();
    console.log("Logged In");
  }

  userShowOn(){
    if(this.userCard == false){
      this.userCard = true;
    } else {
      this.userCard = false;
    }
  }
}