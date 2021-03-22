import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = environment.apiurl + 'Categorey/';
constructor(private http: HttpClient) { }
GetCategoryData(){
  return this.http.get<any>(this.baseUrl+'GetCategoreyAndSubcategorey')
};
AddCategory(form: any){
  debugger;
  return this.http.post<any>(this.baseUrl+'AddCategory', form)
};
updatecategory(form: any){
  debugger;
  return this.http.post<any>(this.baseUrl+'UpdateCategory', form)
};
UpdateSubCategory(form: any){
  debugger;
  return this.http.post<any>(this.baseUrl+'UpdateSubCategory', form)
};
AddSubCategory(form: any){
  debugger;
  return this.http.post<any>(this.baseUrl+'AddSubCategory', form)
};

}
