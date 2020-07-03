import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-header',
  templateUrl: './by-header.component.html',
  styleUrls: ['./by-header.component.css']
})
export class ByHeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
