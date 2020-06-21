import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-by-header></app-by-header>
     <router-outlet></router-outlet>
  `,
  styles: []
})
export class HomeLayoutComponent {}
