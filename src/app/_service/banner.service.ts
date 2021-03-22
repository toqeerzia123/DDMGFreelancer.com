import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  baseUrl = environment.apiurl + 'DashboardApi/';
  constructor(private http: HttpClient) { }
  GetBannerData(){
    return this.http.get<any>(this.baseUrl+'GetBanner')
  };
  Removebanner(Id:number):Observable<any>{

    return this.http.post<any>(this.baseUrl+'RemoveBanner', Id)}
  
  

}
