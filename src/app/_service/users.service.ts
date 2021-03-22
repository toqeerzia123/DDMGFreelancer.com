import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.apiurl + 'Users/';
constructor(private http: HttpClient) { }
GetUserdata(){
  return this.http.get<any>(this.baseUrl+'GetUsers')
};
ChangeStatus(Id:number):Observable<any>{
  debugger;
    return this.http.post<any>(this.baseUrl+'Changestatus', Id)}
  
  
UserInfo(UserId:number):Observable<any>{

  return this.http.post<any>(this.baseUrl+'UserInfo',Number(UserId)
  
  
  )};
}
