import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  baseUrl = environment.apiurl + 'Categorey/';
 
constructor(private http: HttpClient) { }
uploadproductfile(profileImage: File,apipath:string): Observable<any> {
  var formData: any = new FormData();

  formData.append("Uploadfile", profileImage);

  return this.http.post(this.baseUrl+apipath, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}
uploadbannerimage(profileImage: File,apipath:string,id:number): Observable<any> {
  debugger;
  var formData: any = new FormData();

  formData.append("image", profileImage);

;

  return this.http.post(this.baseUrl+apipath, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}
uploadproductimage(profileImage: File,apipath:string,id:number): Observable<any> {
  var formData: any = new FormData();

  formData.append("ProductImage", profileImage);
  formData.append("productId",id);

  return this.http.post(this.baseUrl+apipath, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}
uploadbrandimage(profileImage: File,apipath:string,id:number): Observable<any> {
  debugger;
  var formData: any = new FormData();

  formData.append("Image", profileImage);
  formData.append("Id",id);

  return this.http.post(this.baseUrl+apipath, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}
uploadcategoryimage(profileImage: File,apipath:string,id:number): Observable<any> {
  debugger;
  var formData: any = new FormData();

  formData.append("Image", profileImage);
  formData.append("Id",id);

  return this.http.post(this.baseUrl+apipath, formData, {
    reportProgress: true,
    observe: 'events'
  }).pipe(
    catchError(this.errorMgmt)
  )
}
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
