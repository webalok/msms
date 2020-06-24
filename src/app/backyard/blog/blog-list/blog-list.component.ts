import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/admin-login.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
 
 blog_array = new Array();
 constructor(private http_client:AdminLoginService, private router: Router) { }
  

  ngOnInit(): void {
    this.http_client.get_blog_list().subscribe( data => { this.blog_array = data.data; console.log(this.blog_array); } );
  } 
  refresh_grid(){
   this.http_client.get_blog_list().subscribe( data => { this.blog_array = data.data; console.log(this.blog_array); } );
  }
  delete_blog(blog: any): void {
   console.log(blog.ID);
   this.http_client.delete_blog(blog.ID).subscribe( data => { if(data.status=='success'){ this.refresh_grid(); } });
 };

 edit_blog(user: any): void {
  // localStorage.removeItem("editUserId");
  // localStorage.setItem("editUserId", user.id.toString());
  // this.router.navigate(['edit-user']);
 };
}
