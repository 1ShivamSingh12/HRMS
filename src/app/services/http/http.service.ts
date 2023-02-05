import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  get(apiRoute:any):Observable<any>{
    return this.http.get(apiRoute);
  }
  getData(apiRoute:any , data:any):Observable<any>{
    return this.http.get(apiRoute , data);
  }
  post(apiRoute:any,data:any):Observable<any>{
    return this.http.post(apiRoute,data);
  }
  patch(apiRoute:any,data:any):Observable<any>{
    return this.http.patch(apiRoute,data);
  }
  put(apiRoute:any,data:any):Observable<any>{
    return this.http.put(apiRoute,data);
  }
}
