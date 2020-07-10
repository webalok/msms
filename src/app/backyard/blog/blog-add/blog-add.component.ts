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
  array_preview     = [];
  array_hold_files  = [];
  constructor(private form_builder:FormBuilder, private http_client:AdminLoginService, private router: Router) { }

  ngOnInit(): void {
   this.msms_form_group = this.form_builder.group({
    title:            ['Custom develipe', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    slug:             ['blog-title-dummy' ,[Validators.required]],
    description:      ['Dummy description', [Validators.required]],
    meta_title:       ['meta title' ,[Validators.required, Validators.maxLength(60)]],
    meta_description: ['Buy online indian made products', [Validators.required]],
    file:             ['',[Validators.required]]
  });   
  }
  
  onDucumentChoosen(event) {
   var documentLength = event.target.files.length;
   if(documentLength>0){
    for (let i = 0; i<documentLength; i++){
     this.array_hold_files.push(event.target.files[i]);
     
     var calculated_size =  Math.round(event.target.files[i].size / 1024);
     
     if(calculated_size>1024){
      console.log(event.target.files[i].name +' is greather than 1 MB');
     }
     else{
       var reader = new FileReader();
       reader.onload = (event:any) => {
       this.array_preview.push(event.target.result);
      }
      if(event.target.files[i]){ 
       reader.readAsDataURL(event.target.files[i]);
      } 
     }
    }
   }
  }

  removeDocument(index) {
   this.array_hold_files.splice(index, 1);
   this.array_hold_files.splice(index, 1);
   this.array_preview.splice(index, 1);
   this.array_preview.splice(index, 1);
 }

 counter(i: number) {
  return new Array(i);
 }

submitted_data(msms_form_group:any){
  this.isFormSubmitted   = true;
  if (this.msms_form_group.invalid) {
   return false;
  }
  const formData = new FormData();
  for (var i = 0; i < this.array_hold_files.length; i++) {
   formData.append("file[]", this.array_hold_files[i]);
  }
  formData.append('title',       this.msms_form_group.get('title').value);
  formData.append('slug',        this.msms_form_group.get('slug').value);
  formData.append('description', this.msms_form_group.get('description').value);

  formData.append('meta_title',       this.msms_form_group.get('meta_title').value);
  formData.append('meta_description', this.msms_form_group.get('meta_description').value);

  this.http_client.blog_add(formData).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/blog-list']); } else{ this.error_msg = data.message; } });
  this.isFormSubmitted   = false;
}

resetForm(){
  this.isFormSubmitted = false;
  this.error_msg       = false;
  this.msms_form_group.reset();
 }
}