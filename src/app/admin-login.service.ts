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
}
