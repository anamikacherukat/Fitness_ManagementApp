import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})


export class UserService {
   item= {
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
  constructor(private http:HttpClient) { }
   getUser(id){
     console.log("get user called")
     return this.http.get("http://localhost:5000/users/single",{
       params:{i:id}
     });
   }
  getUsers(){
    return this.http.get("http://localhost:5000/users");
  }
   newUser(item:any)
   {
     console.log("new user called")
     return this.http.post("http://localhost:5000/insert",{"user":item})
     .subscribe(data => {console.log(data)})
   }
   deleteUser(id:any)
   { console.log('delete user called')
     return this.http.delete("http://localhost:5000/remove/"+id)
     .subscribe(data=>{console.log(data)})
   }
   editUser(id:any,item: { membership_num: string; member_fname: string; member_mname: string; member_lname: string; member_address: string; member_gender: string; member_age: string; member_email: string; member_password: string; })
   {
     console.log('client update')
     return this.http.post("http://localhost:5000/update/"+id,{"user":item})
     .subscribe(data =>{console.log(data)})

   }
}

