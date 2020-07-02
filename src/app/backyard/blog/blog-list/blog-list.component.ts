import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/admin-login.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
 
 blog_array = [];
 constructor(private http_client:AdminLoginService, private router: Router) { }
  
  ngOnInit(): void {
    this.http_client.get_blog_list().subscribe( data => { if(data.data.length>0){ this.blog_array = data.data; } else { this.blog_array = []; } } );
  } 
  refresh_grid(){
   this.http_client.get_blog_list().subscribe( data =>  { if(data.data.length>0){ this.blog_array = data.data; } else { this.blog_array = []; } } );
  }
  delete_blog(blog: any): void {
   this.http_client.delete_blog(blog.ID).subscribe( data => { if(data.status=='success'){ this.refresh_grid(); } });
 };

 edit_blog(blog: any): void {
  localStorage.removeItem("ID");
  localStorage.setItem("ID", blog.ID.toString());
  this.router.navigate(['store/blog-edit']);
 };
}
