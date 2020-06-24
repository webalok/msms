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

}
