import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {

  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();

  constructor() { }

  updateSelection(data: any){
    this.dataSource.next(data);
  }

}
