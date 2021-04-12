import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard'
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import { UserComponent } from "./user/user.component";
import { UserpageComponent } from "./userpage/userpage.component";
import {AdminloginComponent} from "./adminlogin/adminlogin.component";
import {InstructorsComponent} from "./instructors/instructors.component";
import {InstructorComponent} from "./instructor/instructor.component";
import {AddinstComponent} from "./addinst/addinst.component";
import {EditinstComponent} from "./editinst/editinst.component"
const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch:'full',

  },
  {
    path:'home',
    component:HomeComponent
  },
  {
   path:'login',
   component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent,

  },
  {
    path:'user/:id',
    pathMatch:'full',
    component: UserComponent,
  },
  {
    path:'instructor/:id',
    component:InstructorComponent,
  },
  {
    path:'addinst',
    component:AddinstComponent,
  },
  {
    path:'loginuser',
    component: UserloginComponent,
  },
  { 
    path:'adminlogin',component:AdminloginComponent,
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'update/:id',
    pathMatch:'full',
    component:EditUserComponent
  },
  {
    path:'updateinst/:id',
    component:EditinstComponent
  },
  {
    path:'userpage',
    component:UserpageComponent

  },
  {
    path:'instructors',
    component:InstructorsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
