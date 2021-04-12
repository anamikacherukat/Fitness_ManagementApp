import { Component, OnInit } from '@angular/core';
import {UserService} from '../userservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private userService: UserService,private router: Router) { 
  }
  userItem={
    membership_num :'',
    member_fname:'',
    member_mname:'',
    member_lname:'',
   member_address:'',
    member_gender:'',
    member_age:'',
    member_email:'',
    member_password:''
  }

  ngOnInit(): void {
    
  }
 AddUser()
 {
   this.userService.newUser(this.userItem);
   console.log("Called");
   alert("Success");
   this.router.navigate(['/']);
 }

}
