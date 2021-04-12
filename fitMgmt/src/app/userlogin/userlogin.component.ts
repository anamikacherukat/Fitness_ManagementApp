import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  person1={member_email:'',
  member_password:''}
  constructor(private _auth: AuthService, private fb:FormBuilder,
    private _router:Router) { }
  // loginForm= this.fb.group(
  //   {
  //     email: ['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  //     password: ['',[Validators.minLength(6),Validators.required]]
  //   }
  // )

  
  
 

  ngOnInit(): void {
  }
  signinUseronly(){
    console.log("sigin")
    alert("Successful Login")
         this._router.navigate(['userpage'])
       }
      
      
     

}

