import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminLoginService } from 'src/app/admin-login.service';
import {  Router  } from "@angular/router";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

 isFormSubmitted   = false;
 msms_form_group   :FormGroup;
 error_msg         = '';
 array_preview     = [];
 array_hold_files  = [];
 image_array       = []; 
 constructor(private form_builder:FormBuilder, private http_client:AdminLoginService, private router: Router) { }

  ngOnInit() {
    let blog_ID = localStorage.getItem("ID");
    if(!blog_ID) {
      alert("Invalid action.")
      this.router.navigate(['store/blog-list']);
      return;
    }
    this.msms_form_group = this.form_builder.group({
     ID: [],
     title:            ['',   [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
     slug:             ['' ,  [Validators.required]],
     description:      ['',   [Validators.required]],
     meta_title:       ['' ,  [Validators.required, Validators.maxLength(60)]],
     meta_description: ['',   [Validators.required]],
     file: [],
    });    
   this.http_client.get_form_data_by_id(blog_ID).subscribe( data => {  this.msms_form_group.patchValue(data); });
   this.http_client.get_images_by_id(blog_ID).subscribe( data => { console.log(data); if(data.data.length>0){ this.image_array = data.data; } else { this.image_array = []; } });
  }

     onDucumentChoosen(event) {
      var documentLength = event.target.files.length;
      if(documentLength>0){
       for (let i = 0; i<documentLength; i++){     
        var calculated_size =  Math.round(event.target.files[i].size / 1024);
        if(calculated_size>1024){
         console.log(event.target.files[i].name +' is greather than 1 MB');
         this.error_msg = event.target.files[i].name + ' size is greater than 1 MB.';
        }
        else{
         this.error_msg = '';
         this.array_hold_files.push(event.target.files[i]);
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
   
     this.http_client.blog_put(formData).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/blog-list']); } else{ this.error_msg = data.message; } });
     this.isFormSubmitted   = false;
   }
   
   resetForm(){
     this.isFormSubmitted = false;
     this.error_msg       = '';
     this.msms_form_group.reset();
    }
  }
