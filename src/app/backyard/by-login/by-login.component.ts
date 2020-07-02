import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminLoginService } from 'src/app/admin-login.service';
import {  Router  } from "@angular/router";

@Component({
  selector: 'app-by-login',
  templateUrl: './by-login.component.html',
  styleUrls: ['./by-login.component.css']
})

export class ByLoginComponent implements OnInit {

  isFormSubmitted = false;
  login_form_group  :FormGroup;
  set_user_email    :string;
  set_user_password :string;
  error_msg         = false;

  constructor(private form_builder:FormBuilder, private http_client:AdminLoginService, private router: Router) { }

  ngOnInit(): void {
   this.login_form_group = this.form_builder.group({
    email:   ['peter@gmail.com', [Validators.required, Validators.email]],
    password:['123456' ,         [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
  });
  }

  posted_data(login_form_group:any){
   this.isFormSubmitted   = true;
   if (this.login_form_group.invalid) {
    return false;
   }
   this.http_client.check_user_authuntication(this.login_form_group.value).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/home']); } else{ this.error_msg = data.message; } });
   this.isFormSubmitted   = false;
  }

  resetForm(){
    this.isFormSubmitted = false;
    this.error_msg       = false;
    this.login_form_group.reset();
  }
}
