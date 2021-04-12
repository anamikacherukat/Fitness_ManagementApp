import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageTitle: string ='Member';
      user=[{
       membership_num :'',
       member_fname:'',
       member_mname:'',
       member_lname:'',
       member_address:'',
       member_gender:'',
       member_age:'',
       member_email:'',
       member_password:''
     }]
    public id='';
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router,
    public auth: AuthService) { }


    ngOnInit(): void {
       this.id = this.route.snapshot.paramMap.get('id');
      this.userService.getUser(this.id).subscribe((data)=>{
        this.user = JSON.parse(JSON.stringify(data));
      })
    }
  
  delete(){
    this.userService.deleteUser(this.id);
    this.router.navigate(['users']);
  }

}
