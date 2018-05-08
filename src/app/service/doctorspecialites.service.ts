import { Injectable, } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Bookappointment } from '../interfaces/bookappointment';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
@Injectable()
export class DoctorspecialitesService {
  configUrl = 'assets/specialities.json';
  constructor(private httpclient: HttpClient, private _http: Http) { }
  getConfig() {
    debugger;
    return this._http.get(this.configUrl).map((response: Response) => response.json());

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
