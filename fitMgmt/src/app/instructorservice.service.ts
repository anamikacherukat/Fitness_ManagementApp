import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InstructorserviceService {

  item= {
    inst_name:'',
    specialisation:'',
    age:'',
    phone:'',
    email:''
  }
  constructor(private http:HttpClient) { }

getInstructors(){
  return this.http.get("http://localhost:5000/instructors");
}
newInstructor(item:any)
   {
     console.log("called")
     return this.http.post("http://localhost:5000/insertinst",{"instructor":item})
     .subscribe(data => {console.log(data)})
   }
   getInstructor(id){
    console.log("get user called")
    return this.http.get("http://localhost:5000/instructors/single",{
      params:{i:id}
    });
  }
  deleteInstructor(id:any)
   { console.log('delete instructor called')
     return this.http.delete("http://localhost:5000/removeinst/"+id)
     .subscribe(data=>{console.log(data)})
   }
   editInstructor(id:any,item:{inst_name: string;specialisation: string;age:string;phone:string;email:string})
   {
     console.log('client update')
     return this.http.post("http://localhost:5000/updateinst/"+id,{"instructor":item})
     .subscribe(data =>{console.log(data)})

   }
}
