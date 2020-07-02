import { BrowserModule }   from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';

import { ByHeaderComponent } from './backyard/by-header/by-header.component';
import { FyHeaderComponent } from './frontyard/fy-header/fy-header.component';
import { FySidebarComponent } from './frontyard/fy-sidebar/fy-sidebar.component';
import { FyFooterComponent } from './frontyard/fy-footer/fy-footer.component';
import { FyContentComponent } from './frontyard/fy-content/fy-content.component';
import { ByLoginComponent } from './backyard/by-login/by-login.component';
import { ByDashboardComponent } from './backyard/by-dashboard/by-dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginService } from './admin-login.service';
import { BlogListComponent } from './backyard/blog/blog-list/blog-list.component';
import { BlogAddComponent } from './backyard/blog/blog-add/blog-add.component';
import { BlogEditComponent } from './backyard/blog/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ByHeaderComponent,
    FyHeaderComponent,
    FySidebarComponent,
    FyFooterComponent,
    FyContentComponent,
    ByLoginComponent,
    ByDashboardComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule,
    HttpClientModule
  ],
  providers: [AdminLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
