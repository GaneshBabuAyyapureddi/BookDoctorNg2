import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';
import { stringify } from 'querystring';
import { Bookappointment } from '../interfaces/bookappointment';



@Component({
  selector: 'app-appointmentmodel',
  templateUrl: './appointmentmodel.component.html',
  styleUrls: ['./appointmentmodel.component.css'],
  providers: [DoctorspecialitesService]
})
export class AppointmentmodelComponent implements OnInit {
  events: Array<any> = [];
  selectedValueDoctor: string;
  selectedValueSpecial: string;
  specialities: any = [];
  doctorsList: any = [];
  speciality_index;
  timeNow: Date;
  hour;
  minutes;

  bookappointmentObj: Bookappointment[];

  appointmentDate(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  constructor(public dialogRef: MatDialogRef<AppointmentmodelComponent>, private doctorspecialitesService: DoctorspecialitesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // debugger;
    }
  

  // specialities = [
  //   'Immunology',
  //   'Obstetrics and gynecology',
  //   'Cardiology',
  //   'Gynecology',
  //   'General surgery',
  //   'Neurology',
  //   'Urology',
  //   'Oncologist',
  //   'Epidemiologist',
  //   'Endocrinologist',
  //   'Dermatologist',
  //   'Dentist',
  //   'Endocrinologist',
  //   'Dermatologist',
  //   'Nephrologist',
  //   'Psychiatrist',
  //   'Pathologist',
  //   'Neurosurgeon',
  //   'Gastroenterologist',
  //   'Ophthalmologist',
  //   'Radiology',
  //   'Diabetology',
  //   'NeuroScience'
  // ];

  ngOnInit() {
    // debugger;
    // console.log('selected value:' + this.selectedValue);
    this.getSpecial();
    this.getDoctorsList();
    this.timeNow = new Date();
    this.hour = this.timeNow.getHours();
    this.minutes = this.timeNow.getMinutes();
    this.timeNow.setHours(this.hour, this.minutes, 0, 0);
    // this.fliterDoctorListData();
    // this.doctorspecialitesService.getConfig()
    // .subscribe(data => this.specialities = data);
    // const defaultDate: Date = new Date('Fri Sep 1 2009 00:00:00 GMT+0300 (EEST)');

  }

  private getSpecial() {
    // debugger;
    this.doctorspecialitesService.getSpecialities().subscribe(res => {
      console.log('res', JSON.parse(JSON.stringify(res)).specialities);
      this.specialities = JSON.parse(JSON.stringify(res)).specialities;
    });
    console.log('speciality array:' + this.bookappointmentObj);
    // console.log('selected value:' + this.selectedValue);
  }
  private getDoctorsList() {
    // debugger;
    this.doctorspecialitesService.getDoctorsList().subscribe(res => {
      console.log('res', JSON.parse(JSON.stringify(res)).doctorslist);
      this.doctorsList = JSON.parse(JSON.stringify(res)).doctorslist[this.speciality_index];
      console.log(this.doctorsList);
    });
  }
  onNoClick(): void {
    // debugger;
    this.dialogRef.close();
  }
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
  }

  onSelect(data) {
    this.speciality_index = data;
    this.getDoctorsList();
  }
  appointmentData() {
    console.log('selectedDoctor', this.selectedValueDoctor);
    console.log('selectedValueSpecial', this.selectedValueSpecial);
    console.log( 'Event passed:', this.events[0]);
    console.log(this.timeNow);

  }
}
