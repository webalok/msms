import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByLoginComponent } from './backyard/by-login/by-login.component';
import { ByDashboardComponent } from './backyard/by-dashboard/by-dashboard.component';
import { ByContentComponent } from './backyard/by-content/by-content.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component'

const routes: Routes = [
 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'store-login'
 },
 {
  path: 'store-login',
  component: LoginLayoutComponent, 
  children: [
    {
      path: '',
      component: ByLoginComponent
    }
  ]
 },
 {
   path: 'store',
   component: HomeLayoutComponent,
   children: [
     {
       path: 'home',
       component: ByDashboardComponent 
     },
   ]
 },
 { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
