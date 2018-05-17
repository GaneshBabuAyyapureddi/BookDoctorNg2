import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../service/navbar-service';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit, OnDestroy {
  doctorsListArray: any[];
  val = 2; animal: string;
  name: string;


  // tslint:disable-next-line:max-line-length
  constructor(public nav: NavbarService, private router: Router, private doctorspeccialitesService: DoctorspecialitesService, public dialog: MatDialog) { }
  private menuItemsArray: any[] = [
    { 'title': 'Home', 'link': '#' },
    { 'title': 'My profile', 'link': '#' },
    { 'title': 'Search Doctors', 'link': '#' },
    // { 'title': 'Buy Medicine', 'link': '#' },
    // { 'title': 'Settings', 'link': '#' },
    { 'title': 'Logout', 'link': '#' },
  ];

  ngOnInit() {
    this.nav.show();
    this.searchDoctorslist();
  }
  private searchDoctorslist() {
    // debugger;
    this.doctorspeccialitesService.getDcotorsSearch().subscribe(res => {
      console.log('doctorsres', JSON.parse(JSON.stringify(res)));
      this.doctorsListArray = JSON.parse(JSON.stringify(res));
    });
    // console.log('speciality array:' + this.bookappointmentObj);
    // console.log('selected value:' + this.selectedValue);
  }

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


  openDialog(): void {
    const dialogRef = this.dialog.open(specialitiesfilterComponent, {
      width: 'auto',
      height: 'auto',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-specialitiesfilter',
  templateUrl: './specialitiesfilter.component.html',
  styleUrls: ['./specialitiesfilter.component.css']

})

// tslint:disable-next-line:class-name
export class specialitiesfilterComponent {

  constructor(
    public dialogRef: MatDialogRef<specialitiesfilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


