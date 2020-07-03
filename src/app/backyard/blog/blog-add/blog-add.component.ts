import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminLoginService } from 'src/app/admin-login.service';
import {  Router  } from "@angular/router";

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  
  isFormSubmitted   = false;
  msms_form_group   :FormGroup;
  error_msg         = false;
  images            = [];
  constructor(private form_builder:FormBuilder, private http_client:AdminLoginService, private router: Router) { }

  ngOnInit(): void {
   this.msms_form_group = this.form_builder.group({
    title:            ['Custom develipe', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    slug:             ['blog-title-dummy' ,[Validators.required]],
    description:      ['Dummy description', [Validators.required]],
    meta_title:       ['meta title' ,[Validators.required, Validators.maxLength(60)]],
    meta_description: ['Buy online indian made products', [Validators.required]],
    file:             ['',[Validators.required]],
    fileSource:       []
  });   
  }
  
onFileChange(event) {
console.log(event);
if (event.target.files && event.target.files[0]){
 var filesAmount = event.target.files.length;
  for (let i = 0; i<filesAmount; i++){
   var reader = new FileReader();
    reader.onload = (event:any) => {
    console.log(event.target.result);
    this.images.push(event.target.result); 
    this.msms_form_group.patchValue({
    fileSource: this.images
    });
   }
  if(event.target.files[i]){ 
    reader.readAsDataURL(event.target.files[i]);
  } 
 }
 }
}
  submitted_data(msms_form_group:any){
   this.isFormSubmitted   = true;
   if (this.msms_form_group.invalid) {
    return false;
   }
   this.http_client.blog_add(this.msms_form_group.value).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/blog-list']); } else{ this.error_msg = data.message; } });
   this.isFormSubmitted   = false;
  }
  
  resetForm(){
    this.isFormSubmitted = false;
    this.error_msg       = false;
    this.msms_form_group.reset();
  }
}
