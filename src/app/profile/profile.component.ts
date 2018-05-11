import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarService } from '../service/navbar-service';
import { Router } from '@angular/router';
import {SearchDoctorComponent } from '../search-doctor/search-doctor.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(public nav: NavbarService, private router: Router) { }

  ngOnInit() {
    this.nav.show();
  }
  // tslint:disable-next-line:member-ordering
  private menuItemsArray: any[] = [
    { 'title': 'Home', 'link': '#' },
    { 'title': 'My profile', 'link': '#' },
    { 'title': 'Search Doctors', 'link': '#' },
    { 'title': 'Buy Medicine', 'link': '#' },
    { 'title': 'Settings', 'link': '#' },
    { 'title': 'Logout', 'link': '#' },
  ];
  public onMenuClose() {
    console.log('menu closed');
  }
  public onMenuOpen() {
    console.log('menu Opened');
  }
  private onItemSelect(item: any) {
    // debugger;
    if (item.title === 'Logout') {
      this.router.navigate(['appComponent']);
    } else if (item.title === 'Home') {
      this.router.navigate(['home']);
    } else if (item.title === 'My profile') {
      this.router.navigate(['profile']);
    } else if (item.title === 'Search Doctors') {
      this.router.navigate(['searchDoctor']);
    } else if (item.title === 'Buy Medicine') {
      this.router.navigate(['buyMedicine']);
    } else if (item.title === 'Settings') {
      this.router.navigate(['settings']);
    }
    console.log(item);
  }

  ngOnDestroy() {
    this.nav.hide();
  }

  // tslint:disable-next-line:member-ordering
  config = {
    closeOnCLick: true
  };
}
