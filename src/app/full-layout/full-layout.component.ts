import { Component, OnInit } from '@angular/core';
import { AfService } from '../shared/af-service.service';
import { User } from '../shared/user';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  toggleSideBar = true;
  user: User;
 constructor(public afservice: AfService,
             private router: Router) { }
  login() {
    this.afservice.loginWithGoogle();
  }
  signOut() {
    this.afservice.logout();
    this.router.navigate(['']);  }
  ngOnInit() {
    this.toggleSideBar = true;
    this.afservice.user$.subscribe( user =>  user);
  }
}
