import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodCalenderService {

  data:any

  subject = new BehaviorSubject('');

  constructor() {}

  sendData(value:any){
    this.subject.next(value);
  }
}
