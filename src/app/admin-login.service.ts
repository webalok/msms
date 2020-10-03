import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http: HttpClient) { }
  API_URL: string = 'http://backup.phpwork.co.in/';

  check_user_authuntication(data) {
   return this.http.post<any>(this.API_URL+'check_user_authuntication', data);
  }
  get_blog_list() {
   return this.http.get<any>(this.API_URL+'get_blog_list');
  }
  delete_blog(id: number) {
   return this.http.delete<any>(this.API_URL+'delete_blog/'+ id);
 } 
 blog_add(data) {
  return this.http.post<any>(this.API_URL+'blog_add', data);
 }
 get_form_data_by_id(blog_ID){
  return this.http.get<any>(this.API_URL+'get_form_data_by_id/'+blog_ID);
 }
 get_images_by_id(blog_ID) {
  return this.http.get<any>(this.API_URL+'get_images_by_id/'+blog_ID);
 }
 delete_images_by_id(ID, IMG_NAME, IMG_TYPE, blog_ID) {
  return this.http.get<any>(this.API_URL+'delete_images_by_id/'+ID+'/'+IMG_NAME+'/'+IMG_TYPE+'/'+blog_ID);
 } 
 blog_put(data) {
  return this.http.put<any>(this.API_URL+'blog_put/'+ data.ID, data);
 } 
}
 