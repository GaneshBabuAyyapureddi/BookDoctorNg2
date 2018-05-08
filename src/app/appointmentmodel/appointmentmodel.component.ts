import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-appointmentmodel',
  templateUrl: './appointmentmodel.component.html',
  styleUrls: ['./appointmentmodel.component.css'],
  providers: [DoctorspecialitesService]
})
export class AppointmentmodelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppointmentmodelComponent>, private doctorspecialitesService: DoctorspecialitesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // debugger;
  }
  selectedValue: string;
  specialities: any = [];
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
    this.getConfig();
    // debugger;
    // this.doctorspecialitesService.getConfig()
    // .subscribe(data => this.specialities = data);

  }

  private getConfig() {
    debugger;
    this.doctorspecialitesService.getConfig().subscribe(res => this.specialities = res['specialities']);
    console.log('speciality array:' + this.specialities);
    console.log('selected value:' + this.selectedValue);
  }

  // private getConfig() {
  //   this.doctorspecialitesService.getConfig()
  //   .then(res => {
  //  // this.selectedIDs=[];
  //  console.log(JSON.stringify(res));
  //   this.specialities = res;
  //   })
  //   .catch(err => {
  //   console.log(err);
  //   });
  //   }
  onNoClick(): void {
    // debugger;
    this.dialogRef.close();
  }
}
