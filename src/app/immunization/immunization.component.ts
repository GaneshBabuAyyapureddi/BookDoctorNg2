import { Component, OnInit } from '@angular/core';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.css']
})
export class ImmunizationComponent implements OnInit {

  constructor(private doctorspeccialitesService: DoctorspecialitesService) { }
  immunizationArray: any[];
  ngOnInit() {
    this.fetchImmunization();
  }
  private fetchImmunization() {
    this.doctorspeccialitesService.getImmunization().subscribe(res => {
      console.log('immures', JSON.parse(JSON.stringify(res)));
      this.immunizationArray = JSON.parse(JSON.stringify(res));
    });
    // console.log('speciality array:' + this.bookappointmentObj);
    // console.log('selected value:' + this.selectedValue);
  }

}
