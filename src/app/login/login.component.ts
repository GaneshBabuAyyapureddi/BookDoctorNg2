import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../service/navbar-service';
import { User } from '../service/user.interface';

// export interface User {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public user: User;
  email: string;
  password: string;
  confirmPassword: string;
  constructor(private router: Router,
    public nav: NavbarService) { }

  ngOnInit() {
    this.nav.hide();
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  login(userObj: any) {
    // debugger;
    if (userObj.email === 'ganesh@gmail.com') {
      this.router.navigate(['home']);
      console.log('triggerd');
    }
  }

  ngOnDestroy() {
    this.nav.show();
  }
}
