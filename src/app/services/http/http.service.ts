import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Directory } from 'src/app/models/directory.models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get(apiRoute: any): Observable<any> {
    return this.http.get(apiRoute);
  }
  getData(apiRoute: any, data: any): Observable<any> {
    return this.http.get(apiRoute, data);
  }
  post(apiRoute: any, data: any): Observable<any> {
    return this.http.post(apiRoute, data);
  }
  patch(apiRoute: any, data: any): Observable<any> {
    return this.http.patch(apiRoute, data);
  }
  put(apiRoute: any, data: any): Observable<any> {;
    return this.http.put(apiRoute, data);
  }

  directory = [
    {
      name: 'Arpit Makkar',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Shivam',
      designation: 'Sr. Software Engineer - Angular',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Swapnil',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Ishaan',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Ayush',
      designation: 'Sr. Software Engineer - React',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Angular',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Rishi',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    }
  ]


  fetchDirectory(): Observable<Directory[]> {
    return of(this.directory)
  }
}
