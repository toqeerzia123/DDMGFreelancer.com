import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GigService {
  baseUrl = environment.apiurl + 'Gig/';
constructor(private http: HttpClient) { }

UserGiginfo(gigid:number):Observable<any>{
  return this.http.post<any>(this.baseUrl+'GigDetail',Number(gigid))};

}
