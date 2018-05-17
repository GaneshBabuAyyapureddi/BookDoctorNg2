import { Component, OnInit } from '@angular/core';
import { DoctorspecialitesService } from '../service/doctorspecialites.service';


@Component({
  selector: 'app-labresult',
  templateUrl: './labresult.component.html',
  styleUrls: ['./labresult.component.css']
})
export class LabresultComponent implements OnInit {
  labresultArray: any [];
  constructor(private doctorspecialitesService: DoctorspecialitesService) { }

  ngOnInit() {
    this.fetchLabresult();
  }
  private fetchLabresult() {
    this.doctorspecialitesService.getLabresult().subscribe(res => {
      console.log('labres', JSON.parse(JSON.stringify(res)));
      this.labresultArray = JSON.parse(JSON.stringify(res));
    });
    // console.log('speciality array:' + this.bookappointmentObj);
    // console.log('selected value:' + this.selectedValue);
  }
}
