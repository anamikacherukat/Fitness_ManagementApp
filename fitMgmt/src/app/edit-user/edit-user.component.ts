import { Component, OnInit } from '@angular/core';
import {UserService} from '../userservice.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public id:string;

  constructor(private userService: UserService,private router: Router,private route: ActivatedRoute) { 
 
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
    // let userId =  localStorage.getItem("editUserId");
    // this.userService.getUser(userId).subscribe((data)=>{
    //   this.userItem=JSON.parse(JSON.stringify(data));
    //   console.log("finished")
     this.id = this.route.snapshot.paramMap.get('id');
    
    
  }
 edit()
 {
  this.userService.editUser(this.id,this.userItem);   
  alert("Success");
  this.router.navigate(['users']);
 }
}
