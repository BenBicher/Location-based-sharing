import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'Location Base Sharing';
  constructor(private authService: AuthService) { }

  login() {
    this.authService.login();
    console.log("Logged In");
  }
}