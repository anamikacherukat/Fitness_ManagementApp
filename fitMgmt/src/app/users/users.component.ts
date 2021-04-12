import { Component, OnInit } from '@angular/core';
 import { UserService } from '../userservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
//  import {UserModel } from './user.model'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 pageTitle: string ='Member List';
      users=[{
       membership_num :'',
       member_fname:'',
       member_mname:'',
       member_lname:'',
      member_address:'',
       member_gender:'',
       member_age:'',
       member_email:'',
       member_password:'',
     }]
 constructor(private router:Router,private userService: UserService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
  })
  }

  // editUser(user:any){
  //   localStorage.setItem("editUserId", user._id.toString());
  //   this.router.navigate(['update']);
  // }

  // deleteUser(user:any)
  // {
  //   console.log(user._id);
  //   this.userService.deleteUser(user._id)
  //     .subscribe((data) => {
  //       // this.users = this.users.filter(p => p !== user);
  //       console.log(data);
  //     })
  

  // }
}
