import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  person={uname:'',
  password:''}
constructor(private _auth: AuthService,
            private _router:Router){}
  ngOnInit() {
  }
signinUser(){
  this._auth.signinUser(this.person)
   .subscribe(
     res=>{
       localStorage.setItem('token',res.token),
       this._router.navigate(['adminlogin'])
     }
  //   (    err: any) => {
  //     console.log(err);
  //     this._router.navigate(['users'])
  //   }
  // )
   ) 
    }

}


function person(person: any) {
  throw new Error('Function not implemented.');
}
//   private _router:Router,private fb:FormBuilder