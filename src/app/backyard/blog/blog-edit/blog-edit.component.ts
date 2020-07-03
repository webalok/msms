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
  error_msg         = false;
  images            = [];
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
     title:            ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
     slug:             ['' ,[Validators.required]],
     description:      ['', [Validators.required]],
     meta_title:       ['' ,[Validators.required, Validators.maxLength(60)]],
     meta_description: ['', [Validators.required]],
     //file:             ['',[Validators.required]],
     //fileSource:       []
   });   
   this.http_client.get_form_data_by_id(blog_ID).subscribe( data => { this.msms_form_group.patchValue(data); });
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
      this.http_client.blog_put(this.msms_form_group.value).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/blog-list']); } else{ this.error_msg = data.message; } });
      this.isFormSubmitted   = false;
     }
     
     resetForm(){
       this.isFormSubmitted = false;
       this.error_msg       = false;
       this.msms_form_group.reset();
     }  


}
