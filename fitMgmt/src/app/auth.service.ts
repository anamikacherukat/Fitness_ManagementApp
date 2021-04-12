import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService {

  signinUser(person:any){
  return this.http.post<any>("http://localhost:5000/login",person)
}
signinUseronly(person1:any){
  return this.http.post<any>("http://localhost:5000/loginuser",person1)
}

  constructor(private http:HttpClient) { }
  loggedIn()
{
  return !!localStorage.getItem('token')
}
getToken()
{
 return localStorage.getItem('token')
}
}
