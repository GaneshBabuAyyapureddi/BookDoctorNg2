import { Injectable, } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Bookappointment } from '../interfaces/bookappointment';
import 'rxjs/add/operator/catch';
import { CalendarEvent } from 'angular-calendar';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
@Injectable()
export class DoctorspecialitesService {
  // configUrl = 'assets/';
  configUrlSpecialities = 'assets/specialities.json';
  configUrlDoctorsList = 'assets/BookDoctors.json';
  configUrlallergies = 'assets/allergies.json';
  configUrlLabresult = 'assets/LabReportPaths.json';
  configUrlImmunization = 'assets/PatientImmunizations.json';
  configUrlDoctorsListforsearch = 'assets/doctorsList.json';
  events: CalendarEvent[] = [];
  constructor(private httpclient: HttpClient, private _http: Http) { }

  getSpecialities(): Observable<Bookappointment[]> {
    // debugger;
    return this._http.get(this.configUrlSpecialities).map((response: Response) => response.json()).catch(this._errorHandler);

  }
  getDoctorsList() {
    return this._http.get(this.configUrlDoctorsList).map((response: Response) => response.json()).catch(this._errorHandler);
  }

  getAllergies(): Observable<Bookappointment[]> {
    // debugger;
    return this._http.get(this.configUrlallergies).map((response: Response) => response.json()).catch(this._errorHandler);

  }
  getLabresult(): Observable<Bookappointment> {
    return this._http.get(this.configUrlLabresult).map((response: Response) => response.json()).catch(this._errorHandler);

  }
  getImmunization(): Observable<Bookappointment> {
    return this._http.get(this.configUrlImmunization).map((response: Response) => response.json()).catch(this._errorHandler);

  }
getDcotorsSearch(): Observable<Bookappointment> {
  return this._http.get(this.configUrlDoctorsListforsearch).map((response: Response) => response.json()).catch(this._errorHandler);

}
  getEventData() {

    return this.events;
  }

  setEventData(dataEvent) {
    console.log('dataEvents ', dataEvent);
  }

  _errorHandler(error: Response) {
    // debugger;
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
  // public getConfig(): any {
  //   const promise = new Promise((resolve, reject) => {
  //   this.http.get(this.configUrl)
  //   .subscribe(
  //   success => {
  //   resolve(success);
  //   },
  //   error => { reject(error); }
  //   );
  //   });
  //   return promise;
  //   }

}
