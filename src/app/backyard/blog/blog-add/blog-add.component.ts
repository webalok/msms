import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  error_msg         = '';

  constructor(private form_builder:FormBuilder, private http_client:AdminLoginService, private router: Router) {
    this.msms_form_group = form_builder.group({
      title:            ['Maurvii textiles private limited', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      slug:             ['maurvii-textiles-private-limited' ,[Validators.required]],
      description:      ['suggestion', [Validators.required]],
      meta_title:       ['theshaurya' ,[Validators.required, Validators.maxLength(60)]],
      meta_description: ['theshaurya', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  submitted_data(msms_form_group:any){
   this.isFormSubmitted   = true;
   this.http_client.blog_add(this.msms_form_group.value).subscribe( data => { if(data.status=='success'){ this.router.navigate(['/store/blog-list']); } else{ this.error_msg = data.message+'/'+data.data; } });
   this.isFormSubmitted   = false;
  }

  resetForm(){
    this.isFormSubmitted = false;
    this.error_msg       = '';
    this.msms_form_group.reset();
  }
}
