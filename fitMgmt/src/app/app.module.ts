import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import {AuthService} from './auth.service';
import { UsersComponent } from './users/users.component';
import {UserService} from './userservice.service';
import { TokenInterceptorService } from "./token-interceptor.service";
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AddinstComponent } from './addinst/addinst.component';
import { InstructorComponent } from './instructor/instructor.component';
import { EditinstComponent } from './editinst/editinst.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    EditUserComponent,
    UserloginComponent,
    UserpageComponent,
    UserComponent,
    AdminloginComponent,
    InstructorsComponent,
    AddinstComponent,
    InstructorComponent,
    EditinstComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },

      
    ]),
  ],
  providers: [AuthService,UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
