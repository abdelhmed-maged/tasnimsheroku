import { Component, OnInit } from '@angular/core';
import { AfService } from '../shared/af-service.service';
import { User } from '../shared/user';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [AfService]
})
export class LoginPageComponent implements OnInit {
user: User;
  constructor(public afservice: AfService) { }
  login() {
     this.afservice.loginWithGoogle();
  }
  signOut() {
    this.afservice.logout();
  }
  ngOnInit() {
this.afservice.user$.subscribe( user => this.user = user);
  }

}
