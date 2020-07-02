import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByLoginComponent } from './backyard/by-login/by-login.component';
import { ByDashboardComponent } from './backyard/by-dashboard/by-dashboard.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component'
import { BlogListComponent } from './backyard/blog/blog-list/blog-list.component';
import { BlogAddComponent } from './backyard/blog/blog-add/blog-add.component';
import { BlogEditComponent } from './backyard/blog/blog-edit/blog-edit.component';

const routes: Routes = [
 {
  path      :'',
  pathMatch :'full',
  redirectTo:'store-login'
 },
 {
  path      :'store-login',
  component :LoginLayoutComponent, 
  children:[
    {
      path     :'',
      component:ByLoginComponent
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
     {
      path: 'blog-list',
      component: BlogListComponent 
    },
    {
      path: 'blog-add',
      component: BlogAddComponent 
    },
    {
      path: 'blog-edit',
      component: BlogEditComponent 
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
