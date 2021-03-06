import { Component, OnInit } from '@angular/core';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {
 allergies: any [];
  constructor(private doctorspecialitesService: DoctorspecialitesService) { }

  ngOnInit() {
    // debugger;
    this.fetchAllergies();
  }

  private fetchAllergies() {
    this.doctorspecialitesService.getAllergies().subscribe(res => {
      console.log('res', JSON.parse(JSON.stringify(res)));
      this.allergies = JSON.parse(JSON.stringify(res));
    });
    // console.log('speciality array:' + this.bookappointmentObj);
    // console.log('selected value:' + this.selectedValue);
  }
}
