import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';
import { stringify } from 'querystring';
import { Bookappointment } from '../interfaces/bookappointment';
import { AppService } from '../app.service';
import {FormControl} from '@angular/forms';




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
  curdate: Date = new Date();
  dateForm = new FormControl(new Date());


  bookappointmentObj: Bookappointment[];
  @ViewChild('time') time: ElementRef;
  appointmentDate(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  constructor(public dialogRef: MatDialogRef<AppointmentmodelComponent>, private doctorspecialitesService: DoctorspecialitesService,
    @Inject(MAT_DIALOG_DATA) public data: any, public appService: AppService) {
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
    // this.timeNow = new Date();
    // this.hour = this.timeNow.getHours();
    // this.minutes = this.timeNow.getMinutes();
    // this.timeNow.setHours(this.hour, this.minutes, 0, 0);
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
    if (this.selectedValueSpecial == undefined) {
      alert('Please select Speciality');
    } else if (this.selectedValueDoctor == undefined) {
      alert('Please select Doctor');
    } else if (this.events[0] == null) {
      alert('Please select Date');

    } else if (this.time.nativeElement.value == '00:00' || this.time.nativeElement.value == "" || this.time.nativeElement.value == '00:00:00') {
      alert('Please choose time');
    } else {
      console.log('time nativeElement value :', this.time.nativeElement.value);
      const tempData = {
        "selectedValueDoctor": this.selectedValueDoctor,
        "selectedValueSpecial": this.selectedValueSpecial,
        "date": this.events[0],
        "time": this.time.nativeElement.value
      };

      this.appService.updateSelection(tempData);
      this.dialogRef.close();
    }

    //console.log('selectedDoctor', this.selectedValueDoctor);
    //console.log('selectedValueSpecial', this.selectedValueSpecial);
    //console.log( 'Event passed:', this.events[0]);

    // var timeControl = document.querySelector('input[type="time"]');

    //alert(this.time.nativeElement.value);



  }
}
