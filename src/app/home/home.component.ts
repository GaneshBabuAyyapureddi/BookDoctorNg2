import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { NavbarService } from '../service/navbar-service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppointmentmodelComponent } from '../appointmentmodel/appointmentmodel.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // debugger;
  dialogRef: MatDialogRef<AppointmentmodelComponent>;

  constructor(public nav: NavbarService, private router: Router, public dialog: MatDialog) { }
  private menuItemsArray: any[] = [
    { 'title': 'Home', 'link': '#' },
    { 'title': 'My profile', 'link': '#' },
    { 'title': 'Search Doctors', 'link': '#' },
    { 'title': 'Buy Medicine', 'link': '#' },
    { 'title': 'Settings', 'link': '#' },
    { 'title': 'Logout', 'link': '#' },
    // {
    //   'title': 'searchDoctors', 'link': '#',
    //   'subItems': [
    //     { 'title': 'Furniture', 'link': '#' },
    //     { 'title': 'Cookware', 'link': '#' },
    //   ]
    // },
    // {
    //   'title': 'Car and Bike Accessories', 'link': '#',
    //   'subItems': [
    //     { 'title': 'Tyres and Alloys', 'link': '#' },
    //     { 'title': 'Comfort and Safety', 'link': '#' },
    //   ]
    // },
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
  ngOnInit() {
    console.log(this.nav.visible);
    this.nav.show();
  }
  ngOnDestroy() {
    this.nav.hide();
  }

  // tslint:disable-next-line:member-ordering
  config = {
    closeOnCLick: true
  };
  appointmentModel() {
    // debugger;
    console.log('triggerd');
    this.dialogRef = this.dialog.open(AppointmentmodelComponent, {
      // width: '400px',
      // height: '600px',
      // data: { }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

}
// @Component({
//   selector: 'app-appointmentmodel',
//   templateUrl: 'appointmentmodel.component.html',
// })
// export class AppointmentmodelComponent {

//   constructor(
//     public dialogRef: MatDialogRef<AppointmentmodelComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
