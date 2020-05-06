import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Test } from './test';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class HealthCareAdminService
 {
  [x: string]: any;
  getTestList(centerName: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  
 
 addTest(test:Test,centerName:string):Observable<any>
 {
   let url = `http://localhost:8475/HealthCareManagement-Test/test/add-test/${centerName}`;

   return this.http.post(url,test,{responseType:'text'});
 }

 removeTest(centerName:string, testName:string):Observable<any>
 {
   if(confirm("click ok to delete"))
   {
   let url = `http://localhost:8475/HealthCareManagement-Test/deletetest/${centerName}/${testName}`;
   return this.http.delete(url);
   }
 }

}
